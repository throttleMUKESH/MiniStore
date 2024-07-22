import create from 'zustand';

const useCartStore = create((set) => ({
  products: [],
  cart: [],
  
  fetchProducts: async () => {
    try {
      const response = await fetch('http://localhost:3001/api/get-products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      set({ products: data });
      console.log('Fetched products:', data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find((item) => item._id === product._id);
    if (existingProduct) {
      const updatedCart = state.cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { cart: updatedCart };
    } else {
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item._id !== productId),
  })),
}));

export default useCartStore;


