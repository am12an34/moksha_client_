import { Helmet } from 'react-helmet'
import Hero from '~/components/Home/Hero'
import Specials from '~/components/Home/Specials'
import GetStarted from '~/components/Home/GetStarted'
import styles from '~/components/Home/styles.module.css'
import { useEffect, useRef } from 'react';
import { start } from 'nprogress'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);
export function Component() {
  const main = useRef(null)
  const hero = useRef(null)
  const aboutErden = useRef(null)
  const attractions = useRef(null)
  const specials = useRef(null)
  const journey = useRef(null)
  const gs = useRef(null)

  return (
    <>
      <Helmet>
        <title>MOKSHA IX | Home</title>
      </Helmet>
      <main className={styles['home']} ref={main}>
        <Hero/>
        <Specials/>
        <GetStarted />
      </main>
    </>
  )
}

Component.displayName = 'Home'
