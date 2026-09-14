import { z } from "zod";

export const libroCreateSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio"),
  descripcion: z.string().trim().min(1, "La descripción es obligatoria"),
  autorId: z.number().int().positive("El autorId debe ser válido"),
  precio: z.number().int().positive("El precio debe ser mayor a 0"),
  imagen: z.string().url("Debe ser una URL válida"),
  disponible: z.boolean().optional(),
  categoriasIds: z.array(z.number().int().positive()).optional()
});

export const libroUpdateSchema = libroCreateSchema.partial();

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser un número positivo")
});

export type LibroCreate = z.infer<typeof libroCreateSchema>;