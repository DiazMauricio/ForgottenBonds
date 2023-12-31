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
                    <Icon />
                    <h2 className="h1 colored">{god}</h2>
                    <p className="subtitle colored">{subtitle}</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque veritatis accusantium voluptatem quaerat ducimus facilis et aperiam! Sint aliquam temporibus fugit quod veniam dicta modi reiciendis maxime consequuntur expedita?</p>
            </GodSectionHeader>
            <GodSectionInfo>
                <div className="texto col-3">
                    <h3 className="h5 colored">Seguidores de {god}</h3>
                    <p className="colored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis tenetur dolorum sequi iste sit est quibusdam! Veniam, voluptates, officia est fuga ratione alias facere dolorem maxime facilis, vero odio reiciendis?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis hic sint voluptatum atque dolorum! Temporibus distinctio saepe ab illo, est id rem et. Optio ipsa iusto ducimus omnis repellendus!</p>
                    <h4 className="h6 colored">Iglesias de {god}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sequi, culpa nesciunt quaerat, sapiente dignissimos, laudantium accusamus impedit deserunt qui ipsum voluptatum est. Commodi, aliquid ducimus. Numquam similique recusandae ex.</p>
                    <h4 className="h6 colored">Convicciones</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore facere, laudantium esse consequatur maxime odit quibusdam ducimus ea. Quisquam esse eius voluptatibus nesciunt eveniet quos odit a animi totam.</p>
                </div>
                <GodSectionVotos>
                    <p><b>Bueno</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Malvado</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Legal</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Caótico</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                </GodSectionVotos>
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
                    <p className="colored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis tenetur dolorum sequi iste sit est quibusdam! Veniam, voluptates, officia est fuga ratione alias facere dolorem maxime facilis, vero odio reiciendis?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis hic sint voluptatum atque dolorum! Temporibus distinctio saepe ab illo, est id rem et. Optio ipsa iusto ducimus omnis repellendus!</p>
                    <h4 className="h6 colored">Iglesias de {god}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sequi, culpa nesciunt quaerat, sapiente dignissimos, laudantium accusamus impedit deserunt qui ipsum voluptatum est. Commodi, aliquid ducimus. Numquam similique recusandae ex.</p>
                    <h4 className="h6 colored">Convicciones</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore facere, laudantium esse consequatur maxime odit quibusdam ducimus ea. Quisquam esse eius voluptatibus nesciunt eveniet quos odit a animi totam.</p>
                </div>
                <GodSectionVotos>
                     <p><b>Bueno</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Malvado</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Legal</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Caótico</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                </GodSectionVotos>
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
                    <p className="colored">Los seguidores de Eko priorizan sus vínculos con otros seres por sobre todo lo demás, ellos dedican su vida a buscar y proteger otros con los cuales sobrevivir.</p>
                    <p>Al centrarse en la sobrevivencia del grupo, ellos desarrollan un fuerte sentido de la justicia ya que creen que orden de mantener la estabilidad de grupo es importante que cada individuo de este sea tratado igual.</p>
                    <h4 className="h6 colored">Iglesias de {god}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sequi, culpa nesciunt quaerat, sapiente dignissimos, laudantium accusamus impedit deserunt qui ipsum voluptatum est. Commodi, aliquid ducimus. Numquam similique recusandae ex.</p>
                    <h4 className="h6 colored">Convicciones</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore facere, laudantium esse consequatur maxime odit quibusdam ducimus ea. Quisquam esse eius voluptatibus nesciunt eveniet quos odit a animi totam.</p>
                </div>
                <GodSectionVotos>
                     <p><b>Bueno</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Malvado</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Legal</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Caótico</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                </GodSectionVotos>
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
                    <p className="colored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis tenetur dolorum sequi iste sit est quibusdam! Veniam, voluptates, officia est fuga ratione alias facere dolorem maxime facilis, vero odio reiciendis?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis hic sint voluptatum atque dolorum! Temporibus distinctio saepe ab illo, est id rem et. Optio ipsa iusto ducimus omnis repellendus!</p>
                    <h4 className="h6 colored">Iglesias de {god}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sequi, culpa nesciunt quaerat, sapiente dignissimos, laudantium accusamus impedit deserunt qui ipsum voluptatum est. Commodi, aliquid ducimus. Numquam similique recusandae ex.</p>
                    <h4 className="h6 colored">Convicciones</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore facere, laudantium esse consequatur maxime odit quibusdam ducimus ea. Quisquam esse eius voluptatibus nesciunt eveniet quos odit a animi totam.</p>
                </div>
                <GodSectionVotos>
                     <p><b>Bueno</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Malvado</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Legal</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Caótico</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                </GodSectionVotos>
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
                    <p className="colored">Los seguidores de Eko priorizan sus vínculos con otros seres por sobre todo lo demás, ellos dedican su vida a buscar y proteger otros con los cuales sobrevivir.</p>
                    <p>Al centrarse en la sobrevivencia del grupo, ellos desarrollan un fuerte sentido de la justicia ya que creen que orden de mantener la estabilidad de grupo es importante que cada individuo de este sea tratado igual.</p>
                    <h4 className="h6 colored">Iglesias de {god}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sequi, culpa nesciunt quaerat, sapiente dignissimos, laudantium accusamus impedit deserunt qui ipsum voluptatum est. Commodi, aliquid ducimus. Numquam similique recusandae ex.</p>
                    <h4 className="h6 colored">Convicciones</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore facere, laudantium esse consequatur maxime odit quibusdam ducimus ea. Quisquam esse eius voluptatibus nesciunt eveniet quos odit a animi totam.</p>
                </div>
                <GodSectionVotos>
                    <p><b>Bueno</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Malvado</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Legal</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                    <p><b>Caótico</b><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores </p>
                </GodSectionVotos>
            </GodSectionInfo>
        </GodSection>
    )
}