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
                <a href=""><Github /></a>
                <a href=""><Linkedin /></a>
                <a href=""><Instagram /></a>
                <a href=""><Mail /></a>
            </div>
        </header>
    </>
  );
}