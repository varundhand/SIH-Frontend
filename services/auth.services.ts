import axiosInstance from "../config/api";

// Define the API endpoint URLs as constants
const LOGIN_API_URL = "/auth/login";
const REGISTER_API_URL = "/auth/registerAdmin";
const TOKEN_REVALIDATE_URL = "/users";

export interface User {
  _id: string;
  userName: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
}

interface SessionData {
  status: string;
  access_token: string;
}

interface ResponseData {
  success: boolean;
  data: SessionData;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ApiResponse {
  data: Record<string, any>; // You can replace "any" with a more specific type if needed
  statusCode: number;
  message: string;
}

export interface UserRegistration {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Function to perform login
export const loginService = async (payload: LoginPayload) => {
  try {
    const response = await axiosInstance.post<ResponseData>(
      LOGIN_API_URL,
      payload
    );
    let accesstoken = response?.data?.data?.access_token;
    if (accesstoken) localStorage.setItem("accessToken", accesstoken);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error during login:", error);
    throw error;
  }
};

// Function to perform registration
export const registerService = async (payload: UserRegistration) => {
  try {
    const response = await axiosInstance.post(REGISTER_API_URL, payload);
    return response.data;
  } catch (error) {
    console.log("Error during Registration:", error);
    throw error;
  }
};

// Function to perform revalidation of token on refresh
export const revalidateToken = async (token: string) => {
  try {
    console.log("Revalidation happened");
    const response = await axiosInstance.get(TOKEN_REVALIDATE_URL);
    return response.data;
  } catch (error) {
    console.log("Error during revalidation of token", error);
    throw error;
  }
};

export default loginService;
