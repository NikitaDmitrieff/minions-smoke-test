import './globals.css'
import { FeedbackButton } from '@/components/FeedbackButton'

export const metadata = { title: 'QA Sandbox' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FeedbackButton />
      </body>
    </html>
  )
}
