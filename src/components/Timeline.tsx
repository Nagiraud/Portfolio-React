import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Parcours</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mars 2025 - Mai 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur logiciel (Stage)</h3>
            <h4 className="vertical-timeline-element-subtitle">Neskar, Le Puy-en-Velay, France</h4>
            <p>
              Création d'un outil de control de projet pour un ERP de gestion d'entreprise
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">BUT Informatique</h3>
            <h4 className="vertical-timeline-element-subtitle">Le Puy-en-Velay (43)</h4>
            <p>
              Développement Web, Logiciel, Graphisme, 3D
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Lycée Notre Dame du Château</h3>
            <h4 className="vertical-timeline-element-subtitle">Monistrol-sur-Loire (43)</h4>
            <p>
              Baccalauréat général
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;