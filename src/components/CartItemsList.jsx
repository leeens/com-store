import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems)

  return (
    <div className="">
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />
      })}
    </div>
  )
}
export default CartItemsList
