"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Row = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
};

export default function BlogList({ posts }: { posts: Row[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(p: Row) {
    if (!confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    setDeleting(p.id);
    try {
      const res = await fetch(`/api/blogs/${p.slug}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to delete");
      }
      toast.success("Blog deleted.");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete blog.");
    } finally {
      setDeleting(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white border border-brand-line rounded-[14px] py-20 text-center">
        <p className="text-muted-foreground text-sm mb-4">No blog posts yet.</p>
        <Link
          href="/admin/dashboard/blogs/new"
          className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Create your first blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-brand-line rounded-[14px] overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead className="font-semibold text-brand-ink w-[280px]">Title</TableHead>
            <TableHead className="font-semibold text-brand-ink">Category</TableHead>
            <TableHead className="font-semibold text-brand-ink w-[130px]">Date</TableHead>
            <TableHead className="font-semibold text-brand-ink">Excerpt</TableHead>
            <TableHead className="font-semibold text-brand-ink text-right w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((p) => (
            <TableRow key={p.id} className="hover:bg-[#f0f9e8]/60 transition-colors">
              <TableCell className="font-medium text-brand-ink">{p.title}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs font-normal border-brand-olive/30 text-brand-ink">
                  {p.category}
                </Badge>
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">{p.date}</TableCell>
              <TableCell className="text-sm text-muted-foreground max-w-[260px]">
                <p className="truncate">{p.excerpt}</p>
              </TableCell>
              <TableCell className="text-right whitespace-nowrap">
                <div className="inline-flex items-center gap-2">
                  <Link
                    href={`/admin/dashboard/blogs/${p.slug}/edit`}
                    className="inline-flex items-center gap-1 bg-brand-paper border border-brand-line rounded-full px-3 py-1.5 text-xs font-semibold text-brand-ink hover:bg-brand-olive hover:text-white transition-colors"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/blog/${p.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 bg-brand-paper border border-brand-line rounded-full px-3 py-1.5 text-xs font-semibold text-brand-ink hover:bg-brand-olive hover:text-white transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(p)}
                    disabled={deleting === p.id}
                    className="inline-flex items-center gap-1 bg-destructive/10 text-destructive border border-destructive/20 rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-destructive hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {deleting === p.id ? "…" : "Delete"}
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
