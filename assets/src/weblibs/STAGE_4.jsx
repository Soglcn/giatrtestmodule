import LOAD_MODEL from './modelLoader.jsx';

export default class STAGE_FOUR {
    constructor() {
      this.models = [
        '/src/model/STAGE_FOUR_FBX/STAGE_FOUR_ACTIVE.fbx',
        '/src/model/STAGE_FOUR_FBX/STAGE_FOUR_PASSIVE.fbx',
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  