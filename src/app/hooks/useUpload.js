import { api } from "../services/apiClient";

export const useUpload = () => {
  const uploadImage = async (file) => {
    try {
      const res = await api.uploadImage(file);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  return { uploadImage };
};