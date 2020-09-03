import { createContext } from 'react'

const CartContext = createContext({ items: [], addItem: () => { }, emptyCart: () => { } });

export default CartContext
