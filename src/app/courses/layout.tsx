import { MainLayout } from "@/components/layout/MainLayout";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
} 