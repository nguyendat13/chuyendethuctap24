import httpAxios from '../httpAxios';

const CartService = {
  addToCart: async (id, qty) => {
    return await httpAxios.post(`cart/add_to_cart/${id}`, { qty });
  },

  getCart: async () => {
    return await httpAxios.get('cart/getcart');
  },
  delete:async(product_id)=>{
    return await httpAxios.delete(`cart/delete/${product_id}`)
  },
  updateCartItem: async (product_id, cart) => {
    return await httpAxios.put(`cart/update/${product_id}`, cart);
  },
};

export default CartService;
