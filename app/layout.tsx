import './globals.css'

export const metadata = {
  title: 'MegaDent+',
  description: 'Sistemi për klinika dentare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  )
}
