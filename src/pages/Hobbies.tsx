import { Link } from "react-router";
import Header from "../components/Header"
import '../styles/Hobbies.css';
import { Car, Fish, Plane, Gamepad2, ArrowRightFromLine } from 'lucide-react'

export default function Hobbies() {
    return (
        <>
            <Header />
            <div style={{
    minHeight: 'calc(100vh - 80px)', // ajuste conforme a altura do seu Header
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }}>
                <div className="h-container">
                <div className="h-card">
                    <h1>Interesses e hobbies</h1>
                    <div className="hobbies">
                        <div className="pesca">
                            <div className="icon-container">
                                <Fish className="svg" />
                                <h2>Pescaria</h2>
                            </div>
                            <p>Eu gosto de pescaria porque me ajuda a relaxar e desconectar da correria do dia a dia. Estar perto da água, ouvindo o som da natureza, me traz uma paz que poucas coisas conseguem. Além disso, é sempre um bom momento para refletir ou simplesmente aproveitar o silêncio.</p>
                            <hr />
                            <div className="button-container">
                                <Link to="https://pt.wikipedia.org/wiki/Espadarte" target="_blank">Meu peixe favorito<ArrowRightFromLine style={{marginLeft: '5px'}} /></Link>
                            </div>
                        </div>
                        <div className="viagens">
                            <div className="icon-container">
                                <Plane className="svg" />
                                <h2>Viagens</h2>
                            </div>
                            <p>Eu gosto de viajar porque cada lugar novo me traz uma sensação de descoberta. Conhecer outras culturas, provar comidas diferentes e ver paisagens que nunca imaginei é algo que realmente me inspira. Sempre volto com histórias novas e uma bagagem cheia de experiências.</p>
                            <hr />
                            <div className="button-container">
                                <Link to="https://pt.wikipedia.org/wiki/Pa%C3%ADses_Baixos" target="_blank">Meu país favorito<ArrowRightFromLine style={{marginLeft: '5px'}} /></Link>
                            </div>
                        </div>
                        <div className="games">
                            <div className="icon-container">
                                <Gamepad2 className="svg" />
                                <h2>Games</h2>
                            </div>
                            <p>Eu gosto de games porque eles me divertem e me desafiam ao mesmo tempo. Seja jogando sozinho ou com amigos, sempre encontro alguma forma de me entreter. Gosto tanto dos jogos digitais quanto dos de tabuleiro, principalmente aqueles que exigem estratégia e criatividade.</p>
                            <hr />
                            <div className="button-container">
                                <Link to="https://www.callofduty.com/br/pt" target="_blank">Meu jogo favorito<ArrowRightFromLine style={{marginLeft: '5px'}} /></Link>
                            </div>
                        </div>
                        <div className="carro">
                            <div className="icon-container">
                                <Car className="svg" />
                                <h2>Carros clássicos</h2>
                            </div>
                            <p>Eu gosto de carros clássicos porque eles têm personalidade. Cada modelo carrega uma história, um estilo próprio que não se vê mais nos carros modernos. Adoro aprender sobre eles, ver de perto em eventos e imaginar como era dirigir naquela época.</p>
                            <hr />
                            <div className="button-container">
                                <Link to="https://www.ferrari.com/en-EN/auto/f40" target="_blank">Meu carro favorito<ArrowRightFromLine style={{marginLeft: '5px'}} /></Link>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            </div>
        </>
    )
}