import LOAD_MODEL from './modelLoader.jsx';

export default class STAGE_THREE {
    constructor() {
      this.models = [
        '/src/model/STAGE_THREE_FBX/STAGE_THREE_ACTIVE.fbx',
        '/src/model/STAGE_THREE_FBX/STAGE_THREE_PASSIVE.fbx',
        '/src/model/STAGE_THREE_FBX/STAGE_THREE_GREEN.fbx',
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  