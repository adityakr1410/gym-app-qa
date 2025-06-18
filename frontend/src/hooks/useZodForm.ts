//custom hook for zod validation
import { z } from 'zod';
import { useState } from 'react';

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useZodForm<T extends z.ZodType<any, any>>(schema: T) {
  const [errors, setErrors] = useState<ValidationErrors<z.infer<T>>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = (data: Partial<z.infer<T>>): data is z.infer<T> => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: ValidationErrors<z.infer<T>> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            const field = err.path[0] as keyof z.infer<T>;
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const clearError = (field: keyof z.infer<T>) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  return {
    errors,
    validate,
    clearError,
    formSubmitted,
    setFormSubmitted,
  };
}
