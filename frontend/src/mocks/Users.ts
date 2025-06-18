// Users.ts

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  target: string;
  activity: string;
  role: string; // The role field to specify it's a client or coach
}

// Initialize an empty user list
const users: User[] = [
  {
    firstName: 'Admin',
    lastName: 'One',
    email: 'admin@gmail.com',
    password: 'Ayush200230@3',
    target: 'Lose Weight',
    activity: 'Yoga',
    role: 'admin',
  },
];

// List of pre-approved coach emails
const coachEmails: string[] = [
  'coach1@example.com',
  'coach2@example.com',
  'trainer@fitlife.com',
  'instructor@yogalife.com',
  'expert@fitness.com',
];

/**
 * Check if an email belongs to a coach
 *
 * @param {string} email - The email to check
 * @returns {boolean} - True if the email is a coach email
 */
export const isCoachEmail = (email: string): boolean => {
  return coachEmails.includes(email.toLowerCase());
};

/**
 * Fetch all users
 *
 * @returns {User[]} - List of all users
 */
export const getUsers = (): User[] => {
  return users;
};

/**
 * Check if an email already exists in the users list or localStorage
 *
 * @param {string} email - The email to check
 * @returns {boolean} - True if the email exists, false otherwise
 */
export const isEmailTaken = (email: string): boolean => {
  // Check in-memory users array
  const inMemoryExists = users.some((user) => user.email === email);

  // Check localStorage
  const usersJSON = localStorage.getItem('users');
  if (usersJSON) {
    const storedUsers = JSON.parse(usersJSON);
    const inStorageExists = storedUsers.some(
      (user: User) => user.email === email
    );
    return inMemoryExists || inStorageExists;
  }

  return inMemoryExists;
};

/**
 * Add a new user to the user list
 *
 * @param {User} user - The new user object to store
 * @throws {Error} - Throws if the email already exists
 */
export const addUser = (user: User): void => {
  if (isEmailTaken(user.email)) {
    throw new Error('Email is already registered.');
  }
  users.push(user);
};
