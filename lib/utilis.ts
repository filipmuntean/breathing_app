import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/utils.ts
export function getBaseUrl() {
  // First, try to get the public app URL
  const publicUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (publicUrl) {
    return publicUrl;
  }

  // In development, use localhost if no public URL is set
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  // For Vercel deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // If all else fails, throw an error with a helpful message
  throw new Error(
    'No base URL found. Please set NEXT_PUBLIC_APP_URL environment variable. ' +
    'This should be your application\'s public URL, like https://example.com'
  );
}