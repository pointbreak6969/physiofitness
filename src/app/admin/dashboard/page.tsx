import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, SESSION_COOKIE } from "@/lib/session";
import { createClient } from "@/lib/supabase/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoutButton from "./LogoutButton";

type Contact = {
  id: number;
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
  created_at: string;
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token || !(await verifySession(token))) {
    redirect("/admin/login");
  }

  const supabase = await createClient();
  const { data: contacts } = await supabase
    .from("Contacts")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = (contacts ?? []) as Contact[];

  return (
    <div className="min-h-screen bg-[#f7faf3]">
      {/* Header */}
      <header className="bg-white border-b border-border/60 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-olive grid place-items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="font-semibold text-brand-ink">PhysioPath Admin</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <Card className="border-0 shadow-sm ring-1 ring-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Enquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-ink">{rows.length}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm ring-1 ring-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-ink">
                {rows.filter((r) => {
                  const d = new Date(r.created_at);
                  const now = new Date();
                  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
                }).length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm ring-1 ring-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-olive">
                {rows.filter((r) => {
                  const d = new Date(r.created_at);
                  const now = new Date();
                  return d.toDateString() === now.toDateString();
                }).length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contacts table */}
        <Card className="border-0 shadow-sm ring-1 ring-border/50">
          <CardHeader className="border-b border-border/40 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-brand-ink">Contact Enquiries</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {rows.length} total
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {rows.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground text-sm">
                No enquiries yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="font-semibold text-brand-ink w-[160px]">Name</TableHead>
                      <TableHead className="font-semibold text-brand-ink">Email</TableHead>
                      <TableHead className="font-semibold text-brand-ink">Mobile</TableHead>
                      <TableHead className="font-semibold text-brand-ink w-[160px]">Subject</TableHead>
                      <TableHead className="font-semibold text-brand-ink">Message</TableHead>
                      <TableHead className="font-semibold text-brand-ink text-right w-[120px]">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((contact) => (
                      <TableRow key={contact.id} className="hover:bg-[#f0f9e8]/60 transition-colors">
                        <TableCell className="font-medium text-brand-ink">{contact.name}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{contact.email}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{contact.number || "—"}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs font-normal border-brand-olive/30 text-brand-ink">
                            {contact.subject || "—"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground max-w-[260px]">
                          <p className="truncate">{contact.message || "—"}</p>
                        </TableCell>
                        <TableCell className="text-right text-xs text-muted-foreground">
                          {new Date(contact.created_at).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
