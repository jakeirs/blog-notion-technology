import "@/styles/globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}
