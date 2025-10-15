import axios from 'axios';
import {fetchAuthSession} from "aws-amplify/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async config => {
  // Get the Cognito token
  const session = await fetchAuthSession();
  const token = session.tokens?.accessToken;

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;