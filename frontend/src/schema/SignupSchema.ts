// SignupSchema.ts
import { z } from 'zod';

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .refine((val) => /^[A-Za-z]+(?:\.?[A-Za-z]+)?$/.test(val), {
        message: 'Invalid first name',
      }),

    lastName: z
      .string()
      .min(1, 'Last name is required')
      .refine((val) => /^[A-Za-z]+(?:\.?[A-Za-z]+)?$/.test(val), {
        message: 'Invalid last name',
      }),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email address')
      .refine(
        (val) => {
          // Extract the local part (before @) and domain part (after @)
          const parts = val.split('@');
          const localPart = parts[0];
          const domainPart = parts.length > 1 ? parts[1] : '';

          // Check local part length (max 64 characters)
          if (localPart.length > 64) {
            return false;
          }

          // Check domain part length (max 255 characters)
          if (domainPart.length > 255) {
            return false;
          }

          // Check if local part contains any forbidden characters
          if (/[&='\-+,<>]/.test(localPart)) {
            return false;
          }

          // Check if local part has more than one dot
          if ((localPart.match(/\./g) || []).length > 1) {
            return false;
          }

          // Check if local part contains only numbers
          if (/^\d+$/.test(localPart)) {
            return false;
          }

          // Ensure local part contains at least one letter
          if (!/[a-zA-Z]/.test(localPart)) {
            return false;
          }

          return true;
        },
        {
          message: 'Enter a valid email id',
        }
      ),

    password: z
      .string()
      .max(127, 'Password cannot exceed 127 characters')
      .superRefine((val, ctx) => {
        if (!val || val.trim().length === 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password is required',
          });
          return;
        }

        if (val.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: 8,
            type: 'string',
            inclusive: true,
            message: 'Password must be at least 8 characters',
          });
        }

        if (!/[A-Z]/.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain at least one capital letter',
          });
        }

        if (!/[0-9]/.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain at least one number',
          });
        }

        if (!/[^A-Za-z0-9]/.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain at least one special character',
          });
        }
      }),

    confirmPassword: z.string().min(1, 'Confirm password is required'),

    target: z.string(),
    activity: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // Path of the error
  });

export type SignupFormData = z.infer<typeof signupSchema>;
