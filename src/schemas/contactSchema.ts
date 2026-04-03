import { Control } from "@/types/Control";
import z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, {
    error: "form.firstName.errors.required",
  }),
  lastName: z.string().min(1, {
    error: "form.lastName.errors.required",
  }),
  email: z.email({
    error: "form.email.errors.required",
  }),
  phone: z
    .string({
      error: "form.phone.errors.required",
    })
    .refine(
      (value) => {
        const number = value.split(" ")[1];
        const code = value.split(" ")[0];
        return number && code;
      },
      {
        error: "form.phone.errors.required",
      },
    ),
  subject: z.string().min(1, {
    error: "form.subject.errors.required",
  }),
  message: z.string().min(1, {
    error: "form.message.errors.required",
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export const contactControls: Control<keyof ContactSchema>[] = [
  {
    name: "firstName",
    label: "form.firstName.label",
    placeholder: "form.firstName.placeholder",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "form.lastName.label",
    placeholder: "form.lastName.placeholder",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "form.email.label",
    placeholder: "form.email.placeholder",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "form.phone.label",
    placeholder: "form.phone.placeholder",
    type: "phone",
    required: true,
  },
  {
    name: "subject",
    label: "form.subject.label",
    placeholder: "form.subject.placeholder",
    type: "text",
    required: true,
  },
  {
    name: "message",
    label: "form.message.label",
    placeholder: "form.message.placeholder",
    type: "textarea",
    className: "lg:col-span-2 h-48",
    required: true,
  },
];
