import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Skills.module.css'
import { Box, Grid } from '@mui/material';
import { theme } from '@nextui-org/react';

import js from '../public/Images/Logos/javascript.svg'
import cpp from '../public/Images/Logos/cpp.svg'
import html from '../public/Images/Logos/html5.svg'
import ionic from '../public/Images/Logos/ionic.png'
import css from '../public/Images/Logos/css.svg'
import python from '../public/Images/Logos/python.svg'
import docker from '../public/Images/Logos/docker.svg'
import rust from '../public/Images/Logos/rust.png'
import angular from '../public/Images/Logos/angular.svg'
import nextjs from '../public/Images/Logos/nextjs.png'
import tailwindcss from '../public/Images/Logos/tailwindcss.svg'
import nodered from '../public/Images/Logos/nodered.svg'
import next from 'next';

export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={html} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        HTML : J'ai principalement appris en autodidacte comme tous les autres langages lié au web. J’ai pu réaliser mon premier site internet étant plus jeune ce qui m’a donné l’envie de travailler dans l’informatique.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        CSS : Tout comme le HTML j’ai appris le CSS dès la création de mon premier site web pour le rentre plus jolie et appréciable.
                    </div>
                    <div className={styles.card1}>
                        <Image src={css} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={js} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        JavaScript : Le JavaScript et le TypeScript sont des langages que j’ai appris plus tard quand j’ai voulu réaliser ma première application mobile. Depuis je m’en sert tous les jours aussi bien dans mon travail que dans mes projets personnels.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        NextJS : Récemment j’ai commencé à utiliser NextJS qui est un framework très puissant doté d’un environnement intuitif et est maintenu par un gros organisme qu’est Vercel. De plus l’intégration d’une base de donnée avec Prisma est très simple et extrêmement puissant.
                    </div>
                    <div className={styles.card1}>
                        <Image src={nextjs} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={angular} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        Angular : J’ai commencé à apprendre Angular quand j’ai voulu réaliser une application mobile. C’est avec ça et Ionic que j’ai commencé à m’intéresser au mobile.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        Tailwind : En commençant à travailler avec NextJS j’ai souhaité rendre mon site plus beau et je me suis tourné vers TailwindCSS. Actuellement il me reste encore à beaucoup d’adaptation du code pour utiliser à 100% Tailwind.
                    </div>
                    <div className={styles.card1}>
                        <Image src={tailwindcss} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={docker} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        Docker : J’ai commencé à me familiarisé avec Docker dans le cadre d’un projet professionnel et ai été séduit par sa puissance et sa facilité d’utilisation. Je compte faire en sorte de faire tourner ce site en utilisant Docker dans une version future.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        Rust : J’ai débuté mon apprentissage de Rust assez récemment et je n’ai pour rien à dire à part que ce langage est plein d’avantages. Ayant beaucoup travaillé avec du C et du C++ je ne peux qu’apprécier Rust.
                    </div>
                    <div className={styles.card1}>
                        <Image src={rust} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={nodered} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        Node-Red : C’est un de mes collaborateur qui m’a fait découvrir Node-Red et c’est un outil extrêmement puissant dont je me sert tous les jours pour diverses utilisations. J’ai réalisé quelques projets avec qui m’ont permis de perfectionner ma vision des algorithmes ainsi que mon JavaScript.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        Ionic : Il y a quelques années j’ai voulu créer une application mobile, pour cela je me suis tourné vers le « Cross Plateforme » et ai décidé d’utiliser Ionic, Angular et TypeScript. Ce fut une expérience très enrichissante.
                    </div>
                    <div className={styles.card1}>
                        <Image src={ionic} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={cpp} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        C++ : En intégrant l’IUT de Montpellier j’ai pu réaliser beaucoup de projets aussi bien en C qu’en C++, le C plus pour l’embarqué et le C++ pour des projets de supervisions. J’ai développé beaucoup d’application diverses ce qui m’a permis de grandement m’entrainer à la conception d’algorithmes.
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>
                        Python : Le Python est le premier langage que j’ai pu apprendre, c’était en 3ème pour mon stage au collège. J’étais à l’INRIA de Villeneuve-d’Ascq pour suivre des équipes de chercheurs. C’est de là que viens ma passion pour l’informatique et la robotique. J’ai perfectionné mon Python en réalisant un lecteur MP3 en ISN au Lycée.
                    </div>
                    <div className={styles.card1}>
                        <Image src={python} alt="loading..." />
                    </div>
                </div>
            </main>
        </div>
    );
}