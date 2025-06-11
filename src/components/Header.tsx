import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import '../styles/Header.css';

export default function Header() {
  return (
    <>
        <header>
            <div className="left">
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Hobbies</a>
                <a href="">Contact</a>
            </div>
            <div className="right">
                <a href="https://www.github.com/ThOMaZMe11o" className="githubIcon" target="_blank"><Github style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href="https://www.linkedin.com/in/thomazfeitosa" className="linkedinIcon" target="_blank"><Linkedin style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href="https://www.instagram.com/thomaz_mellux" className="instaIcon" target="_blank"><Instagram style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href="mailto:thomazmello1912@gmail.com" className="mailIcon" target="_blank"><Mail style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
            </div>
        </header>
    </>
  );
}