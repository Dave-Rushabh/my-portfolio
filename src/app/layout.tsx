import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rushabh Dave | Fullstack Developer",
  description: `👨‍💻 Frontend heavy Full-Stack Developer

I specialize in building scalable, high-performance web applications, focusing on both frontend and backend development. Passionate about crafting seamless digital experiences, optimizing performance, and staying up-to-date with modern web technologies.

Tech Stack & Expertise:

🔹 Frontend: React.js, Next.js, JavaScript, TypeScript, Redux Toolkit, Tailwind CSS
🔹 Backend: Node.js, Express.js, Supabase
🔹 Databases: MongoDB, PostgreSQL
🔹 API Development: REST APIs, GraphQL, gRPC
🔹 Other Tools & Concepts: Web Performance Optimization, Authentication (NextAuth, OAuth)

What I bring to the table : 

✅ Experience in designing and developing intuitive, responsive UIs
✅ Strong understanding of frontend fundamentals and web performance
✅ Building scalable, secure, and maintainable backend solutions
✅ Working with modern databases like MongoDB & PostgreSQL
✅ Continuous learning and adapting to new technologies

🎯 Currently learning the foundations of the frontend system design.

🚀 Always eager to collaborate on exciting projects !`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
