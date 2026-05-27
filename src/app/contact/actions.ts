"use server";

import { createClient } from "@/lib/supabase/server";

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

  const supabase = await createClient();
  const { error } = await supabase
    .from("Contacts")
    .insert([{ name, email, number, subject, message }]);

  if (error) {
    return { status: "error", message: error.message };
  }

  return { status: "success" };
}
