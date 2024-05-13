import LOAD_MODEL from './modelLoader.jsx';

export default class PARTED_STAGE_ONE {
    constructor() {
      this.models = [
        '/src/model/STG_1_PARTED/STAGE_ONE_PARTED_ACTIVE.fbx',
        '/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx',
        '/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx',
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  