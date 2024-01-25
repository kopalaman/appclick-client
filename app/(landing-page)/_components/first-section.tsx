import React from 'react'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

const FirstSection = () => {
  return (
    // <section className="container xl:py-36 py-10 px-8">
    //   <div className="lg:text-5xl xl:text-6xl text-4xl flex justify-center font-bold pt-10 leading-tight">
    //     Compliance Cloud Command Center
    //   </div>
    //   <p></p>
    // </section>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
      <div className="flex max-w-[980px] flex-col items-center gap-2 mx-auto py-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-center">
          Compliance Cloud Command Center. <br className="hidden sm:inline" />
          <span className="text-muted-foreground">
            Manage,monitor and secure a fast personalized cloud experience
          </span>
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg text-center">
          Easily execute and monitor your compliance status with our AI-powered
          engine <br className="hidden sm:inline" /> with your teammates to
          supercharge productivity
        </p>
        <div className="flex gap-4 mx-auto py-6">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'lg' })}
          >
            Start Complying
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            Get a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
