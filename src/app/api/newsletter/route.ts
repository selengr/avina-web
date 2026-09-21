import { NextResponse } from 'next/server';
import {
  listNewsletterEmails,
  saveNewsletterEmail,
} from '@/lib/submissions-store';
import { canReadSubmissions } from '@/lib/submissions-auth';
import { firstZodMessage, newsletterSchema } from '@/lib/validation/forms';

export async function GET(request: Request) {
  if (!canReadSubmissions(request)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const data = await listNewsletterEmails();
  return NextResponse.json({ success: true, data });
}

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
