import Breadcrumb from "@/components/layout/breadcrumb";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Breadcrumb />
      {children}
    </div>
  );
}
