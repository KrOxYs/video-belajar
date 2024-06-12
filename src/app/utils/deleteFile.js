import { ref, deleteObject } from "firebase/storage";
import { storage } from "../lib/firebase"; // Sesuaikan path impor sesuai dengan lokasi file firebase Anda

export const deleteFile = async (fileUrl) => {
  try {
    const storageRef = ref(storage, fileUrl);
    await deleteObject(storageRef);
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Failed to delete file:", error);
    throw error;
  }
};
