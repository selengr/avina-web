import { ensureSchema, query } from '@/lib/db';

export type NewsletterEntry = {
  id: string;
  email: string;
  createdAt: string;
};

export type ConsultingEntry = {
  id: string;
  education: string;
  name: string;
  lastName: string;
  phone: string;
  description: string;
  createdAt: string;
};

type NewsletterRow = {
  id: string;
  email: string;
  created_at: Date;
};

type ConsultingRow = {
  id: string;
  education: string;
  name: string;
  last_name: string;
  phone: string;
  description: string;
  created_at: Date;
};

function toNewsletterEntry(row: NewsletterRow): NewsletterEntry {
  return {
    id: row.id,
    email: row.email,
    createdAt: row.created_at.toISOString(),
  };
}

function toConsultingEntry(row: ConsultingRow): ConsultingEntry {
  return {
    id: row.id,
    education: row.education,
    name: row.name,
    lastName: row.last_name,
    phone: row.phone,
    description: row.description,
    createdAt: row.created_at.toISOString(),
  };
}

export async function saveNewsletterEmail(
  email: string
): Promise<NewsletterEntry> {
  await ensureSchema();
  const normalized = email.trim().toLowerCase();

  // Upsert-as-no-op keeps this atomic: concurrent submissions for the same
  // address can no longer race past each other the way the old
  // read-then-write-the-whole-file approach did.
  const result = await query<NewsletterRow>(
    `INSERT INTO newsletter_subscribers (email)
     VALUES ($1)
     ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
     RETURNING id, email, created_at`,
    [normalized]
  );
  return toNewsletterEntry(result.rows[0]);
}

export async function saveConsultingRequest(
  payload: Omit<ConsultingEntry, 'id' | 'createdAt'>
): Promise<ConsultingEntry> {
  await ensureSchema();
  const result = await query<ConsultingRow>(
    `INSERT INTO consulting_requests (education, name, last_name, phone, description)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, education, name, last_name, phone, description, created_at`,
    [
      payload.education,
      payload.name,
      payload.lastName,
      payload.phone,
      payload.description,
    ]
  );
  return toConsultingEntry(result.rows[0]);
}

export async function listNewsletterEmails(): Promise<NewsletterEntry[]> {
  await ensureSchema();
  const result = await query<NewsletterRow>(
    `SELECT id, email, created_at FROM newsletter_subscribers ORDER BY created_at DESC`
  );
  return result.rows.map(toNewsletterEntry);
}

export async function listConsultingRequests(): Promise<ConsultingEntry[]> {
  await ensureSchema();
  const result = await query<ConsultingRow>(
    `SELECT id, education, name, last_name, phone, description, created_at
     FROM consulting_requests ORDER BY created_at DESC`
  );
  return result.rows.map(toConsultingEntry);
}
