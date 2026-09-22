type ApiResult = {
  success?: boolean;
  message?: string;
};

export type FormSubmitResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

/**
 * Shared JSON POST helper for newsletter / consulting forms.
 * Keeps status/message handling consistent without duplicating fetch logic.
 */
export async function postFormJson<TBody>(
  url: string,
  body: TBody,
  options: {
    fallbackSuccessMessage: string;
    fallbackErrorMessage: string;
  }
): Promise<FormSubmitResult> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    let result: ApiResult = {};
    try {
      result = (await response.json()) as ApiResult;
    } catch {
      result = {};
    }

    if (!response.ok || !result.success) {
      return {
        ok: false,
        message: result.message || options.fallbackErrorMessage,
      };
    }

    return {
      ok: true,
      message: result.message || options.fallbackSuccessMessage,
    };
  } catch {
    return { ok: false, message: options.fallbackErrorMessage };
  }
}
