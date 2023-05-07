import '../styles/global.scss'

export const metadata = {
  title: "Higor's Portfolio",
  description: "Made by Higor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
