import React, { useState } from "react";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

type ProjectList = {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
  contenu: string;
  category: string; // Ajout de la propriété category
};

// Définition des catégories disponibles
const categories = ["Tous", "Web", "Jeux vidéo", "Mobile", "3D"];

function Project() {
    const [selectedProject, setSelectedProject] = useState<ProjectList | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("Tous");

    const projects: ProjectList[] = [
        {
            id: 1,
            title: "Vapeur",
            image: mock10,
            link: "https://www.filmate.club/",
            description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
            contenu:"TEST",
            category: "Web"
        },
        {
            id: 2,
            title: "Symfony",
            image: mock09,
            link: "https://yujisatojr.itch.io/highspeedchase",
            description: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
            contenu:"",
            category: "Web"
        },
        {
            id: 3,
            title: "ForeignGeneer",
            image: mock08,
            link: "https://yujisatojr.itch.io/spacecraft",
            description: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
            contenu:"",
            category: "Jeux vidéo"
        },
        {
            id: 4,
            title: "3D",
            image: mock07,
            link: "https://www.datumlearn.com/",
            description: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
            contenu:"",
            category: "3D"
        },

    ];

    // Filtrer les projets selon la catégorie active
    const filteredProjects = activeFilter === "Tous" 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="projects-container" id="projects">
            <h1>Projets personnels</h1>
            
            {/* Système de filtres amélioré */}
            <div className="filters">
                {categories.map((category) => (
                    <button 
                        key={category}
                        className={activeFilter === category ? 'active' : ''}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category}
                        {/* Afficher le nombre de projets pour chaque catégorie */}
                        <span className="count">
                            ({category === "Tous" 
                                ? projects.length 
                                : projects.filter(p => p.category === category).length
                            })
                        </span>
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className="project" key={project.id} onClick={() => setSelectedProject(project)}>
                        <img src={project.image} className="zoom" alt="thumbnail" width="100%"/>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h2>{project.title}</h2>
                            <p>{project.description.substring(0, 100)}...</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message si aucun projet dans la catégorie */}
            {filteredProjects.length === 0 && (
                <div className="no-projects">
                    <p>De nouveaux projets apparaîtront bientôt dans cette catégorie !</p>
                </div>
            )}

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedProject(null)}>
                            &times;
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image"/>
                        <div className="modal-info">
                            <span className="project-category-modal">{selectedProject.category}</span>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <p>{selectedProject.contenu}</p>
                            <a 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="project-link"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;