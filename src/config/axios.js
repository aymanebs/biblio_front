import axios from "axios";
import { getSession } from "../services/authService";

const apiClient = axios.create({
    baseURL: 'https://wdqhtycf8k.execute-api.us-east-1.amazonaws.com',
    timeout: 10000,
})

apiClient.interceptors.request.use(async (config) => {
    const session = await getSession();
    const accessToken = session.accessToken.jwtToken;
    console.log('accesToken',accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

export default apiClient;