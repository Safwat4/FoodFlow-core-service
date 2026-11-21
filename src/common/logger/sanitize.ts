
const SENSITIVE_FIELDS = [
  "password",
  "passwordHash",
  "password_hash",
  "currentPassword",
  "newPassword",
  "confirmPassword",
  "accessToken",
  "refreshToken",
  "token",
  "authorization",
  "secret",
  "apiKey",
  "api_key",
];

export function sanitizeData(data: unknown): unknown {
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeData(item));
  }

  if (data === null || typeof data !== "object") {
    return data;
  }

  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    if (
      SENSITIVE_FIELDS.includes(key.toLowerCase())
    ) {
      sanitized[key] = "[REDACTED]";
    } else {
      sanitized[key] = sanitizeData(value);
    }
  }

  return sanitized;
}
