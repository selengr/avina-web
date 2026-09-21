export function canReadSubmissions(request: Request) {
  const expected = process.env.SUBMISSIONS_READ_TOKEN;
  if (!expected) return false;

  const header = request.headers.get('x-submissions-token');
  const queryToken = new URL(request.url).searchParams.get('token');
  return header === expected || queryToken === expected;
}
