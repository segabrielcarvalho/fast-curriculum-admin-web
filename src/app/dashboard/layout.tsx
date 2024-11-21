import AppLayout from '@/layout/AppLayout';

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AppLayout>{children}</AppLayout>
    </main>
  );
}
