import React, { useEffect, useState } from 'react';
import SET_SCENE from './weblibs/sceneParts.jsx';
import LOAD_MODEL from './weblibs/modelLoader.jsx';
import STAGE_ONE from './weblibs/STAGE_1.jsx';
import STAGE_TWO from './weblibs/STAGE_2.jsx';
import STAGE_THREE from './weblibs/STAGE_3.jsx';
import STAGE_FOUR from './weblibs/STAGE_4.jsx';
import STAGE_FIVE from './weblibs/STAGE_5.jsx';
import PARTED_STAGE_ONE from './weblibs/PARTED_STAGE_ONE.jsx';
import '/styles/viewer.css';

function App() {
  // SELECT STAGE
  const [selectedStage, setSelectedStage] = useState('stage1');

  useEffect(() => {
    //SET SCENE ELEMENTS
    const viewer = new SET_SCENE('mapViewer');
    viewer.initialize();
    viewer.animate();

    //LOAD MODELS 
    let modelManager;
    if (selectedStage === 'stage1') 
    {
      modelManager = new STAGE_ONE();
    } 

    else if (selectedStage === 'stage2') 
    {
      modelManager = new STAGE_TWO();
    } 

    else if (selectedStage === 'stage3') 
    {
      modelManager = new STAGE_THREE();
    } 

    else if (selectedStage === 'stage4') 
    {
      modelManager = new STAGE_FOUR();
    }

    else if (selectedStage === 'stage5') 
    {
      modelManager = new STAGE_FIVE();
    }

    else if (selectedStage === 'stage6') 
    {
      modelManager = new PARTED_STAGE_ONE();
    }

    const models = modelManager.loadModels();
    const loader = new LOAD_MODEL();


    //CHANGE NAME
    let stageName = 'ETAP 1';

    if (selectedStage === 'stage1') {
      stageName = 'ETAP 1';
    } else if (selectedStage === 'stage2') {
      stageName = 'GENİŞLEME 1';
    } else if (selectedStage === 'stage3') {
      stageName = 'GENİŞLEME 2';
    } else if (selectedStage === 'stage4') {
      stageName = 'GENİŞLEME 3';
    } else if (selectedStage === 'stage5') {
      stageName = 'GENİŞLEME 4';
    } else if (selectedStage === 'stage6') {
      stageName = '1. ETAP TASLAK PARSELİZASYON PLANI';
    }

    // Sahne adını güncelle
    const stageNameElement = document.getElementById('stageName');
    if (stageNameElement) {
      stageNameElement.textContent = stageName;
    }

    //SHOW STAGES
    models.forEach((modelPath) => {
      loader.loadModel(modelPath, viewer.scene);
    });

    // Add raycast listeners
    const canvas = document.getElementById('mapViewer');
    const cleanupListeners = loader.addRaycastListeners(viewer.scene, viewer.camera, canvas);

    return () => {
      cleanupListeners();
    };
  }, [selectedStage]); 

  // SELECT FROM DROPDOWN
  const handleStageChange = (event) => {
    setSelectedStage(event.target.value);
  };

  return (
    <div>
      {/* SHOW CANVAS */}
      <canvas id="mapViewer" />

      {/* CREATE DROPDOWN */}
      <div>
        <select id="stageChanger" value={selectedStage} onChange={handleStageChange}>
          <option value="stage1">ETAP 1</option>
          <option value="stage2">GENİŞLEME 1 </option>
          <option value="stage3">GENİŞLEME 2</option>
          <option value="stage4">GENİŞLEME 3</option>
          <option value="stage5">GENİŞLEME 4</option>
          <option value="stage6">TASLAK PARSELİZASYON PLANI</option>
        </select>
      </div>

      <div id='logo' style={{ 
        position: 'absolute', 
        width: '10%', 
        height: '10%', 
        top: '2%', 
        left: '5%',
      }}>
        <a href="/index.html">
          <img src='/media/Logo.png' alt='Logo' style={{ 
            position: 'absolute', 
            width: 'auto', 
            height: '10vh' 
          }} />
        </a>
        </div>

        <div id="stageName">ETAP 1</div>
    </div>
  );
}

export default App;


//.....stageViewer 
//     |
//     |
//     |            
//.....STAGE_X 
//     |
//     |
//     |  
//.....modelLoader 
//     |
//     |
//     |  
//.....showDesc 
//     |
//     |
//     |  
//.....colorFunction 
