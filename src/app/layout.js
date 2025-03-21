import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "movies",
  description: "generated by hanna",
};

export default function RootLayout({ children }) {
  
  return (
    <html>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&family=Nanum+Gothic&family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>

      </head>
      <body>
       <h1><Link href='/' className="home">movies</Link></h1>
        <Link href='/movies' className="btn">🎬 영화 목록 보기</Link>
        <Link href='/create' className="btn">👉 영화 추가하기</Link>
      {children}

      </body>
    </html>
  );
}