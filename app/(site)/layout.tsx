import Link from 'next/link'
import '../globals.css'
import type { Metadata } from 'next'
import { getPages } from '@/sanity/sanity-utils'


export const metadata: Metadata = {
  title: 'Get to know shreyas',
  description: 'Welcome to my portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // get all pages
  const pages = await getPages();


  return (
    <html lang="en">
      <body className="max-w-7xl px-2 mx-auto py-20">
        <header className='flex justify-between items-center'>
          <Link href="/" className='bg-gradient-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent text-lg font-bold'>Shreyas</Link>

          <div className="flex items-center gap-5 text-sm text-gray-600 ">
            {
              pages.map(page => (
                <Link href={`/${page.slug}`} className='hover:underline' key={page._id}>{page.title}</Link>
              ))
            }
          </div>

        </header>
        <main className='py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
