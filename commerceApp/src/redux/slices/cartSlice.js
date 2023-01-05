import { createSlice } from '@reduxjs/toolkit'

const initialState = {
cartItems:[],
totalQuantity:0,
totalAmount:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
      const newitem=action.payload
      const existItem=state.cartItems.find((item)=>item.id==newitem.id)
      state.totalQuantity++
      if(!existItem){
state.cartItems.push({
  id:newitem.id,
  productName:newitem.productName,
  imgUrl:newitem.imgUrl,
  price:newitem.price,
  quantity:1,
  totalprice:newitem.price
})

      }
      else{
        existItem.quantity++
        existItem.totalprice=Number(existItem.totalprice)+Number(newItem.price)
      
      }
      state.totalAmount=state.cartItems.reduce((total,item)=>total+Number(item.price)*Number(item.quantity))
    },
    deleteItem:(state,action)=>{
      const id=action.payload
      const existItem=state.cartItems.find((item)=>item.id==id)
      if(existItem){
        state.cartItems=state.cartItems.filter((item)=>item.id!=id)
        state.totalQuantity=state.totalQuantity-existItem.quantity
      }
      state.totalAmount=state.cartItems.reduce((total,item)=>total+Number(item.price)*Number(item.quantity),0)
    }
  }
  
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer