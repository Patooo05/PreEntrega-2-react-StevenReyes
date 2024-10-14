import cart from "../assets/cart.svg"

export const CartWidget = () => {
  return (
    <>

    <img src={cart} alt="cart" style={{width: 40}} />
    <span>(4)</span>
    </>
  )
}
export default CartWidget