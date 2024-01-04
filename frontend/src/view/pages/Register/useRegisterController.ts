import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido').toLowerCase(),
  password: z.string()
    .min(1, 'Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useRegistercontroller() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error('Ocorreu um erro ao criar sua conta!');
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
  };
}
