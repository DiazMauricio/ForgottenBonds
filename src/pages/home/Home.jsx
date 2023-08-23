import NavBar from "../../components/navBar/NavBar";
import Logo from "../../components/svg/Logo";
import './Home.css';

const Home = () => {
    return ( 
        <>
        <NavBar pagina={1}/>
        <Header/>
        <Trama/>
        </>
    );
}
 
export default Home;

const Header = () => {
    return ( 
        <div className="header background">
            <div className="grid">
                <div className="conteiner">
                    <Logo version="v2"/>
                    <p className="h6">Escenario de campaña</p>
                    <p>Un reino partido por las cicatrices de una guerra civil al borde de la siguiente guerra, Escenario campaña de rol compatible con 5° edición</p>
                    <button>Explorar Mapa</button>
                    <div className="scrollToSeeMore">
                        <p className="text-small">scroll para ver mas</p>
                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.646484 1.35359L1.35359 0.646484L14 13.2929L26.6465 0.646484L27.3536 1.35359L14 14.7071L0.646484 1.35359Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
     );
}

const Trama = () => {
    return ( 
        <div className="trama grid">
            <h1 className="h2">Trama</h1>
            <div className="text1">
                <p>
                    El Reino de Laiss, es una tierra plagada de diferentes culturas y costumbres, pero si hay algo que todos sus habitantes comparten es su respeto por sus leyendas. Este reino se fundo por héroes y durante su historia siempre fueron las proezas de sus individuos las que lo mantuvieron en pie.
                </p>
                <p>
                    Hoy en dia, el reino se encuentra en una situación peligrosa. Todavía recuperándose de las cicatrices dejadas por 45 años de guerra civil, y con un Rey que tuvo que tomar el trono antes de tener edad para tomar una espada, encuentra la sombra de una nueva amenaza.
                </p>

            </div>
            <div className="img1"/>
            <div className="img2"/>
            <div className="text2">
                <p>
                    El Imperio Amaten, se prepara para agrandar sus fronteras y Laiss es una de sus prioridades. Pero el mismo tratado que puso fin a las guerras civiles previene que el Rey pueda hacer un llamado a la guerra sin el consentimiento de los gobernantes de las ciudades. El actual rey no tiene la influencia suficiente para convencerlos, pero quizá, una nueva fabula heroica sea capaz de unir las ciudades como lo sucedió en antaño. Al menos, antes de que la fuerzas del imperio asomen en las costas del Reino.
                </p>
            </div>
        </div>
    );
}

