import Header from "../components/Header"
import '../styles/Welcome.css'

export default function Welcome() {
    return (
        <>
            <Header />
            <div className="w-container">
                <h1 className="w-h1">Olá, eu sou Thomaz.</h1>
            <p className="w-p">Sou Desenvolvedor Front-end, muito motivado e curioso.</p>
            <div className="w-buttons">
                <a href="" className="w-a"><button className="buttonPrf">Ir para o portifólio</button></a>
                <a href="https://www.linkedin.com/in/thomazfeitosa" className="w-a" target="_blank"><button className="buttonLkn">Ir para o linkedin</button></a>
            </div>
            </div>
        </>
    )
}