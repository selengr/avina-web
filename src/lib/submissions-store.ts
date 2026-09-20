import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJsonArray<T>(fileName: string): Promise<T[]> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeJsonArray<T>(fileName: string, rows: T[]) {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  await fs.writeFile(filePath, JSON.stringify(rows, null, 2), 'utf8');
}

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

export async function saveNewsletterEmail(email: string): Promise<NewsletterEntry> {
  const normalized = email.trim().toLowerCase();
  const rows = await readJsonArray<NewsletterEntry>('newsletter.json');
  const existing = rows.find((row) => row.email === normalized);
  if (existing) {
    return existing;
  }

  const entry: NewsletterEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    email: normalized,
    createdAt: new Date().toISOString(),
  };
  rows.push(entry);
  await writeJsonArray('newsletter.json', rows);
  return entry;
}

export async function saveConsultingRequest(
  payload: Omit<ConsultingEntry, 'id' | 'createdAt'>
): Promise<ConsultingEntry> {
  const rows = await readJsonArray<ConsultingEntry>('consulting.json');
  const entry: ConsultingEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...payload,
    createdAt: new Date().toISOString(),
  };
  rows.push(entry);
  await writeJsonArray('consulting.json', rows);
  return entry;
}

export async function listNewsletterEmails(): Promise<NewsletterEntry[]> {
  return readJsonArray<NewsletterEntry>('newsletter.json');
}

export async function listConsultingRequests(): Promise<ConsultingEntry[]> {
  return readJsonArray<ConsultingEntry>('consulting.json');
}
