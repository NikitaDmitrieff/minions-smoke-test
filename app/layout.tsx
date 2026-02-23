import './globals.css'

export const metadata = {
  title: 'Minions Smoke Test',
  description: 'Minimal Next.js app for minions pipeline testing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
