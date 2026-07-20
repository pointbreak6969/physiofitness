import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-paper via-white to-[#eef7e2] flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
