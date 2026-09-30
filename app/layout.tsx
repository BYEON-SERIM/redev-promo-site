import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "○○구역 재개발 정비사업",
  description: "○○구역 주택재개발 정비사업 홍보관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 웹폰트 연결 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="font-['Pretendard'] antialiased text-gray-800 bg-gray-50">
        {children}
      </body>
    </html>
  );
}