import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDataFromLocalStorage() {
  const userStringData = localStorage.getItem('currentUser');
  if (userStringData) return JSON.parse(userStringData);
  else return null;
}

export function capitalizeFirstLetter(string: string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function logoutUser() {
  localStorage.removeItem('currentUser');
  window.dispatchEvent(new Event('storage'));
}

export function getCurrentUserRole() {
  const user = getDataFromLocalStorage();
  if (user && user.role) {
    return user.role;
  }
}