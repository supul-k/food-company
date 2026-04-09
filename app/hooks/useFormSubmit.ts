'use client';

import { useState } from 'react';

interface UseFormSubmitOptions<T> {
  onSubmit: (data: T) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useFormSubmit<T>({ onSubmit, onSuccess, onError }: UseFormSubmitOptions<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: T) => {
    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(data);
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      onError?.(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
}