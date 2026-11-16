import { z } from "zod";

export const registroSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio"),
  email: z.string().email("El formato de email no es válido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
    .regex(/[0-9]/, "La contraseña debe tener al menos un número")
});

export const loginSchema = z.object({
  email: z.string().email("El formato de email no es válido"),
  password: z.string().min(1, "La contraseña es obligatoria")
});

export type Registro = z.infer<typeof registroSchema>;
export type Login = z.infer<typeof loginSchema>;