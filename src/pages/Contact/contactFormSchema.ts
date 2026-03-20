import * as z from "zod";

export const contactFormschema = z.object({
  name: z.string(),
  email: z.email("Invalid email address"),
  message: z.string().max(254, "Maximum characters exceeded"),
});

export type ContactFormData = z.infer<typeof contactFormschema>;
