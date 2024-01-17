import NavBar from "../../components/navBar/NavBar";
import { BordeAlana, BordeDeiken, BordeEko, BordeRelho, BordeUtena } from "../../components/svg/BordesDeidades";
import { Alana, Deiken, Eko, Relho, Utena } from "../../components/svg/IconosDeidades";
import './Deidades.css'

const Deidades = () => {
    return ( 
        <div className="Deidades">
            <NavBar pagina={4}/>
            <Header/>
            <SeccionAlana/>
            <SeccionDeiken/>
            <SeccionUtena/>
            <SeccionRelho/>
            <SeccionEko/>
        </div> 
    );
}
 
export default Deidades;

const Header = () => {
    return ( 
        <div className="header">
            <div className="grid">
                <h1 className="h1">El Pentoteísmo</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aut optio dolorem repellendus velit repudiandae eaque consectetur molestias delectus ipsum iusto vero, beatae odio sint harum tempore voluptas. Molestias, dolorum.</p>
                <div className="Icons">
                    <Alana />
                    <Deiken />
                    <Utena/>
                    <Relho/>
                    <Eko/>
                </div>
            </div>
        </div>
     );
}
const GodSection = ({god, children}) =>{
    return(
        <section id={god} className="GodSection" style={{"--god-color":`var(--${god}-default)`, backgroundColor: `var(--${god}-darker)`}}>
            {children}
        </section>
    )
}
const GodSectionHeader = ({Icon, god, children, Border, subtitle="a"}) =>{
    return(
        <div className="GodSection-header">
            <Border />
            <Border />
            <div className="GodSection-header-container">
                <div className="god-name fc-1">
                    <Border />
                    <Border />
                    <div className="GodSection-header-name">
                        <Icon />
                        <h2 className="h1 colored">{god}</h2>
                        <p className="subtitle colored">{subtitle}</p>
                    </div>
                </div>
                <div className="credo fc-1">
                    {children}
                </div>
            </div>
        </div>
    )
}
const GodSectionInfo = ({children}) =>{
    return (
        <div className="info grid">
            {children}
        </div>
    )
}
const GodSectionVotos = ({children}) => {
    return(
        <div className="votos">
            {children}
        </div>
    )
}

