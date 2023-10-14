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
      <body className="max-w-7xl px-4 mx-auto py-10">
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

        <footer>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:shreyasramesh08@gmail.com" target='_blank' className="text-gray-400 hover:underline">Email</a>
              <a href="https://www.linkedin.com/in/shreyr" target='_blank' className="text-gray-400 hover:underline">Linkedin</a>
              <a href="https://peerlist.io/shreyas" target='_blank' className="text-gray-400 hover:underline">Peerlist</a>
              <a href="https://github.com/shreydd" target='_blank' className="text-gray-400 hover:underline">Github</a>
              <a href="https://blogorithm.hashnode.dev/" target='_blank' className="text-gray-400 hover:underline">Hashnode</a>
              <a href="https://factored.substack.com/" target='_blank' className="text-gray-400 hover:underline">Substack</a>
              <a href="https://calendly.com/shreyasr/30min" target='_blank' className="text-gray-400 hover:underline">Calendly</a>
            </div>
        </footer>
      </body>
    </html>
  )
}
