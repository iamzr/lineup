let backendApiUrl: string;

if (typeof import.meta.env.BACKEND_API_URL === "string") {
  backendApiUrl = import.meta.env.BACKEND_API_URL;
} else {
  console.warn(
    "BACKEND_API_URL is not defined or not a string. Using default value.",
  );
  backendApiUrl = "http://localhost:8000/api";
}

export const BACKEND_API_URL = backendApiUrl;
