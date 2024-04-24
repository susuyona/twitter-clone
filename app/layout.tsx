import { Metadata } from "next";
// import Navigation from "../components/navigation";
import "@/global.css";

export const metadata :Metadata = {
  title: {
    template: "%s | Piopio",
    default: "Piopio",
  },
  description: 'The best place to chirp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
