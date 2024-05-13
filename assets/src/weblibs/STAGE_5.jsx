import LOAD_MODEL from './modelLoader.jsx';

export default class STAGE_FIVE {
    constructor() {
      this.models = [
        '/src/model/STAGE_FIVE_FBX/STAGE_FIVE_PASSIVE.fbx',
        '/src/model/STAGE_FIVE_FBX/STAGE_FIVE_ACTIVE.fbx',
        '/src/model/STAGE_FIVE_FBX/STAGE_FIVE_GREEN.fbx',
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  

