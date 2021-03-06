export default function Creations() {
    return (
        <div>
            <main className='min-h-screen flex-1 p-1'>

                <div className='grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
                    <div className="col-start-2 col-span-2 ">
                        <div className='container max-w-lg border border-gray-400/25 rounded-lg drop-shadow-md'>
                            <div className='p-3'>
                                <h1 className='text-2xl'>
                                    E-Seanergy
                                    <br />
                                </h1>
                                <p className='pt-3'>
                                    Mise en place d&aposune passerelle Zigbee dans le cadre du projet E-Seanergy. E-Seanergy est un
                                    programme de R&D mené sur trois ans avec le laboratoire de recherches IES engineering.
                                    L&apos;objectif est de concevoir et de développer un service global de mesures en milieux marin,
                                    lagunaire et portuaire.
                                </p>
                            </div>
                            <form action='https://www.journaldunet.com/ebusiness/internet-mobile/1499181-emmanuel-mouton-synox/' target="_blank" className='text-center m-3'>
                                <button className='rounded-full p-2 text-sky-600 bg-sky-100 hover:bg-sky-600 hover:text-sky-100'>
                                    Découvrez le projet !
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-start-4 col-span-2 ">
                        <div className='container max-w-lg border border-gray-400/25 rounded-lg'>
                            <div className='p-3'>
                                <h1 className='text-2xl'>
                                    Utilisation de divers protocoles de communication
                                    <br />
                                </h1>
                                <p className='pt-3'>
                                    Mise en place de divers protocoles de communication afin d&apos;y connecter des objets :
                                </p>
                            </div>
                            <ul className='list-inside list-disc text-base ml-3'>
                                <li>MQTT</li>
                                <li>LoRaWAN</li>
                                <li>Sigfox</li>
                                <li>ModBus</li>
                                <li>ZigBee</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-start-2 col-span-2 ">
                        <div className='container max-w-lg  border border-gray-400/25 rounded-lg drop-shadow-md'>
                            <div className='p-3'>
                                <h1 className='text-2xl'>
                                    Intégration d&apos;objets connectés
                                    <br />
                                </h1>
                                <p className='pt-3'>
                                    Intégration de plus d&apos;une centaine d&apos;objets connectés pour divers projets au
                                    moyen d&apos;algorithmes de décodes complexes.
                                    <br />
                                    L&apos;objectif de ce projet est d&apos;intégrer des objets connectés divers pour rendre
                                    leur données intélligible pour le grand public.
                                </p>
                            </div>
                        </div>
                    </div>


                        <div className="col-start-4 col-span-2 ">
                            <div className='container max-w-lg border border-gray-400/25 rounded-lg drop-shadow-md'>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>
                                        Application mobile avec Ionic pour calculer des intérêts cumulés
                                        <br />
                                    </h1>
                                    <p className='pt-3'>
                                        L&apos;objectif de cette application était de me familiariser avec Ionic tout en apprennant à
                                        calculer des intérêts cumulés. Pour cela j&apos;ai appris les diverses technologies :

                                    </p>
                                    <ul className='list-inside list-disc text-base ml-3'>
                                        <li>Ionic</li>
                                        <li>TypeScript</li>
                                        <li>Angular</li>
                                    </ul>
                                </div>
                                <form action='https://github.com/taojoue/CoumpoundIT' target="_blank" className='text-center m-3'>
                                    <button className='rounded-full p-2 text-sky-600 bg-sky-100 hover:bg-sky-600 hover:text-sky-100'>
                                        Lien vers le repo !
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-start-2 col-span-2 ">
                            <div className='container max-w-lg border border-gray-400/25 rounded-lg drop-shadow-md'>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>
                                        Ce site web !
                                        <br />
                                    </h1>
                                    <p className='pt-3'>
                                        Avec ce site web je voulais faire état de mes compétences informatiques et les rendre concrètes.
                                        J&aposai donc décidé de rassembler un maximum de technologies que je maitrise. A ce stade le site est en évolution constante.
                                        En le mettant à jour régulièrement je me perfectionne et j&aposintègre de nouvelles compétences.
                                        Je mets régulièrement à jour la « road map » du projet sur le repo github !
                                    </p>
                                </div>
                                <form action='https://github.com/taojoue/personal-website' target="_blank" className='text-center m-3'>
                                    <button className='rounded-full p-2 text-sky-600 bg-sky-100 hover:bg-sky-600 hover:text-sky-100'>
                                        Lien vers le repo !
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div className="col-start-4 col-span-2 ">
                            <div className='container max-w-lg border border-gray-400/25 rounded-lg drop-shadow-md'>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>
                                        Intégration du LoRa Network Server Chirpstack à ce site
                                        <br />
                                    </h1>
                                    <p className='pt-3'>
                                        L&apos;objectif est de connecter des objets à une gateway et de les visualiser ici.
                                        J&apos;ai compte travaille à la mise en place d&aposun LoRa Network Server et je redirigerais
                                        les trames vers un système de queue afin de ne pas avoir de perte de données.
                                        Je précise toute l&apos;architecture plus en détail via ce lien.
                                    </p>
                                </div>
                                <form action='/data' target="_blank" className='text-center m-3'>
                                    <button className='rounded-full p-2 text-sky-600 bg-sky-100 hover:bg-sky-600 hover:text-sky-100'>
                                        Voir le projet !
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* <div className={styles.card}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Site web conçu dans le cadre d'un projet d'étude
                                    <br />
                                </Typography>
                                <Typography variant="body2" paddingTop="10px">
                                    Ce site web a été conçu dans l'objectif de répondre à un cahier des charges précis. Il est actuellement hébergé sur Heroku.
                                    <br/>
                                    
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href='' target="_blank">Voir le site !</Button>
                            </CardActions>
                        </Card>
                    </div> */}
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