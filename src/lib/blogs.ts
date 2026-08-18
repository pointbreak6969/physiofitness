import "server-only";
import { Schema, model, models, type Model } from "mongoose";
import dbConnect from "@/lib/connectDb";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  body: string;
};

export type BlogPostInput = Omit<BlogPost, "id">;

type BlogDocument = BlogPostInput & {
  _id: { toString(): string };
};

const blogSchema = new Schema<BlogDocument>(
  {
    title: { type: String, required: true, trim: true, maxlength: 180 },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      maxlength: 180,
    },
    category: { type: String, required: true, trim: true, maxlength: 80 },
    date: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ },
    excerpt: { type: String, required: true, trim: true, maxlength: 600 },
    body: { type: String, required: true, trim: true, maxlength: 50_000 },
  },
  { versionKey: false, timestamps: true }
);

const Blog = (models.Blog as Model<BlogDocument> | undefined) ?? model<BlogDocument>("Blog", blogSchema);

function toBlogPost(document: BlogDocument): BlogPost {
  return {
    id: document._id.toString(),
    title: document.title,
    slug: document.slug,
    category: document.category,
    date: document.date,
    excerpt: document.excerpt,
    body: document.body,
  };
}

export function validateBlogPostInput(value: unknown):
  | { data: BlogPostInput }
  | { error: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { error: "A blog post payload is required" };
  }

  const input = value as Record<string, unknown>;
  const title = typeof input.title === "string" ? input.title.trim() : "";
  const slug = typeof input.slug === "string" ? input.slug.trim().toLowerCase() : "";
  const category = typeof input.category === "string" ? input.category.trim() : "Blog";
  const date = typeof input.date === "string" ? input.date.trim() : "";
  const excerpt = typeof input.excerpt === "string" ? input.excerpt.trim() : "";
  const body = typeof input.body === "string" ? input.body.trim() : "";

  if (!title || !slug || !excerpt || !body) {
    return { error: "title, slug, excerpt and body are required" };
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { error: "slug may only contain lowercase letters, numbers and hyphens" };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { error: "date must use YYYY-MM-DD format" };
  }
  if (new Date(`${date}T00:00:00.000Z`).toISOString().slice(0, 10) !== date) {
    return { error: "date must be a real calendar date" };
  }
  if (!category) {
    return { error: "category cannot be empty" };
  }
  if (title.length > 180 || slug.length > 180 || category.length > 80) {
    return { error: "title, slug or category is too long" };
  }
  if (excerpt.length > 600 || body.length > 50_000) {
    return { error: "excerpt or body is too long" };
  }

  return { data: { title, slug, category, date, excerpt, body } };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  await dbConnect();
  const posts = await Blog.find().sort({ date: -1, createdAt: -1 }).lean<BlogDocument[]>();
  return posts.map(toBlogPost);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await dbConnect();
  const post = await Blog.findOne({ slug }).lean<BlogDocument | null>();
  return post ? toBlogPost(post) : null;
}

export async function createBlogPost(input: BlogPostInput): Promise<BlogPost> {
  await dbConnect();
  const post = await Blog.create(input);
  return toBlogPost(post);
}

export async function updateBlogPostBySlug(
  currentSlug: string,
  input: BlogPostInput
): Promise<BlogPost | null> {
  await dbConnect();
  const post = await Blog.findOneAndUpdate({ slug: currentSlug }, input, {
    new: true,
    runValidators: true,
  }).lean<BlogDocument | null>();

  return post ? toBlogPost(post) : null;
}

export async function deleteBlogPostBySlug(slug: string): Promise<boolean> {
  await dbConnect();
  const result = await Blog.deleteOne({ slug });
  return result.deletedCount === 1;
}
