export const assignColor = (childMesh) => {
    
    if (childMesh.isMesh) {const meshName = childMesh.name;       



        
        const commercialArray = [ 
                                  "E1P028AO",
                                  "E3P010AO",
                                  "E3P012AO",
                                  "E3P013AO",
                                  "E3P018AO",
                                  "E3P022AO",
                                  "G-1028",
                                  "E3P007AO",
                                ]   

        
        const industryArray = [
                                //ETAP_1 (0-10 ARASI)
                                "E1P001AO", 
                                "E1P002AO", 
                                "E1P003AO", 
                                "E1P004AO", 
                                "E1P005AO", 
                                "E1P006AO", 
                                "E1P007AO", 
                                "E1P008AO", 
                                "E1P009AO", 
                                "E1P010AO", 
                                //ETAP_1 (11-20 ARASI)
                                "E1P011AO", 
                                "E1P012AO", 
                                "E1P013AO", 
                                "E1P014AO", 
                                "E1P015AO", 
                                "E1P016AO", 
                                "E1P017AO", 
                                "E1P018AO", 
                                "E1P019AO", 
                                "E1P020AO", 
                                //ETAP_1 (21-30 ARASI)
                                "E1P021AO", 
                                "E1P022AO", 
                                "E1P023AO", 
                                "E1P024AO", 
                                "E1P025AO", 
                                "E1P026AO",  
                                "E1P029AO", 
                                //ETAP_1 (31-40 ARASI)
                                "E1P031AO", 
                                "E1P032AO", 
                                "E1P033AO", 
                                "E1P034AO", 
                                "E1P035AO", 
                                "E1P036AO", 
                                "E1P037AO", 
                                "E1P038AO", 
                                "E1P039AO", 
                                "E1P040AO", 
                                //ETAP_1 (40-49 ARASI)
                                "E1P041AO", 
                                "E1P042AO", 
                                "E1P043AO", 
                                "E1P044AO", 
                                "E1P045AO", 
                                "E1P046AO", 
                                "E1P047AO", 
                                "E1P048AO", 
                                "E1P049AO",

                                //ETAP_2 (0-10 ARASI)
                                "E2P001AO",
                                "E2P002AO",
                                "E2P003AO",
                                "E2P004AO",
                                "E2P005AO",
                                "E2P006AO",
                                "E2P007AO",
                                "E2P008AO",
                                "E2P009AO",
                                "E2P010AO",
                                //ETAP_2 (11-20 ARASI)
                                "E2P011AO",
                                "E2P012AO",
                                "E2P013AO",
                                "E2P014AO",
                                "E2P015AO",
                                "E2P016AO",
                                "E2P001AO",
                                "E2P017AO",
                                "E2P018AO",
                                "E2P019AO",
                                "E2P020AO",
                                //ETAP_2 (21-30 ARASI)
                                "E2P021AO",
                                "E2P022AO",
                                "E2P023AO",
                                "E2P024AO",
                                "E2P025AO",
                                "E2P026AO",
                                "E2P027AO",
                                "E2P028AO",
                                "E2P029AO",
                                "E2P030AO",
                                "E2P031AO",
                                "E2P032AO",
                                "E2P033AO",

                                //ETAP_3 (KARMA)
                                "E3P001AO",
                                "E3P002AO",
                                "E3P003AO",
                                "E3P004AO",
                                "E3P005AO",
                                "E3P001AOE",
                                "E3P002AOE",
                                "E3P008AO",
                                "E3P009AO",
                                "E3P011AO",
                                "E3P014AO",
                                "E3P015AO",
                                "E3P016AO",
                                "E3P017AO",
                                "E3P020AO",
                                "E3P021AO",
                                "E3P023AO",
                                "E3P024AO",
                                "E3P025AO",
                                "E3P026AO",
                                "E3P027AO",
                                "E3P028AO",
                                "E3P029AO",
                                "E3P030AO",
                                "E3P031AO",
                                "E3P032AO",
                                "E3P033AO",
                                "E3P034AO",
                                "E3P035AO",

                                //ETAP_4
                                "E4P001AO",
                                "E4P002AO",
                                "E4P003AO",
                                "E4P004AO",
                                "E4P005AO",

                                //ETAP 5
                                "E5P001AO",



                                //ETAP_1_PARSELİZASYON
                                "G-1001-1",
                                "G-1001-2",
                                "G-1001-3",
                                "G-1001-4",
                                "G-1001-5_",
                                "G-1002-1",
                                "G-1002-2",
                                "G-1002-3",
                                "G-1002-4",
                                "G-1002-5",
                                "G-1002-6",
                                "G-1002-7",
                                "G-1003-1",
                                "G-1003-2",
                                "G-1003-3",
                                "G-1003-4",
                                "G-1004-1",
                                "G-1004-2",
                                "G-1004-3",
                                "G-1004-4",
                                "G-1004-5",
                                "G-1005-1",
                                "G-1005-2",
                                "G-1005-3",
                                "G-1005-4",
                                "G-1005-5",
                                "G-1005-6",
                                "G-1006-1",
                                "G-1006-2",
                                "G-1006-3",
                                "G-1007-1",
                                "G-1007-2",
                                "G-1008-1",
                                "G-1008-2",
                                "G-1009-1",
                                "G-1009-2",
                                "G-1009-3",
                                "G-1009-4",
                                "G-1009-5",
                                "G-1010-1",
                                "G-1010-2",
                                "G-1010-3",
                                "G-1010-4",
                                "G-1011-1",
                                "G-1011-2",
                                "G-1011-3",
                                "G-1012-1",
                                "G-1012-2",
                                "G-1012-3",
                                "G-1012-4",
                                "G-1013-1",
                                "G-1013-2",
                                "G-1013-3",
                                "G-1013-4",
                                "G-1013-5",
                                "G-1014-1",
                                "G-1014-2",
                                "G-1014-3",
                                "G-1015-1",
                                "G-1015-2",
                                "G-1015-3",
                                "G-1015-4",
                                "G-1015-5",
                                "G-1016-1",
                                "G-1016-2",
                                "G-1016-3",
                                "G-1016-4",
                                "G-1016-5",
                                "G-1017-1",
                                "G-1017-2",
                                "G-1017-3",
                                "G-1017-4",
                                "G-1017-5",
                                "G-1017-6",
                                "G-1017-7",
                                "G-1018-1",
                                "G-1018-2",
                                "G-1018-3",
                                "G-1018-4",
                                "G-1019-1",
                                "G-1019-2",
                                "G-1019-3",
                                "G-1019-4",
                                "G-1019-5",
                                "G-1020-1",
                                "G-1020-2",
                                "G-1020-3",
                                "G-1020-4",
                                "G-1020-5",
                                "G-1020-6",
                                "G-1021-1",
                                "G-1021-2",
                                "G-1021-3",
                                "G-1021-4",
                                "G-1022-1",
                                "G-1022-2",
                                "G-1022-3",
                                "G-1022-4",
                                "G-1023-1",
                                "G-1023-2",
                                "G-1023-3",
                                "G-1023-4",
                                "G-1023-5",
                                "G-1023-6",
                                "G-1024-1",
                                "G-1024-2",
                                "G-1025-1",
                                "G-1025-2",
                                "G-1025-3",
                                "G-1025-4",
                                "G-1025-5",
                                "G-1025-6",
                                "G-1025-7",
                                "G-1026",
                                "G-1029", 
                                "G-1031-1",
                                "G-1031-2",
                                "G-1031-3",
                                "G-1031-4",
                                "G-1031-5",
                                "G-1031-6",
                                "G-1032",
                                "G-1033-1",
                                "G-1033-2",
                                "G-1033-3",
                                "G-1033-4",
                                "G-1033-5",
                                "G-1033-6",
                                "G-1033-7",
                                "G-1033-8",
                                "G-1033-9",
                                "G-1034-1",
                                "G-1034-2",
                                "G-1034-3",
                                "G-1034-4",
                                "G-1035-1",
                                "G-1035-2",
                                "G-1035-3",
                                "G-1035-4",
                                "G-1035-5",
                                "G-1035-6",
                                "G-1036-1",
                                "G-1036-2",
                                "G-1036-3",
                                "G-1036-4",
                                "G-1036-5",
                                "G-1036-6",
                                "G-1037-1",
                                "G-1037-2",
                                "G-1037-3",
                                "G-1037-4",
                                "G-1038-1",
                                "G-1038-2",
                                "G-1038-3",
                                "G-1038-4",
                                "G-1038-5",
                                "G-1038-6",
                                "G-1038-7",
                                "G-1038-8",
                                "G-1039-1",
                                "G-1039-2",
                                "G-1039-3",
                                "G-1039-4",
                                "G-1039-5",
                                "G-1039-6",
                                "G-1039-7",
                                "G-1039-8",
                                "G-1040-1",
                                "G-1040-2",
                                "G-1040-3",
                                "G-1040-4",
                                "G-1040-5",
                                "G-1040-6",
                                "G-1040-7",
                                "G-1040-8",
                                "G-1041-1",
                                "G-1041-2",
                                "G-1041-3",
                                "G-1041-4",
                                "G-1041-5",
                                "G-1041-6",
                                "G-1041-7",
                                "G-1041-8",
                                "G-1042-1",
                                "G-1042-2",
                                "G-1042-3",
                                "G-1042-4",
                                "G-1043-1",
                                "G-1043-2",
                                "G-1043-3",
                                "G-1043-4",
                                "G-1043-5",
                                "G-1043-6",
                                "G-1043-7",
                                "G-1043-8",
                                "G-1044-1",
                                "G-1044-2",
                                "G-1044-3",
                                "G-1044-4",
                                "G-1044-5",
                                "G-1044-6",
                                "G-1044-7",
                                "G-1044-8",
                                "G-1045-1",
                                "G-1045-2",
                                "G-1045-3",
                                "G-1045-4",
                                "G-1045-5",
                                "G-1045-6",
                                "G-1045-7",
                                "G-1046-1",
                                "G-1046-2",
                                "G-1046-3",
                                "G-1047-1",
                                "G-1047-2",
                                "G-1048",
                                "G-1049",
                              ]

        const greenArray = [
                            "E1P001PO", 
                            "E2P001PO", 
                            "E3P001PO", 
                            "E5P000PO",
                           ] 
        const mosqueArray = ["E1P027AO", "E5P038AO", "G-1027",]  
        const roadArray = ["G0N001PO"]
        const energyArray = [ "E1P030AO","E3P006AO","E3P019AO","G-1030",]
        const houseArray = [ "E5P036AO","E5P039AO","E5P041AO" , "E5P042AO"]
        const ossArray = ["E5P040AO"]
        const logisticsArray = ["E5P028AO" , "E5P029AO" , "E5P030AO"]
        const restingArray = ["E5P031AO"]
        const sportArray = ["E5P032AO"]
        const otelArray = ["E5P034AO"]
        const fairArray = ["E5P033AO"]
        const eduArray = ["E5P035AO"]
        const hospitalArray = ["E5P037AO"]
        




        // RENK FONKSİYONLARI
        let color;
        if (commercialArray.includes(meshName)){color = 0xff0000;}  // OFİS KIRMIZISI
        else if (industryArray.includes(meshName)){color = 0x4db4ff;} // FABRİKA MAVİSİ
        else if (mosqueArray.includes(meshName)){color = 0x00ffe5;} //CAMİ YEŞİLİ
        else if (greenArray.includes(meshName)){color = 0x468a3a;} // YEŞİL YEŞİLİ?!??
        else if (roadArray.includes(meshName)){color = 0x383838;} // YOL GRİSİ
        else if (energyArray.includes(meshName)){color = 0x7732a8;} //ENERJİ ALANI
        else if (houseArray.includes(meshName)){color = 0xfaa357;} //LOJMAN ALANI
        else if (ossArray.includes(meshName)){color = 0xf2ea05;} //OSS ALANI
        else if (logisticsArray.includes(meshName)){color = 0xf196f2;} //LOJİSTİK ALANI
        else if (restingArray.includes(meshName)){color = 0xf20558} // DİNLENME TESİSİ
        else if (sportArray.includes(meshName)){color = 0xc6f562} // SPOR TESİSİ
        else if (otelArray.includes(meshName)){color = 0x733c02} // OTEL ALANI
        else if (fairArray.includes(meshName)){color = 0xad5dfc} // FUAR ALANI
        else if (eduArray.includes(meshName)){color = 0xde355d} // EĞİTİM ALANI
        else if (hospitalArray.includes(meshName)){color = 0x9be5e8} //HOSPITAL ARRAY
        else {color = 0xffffff;}
        

        




        // ORİJİNALİ SAKLA
        if (!childMesh.userData.originalMaterial)
        {
            childMesh.userData.originalMaterial = childMesh.material.clone();}
        // ATANAN
        childMesh.userData.originalMaterial.color.set(color);      
        // RETURN
        childMesh.material = childMesh.userData.originalMaterial;
    }

};
