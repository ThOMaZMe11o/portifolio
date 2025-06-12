import Header from "../components/Header"
import '../styles/Hobbies.css';

export default function Hobbies() {
    return (
        <>
            <Header />
            <div className="h-container">
                <div className="h-card">
                    <h1>Interesses e hobbies</h1>
                    <p>
                        I have a wide range of hobbies that keep me engaged and inspired. 
                        I love reading, especially science fiction and fantasy novels. 
                        I also enjoy hiking and exploring nature, which helps me to relax and recharge.
                    </p>
                    <p>
                        In addition, I am passionate about photography and often spend my weekends capturing the beauty of the world around me.
                        Cooking is another hobby of mine; I love experimenting with new recipes and sharing meals with friends and family.
                    </p>    
                </div>
            </div>
        </>
    )
}