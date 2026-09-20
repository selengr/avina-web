import { NextResponse } from 'next/server';
import { saveConsultingRequest } from '@/lib/submissions-store';
import { consultingSchema } from '@/lib/validation/forms';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultingSchema.safeParse(body);

    if (!parsed.success) {
      const phoneIssue = parsed.error.issues.find((issue) =>
        issue.path.includes('phone')
      );
      const message =
        phoneIssue?.code === 'invalid_string'
          ? 'شماره همراه معتبر نیست'
          : 'همه فیلدها ضروری هستند';

      return NextResponse.json(
        { success: false, message },
        { status: 400 }
      );
    }

    const entry = await saveConsultingRequest(parsed.data);

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
