import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(1, "Title must not be empty").max(255),
  description: z.string().min(1, "Description must not be empty").max(65535),
  status: z.string().min(1, "Status").max(10).optional(),
  priority: z.string().min(1, "Priority").max(10).optional(),
});

export const ticketPatchSchema = z.object({
  title: z.string().min(1, "Title must not be empty").max(255).optional(),
  description: z
    .string()
    .min(1, "Description must not be empty")
    .max(65535)
    .optional(),
  status: z.string().min(1, "Status").max(10).optional(),
  priority: z.string().min(1, "Priority").max(10).optional(),
});
