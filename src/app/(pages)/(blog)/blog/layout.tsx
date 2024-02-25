import "@/styles/globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-col flex place-items-center">
      <div className="max-w-[700px] w-full px-2">{children}</div>
    </main>
  );
}
