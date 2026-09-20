import { NextResponse } from 'next/server';
import { saveNewsletterEmail } from '@/lib/submissions-store';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email || '').trim();

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: 'ایمیل معتبر نیست' },
        { status: 400 }
      );
    }

    const entry = await saveNewsletterEmail(email);
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
