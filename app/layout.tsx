import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Version Tester — A/B Test AI Prompts with Metrics',
  description: 'Compare prompt variations side-by-side with success rate tracking, cost analysis, and automated quality scoring. Built for AI product teams and prompt engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bce9389f-e2f8-4a74-b6c3-2b33db303ca3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
