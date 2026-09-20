function tokensMatch(provided: string | null, expected: string) {
  if (!provided || provided.length !== expected.length) return false;

  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) {
    mismatch |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

export function canReadSubmissions(request: Request) {
  const expected = process.env.SUBMISSIONS_READ_TOKEN;
  if (!expected) return false;

  const header = request.headers.get('x-submissions-token');
  const queryToken = new URL(request.url).searchParams.get('token');
  return tokensMatch(header, expected) || tokensMatch(queryToken, expected);
}
