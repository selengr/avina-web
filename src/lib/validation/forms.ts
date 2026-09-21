import { z } from 'zod';

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phonePattern = /^09\d{9}$/;

export const newsletterSchema = z.object({
  email: z
    .string({ required_error: 'ایمیل معتبر نیست' })
    .trim()
    .min(1, 'ایمیل معتبر نیست')
    .regex(emailPattern, 'ایمیل معتبر نیست'),
});

export const consultingSchema = z.object({
  education: z
    .string({ required_error: 'همه فیلدها ضروری هستند' })
    .trim()
    .min(1, 'همه فیلدها ضروری هستند'),
  name: z
    .string({ required_error: 'همه فیلدها ضروری هستند' })
    .trim()
    .min(1, 'همه فیلدها ضروری هستند'),
  lastName: z
    .string({ required_error: 'همه فیلدها ضروری هستند' })
    .trim()
    .min(1, 'همه فیلدها ضروری هستند'),
  phone: z
    .string({ required_error: 'همه فیلدها ضروری هستند' })
    .trim()
    .min(1, 'همه فیلدها ضروری هستند')
    .regex(phonePattern, 'شماره همراه معتبر نیست'),
  description: z
    .string({ required_error: 'همه فیلدها ضروری هستند' })
    .trim()
    .min(1, 'همه فیلدها ضروری هستند'),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ConsultingInput = z.infer<typeof consultingSchema>;

export function firstZodMessage(error: z.ZodError): string {
  return error.issues[0]?.message || 'اطلاعات نامعتبر است';
}
