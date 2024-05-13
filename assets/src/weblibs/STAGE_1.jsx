import LOAD_MODEL from './modelLoader.jsx';

export default class STAGE_ONE {
    constructor() {
      this.models = [
        //ETAP_MODELLERİ
        '/src/model/STAGE_ONE_FBX/STAGE_ONE_ACTIVE.fbx',
        '/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx',
        '/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx',

        //CEVRE_MODELLERİ
        '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx',
        //'/src/model/OTHER_MODELS_FBX/GIA_SIGN.fbx',
      ];
      this.modelLoader = new LOAD_MODEL();
    }
  
    loadModels(scene) {
      return this.models; 
    }
  }
  

