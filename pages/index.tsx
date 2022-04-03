import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Script from 'next/script';

import avatar from '../public/avatar.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TEDM345T56"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-TEDM345T56'); 
        `}
      </Script>
      <Head>
        <title>Tao Jouet</title>
        <meta name="description" content="Site de Tao Jouet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        {/* <div class="bg-fixed ..." style="background-image: url(public\photo_plussafe.jpg)"></div> */}

        <h1 className='text-5xl m-6'>
          Bienvenue sur mon site. Faisons connaisance :
        </h1>

        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
          <div className="col-start-2">
            <Image src={avatar} className=" rounded-lg" />
          </div>
          <div className='col-span-3 text-lg'>
            Je m&apos;apelle Tao Jouet, j&apos;ai 23 ans et je travaille actuellement pour l&apos;entreprise Synox où je suis en charge de l&apos;intégration des objets connectés.
            Mon travail consiste en la mise en place d&apos;algorithmes complexes permettant de rendre de la donnée brute des objets intélligible par tous.
            Je développe aussi des solutions pour réaliser des tests automatisé sur ces décodes afin de controller leur bon fonctionnement et travaille sur
            différents projets aussi bien professionnels que personnels.
          </div>
        </div>

        <p className={styles.description}>
          Voici les différentes catégories de ce site
        </p>
        <h4 className={styles.title}>&darr;</h4>

        <div className={styles.grid}>
          <Link href="/career" passHref>
            <div className={styles.card}>
              <h2>Mon parcours &rarr;</h2>
              <p>Venez découvrir mon parcours professionnel et personnel !</p>
            </div>
          </Link>

          <Link href="/skills" passHref>
            <div className={styles.card}>
              <h2>Mes compétences &rarr;</h2>
              <p>Ici je vous présente mes compétences acquises en autodidacte ou via une formation.</p>
            </div>
          </Link>

          <Link href="/creations" passHref>
            <div className={styles.card}>
              <h2>Mes conceptions &rarr;</h2>
              <p>Je vous propose de d&apos;explorer les conceptions sur lesquelles j&apos;ai pu avoir la chance de travailler et mettre en oeuvre ce que j&apos;ai appris.</p>
            </div>
          </Link>

          <Link href="/passions" passHref>
            <div className={styles.card}>
              <h2>Mes passions &rarr;</h2>
              <p>Par ce qu&apos;il n&apos;y a pas que le travail dans la vie, voici quelques une de mes passions !</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}