import styles from '../styles/Creation.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Creations() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                    {/* Word of the Day */}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    E-Seanergy
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    Mise en place d’une passerelle Zigbee dans le cadre du projet E-Seanergy. E-Seanergy est un
                                    programme de R&D mené sur trois ans avec le laboratoire de recherches IES engineering.
                                    L'objectif est de concevoir et de développer un service global de mesures en milieux marin,
                                    lagunaire et portuaire.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" onClick={showDetails(eseanergy)}> */}
                                Ce que j'ai fait &rarr;
                                {/* </Button> */}
                            </CardActions>
                            <div id='eseanergy'>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        coucou
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button size="small" href='https://www.journaldunet.com/ebusiness/internet-mobile/1499181-emmanuel-mouton-synox/' target="_blank">
                                    Découvrez le projet !
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Intégration de divers protocoles de communications
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    Mise en place de divers protocoles de communications afin d'y connecter des objets :
                                    <ul className={styles.li}>
                                        <li>MQTT</li>
                                        <li>LoRaWAN</li>
                                        <li>Sigfox</li>
                                        <li>ModBus</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Lien vers le repo !</Button>
                            </CardActions>
                        </Card>
                    </div>
                    
                    <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Intégration d'objets connectés
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    Intégrations de plus d'une centaine d'objets connectés pour divers projets au 
                                    moyen d'algorithmes de décodes complexes.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Lien vers le repo !</Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Application mobile avec Ionic pour calculer des intérets cumulés
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    L'objectif de cette application était de me familiariser avec Ionic tout en apprennant à 
                                    calculer des intérets cumulés. Pour cela j'ai appris les diverses technologies :
                                    <ul className={styles.li}>
                                        <li>Ionic</li>
                                        <li>TypeScript</li>
                                        <li>Angular</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href='https://github.com/taojoue/CoumpoundIT' target="_blank">Lien vers le repo !</Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Intégration du LoRa Network Server Chirpstack à ce site
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    L'objectif est de connecter des objets à une gateway et de les visualiser ici. 
                                    Pour celà j'ai décidé de mettre en place un LoRa Network Server et de rediriger 
                                    les trames vers un système de queue afin de ne pas avoir de perte de données.
                                    Je détaille toute l'architecture plus en détail si vous cliquez sur le lien ci-après.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Voir les données en direct !</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}



function showDetails(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}