import Image from 'next/image'
import CallToAction from './components/CallToActions'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'

export default function Home() {
  return (
    <main className="">
      <CallToAction/>
      <CategorySection/>
      <ProductSection/>
    </main>
  )
}
