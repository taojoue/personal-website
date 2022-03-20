import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Layout from '../components/layout';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Tao Jouet</title>
          <meta name="description" content="Site de Tao Jouet" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={styles.main}>
          {/* <div class="bg-fixed ..." style="background-image: url(public\photo_plussafe.jpg)"></div> */}

          <h1 className={styles.title}>
            Bienvenue sur le site de Tao Jouet. Vous y retrouverez mon CV ainsi que divers projets sur lesquels j'ai pu travailler.
          </h1>

          <p className={styles.description}>
            Avant toute chose je souahitait me présenter :

            Je m'apelle Tao Jouet, j'ai 23 ans et je travaille actuellement pour l'entreprise Synox où je suis en charge de l'intégration des objets connectés.
            Mon travail conciste en la mise en place d'algorithmes complexes permettant de rendre de la donnée brute en hexadécimal intéligible par tous.
            Je développe aussi des solutions pour réaliser des tests automatisé sur ces décodes afin de controller leur bon fonctionnement.

          </p>

          <p className={styles.description}>
            Vous retrouverez différentes catégories ci-dessous
          </p>
          <h4 className={styles.title}>&darr;</h4>

          <div className={styles.grid}>
            <a href="/career" className={styles.card}>
              <h2>Mon parcours &rarr;</h2>
              <p>Venez découvrir mon parcours professionnel et personnel !</p>
            </a>

            <a href="/skills" className={styles.card}>
              <h2>Mes compétences &rarr;</h2>
              <p>Ici je vous présente mes compétences acquises en autodidacte ou via une formation.</p>
            </a>

            <a href="/creations" className={styles.card}>
              <h2>Mes conceptions &rarr;</h2>
              <p>Je vous propose de d'explorer les conceptions sur lesquelles j'ai pu avoir la chance de travailler et mettre en oeuvre ce que j'ai appris.</p>
            </a>

            <a href="/passions" className={styles.card}>
              <h2>Mes passions &rarr;</h2>
              <p>Par ce qu'il n'y a pas que le travail dans la vie, voici quelques une de mes passions !</p>
            </a>
          </div>
        </main>
      </div>
  )
}
