import { Fragment } from 'react'

import Navbar from '@/components/navbar'

import FirstSection from './_components/first-section'

export default function LandingPage() {
  return (
    <Fragment>
      <Navbar />
      <FirstSection />
      <h1>Landing Page</h1>
    </Fragment>
  )
}
