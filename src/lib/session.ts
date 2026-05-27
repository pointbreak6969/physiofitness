const SECRET = process.env.ADMIN_SESSION_SECRET ?? "change-me-in-production";
const enc = new TextEncoder();

async function getKey() {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signSession(payload: object): Promise<string> {
  const data = JSON.stringify(payload);
  const key = await getKey();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return (
    Buffer.from(data).toString("base64url") +
    "." +
    Buffer.from(sig).toString("base64url")
  );
}

export async function verifySession(token: string): Promise<Record<string, unknown> | null> {
  try {
    const [dataB64, sigB64] = token.split(".");
    if (!dataB64 || !sigB64) return null;
    const data = Buffer.from(dataB64, "base64url").toString();
    const sig = Buffer.from(sigB64, "base64url");
    const key = await getKey();
    const valid = await crypto.subtle.verify("HMAC", key, sig, enc.encode(data));
    if (!valid) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = "admin_session";
