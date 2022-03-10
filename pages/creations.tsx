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
                                <Button size="small" onClick="showDetails(eseanergy)">
                                    Ce que j'ai fait &rarr;
                                </Button>
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
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    benevolent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Lien vers le repo !</Button>
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