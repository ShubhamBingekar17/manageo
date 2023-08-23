
import axios from 'axios';

export const api = () => {
      const defaultOptions = {
        baseURL: "http://localhost:3000/firebaseFirestore",
      };
  
      // Create instance
      const instance = axios.create(defaultOptions);

      return instance;
}