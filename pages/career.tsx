import styles from '../styles/Career.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Creations() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Timeline position="alternate">
                <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2014
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Stage à l&apos;INRIA - Département robotique</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>BAC Scientifique (SVT) Option ISN au Lycée Français Jean Mermoz de Dakar</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>DUT Génie Electrique et Informatique Industrielle</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Stage de fin de DUT à l&apos;IES - Projet HUT : conception d&apos;un espace immersif</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Depuis 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Alternance chez Synox - Responsable de l&apos;intégration d&apos;objets connectés</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Licence Professionnelle Systèmes Embarqués en alternance au sein de Synox
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Aujourd&apos;hui
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Bachelor reponsable en ingéniérie de logiciels au CESI de Montpellier
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </main>
        </div>
    );
}