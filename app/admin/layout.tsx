import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode
}
export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
      <html lang="en">
      <body>{ children }</body>

      </html>
  )
}