const SeccionAlana = () =>{
    const god="alana";
    return(
        <GodSection god={god}>
            <GodSectionHeader god={god} Icon={Alana} Border={BordeAlana} subtitle="Libertad • Deseo • expresión">
                <p>inmóvil bajo la entrañas de la montaña. abrumado por el retumbar de mi débil latido.  busco saciar mi sed con las lagrimas que recorren la roca, una gota a la vez. </p>
                <p>¿Quién me puso aquí? ¿Quién me condeno a las profundidades de la caverna? ¿en que momento se decidió lo que soy?  </p>
                <p>lo elegido para el sacrificio para cosas que no creo y no velan por mi. el desamparo y el cordero, soy lo usurpado y lo que pronto va a encontrar la muerte.</p>
                <p>Pero ella aun no me ha reclamado, La montaña se apropio de mi cuerpo, la oscuridad tomo mi ojos, pero mi espíritu, mi espíritu se lo entrego al reino de los sueños y la memoria. y en este acto de rebeldía se me muestra mi verdadero ser. </p>
                <p>Soy mi peor enemigo y mi mayor aliado. soy mi voluntad, mis debilidades y mi dolor. soy las cosas de las que me arrepentimiento y Soy todas las palabras que alguna vez poseí. Soy el viento y la tierra bajo mis pies. soy mi propio destino.</p>
                <p>En mi debilidad decido no arrodillarme ante ti, pues soy mas que mi cuerpo y mi vida, soy lo que cada dia enfrenta la oscuridad que encadena mi voluntad. Soy mas que esta montaña.</p>
                <p>soy lo que va a darte caza, soy lo que creaste y soy todo lo que siempre temiste que fuera. soy mas de lo que puedes quitarme. Mi hoja se forjo golpeando mis barrotes y se afilo cortando mis cadenas.</p>
                <p>mi voluntad no dudara, asesinare lo inmortal, reescribiré lo escrito en piedra y conquistare lo inalcanzable. el muro se ha roto, la torre esta en llamas y el gran oscuro tiembla porque hoy, hoy soy <b>alana</b>.</p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Los seguidores de Alana creen en encontrar la felicidad a través de romper las cadenas que aprisionan tu espíritu sean reales o metafóricas. Creen que en el mundo todos nacen libres y hasta que vendemos nuestra libertad por nuestra seguridad pero es nuestro deber el encontrarla una vez mas y reclamarla para encontrar nuestro verdadero potencial. </p>
                    <p>Puede parecer que los seguidores de Alana solo se preocupan por sus propios deseos, y algunos lo hacen, pero la mayoría de seguidores tienen un fuerte sentido de comunidad, ayudando a personas desamparadas y luchando contra la opresión de sectores de la sociedad. En el mundo ideal de los que siguen Alana, nadie esta por encima de los otro y todos cuentan con las mismas oportunidades para luchar por si mismo.</p>
                    <p>Alana ayuda a aquellos que luchan por su libertad y la de los demás, aquellos que luchan por su sueños y los que inspiran los corazones de la gente que los rodea. En la religión de Alana todos son bienvenidos, no hay reglas ni condiciones, tu único deber es encontrar lo que te hace sentir libre.</p>
                    <p>La fe a Alana se profesa a través del arte, ya sea a través de espectáculos en sus templo o por devotos viajeros que llevan su música y sus obras a donde la gente necesite escucharla. </p>
                    <h4 className="h6 colored">Templos de {god}</h4>
                    <p>Los templos de Alana son los menos constantes de todos los templos, a menudo simulando una amalgama de distintos edificios puestos en un solo, combinando distintos estilos artísticos y materiales que de alguna forma tienen sentido juntos. La mayoría de los templos suelen ser humildes en su interior con suelos de tierra cubierto de alfombras pero con sus paredes y pasillos cubiertos hasta el techo de piezas de arte, telas, vidríales y artesanías. Cualquiera puede tomar o poner cualquier cosa en el templo mientras no lo dañe, y esta norma convierte a los Templos de Alana en un canal de expresión para la comunidad a la que sirve. </p>
                    <p>Cada Templo cuenta con escenario donde un sacerdote cumple el rol de director y tiene su propio acto en que participan los demás miembros del templo y voluntarios de la comunidad. Los miembros del templo colaboran para evitar robos y violencia dentro del templo, a menudo dando dinero y trabajo a quien lo necesite.</p>
                </div>
                <div className="texto col-3">
                    <h4 className="h6 colored">Convicciones</h4>
                    <h4 className="h6">Expresión y Libertad</h4>
                    <p>Para Alana la libertad de vivir es lo mas importante, como seguidor deberás buscar aquellas cosas que te retienen de ser tu mismo y combatirlas. Tu voz fue hecha para ser escuchada, tus manos se hicieron para crear, tu expresión es la la huella que dejas en mundo, es testimonio de tu vida y tus creencias, y uno no puede aprender crecer si antes no construye un reflejo de si mismo.</p>
                    <GodSectionVotos>
                        <p><b>Bueno</b><br/>Mi enemigo es la opresión y luchare pues soy mas de lo que pueden quitarme, mi libertad esta en el bienestar de los que comparten su mundo con los demás. </p>
                        <p><b>Legal</b><br/>Ninguna voz debe ser forzada a silenciarse, Ninguna alma debe ser encerrada. Defenderé la libertad hasta del que no la merezca. </p>
                        <p><b>Caótico</b><br/>Nadie pondrá cadenas sobre mi ni decidirá mi destino, en mi rebeldía se me mostrara mi verdadero ser, en mi debilidad no me arrodillare ante nadie. </p>
                        <p><b>Malvado</b><br/>El mundo fue hecho para que persiga mis deseos, en mi libertad conquistare lo inalcanzable y ninguna palabra tendrá poder sobre mi. </p>
                    </GodSectionVotos>
                </div>
            </GodSectionInfo>
        </GodSection>
    )
}
const SeccionDeiken = () =>{
    const god="deiken";
    return(
        <GodSection god={god}>
            <GodSectionHeader god={god} Icon={Deiken} Border={BordeDeiken} subtitle="Fuerza • Desafio • Progreso">
                <p>En el tiempo precedente a la luz y la memoria. Una mirada se alzo por encima del resto, hambrienta con la idea de escapar del abismo eterno.</p>
                <p>Cuando la sangre se mesclo con la roca, cuando no hubo valle en el que descansar, cuando los propósitos flaqueaban, <b>Deiken</b> escalo.</p>
                <p>Cuando el abismo reclamaba su nombre, cuando el enemigo reclamaba su carne, cuando la oscuridad reclamaba su esperanza, <b>Deiken</b> escalo.</p>
                <p>Su cuerpo se adaptaba, su espíritu se endurecía, su dolor se aminoraba, inquebrantable, incorruptible, imparable <b>Deiken</b> escalo.</p>
                <p>Cuando la puerta demando una cabeza Daiken trajo cien, cuando los sabios manifestaron un atajo él abrió su propio camino, cuando el gran oscuro lo desafío a un duelo, <b>Deiken</b> combatió con una mano en su espalda.</p>
                <p>Pero cuando el héroe venció al gran villano, se abrió la puerta a la expectativa y la arrogancia. Su viaje no estaba terminado pero <b>Deiken</b> había olvidado como escalar y cayo una vez mas en las profundidades del abismo.</p>
                <p>Tendido bajo las ruinas de su ego, <b>Deiken</b> espero a la muerte por 7 días y 7 noches, pero su cuerpo curtido bajo mil tormentos era aun demasiado pesado. Sus heridas sanaban, su corazón latía, su visión se aclaraba.</p>
                <p>El octavo dia fue el dia que <b>Deiken</b> alzo su mirada una vez mas, pero esta vez, el abismo había cambiado, un sendero iluminaba las paredes de abismo, un sendero marcado por su paso y labrado por los que siguen. </p>
                <p>Recorrió su sendero, no para llegar a la cima, no para huir y no por gloria, si no para encontrarse a si mismo. Pensó en lo que había perdido y decidió que no había perdido nada, <b>Deiken</b> ascendió.</p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Los seguidores de Alana creen en encontrar la felicidad a través de romper las cadenas que aprisionan tu espíritu sean reales o metafóricas. Creen que en el mundo todos nacen libres y hasta que vendemos nuestra libertad por nuestra seguridad pero es nuestro deber el encontrarla una vez mas y reclamarla para encontrar nuestro verdadero potencial. </p>
                    <p>Puede parecer que los seguidores de Alana solo se preocupan por sus propios deseos, y algunos lo hacen, pero la mayoría de seguidores tienen un fuerte sentido de comunidad, ayudando a personas desamparadas y luchando contra la opresión de sectores de la sociedad. En el mundo ideal de los que siguen Alana, nadie esta por encima de los otro y todos cuentan con las mismas oportunidades para luchar por si mismo.</p>
                    <p>Alana ayuda a aquellos que luchan por su libertad y la de los demás, aquellos que luchan por su sueños y los que inspiran los corazones de la gente que los rodea. En la religión de Alana todos son bienvenidos, no hay reglas ni condiciones, tu único deber es encontrar lo que te hace sentir libre.</p>
                    <p>La fe a Alana se profesa a través del arte, ya sea a través de espectáculos en sus templo o por devotos viajeros que llevan su música y sus obras a donde la gente necesite escucharla. </p>
                    <h4 className="h6 colored">Templos de {god}</h4>
                    <p>Los templos de Alana son los menos constantes de todos los templos, a menudo simulando una amalgama de distintos edificios puestos en un solo, combinando distintos estilos artísticos y materiales que de alguna forma tienen sentido juntos. La mayoría de los templos suelen ser humildes en su interior con suelos de tierra cubierto de alfombras pero con sus paredes y pasillos cubiertos hasta el techo de piezas de arte, telas, vidríales y artesanías. Cualquiera puede tomar o poner cualquier cosa en el templo mientras no lo dañe, y esta norma convierte a los Templos de Alana en un canal de expresión para la comunidad a la que sirve. </p>
                    <p>Cada Templo cuenta con escenario donde un sacerdote cumple el rol de director y tiene su propio acto en que participan los demás miembros del templo y voluntarios de la comunidad. Los miembros del templo colaboran para evitar robos y violencia dentro del templo, a menudo dando dinero y trabajo a quien lo necesite.</p>
                </div>
                <div className="texto col-3">
                    <h4 className="h6 colored">Convicciones</h4>
                    <h4 className="h6">Expresión y Libertad</h4>
                    <p>Para Alana la libertad de vivir es lo mas importante, como seguidor deberás buscar aquellas cosas que te retienen de ser tu mismo y combatirlas. Tu voz fue hecha para ser escuchada, tus manos se hicieron para crear, tu expresión es la la huella que dejas en mundo, es testimonio de tu vida y tus creencias, y uno no puede aprender crecer si antes no construye un reflejo de si mismo.</p>
                    <GodSectionVotos>
                        <p><b>Bueno</b><br/>Mi enemigo es la opresión y luchare pues soy mas de lo que pueden quitarme, mi libertad esta en el bienestar de los que comparten su mundo con los demás. </p>
                        <p><b>Legal</b><br/>Ninguna voz debe ser forzada a silenciarse, Ninguna alma debe ser encerrada. Defenderé la libertad hasta del que no la merezca. </p>
                        <p><b>Caótico</b><br/>Nadie pondrá cadenas sobre mi ni decidirá mi destino, en mi rebeldía se me mostrara mi verdadero ser, en mi debilidad no me arrodillare ante nadie. </p>
                        <p><b>Malvado</b><br/>El mundo fue hecho para que persiga mis deseos, en mi libertad conquistare lo inalcanzable y ninguna palabra tendrá poder sobre mi. </p>
                    </GodSectionVotos>
                </div>
            </GodSectionInfo>
        </GodSection>
    )
}
const SeccionUtena = () =>{
    const god="utena";
    return(
        <GodSection god={god}>
            <GodSectionHeader god={god} Icon={Utena} Border={BordeUtena} subtitle="Luz • saber • secreto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque veritatis accusantium voluptatem quaerat ducimus facilis et aperiam! Sint aliquam temporibus fugit quod veniam dicta modi reiciendis maxime consequuntur expedita?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque veritatis accusantium voluptatem quaerat ducimus facilis et aperiam! Sint aliquam temporibus fugit quod veniam dicta modi reiciendis maxime consequuntur expedita?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque veritatis accusantium voluptatem quaerat ducimus facilis et aperiam! Sint aliquam temporibus fugit quod veniam dicta modi reiciendis maxime consequuntur expedita?</p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Los seguidores de Alana creen en encontrar la felicidad a través de romper las cadenas que aprisionan tu espíritu sean reales o metafóricas. Creen que en el mundo todos nacen libres y hasta que vendemos nuestra libertad por nuestra seguridad pero es nuestro deber el encontrarla una vez mas y reclamarla para encontrar nuestro verdadero potencial. </p>
                    <p>Puede parecer que los seguidores de Alana solo se preocupan por sus propios deseos, y algunos lo hacen, pero la mayoría de seguidores tienen un fuerte sentido de comunidad, ayudando a personas desamparadas y luchando contra la opresión de sectores de la sociedad. En el mundo ideal de los que siguen Alana, nadie esta por encima de los otro y todos cuentan con las mismas oportunidades para luchar por si mismo.</p>
                    <p>Alana ayuda a aquellos que luchan por su libertad y la de los demás, aquellos que luchan por su sueños y los que inspiran los corazones de la gente que los rodea. En la religión de Alana todos son bienvenidos, no hay reglas ni condiciones, tu único deber es encontrar lo que te hace sentir libre.</p>
                    <p>La fe a Alana se profesa a través del arte, ya sea a través de espectáculos en sus templo o por devotos viajeros que llevan su música y sus obras a donde la gente necesite escucharla. </p>
                    <h4 className="h6 colored">Templos de {god}</h4>
                    <p>Los templos de Alana son los menos constantes de todos los templos, a menudo simulando una amalgama de distintos edificios puestos en un solo, combinando distintos estilos artísticos y materiales que de alguna forma tienen sentido juntos. La mayoría de los templos suelen ser humildes en su interior con suelos de tierra cubierto de alfombras pero con sus paredes y pasillos cubiertos hasta el techo de piezas de arte, telas, vidríales y artesanías. Cualquiera puede tomar o poner cualquier cosa en el templo mientras no lo dañe, y esta norma convierte a los Templos de Alana en un canal de expresión para la comunidad a la que sirve. </p>
                    <p>Cada Templo cuenta con escenario donde un sacerdote cumple el rol de director y tiene su propio acto en que participan los demás miembros del templo y voluntarios de la comunidad. Los miembros del templo colaboran para evitar robos y violencia dentro del templo, a menudo dando dinero y trabajo a quien lo necesite.</p>
                </div>
                <div className="texto col-3">
                    <h4 className="h6 colored">Convicciones</h4>
                    <h4 className="h6">Expresión y Libertad</h4>
                    <p>Para Alana la libertad de vivir es lo mas importante, como seguidor deberás buscar aquellas cosas que te retienen de ser tu mismo y combatirlas. Tu voz fue hecha para ser escuchada, tus manos se hicieron para crear, tu expresión es la la huella que dejas en mundo, es testimonio de tu vida y tus creencias, y uno no puede aprender crecer si antes no construye un reflejo de si mismo.</p>
                    <GodSectionVotos>
                        <p><b>Bueno</b><br/>Mi enemigo es la opresión y luchare pues soy mas de lo que pueden quitarme, mi libertad esta en el bienestar de los que comparten su mundo con los demás. </p>
                        <p><b>Legal</b><br/>Ninguna voz debe ser forzada a silenciarse, Ninguna alma debe ser encerrada. Defenderé la libertad hasta del que no la merezca. </p>
                        <p><b>Caótico</b><br/>Nadie pondrá cadenas sobre mi ni decidirá mi destino, en mi rebeldía se me mostrara mi verdadero ser, en mi debilidad no me arrodillare ante nadie. </p>
                        <p><b>Malvado</b><br/>El mundo fue hecho para que persiga mis deseos, en mi libertad conquistare lo inalcanzable y ninguna palabra tendrá poder sobre mi. </p>
                    </GodSectionVotos>
                </div>
            </GodSectionInfo>
        </GodSection>
    )
}
const SeccionRelho = () =>{
    const god="relho";
    return(
        <GodSection god={god}>
            <GodSectionHeader god={god} Icon={Relho} Border={BordeRelho} subtitle="Muerte • ciclo • sombra">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque veritatis accusantium voluptatem quaerat ducimus facilis et aperiam! Sint aliquam temporibus fugit quod veniam dicta modi reiciendis maxime consequuntur expedita?</p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Los seguidores de Alana creen en encontrar la felicidad a través de romper las cadenas que aprisionan tu espíritu sean reales o metafóricas. Creen que en el mundo todos nacen libres y hasta que vendemos nuestra libertad por nuestra seguridad pero es nuestro deber el encontrarla una vez mas y reclamarla para encontrar nuestro verdadero potencial. </p>
                    <p>Puede parecer que los seguidores de Alana solo se preocupan por sus propios deseos, y algunos lo hacen, pero la mayoría de seguidores tienen un fuerte sentido de comunidad, ayudando a personas desamparadas y luchando contra la opresión de sectores de la sociedad. En el mundo ideal de los que siguen Alana, nadie esta por encima de los otro y todos cuentan con las mismas oportunidades para luchar por si mismo.</p>
                    <p>Alana ayuda a aquellos que luchan por su libertad y la de los demás, aquellos que luchan por su sueños y los que inspiran los corazones de la gente que los rodea. En la religión de Alana todos son bienvenidos, no hay reglas ni condiciones, tu único deber es encontrar lo que te hace sentir libre.</p>
                    <p>La fe a Alana se profesa a través del arte, ya sea a través de espectáculos en sus templo o por devotos viajeros que llevan su música y sus obras a donde la gente necesite escucharla. </p>
                    <h4 className="h6 colored">Templos de {god}</h4>
                    <p>Los templos de Alana son los menos constantes de todos los templos, a menudo simulando una amalgama de distintos edificios puestos en un solo, combinando distintos estilos artísticos y materiales que de alguna forma tienen sentido juntos. La mayoría de los templos suelen ser humildes en su interior con suelos de tierra cubierto de alfombras pero con sus paredes y pasillos cubiertos hasta el techo de piezas de arte, telas, vidríales y artesanías. Cualquiera puede tomar o poner cualquier cosa en el templo mientras no lo dañe, y esta norma convierte a los Templos de Alana en un canal de expresión para la comunidad a la que sirve. </p>
                    <p>Cada Templo cuenta con escenario donde un sacerdote cumple el rol de director y tiene su propio acto en que participan los demás miembros del templo y voluntarios de la comunidad. Los miembros del templo colaboran para evitar robos y violencia dentro del templo, a menudo dando dinero y trabajo a quien lo necesite.</p>
                </div>
                <div className="texto col-3">
                    <h4 className="h6 colored">Convicciones</h4>
                    <h4 className="h6">Expresión y Libertad</h4>
                    <p>Para Alana la libertad de vivir es lo mas importante, como seguidor deberás buscar aquellas cosas que te retienen de ser tu mismo y combatirlas. Tu voz fue hecha para ser escuchada, tus manos se hicieron para crear, tu expresión es la la huella que dejas en mundo, es testimonio de tu vida y tus creencias, y uno no puede aprender crecer si antes no construye un reflejo de si mismo.</p>
                    <GodSectionVotos>
                        <p><b>Bueno</b><br/>Mi enemigo es la opresión y luchare pues soy mas de lo que pueden quitarme, mi libertad esta en el bienestar de los que comparten su mundo con los demás. </p>
                        <p><b>Legal</b><br/>Ninguna voz debe ser forzada a silenciarse, Ninguna alma debe ser encerrada. Defenderé la libertad hasta del que no la merezca. </p>
                        <p><b>Caótico</b><br/>Nadie pondrá cadenas sobre mi ni decidirá mi destino, en mi rebeldía se me mostrara mi verdadero ser, en mi debilidad no me arrodillare ante nadie. </p>
                        <p><b>Malvado</b><br/>El mundo fue hecho para que persiga mis deseos, en mi libertad conquistare lo inalcanzable y ninguna palabra tendrá poder sobre mi. </p>
                    </GodSectionVotos>
                </div>
            </GodSectionInfo>
        </GodSection>
    )
}
const SeccionEko = () =>{
    const god="eko";
    return(
        <GodSection god={god}>
            <GodSectionHeader god={god} Icon={Eko} Border={BordeEko} subtitle="Unidad • Justicia • Venganza">
                <p>Profana oscuridad que desdicha a sus habitantes a la soledad, maldice la avaricia con la que fuiste concebida, en tus insaciables fauces quien sueña con luz ha aparecido.</p>
                <p>En nuestra agonía nos encontró, se sentó a nuestro lado y tomó lo peor de nosotros, nuestro dolor, nuestro odio y nuestros miedos. Tomo nuestra carga, la abrazo y la hizo suya.</p>
                <p>vivió creyendo en luz, lo tachamos de necio, lo tachamos de sabio y de insurrecto, pero nunca de embustero, pos su fe era clara sobre todos los que lo atestiguamos.</p>
                <p>caminamos en desiertos de obsidiana, caminamos contra los vientos de ceniza, caminamos por la calidez de su dolor, uno a uno los desamparados lo seguimos,  en el inicio éramos pocos en el final éramos legión.</p>
                <p>El gran oscuro en su recelo, nos hizo Pelear por su amor para que solo recibiéramos su pena, Cuando su luz suprimió las sombras de nuestra visión, empezamos a ver los rostros en los lechos de cadáveres a nuestros pies, no nos permitió voltear la mirada.</p>
                <p>Una vez más tomó nuestra carga, una vez más caminamos, una vez más como Hermanos bajo una única luz, marchamos como sus lanzas y escudos, marchamos contra el gran oscuro. marchamos aunque el camino era ciego, marchamos porque éramos uno.</p>
                <p>Abandonó el hambre en la escasez, abandonó las heridas en el flagelo, abandonó el ego para poder apiadarse, y en el final, abandonó su vida para nuestra victoria. </p>
                <p>En la victoria su luz no se había extinguido, pos con su lecho en la memoria, con su calor en nuestro espíritu, con su visión en nuestra esperanza. hoy todos somos <b>EKO</b></p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Los seguidores de Alana creen en encontrar la felicidad a través de romper las cadenas que aprisionan tu espíritu sean reales o metafóricas. Creen que en el mundo todos nacen libres y hasta que vendemos nuestra libertad por nuestra seguridad pero es nuestro deber el encontrarla una vez mas y reclamarla para encontrar nuestro verdadero potencial. </p>
                    <p>Puede parecer que los seguidores de Alana solo se preocupan por sus propios deseos, y algunos lo hacen, pero la mayoría de seguidores tienen un fuerte sentido de comunidad, ayudando a personas desamparadas y luchando contra la opresión de sectores de la sociedad. En el mundo ideal de los que siguen Alana, nadie esta por encima de los otro y todos cuentan con las mismas oportunidades para luchar por si mismo.</p>
                    <p>Alana ayuda a aquellos que luchan por su libertad y la de los demás, aquellos que luchan por su sueños y los que inspiran los corazones de la gente que los rodea. En la religión de Alana todos son bienvenidos, no hay reglas ni condiciones, tu único deber es encontrar lo que te hace sentir libre.</p>
                    <p>La fe a Alana se profesa a través del arte, ya sea a través de espectáculos en sus templo o por devotos viajeros que llevan su música y sus obras a donde la gente necesite escucharla. </p>
                    <h4 className="h6 colored">Templos de {god}</h4>
                    <p>Los templos de Alana son los menos constantes de todos los templos, a menudo simulando una amalgama de distintos edificios puestos en un solo, combinando distintos estilos artísticos y materiales que de alguna forma tienen sentido juntos. La mayoría de los templos suelen ser humildes en su interior con suelos de tierra cubierto de alfombras pero con sus paredes y pasillos cubiertos hasta el techo de piezas de arte, telas, vidríales y artesanías. Cualquiera puede tomar o poner cualquier cosa en el templo mientras no lo dañe, y esta norma convierte a los Templos de Alana en un canal de expresión para la comunidad a la que sirve. </p>
                    <p>Cada Templo cuenta con escenario donde un sacerdote cumple el rol de director y tiene su propio acto en que participan los demás miembros del templo y voluntarios de la comunidad. Los miembros del templo colaboran para evitar robos y violencia dentro del templo, a menudo dando dinero y trabajo a quien lo necesite.</p>
                </div>
                <div className="texto col-3">
                    <h4 className="h6 colored">Convicciones</h4>
                    <h4 className="h6">Expresión y Libertad</h4>
                    <p>Para Alana la libertad de vivir es lo mas importante, como seguidor deberás buscar aquellas cosas que te retienen de ser tu mismo y combatirlas. Tu voz fue hecha para ser escuchada, tus manos se hicieron para crear, tu expresión es la la huella que dejas en mundo, es testimonio de tu vida y tus creencias, y uno no puede aprender crecer si antes no construye un reflejo de si mismo.</p>
                    <GodSectionVotos>
                        <p><b>Bueno</b><br/>Mi enemigo es la opresión y luchare pues soy mas de lo que pueden quitarme, mi libertad esta en el bienestar de los que comparten su mundo con los demás. </p>
                        <p><b>Legal</b><br/>Ninguna voz debe ser forzada a silenciarse, Ninguna alma debe ser encerrada. Defenderé la libertad hasta del que no la merezca. </p>
                        <p><b>Caótico</b><br/>Nadie pondrá cadenas sobre mi ni decidirá mi destino, en mi rebeldía se me mostrara mi verdadero ser, en mi debilidad no me arrodillare ante nadie. </p>
                        <p><b>Malvado</b><br/>El mundo fue hecho para que persiga mis deseos, en mi libertad conquistare lo inalcanzable y ninguna palabra tendrá poder sobre mi. </p>
                    </GodSectionVotos>
                </div>
            </GodSectionInfo>
        </GodSection>
    )
}