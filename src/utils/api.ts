// src/utils/api.ts

const BASE_URL = "https://everystyle-backend.onrender.com/api"; // Replace with your backend URL

interface RequestOptions extends RequestInit {
  headers?: HeadersInit;
  body?: any;
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong");
  }
  return response.json();
};

export const get = async (endpoint: string, params?: Record<string, any>) => {
  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const query = new URLSearchParams(params).toString();
    url += `?${query}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse(response);
};

export const post = async (endpoint: string, data?: any) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};
