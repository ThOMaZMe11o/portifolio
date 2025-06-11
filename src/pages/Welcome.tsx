import Header from "../components/Header"
import '../styles/Welcome.css'

export default function Welcome() {
    return (
        <>
            <Header />
            <h1>Olá, eu sou Thomaz.</h1>
            <p>Sou Desenvolvedor Front-end, muito motivado e curioso.</p>
            <div className="buttons">
                <button className="button">Ir para o portifólio</button>
                <button className="button">Ir para o linkedin</button>
            </div>
        </>
    )
}