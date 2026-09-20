import { NextResponse } from 'next/server';
import { saveNewsletterEmail } from '@/lib/submissions-store';
import { firstZodMessage, newsletterSchema } from '@/lib/validation/forms';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: firstZodMessage(parsed.error) },
        { status: 400 }
      );
    }

    const entry = await saveNewsletterEmail(parsed.data.email);
    return NextResponse.json({
      success: true,
      message: 'ایمیل با موفقیت ذخیره شد',
      data: entry,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'ذخیره ایمیل انجام نشد' },
      { status: 500 }
    );
  }
}
