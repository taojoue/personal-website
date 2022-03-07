import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          Bienvenue sur le site de Tao Jouet. Vous y retrouverez mon CV ainsi que divers projets sur lesquels j'ai travaillé.
        </h1>

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

          <a href="/travels" className={styles.card}>
            <h2>Mes voyages &rarr;</h2>
            <p>Par ce qu'il n'y a pas que le travail dans la vie, voici quelques endroits où j'ai eu la chance de mettre les pieds 🥰</p>
          </a>
        </div>


      </main>

      <footer className={styles.footer}>
        <a href='https://www.linkedin.com/in/taojouet/'>
          <span className={styles.logo}>
            <Image src="/linkedin-icon-2.svg" alt="Linkedin Logo" width={108} height={24} />
          </span>
        </a>

        <a href='mailto: taojouet@gmail.com'>
          <span className={styles.logo}>
            <Image src="/email-message-svgrepo-com.svg" alt="Email Logo" width={108} height={24} />
          </span>
        </a>

        <a href='https://www.github.com/taojoue/'>
          <span className={styles.logo}>
            <Image src="/github-icon-1.svg" alt="GitHub Logo" width={108} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}
