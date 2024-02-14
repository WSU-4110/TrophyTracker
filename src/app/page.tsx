import Hero from '@/components/Hero'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'

export default function HomePage () {
  return (
    <main>
      <Hero />
    </main>
  )
}
