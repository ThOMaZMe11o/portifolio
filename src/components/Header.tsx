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
                <a href=""><Github style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href=""><Linkedin style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href=""><Instagram style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
                <a href=""><Mail style={{width: '22px', height: '22px', marginLeft: '10px'}} /></a>
            </div>
        </header>
    </>
  );
}