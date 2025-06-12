import Header from "../components/Header"
import '../styles/Hobbies.css';
import { Car, Fish, Plane, Gamepad2 } from 'lucide-react'

export default function Hobbies() {
    return (
        <>
            <Header />
            <div className="h-container">
                <div className="h-card">
                    <h1>Interesses e hobbies</h1>
                    <div className="hobbies">
                        <div className="pesca">
                            <Fish className="svg" />
                            <h2>Pescaria</h2>
                            <p>Adoro pescar, especialmente em lagos tranquilos.</p>
                        </div>
                        <div className="viagens">
                            <Plane className="svg" />
                            <h2>Viagens</h2>
                            <p>Viajar é uma das minhas maiores paixões, sempre em busca de novas aventuras.</p>
                        </div>
                        <div className="games">
                            <Gamepad2 className="svg" />
                            <h2>Games</h2>
                            <p>Sou um grande fã de jogos, tanto digitais quanto de tabuleiro.</p>
                        </div>
                        <div className="carro">
                            <Car className="svg" />
                            <h2>Carros clássicos</h2>
                            <p>Sou apaixonado por carros, especialmente os clássicos.</p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}