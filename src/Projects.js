import React from 'react';
import './Projects.css';
import { NUMBER_SYS_CONVERSION_APP, CSULB_MAP_APP, TIC_TAC_TOE_APP } from './constants';
import ProjectCard from './ProjectCard';
import conversionpic1 from './assets/Images/AppImages/NumberConversionApp/conversion1.png';
import conversionpic2 from './assets/Images/AppImages/NumberConversionApp/conversion2.png';
import conversionpic3 from './assets/Images/AppImages/NumberConversionApp/conversion3.png';
import conversionpic4 from './assets/Images/AppImages/NumberConversionApp/conversion4.png';
import conversionpic5 from './assets/Images/AppImages/NumberConversionApp/conversion5.png';
import conversionpic6 from './assets/Images/AppImages/NumberConversionApp/conversion6.png';

import mappic1 from './assets/Images/AppImages/CsulbMapApp/map1.png';
import mappic2 from './assets/Images/AppImages/CsulbMapApp/map2.png';
import mappic3 from './assets/Images/AppImages/CsulbMapApp/map3.png';
import mappic4 from './assets/Images/AppImages/CsulbMapApp/map4.png'; 
import mappic5 from './assets/Images/AppImages/CsulbMapApp/map5.png';

import ticpic1 from './assets/Images/AppImages/TicTacToeApp/tic1.png';
import ticpic2 from './assets/Images/AppImages/TicTacToeApp/tic2.png';
import ticpic3 from './assets/Images/AppImages/TicTacToeApp/tic3.png';
import ticpic4 from './assets/Images/AppImages/TicTacToeApp/tic4.png'; 
import ticpic5 from './assets/Images/AppImages/TicTacToeApp/tic5.png';

function Projects() {
  const imagesForConversion = [
    conversionpic1,
    conversionpic2,
    conversionpic3,
    conversionpic4,
    conversionpic5,
    conversionpic6,
  ];

  const imagesForMap = [
    mappic1,
    mappic2,
    mappic3,
    mappic4,
    mappic5,
  ];

  const imagesForTic = [
    ticpic1,
    ticpic2,
    ticpic3,
    ticpic4,
    ticpic5,
  ];

  return (
    <div>
      <h1 id="title">Projects</h1>
      <table className="table">
        <ProjectCard className="project-card" images={imagesForConversion} description={NUMBER_SYS_CONVERSION_APP}/>
        <ProjectCard className="project-card" images={imagesForMap} description={CSULB_MAP_APP}/>
        <ProjectCard className="project-card" images={imagesForTic} description={TIC_TAC_TOE_APP}/>
      </table>  
    </div>
  );
}

export default Projects;
