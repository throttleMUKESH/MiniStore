import { create } from 'zustand';
import phone1 from '/cart-item1.jpg'; // Adjust the path based on your project structure
import watch from '/cart-item2.jpg'; // Adjust the path based on your project structure

const useCartStore = create((set, get) => ({
  products: [
    {
      id: 1,
      title: "iPhone 10",
      price: 980,
      category: "phone",
      img: phone1,
    },
    {
      id: 2,
      title: "iPhone 11",
      price: 990,
      category: "phone",
      img: phone1,
    },
    {
      id: 3,
      title: "iPhone 12",
      price: 1080,
      category: "phone",
      img: phone1,
    },
    {
      id: 4,
      title: "iPhone 13",
      price: 1280,
      category: "phone",
      img: phone1,
    },
    {
      id: 5,
      title: "iPhone 15",
      price: 1380,
      category: "phone",
      img: phone1,
    },
    {
      id: 6,
      title: "Pink Watch",
      price: 870,
      category: "watch",
      img: watch,
    },
    {
      id: 7,
      title: "Heavy Watch",
      price: 670,
      category: "watch",
      img: watch,
    },
    {
      id: 8,
      title: "Spotted Watch",
      price: 770,
      category: "watch",
      img: watch,
    },
    {
      id: 9,
      title: "Black Watch",
      price: 670,
      category: "watch",
      img: watch,
    },
    {
      id: 10,
      title: "Black Watch 2",
      price: 670,
      category: "watch",
      img: watch,
    },
    {
      id: 11,
      title: "Samsung Galaxy S20",
      price: 950,
      category: "phone",
      img: phone1,
    },
    {
      id: 12,
      title: "Samsung Galaxy S21",
      price: 1050,
      category: "phone",
      img: phone1,
    },
    {
      id: 13,
      title: "Samsung Galaxy S22",
      price: 1150,
      category: "phone",
      img: phone1,
    },
    {
      id: 14,
      title: "Samsung Galaxy Note 10",
      price: 1100,
      category: "phone",
      img: phone1,
    },
    {
      id: 15,
      title: "Samsung Galaxy Note 20",
      price: 1300,
      category: "phone",
      img: phone1,
    },
    {
      id: 16,
      title: "Huawei P30",
      price: 900,
      category: "phone",
      img: phone1,
    },
    {
      id: 17,
      title: "Huawei P40",
      price: 1000,
      category: "phone",
      img: phone1,
    },
    {
      id: 18,
      title: "Huawei P50",
      price: 1100,
      category: "phone",
      img: phone1,
    },
    {
      id: 19,
      title: "Huawei Mate 30",
      price: 1200,
      category: "phone",
      img: phone1,
    },
    {
      id: 20,
      title: "Huawei Mate 40",
      price: 1400,
      category: "phone",
      img: phone1,
    },
    {
      id: 21,
      title: "Smart Watch A",
      price: 670,
      category: "watch",
      img: watch,
    },
    {
      id: 22,
      title: "Smart Watch B",
      price: 770,
      category: "watch",
      img: watch,
    },
    {
      id: 23,
      title: "Smart Watch C",
      price: 870,
      category: "watch",
      img: watch,
    },
    {
      id: 24,
      title: "Smart Watch D",
      price: 970,
      category: "watch",
      img: watch,
    },
    {
      id: 25,
      title: "Luxury Watch X",
      price: 1270,
      category: "watch",
      img: watch,
    },
    {
      id: 26,
      title: "Luxury Watch Y",
      price: 1370,
      category: "watch",
      img: watch,
    },
    {
      id: 27,
      title: "Luxury Watch Z",
      price: 1470,
      category: "watch",
      img: watch,
    },
    {
      id: 28,
      title: "Analog Watch A",
      price: 370,
      category: "watch",
      img: watch,
    },
    {
      id: 29,
      title: "Analog Watch B",
      price: 470,
      category: "watch",
      img: watch,
    },
    {
      id: 30,
      title: "Analog Watch C",
      price: 570,
      category: "watch",
      img: watch,
    },
  ],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) => {
    const newCart = [...get().cart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    set({ cart: newCart });
  },
  removeFromCart: (productId) => {
    const newCart = get().cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    set({ cart: newCart });
  },
}));

export default useCartStore;
