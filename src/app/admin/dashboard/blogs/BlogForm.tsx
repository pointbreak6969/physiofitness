"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import MarkdownEditor from "./MarkdownEditor";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogForm({
  initial,
}: {
  initial?: {
    id: string;
    title: string;
    slug: string;
    category: string;
    date: string;
    excerpt: string;
    body: string;
  };
}) {
  const router = useRouter();
  const isEdit = !!initial;
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(false);
  const [category, setCategory] = useState(initial?.category ?? "Blog");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [isPending, setIsPending] = useState(false);

  function handleTitle(v: string) {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !excerpt.trim() || !body.trim()) {
      toast.error("Title, slug, excerpt and body are required.");
      return;
    }
    setIsPending(true);
    const payload = { title, slug, category, date, excerpt, body };

    try {
      const endpoint = isEdit ? `/api/blogs/${initial.slug}` : "/api/blogs";
      const res = await fetch(endpoint, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save blog");
      }
      toast.success(isEdit ? "Blog updated successfully." : "Blog created successfully.");
      router.push("/admin/dashboard/blogs");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save blog.");
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-brand-ink mb-1.5">Title</label>
          <input
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
            placeholder="Blog post title"
            className="w-full border border-brand-line rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-brand-olive"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-ink mb-1.5">Slug</label>
          <input
            value={slug}
            onChange={(e) => { setSlug(slugify(e.target.value)); setSlugTouched(true); }}
            placeholder="blog-post-slug"
            className="w-full border border-brand-line rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-brand-olive"
          />
          <p className="text-[11px] text-brand-sage mt-1">Auto-generated from title. Editable.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-ink mb-1.5">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-brand-line rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-brand-olive"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-ink mb-1.5">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-brand-line rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-brand-olive"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1.5">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          placeholder="Short summary shown on the blog listing page"
          className="w-full border border-brand-line rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-brand-olive resize-y"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-1.5">Body (Markdown)</label>
        <MarkdownEditor value={body} onChange={setBody} />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Saving…" : isEdit ? "Update Blog" : "Publish Blog"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard/blogs")}
          className="inline-flex items-center gap-2 bg-white border border-brand-line text-brand-ink rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-brand-paper transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
