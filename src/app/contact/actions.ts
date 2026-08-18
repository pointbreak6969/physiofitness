"use server";

import { getDb } from "@/lib/connectDb";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const number = formData.get("mobile") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const db = await getDb();
    await db.collection("contacts").insertOne({
      name,
      email,
      number,
      subject,
      message,
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Failed to submit the form.",
    };
  }

  return { status: "success" };
}
