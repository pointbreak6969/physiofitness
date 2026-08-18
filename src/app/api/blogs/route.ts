import { NextResponse } from "next/server";
import {
  createBlogPost,
  getBlogPosts,
  validateBlogPostInput,
} from "@/lib/blogs";

export const runtime = "nodejs";

function isDuplicateKeyError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  );
}

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON" },
      { status: 400 }
    );
  }

  const result = validateBlogPostInput(payload);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    const post = await createBlogPost(result.data);
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    if (isDuplicateKeyError(err)) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
