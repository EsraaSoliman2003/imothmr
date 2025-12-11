import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="md:flex md:items-start relative">
      <Sidebar />
      <section className="relative grow">
        <Navbar />
        {children}
        </section>
    </main>
  );
}
