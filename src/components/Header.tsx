import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import '../styles/Header.css';
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <>
        <header>
            <div className="left">
                <Link to="/" style={{ width: '50px', height: '21px' }} ><ArrowLeft /></Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About me</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="right">
                <Link to="https://www.github.com/ThOMaZMe11o" className="githubIcon" target="_blank"><Github style={{width: '22px', height: '22px', marginLeft: '10px'}} /></Link>
                <Link to="https://www.linkedin.com/in/thomazfeitosa" className="linkedinIcon" target="_blank"><Linkedin style={{width: '22px', height: '22px', marginLeft: '10px'}} /></Link>
                <Link to="https://www.instagram.com/thomaz_mellux" className="instaIcon" target="_blank"><Instagram style={{width: '22px', height: '22px', marginLeft: '10px'}} /></Link>
                <Link to="mailto:thomazmello1912@gmail.com" className="mailIcon" target="_blank"><Mail style={{width: '22px', height: '22px', marginLeft: '10px'}} /></Link>
            </div>
        </header>
    </>
  );
}