import { Link } from "react-router";
import Header from "../components/Header"
import '../styles/About.css';
import {  } from 'lucide-react'

export default function About() {
    return (
        <>
            <Header />
            <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <div className="a-container">
                <div className="a-card">
                    <h1>Sobre mim</h1>
                    <p></p>
                    <div className="languages">
                        <div className="language">
                            <div className="language-name">
                                <img src="" alt="" />
                                <h2>JavaScript</h2>
                            </div>
                            <p>text area</p>
                        </div>
                        <div className="language">
                            <div className="language-name">
                                <img src="" alt="" />
                                <h2>TypeScript</h2>
                            </div>
                            <p>text area</p>
                        </div>
                        <div className="language">
                            <div className="language-name">
                                <img src="" alt="" />
                                <h2>Python</h2>
                            </div>
                            <p>text-area</p>
                        </div>
                        <div className="language">
                            <div className="language-name">
                                <img src="" alt="" />
                                <h2>Django</h2>
                            </div>
                            <p>text area</p>
                        </div>
                    </div>
                    <div className="github-area">
                        <div className="github-icon">
                            <img src="" alt="" />
                            <h2>GitHub</h2>
                        </div>
                        <Link to=""></Link>
                    </div>
                    <div className="repositories"></div>
                    <div className="graphic-commits"></div>  
                </div>
            </div>
            </div>
        </>
    )
}