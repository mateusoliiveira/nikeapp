import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    deliveryFee: 15,
    zeroDeliveryFeeFrom: 200,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product

            const already = state.items.find(
                (p) => p.product.id === newProduct.id)

            if (already) {
                already.quantity += 1
                return
            }
            state.items.push({ product: newProduct, quantity: 1 })
        },
        changeQuantityItem: (state, action) => {
            const { productId, amount } = action.payload
            const cartItem = state.items.find(p => p.product.id === productId)
            if (cartItem) {
                cartItem.quantity += amount
            }

            if (cartItem.quantity <= 0) {
                state.items = state.items.filter(p => p !== cartItem)
            }
        },
        subTotal: (state, action) => {

        }
    }
})

const cartSelector = (state: any) => state.cart

export const selectNumberOfItems = (state: any) => state.cart.items.length

export const selectSubTotal = (state: any) => state.cart.items.reduce((sum: any, cartItem: any) => sum + cartItem.product.price * cartItem.quantity, 0)

export const selectDeliveryFee = createSelector(
    selectSubTotal, cartSelector, (subtotal, cart) => (subtotal >= cart.zeroDeliveryFeeFrom ? 0 : cart.deliveryFee)
)

export const selectTotal = createSelector(
    selectSubTotal, selectDeliveryFee, (subtotal, deliveryFee) => (subtotal + deliveryFee)
)