import React, { useContext, useState } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "../styles/cart.module.css";
import { NavLink } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        confirmEmail: ""
    });
    const [orderConfirmation, setOrderConfirmation] = useState(null);

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);
    const handleCloseConfirmationModal = () => setConfirmationModalIsOpen(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email !== formData.confirmEmail) {
            alert("Los correos no coinciden");
            return;
        }

        const order = {
            buyer: {
                name: formData.name,
                lastName: formData.lastName,
                email: formData.email,
            },
            products: cart,
            total: totalPrice,
            timestamp: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderConfirmation({
                name: formData.name,
                orderId: docRef.id,
                total: totalPrice
            });
            setModalIsOpen(false);
            setConfirmationModalIsOpen(true);
        } catch (error) {
            console.error("Error al crear la orden: ", error);
        }
    };

    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                    {cart.map((cartItem) => (
                        <CartItem item={cartItem} key={cartItem.id} />
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleOpenModal} className={styles.checkoutButton}>
                        Finalizar compra
                    </button>
                </>
            ) : (
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to="/">Home</NavLink>
                </>
            )}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Formulario de Compra"
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
            >
                <h2>Finalizar Compra</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Correo</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Confirmar Correo</label>
                    <input
                        type="email"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Generar Orden</button>
                </form>
                <button onClick={handleCloseModal} className={styles.closeButton}>
                    Cerrar
                </button>
            </Modal>

            <Modal
                isOpen={confirmationModalIsOpen}
                onRequestClose={handleCloseConfirmationModal}
                contentLabel="Confirmación de Compra"
                className={styles.confirmationModalContent}
                overlayClassName={styles.modalOverlay}
            >
                <h2>Compra Realizada</h2>
                <p>Gracias, {orderConfirmation?.name}!</p>
                <p>Orden ID: <strong>{orderConfirmation?.orderId}</strong></p>
                <p>Total: ${orderConfirmation?.total.toFixed(2)}</p>
                <button onClick={handleCloseConfirmationModal} className={styles.closeButton}>
                    Cerrar
                </button>
            </Modal>
        </div>
    );
};

export default Cart;
