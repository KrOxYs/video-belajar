import { create } from "zustand";
import { data } from "./data";
// import miniG1 from "../assets/miniG1.png";
import miniG1 from "/public/miniProductImage/miniG1.png";
export const useStore = create((set) => ({
  Data: [
    {
      id: 0,
      title: "Belajar Node Js",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage:
        "https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png",
      MiniImage: miniG1,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 1,
      title: "Belajar Express Js",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage:
        "https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png",
      MiniImage: miniG1,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 2,
      title: "Belajar React Js",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage:
        "https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png",
      MiniImage: miniG1,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 3,
      title: "Belajar Next Js",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage:
        "https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png",
      MiniImage: miniG1,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
  ],

  insertData: (data) => set((state) => ({ Data: [...state.Data, data] })),
  editData: (id, updatedData) =>
    set((state) => ({
      Data: state.Data.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      ),
    })),
  deleteData: (id) =>
    set((state) => ({
      Data: state.Data.filter((item) => item.id !== id),
    })),
}));
