import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faUnity } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PHP",
    "Symfony",
    "Python",
    "SQL",
    "MongoSB",
    "Node"
];

const labelsSecond = [
    "Git",
    "Docker",
    "C++",
    "C#",
    "Linux",
    "Python",
    "Qt",
];

const labelsThird = [
    "Unity",
    "Godot",
    "Blender",
    "3DS Max",
    "Substance Painter",
    "Unreal",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Logiciel</h3>
                    <p>Je construis des logiciels basés sur les principes SOLID, en optimisant la qualité du code et de l'architecture, afin de livrer des solutions fiables et facilement extensibles.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech utilisés:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUnity} size="3x"/>
                    <h3>Graphisme</h3>
                    <p>Je crée et donne vie à vos projets sur Unity, Unreal ou Godot, en développant des solutions 3D  en réalité virtuelle (VR) et augmentée (AR), alliant technologie et créativité.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech utilisés:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développement Web</h3>
                    <p>Je construis de nombreuses applications web en utilisant des frameworks comme React ou Symfony. Je crée également des solutions connectées à des bases de données pour optimiser leurs fonctionnalités et leur efficacité.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech utilisés:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;