import LOAD_MODEL from './modelLoader.jsx';

export default class STAGE_TWO {
    constructor() {
      this.models = [
        '/src/model/STAGE_TWO_FBX/STAGE_TWO_ACTIVE.fbx',
        '/src/model/STAGE_TWO_FBX/STAGE_TWO_PASSIVE.fbx',
        '/src/model/STAGE_TWO_FBX/STAGE_TWO_GREEN.fbx',
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  