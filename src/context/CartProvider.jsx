// CartProvider.jsx
import { createContext, useState, useEffect } from "react"

// Crear el contexto del carrito
export const Cart = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        // Calcular la cantidad total de productos en el carrito
        const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0)
        setQuantity(totalQuantity)

        // Calcular el precio total de los productos en el carrito
        const calculatedTotalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
        setTotalPrice(calculatedTotalPrice)
    }, [cart])

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id)
        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    }
                }
                return cartProduct;
            })
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity })
        }

        setCart(cartUpdated)
    }

    const removeItem = (productId) => {
        setCart(cart.filter(cartProduct => cartProduct.id !== productId))
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    return (
        <Cart.Provider value={{ cart, addCart, removeItem, quantity, totalPrice }}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider
