import LazyImg from "../../components/LazyImg/LazyImg";
import './PerfilPersonaje.css';

const Personajes = [
    {
        nombre: "Grog “Dedos Chispeantes”",
        clase: "Goblin Artificer",
        src: "https://i.imgur.com/ce0bRUf.png",
        smallSrc: "https://i.imgur.com/NZtEtCT.png",
        texto: "Nacido hace pocos años en el Grey Woods, Grog resaltó de los demás goblins de su tribu por su inteligencia. Debido a un fortuito encuentro con un misterioso viajero terminó llegando a la ciudad de Brumaria, donde consiguió un hogar el taller Greensteel y descubrió una pasión por crear armas y artefactos tecnológicos."
    },
    {
        nombre: "Rough",
        clase: "Warforged Clérigo",
        src: "https://i.imgur.com/okWhArR.png",
        smallSrc: "https://i.imgur.com/ln1tiZB.png",
        texto: "Rough es un autómata único en su tipo, creado por Gustav Greensteel, Rough fue creado para tener una conciencia propia y con el tiempo su creador lo empezó a tratar como su propio hijo. Pese a que fue creado de manera artificial, Rough muestra una sorpresiva afinidad con el dios Deiken pero esta afinidad solo le ha creado más preguntas que respuestas."
    },
    {
        nombre: "Raxter y Daxter Rohj’naal",
        clase: "Elfos Mago / Picaro",
        src: "https://i.imgur.com/oTxOLY0.png",
        smallSrc: "https://i.imgur.com/L7L43BY.png",
        texto: "Los incontrolables gemelos Rohj’naal nacieron en Farwood hace ya 70 años. Hijos del gran comerciante, aventurero y cazador de bestias Ildan Rohj’nar, los gemelos hoy en día buscan hacerse un nombre propio en este mundo y hacer honor al apellido de la familia."
    },
    {
        nombre: "Fenses Aladar",
        clase: "Humano Guerrero",
        src: "https://i.imgur.com/rvGEM1q.png",
        smallSrc: "https://i.imgur.com/dfIPTeB.png",
        texto: "Fenses nació en una humilde zona de Owlgrave, tuvo la oportunidad de unirse a una de las grandes academias magicas de la ciudad pero a diferencia de su hermano, él nunca mostro talento para las artes arcanas, abandono la academia y termino encontrando una vocación en las artes marciales, pero luego de que su hermano desapareciera Fenses se impuso la misión de encontrarlo cueste lo que cueste."
    },
    {
        nombre: "Afein Walkerbolt",
        clase: "Humano Explorador",
        src: "https://i.imgur.com/i865fbL.png",
        smallSrc: "https://i.imgur.com/jkpSF5R.png",
        texto: "Un día hace algunos años atrás, Afein apareció en las costas de Brumaria sin ningún recuerdo de quién era o cómo había llegado ahí. Su única pista era un tatuaje en uno de sus dedos que lo llevó hasta la Orden de los 5 donde lo aceptaron pero no pudieron darle respuestas de su origen."
    },
    {
        nombre: "Kyrian Ravenmar",
        clase: "Humano Guerrero",
        src: "https://i.imgur.com/jYSB9K7.png",
        smallSrc: "https://i.imgur.com/XJiZB4l.png",
        texto: "Kyrian nacio como ciudadano de Brumaria, siendo joven entró a la academia militar y su talento y su dedicación al dios Eko lo llevó ser reclutado por La orden de los 5. Luego de sobrevivir a la traición de un miembro de su brigada, Kyrian carga con la culpa de no poder defender a sus compañeros caídos, y con la ayuda de su nueva brigada busca traer al traidor ante la justicia."
    },
    {
        nombre: "Evandrin Faeth",
        clase: "Humano Bardo",
        src: "https://i.imgur.com/80qwkQu.png",
        smallSrc: "https://i.imgur.com/OiRe5cv.png",
        texto: "Como huérfano en las Islas Carmesi, Evandrin aprendió a buscarse la vida por sí mismo y usar todos los recursos que tenga disponible, esto lo llevó a atraer la atención de Ladrian Winslow quien lo reclutó dentro la Orden de los 5 y lo tomo como su pupilo hasta el dia que este fue asesinado por el traidor de la orden."
    },
    {
        nombre: "Zherakas Bluesharp",
        clase: "Tifling Guerrero",
        src: "https://i.imgur.com/Wq9II0v.png",
        smallSrc: "https://i.imgur.com/Z0glbzr.png",
        texto: "Zherakas nació en las Islas Carmesí, luego de que su padre muriera en una pelea de bar paso estar bajo la tutela de su abuelo, un mercader a punto de retirarse, que tomó buen cuidado de él hasta que desapareció en un trabajo en aguas del imperio de Amaten. A partir de ese momento Zherakas se busco la vida tomando todo trabajo que tenga disponible."
    },
]

const PerfilPersonaje = ({nombre, clase, src, smallSrc, children}) => {
    return ( 
        <>
            <div className="PerfilPersonaje-header">
                <div>
                    <h2 className="h4">{nombre}</h2>
                    <b>{clase}</b>
                </div>
                <LazyImg src={src} smallSrc={smallSrc}/>
            </div>
            {children}
            <div className="PerfilPersonaje-end"/>
        </>
     );
}
 


export const Registros = [
    {
        // Personajes
        registro: () => {
            return(
                <>
                    <h1 className="h2">Personajes</h1>
                    <div className="PerfilPersonaje-end"/>
                    {
                        Personajes.map(({nombre, clase, src, smallSrc, texto}, i )=>{
                            return(
                                <PerfilPersonaje key={i} nombre={nombre} clase={clase} src={src} smallSrc={smallSrc}>
                                    <p>{texto}</p>
                                </PerfilPersonaje>
                            )
                        })
                    }
                </>
            )
        },
        viewBox: {x:1270, y:185,  width: 2170, height: 1089},
        MarkerClass: ""
    },
    {
        // registro 1
        registro: () => {
            return(
                <>
                    <h1 className="h3">1 Robo en Greensteel</h1>
                    <p  className="h6">Brumaria</p>
                    <p>Grog, Rough y Lorsak se despertaron una mañana en el taller de Green Steel descubriendo que el Gustav Greensteel, el jefe del taller, había desaparecido junto con algunas partes principales de Rough. Sin estas partes a Rough solo le quedaba poco mas de un dia de vida. En orden de que Rough pueda seguir viviendo y de que puedan encontrar a Gustav el grupo siguió una pista que los guiaba hacia una taberna en el casco antiguo.</p>
                    <p>Luego de un encuentro con el dueño de la taberna y sus matones descubrieron que el robo había sido perpetuado por miembros de los acechadores del ocaso y estaban por vender las partes de Rough en el puerto a media noche.</p>
                    <p>Desafortunadamente para ellos, la pelea en la taberna llamo la atención de los acechadores quienes intentaron detener al grupo por hacer demasiadas preguntas. Rough y Lorsak fueron capturados y pero Grog pudo escapar y seguirles la pista hasta el puerto donde se iba a llevar a cavo la transacción.</p>
                    <p>Cuando los acechadores estaban por cerrar el trato con unos Aarakocras con ropajes de sabios, el grupo logra escapar del lugar junto con las partes robadas de Rough, evadiendo por poco una explosión causada por el dispositivo que traía uno de los aarakocras.</p>
                    <p>De Gustav no se encontró ninguna pista que revele su paradero.</p>
                </>
            )
        },
        viewBox: {x:1527, y:315,  width: 1207, height: 605},
        MarkerClass: "m1"
    },
    {
        // registro 2
        registro: () => {
            return(
                <>
                    <h1 className="h3">2 La misión</h1>
                    <p  className="h6">Brumaria</p>
                    <p>4 individuos sin ninguna relación entre si, recibieron un dia una carta de una persona de confianza de cada uno citándolos a encontrarse en secreto en Brumaría a media noche bajo la glorieta del distrito comercial. Una vez los 5 individuos se encontraron fueron rodeados por misteriosos bandidos que los estaban esperando. En busca de respuestas, los derrotaron y forzaron a uno de los bandidos llamado “Daga” a llevarlos a su escondite en Princesa Ordorí 213 para hablar con el líder.</p>
                    <p>Antes de poder obtener respuestas del ahora derrotado líder de los bandidos. El grupo se vio rodeado por decenas de miembros del servicio secreto de Brumaría que se llevaron a los bandidos del lugar.</p>
                    <p>El grupo ahora a solas con Visarti, el guardián de los secretos de Brumaría, se les planteo el plan de formar un grupo de héroes que ayuden a firmar el tratado de las fabulas que una todas las ciudades del reino bajo un mismo ejercito que sea capaz de defenderse de una próxima invasión del imperio.</p>
                </>
            )
        },
        viewBox: {x:1527, y:315,  width: 1207, height: 605},
        MarkerClass: "m1"
    },
    {
        // registro 3
        registro: () => {
            return(
                <>
                    <h1 className="h3">3 Contrabando</h1>
                    <p  className="h6">Brumaria</p>
                    <p>Grog y Fenses fueron los únicos que quedaron del grupo de 4, con una misión mas grande de lo que pueden abarcar solos, Tormit (el ex asistente de reino, establecido para ayudar a esta tarea) les brindo con nuevos posibles reclutas y la misión de detener al traficante Raifo Carmín y su misterioso cargamento. Después de capturar a Raifo en las casa de apuestas de “La ballena ebria”, Raifo los lleva por los canales subterráneos de Brumaría donde se encontraba el cargamento y el resto de sus compañeros. Después de abrir el cargamento de Raifo y con un poco de interrogación, los protagonistas descubren que dentro del cargamento se encontraba un constructo imperial esperando ser activado con destino al poblado de Gendric.</p>
                    <p>Grog se roba el núcleo de golem y en un intento de salvar su pellejo Raifo les da información sobre un contacto en los revolucionarios de Easel llamado Willow Zafiro.</p>
                </>
            )
        },
        viewBox: {x:1527, y:315,  width: 1207, height: 605},
        MarkerClass: "m1"
    },
    {
        // registro 4
        registro: () => {
            return(
                <>
                    <h1 className="h3">4 Las Islas Carmesí</h1>
                    <p  className="h6">Islas Carmesí</p>
                    <p>El grupo se encamino hacia las Islas Carmesí abordo de ‘El loro tuerto’ en la búsqueda del sello del viejo ex corsario Astaro Balnafog. Pero su viaje se vio interrumpido por un grupo de salvajes ‘Orocas’, criaturas marinas que suelen asaltar barcos solitarios. El grupo logra eliminar la amenaza pero no sin perdidas. Ya que Duque, el fiel compañero del capitán Tom, desapareció durante el asalto oroca. Se desconoce cual fue su destino.</p>
                    <p>Al llegar a puerto, la atención se dirigió a otro navío en la costa. Anclado no muy lejos de ‘el loro tuerto’ se encontraba un navío militar con el emblema del Imperio de amaten.</p>
                    <p>Luego de recopilar información sobre el navio y hablar con Astaro, con tal de ganarse su favor el grupo se impuso la mision de buscar a Robert Balnafog, el rebelde hijo de Astaro que se encontraba desaparecido.</p>
                </>
            )
        },
        viewBox: {x:1848, y:55,  width: 1207, height: 605},
        MarkerClass: "m2"
    },
    {
        // registro 5
        registro: () => {
            return(
                <>
                    <h1 className="h3">5 Los Mil Cuchillos</h1>
                    <p  className="h6">Islas Carmesí</p>
                    <p>Siguiendo la pista de Rokknar, antiguo amigo de Evandril, el grupo se dirigió a “El Diamante Perdido” famoso burdel que supuestamente hospedaba al hijo del gobernador. Sin saber como entrar en la zona VIP desde el interior el grupo decidió hacerse pasar por un grupo de cocineros ambulantes llamados los mil cuchillos y convencieron al guardia para que los deje entrar. Una vez encontraron a Robert Balnafog, Evandril uso un encantamiento para que se dirija a encontrarse con su padre.</p>
                    <p>Con la misión cumplida antes de lo esperado, el grupo consigue el sello del gobernador.</p>
                </>
            )
        },
        viewBox: {x:1848, y:55,  width: 1207, height: 605},
        MarkerClass: "m2"
    },
    {
        // registro 6
        registro: () => {
            return(
                <>
                    <h1 className="h3">6 Nido Oroca</h1>
                    <p  className="h6">Islas Carmesí</p>
                    <p>El grupo decide quedarse en las islas y para ayudar al gobernador con el problema de los orocas debido a que la mayoría de los guardias de la ciudad se encontraban custodiando el barco del imperio y supervisando los preparativos para el festival de primavera.</p>
                    <p>Un vez en el nido pelean con los orocas eliminando gran parte de estos y liberando un prisionero llamado Mugen Valafar. Mugen les da información sobre el comportamiento anormal de las criaturas y el grupo decide contratarlo como contador para la organización. </p>
                    <p>Al derrotar al rey oroca descubren que portaba una extraña caracola en la cabeza que le proporciona altos niveles de inteligencia y que ese tipo de caracola es autóctona de las costas al norte del imperio de amaten. También recuperan el loro del capitán.</p>
                </>
            )
        },
        viewBox: {x:1848, y:55,  width: 1207, height: 605},
        MarkerClass: "m2"
    },
    {
        // registro 7
        registro: () => {
            return(
                <>
                    <h1 className="h3">7 El Festival de primavera.</h1>
                    <p  className="h6">Islas Carmesí</p>
                    <p>Devuelta en la ciudad el grupo informa al gobernador sobre el lo descubierto y discute que hacer con respecto al Barco del imperio. Cuando se levantan al dia siguiente lo primero que les llama la atención es un tumulto causado por la repentina visita de Astaro al muelle donde se encontraba el barco imperial, mediante provocación del gobernador el emisario del imperio accede a que el navío sea inspeccionado por una persona. El descubrimiento de esta persona parece sorprender al gobernador que por alguna razón decide dejar al imperio en paz.</p>
                    <p>El grupo en busca de respuestas decide preguntar al gobernador con respecto al navío pero este se niega a dar mas información. Astaro, viendo que el grupo estaba decidiendo si infiltrarse en el navío, decide aconsejarlos. “El objetivo es hacer su parte para preparar al reino antes de que se desate la guerra y prevenir que la guerra se desate antes de tiempo. Si van a hacer algo ilegal contra el imperio seria mejor que decidan presentar independientes del reino, pero si hacen esto el reino no les va a poder brindar mucha ayuda”. El grupo, abrumado con que decisión tomar, decide no decidir nada y pasar el resto del dia en el festival. Después de un agitado dia en el festival, en la culmine de las celebraciones y los fuegos artificiales, una gran explosión sacudió el puerto. </p>
                </>
            )
        },
        viewBox: {x:1848, y:55,  width: 1207, height: 605},
        MarkerClass: "m2"
    },
    {
        // registro 8
        registro: () => {
            return(
                <>
                    <h1 className="h3">8 Explosión del Marfil Negro.</h1>
                    <p  className="h6">Islas Carmesí</p>
                    <p>Siguiendo el tumulto el grupo descubre que la explosión ocurrió en “el Marfil Negro” la nave insignia de Astaro y del Escuadrón Balnafog. Consecutivamente uno de los guardias le informa al Gobernador que su hijo Robert, salió en busca de hundir el barco del imperio que había abandonado el puerto horas antes. Para evitar un conflicto mayor, el grupo se ofrece a detener a Robert. Con un ágil ataque en conjunto, el grupo logra detener su navío probablemente ganándose como enemigo al hijo del gobernador.</p>
                    <p>Una vez terminado el grupo se decide a investigar la explosión pero no encuentran nada conclusivo además de que la explosión fue causada por alguna magia o artefacto que desprendió grandes cantidades de magia de evocación. Astaro decide recompensarlos por su servicio prestándoles una de las embarcaciones de Robert para que puedan viajar por la costa del reino. Pero el mas importante suceso que ocurrió ese dia, fue que finalmente el grupo paso a ser nombrado, ese dia marcara en comienzo del grupo conocido como <b>Forgotten Bonds.</b> </p>
                </>
            )
        },
        viewBox: {x:1848, y:55,  width: 1207, height: 605},
        MarkerClass: "m2"
    },
    {
        // registro 9
        registro: () => {
            return(
                <>
                    <h1 className="h3">9 Devuelta en Brumaría</h1>
                    <p  className="h6">Brumaria</p>
                    <p>Devuelta en Brumaría el grupo se dirige a la base para ponerse al dia. Kyrian y su hermano se reúnen y Kyrian lo fuerza a trabajar con ellos en la base. Grog Rough y Zherakas se dirigen al taller Greensteel a a ver si hay alguna información sobre Gustav, sin suerte deciden tomar el riesgo y volver a la base en la niebla de la noche de Brumaría.  En su trayecto son detenidos por miembros de la Abadía del Alba que al ver un goblin, un tiflin y un extraño sujeto en armadura en medio de la noche, se niegan a escuchar razones y deciden arrestarlos. Mientras tanto en la base, Raxter y Daxter reciben un mensaje de su padre diciéndoles que dejen de buscar a Gustav Greensteel y que se mantengan alejados de Farwood por un tiempo, consigan un trabajo y se queden tranquilos. </p>
                    <p>El grupo se resiste al arresto de la abadía, a duras penas logran escapar juntos por una de las galerías internas de las zonas comercial. Pero cuando estaban seguros de ir a la salida se encontraron con un gran muro de ladrillo. Con los pasos de la abadía próximos a sus espaldas, un niño aparece de un rincón del callejón ofreciéndoles una via de escape a cambio de oro. El grupo acepta el trato, el niño los guía por una via de escape y revela ser un miembro de los acechadores del ocaso que tiene una misión que el grupo puede cumplir esta noche si esta dispuesto a tener una relación amistosa con los acechadores.</p>
                    <p>El grupo acepta la misión, rescatar a un miembro de los acechadores que ha sido arrestado por la abadía del alba, elaboran un plan y deciden enviar a Daxter disfrazado a que sea arrestado para que puedan liberar al acechador desde adentro. Raxter por su lado ignora completamente el plan que estuvieron horas decidiendo y decide castear un hechizo en medio del cuartel de la abadía, alertando a los guardias antes de que el grupo este listo. La pelea se desata, Raxter cae al piso, Grog hiere de gravedad al acechador por accidente, Daxter no logra recuperar ningún objeto de valor del almacén. Un teniente de la abadía sale de su entrenamiento y se une al combate. Pero en el medio del caos, Rough y el Teniente cruzan armas, el Teniente al ver que es un seguidor de Deiken decide desafiarlo a un duelo en honor a su dios, y para hacer las cosas mas justas suelta su arma. El combate estuvo ajustado y el teniente, satisfecho con el duelo, decide dejarlos ir del cuartel en honor al potencial de Rough para representar a Deiken.</p>
                </>
            )
        },
        viewBox: {x:1527, y:315,  width: 1207, height: 605},
        MarkerClass: "m3"
    },
    {
        // registro 10
        registro: () => {
            return(
                <>
                    <h1 className="h3">10 El Pacto en el Pantano</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m4"
    },
    {
        // registro 11
        registro: () => {
            return(
                <>
                    <h1 className="h3">11 Speaking Dagger</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m4"
    },
    {
        // registro 12
        registro: () => {
            return(
                <>
                    <h1 className="h3">12 Nelko keko</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m4"
    },
    {
        // registro 13
        registro: () => {
            return(
                <>
                    <h1 className="h3">13 Comerciante</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m4"
    },
    {
        // registro 14
        registro: () => {
            return(
                <>
                    <h1 className="h3">14 Demonio</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m4"
    },
    {
        // registro 15
        registro: () => {
            return(
                <>
                    <h1 className="h3">15 Rescate del mago</h1>
                    <p  className="h6">Paso Pesado</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2074, y:656,  width: 1207, height: 605},
        MarkerClass: "m5"
    },
    {
        // registro 16
        registro: () => {
            return(
                <>
                    <h1 className="h3">16 Llegada a Farkas</h1>
                    <p  className="h6">Farkas</p>
                    <p>Proximamente...</p>
                </>
            )
        },
        viewBox: {x:2434, y:986,  width: 1207, height: 605},
        MarkerClass: "m6"
    },
]
