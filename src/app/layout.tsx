import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fdf8f2]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}