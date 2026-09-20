import { NextResponse } from 'next/server';
import { saveConsultingRequest } from '@/lib/submissions-store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const education = String(body?.education || '').trim();
    const name = String(body?.name || '').trim();
    const lastName = String(body?.lastName || '').trim();
    const phone = String(body?.phone || '').trim();
    const description = String(body?.description || '').trim();

    if (!education || !name || !lastName || !phone || !description) {
      return NextResponse.json(
        { success: false, message: 'همه فیلدها ضروری هستند' },
        { status: 400 }
      );
    }

    if (!/^09\d{9}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: 'شماره همراه معتبر نیست' },
        { status: 400 }
      );
    }

    const entry = await saveConsultingRequest({
      education,
      name,
      lastName,
      phone,
      description,
    });

    return NextResponse.json({
      success: true,
      message: 'درخواست مشاوره ذخیره شد',
      data: entry,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'ذخیره درخواست انجام نشد' },
      { status: 500 }
    );
  }
}
