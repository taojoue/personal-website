import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Career.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

export default function Creations() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* <Image src={myAvatar}/>
                <Avatar alt="Remy Sharp" src='../public\Images\avatar.jpg' /> */}

                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Retour au Menu
                    </Link>
                </Breadcrumbs>
            </Head>

            <main className={styles.main}>
                <Timeline position="alternate">
                <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2014
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Stage à l'INRIA - Département robotique</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>BAC Scientifique (SVT) Option ISN au Lycée Français Jean Mermoz de Dakar</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>DUT Génie Electrique et Informatique Industrielle</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Stage de fin de DUT à l'IES - Projet HUT : conception d'un espace immersif</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Depuis 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Alternance chez Synox - Responsable de l'intégration d'objets connectés</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Licence Professionnelle Systèmes Embarqués en alternance au sein de Synox
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Aujourd'hui
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Bachelor reponsable en ingéniérie de logiciels au CESI de Montpellier
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

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
    );
}