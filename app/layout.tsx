import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LevelUp Chronicle - Gaming Blog',
  description: 'Discover epic gaming moments, gameplay tips, and gaming culture. Your gateway to gaming excellence.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Space+Mono:wght@400;700&display=swap');
          * { -webkit-font-smoothing: antialiased; }
        `}</style>
      </head>
      <body className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
