import './globals.css'

export const metadata = {
  title: 'Brawijaya Hospital Tangerang - Internal Service Portal',
  description: 'Portal Layanan Internal IT dan Operasional Hospital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}