import { NextResponse } from 'next/server';
import {
  listConsultingRequests,
  saveConsultingRequest,
} from '@/lib/submissions-store';
import { canReadSubmissions } from '@/lib/submissions-auth';
import { consultingSchema, firstZodMessage } from '@/lib/validation/forms';

export async function GET(request: Request) {
  if (!canReadSubmissions(request)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const data = await listConsultingRequests();
  return NextResponse.json({ success: true, data });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: firstZodMessage(parsed.error) },
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
