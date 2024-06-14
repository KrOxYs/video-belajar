import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  Data: [],
  getDataFromApi: async () => {
    try {
      const response = await axios.get(
        `https://${process.env.API_SECRET}.mockapi.io/api/product`
      );
      set({ Data: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  insertData: async (newData) => {
    try {
      const response = await axios.post(
        `https://${process.env.API_SECRET}.mockapi.io/api/product`,
        newData
      );
      set((state) => ({
        Data: [...state.Data, response.data],
      }));
    } catch {
      console.error("Error inserting data:", error);
    }
  },
  editData: async (id, updatedData) => {
    try {
      const response = await axios.put(
        `https://${process.env.API_SECRET}.mockapi.io/api/product/${id}`,
        updatedData
      );
      set((state) => ({
        Data: state.Data.map((item) =>
          item.id === id ? { ...item, ...response.data } : item
        ),
      }));
    } catch {
      console.error("Error updating data:", error);
    }
  },
  deleteData: (id) => {
    try {
      axios.delete(
        `https://${process.env.API_SECRET}.mockapi.io/api/product/${id}`
      );
      set((state) => ({
        Data: state.Data.filter((item) => item.id !== id),
      }));
    } catch {
      console.error("Error deleting data:", error);
    }
  },
}));
