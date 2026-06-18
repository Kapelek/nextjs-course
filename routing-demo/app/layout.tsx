import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Course",
  description: "Hello, hello!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
