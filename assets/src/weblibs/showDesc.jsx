const handleMeshClick = (meshName) => {
    let fieldNameText = 'PARSEL ADI';
    let surfaceAreaText = '00000 m²';
    let moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
    let backgroundColor = '#79a2d6';
    

    const detailsPanel = document.getElementById('showDetailsOnScreen');
    detailsPanel.style.backgroundColor = 'rgba(121, 162, 214, 0.6)';

    // backgroundColor = '#85051b';
    // detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)'

    

    switch(meshName) {

        // ETAP 1 ADA SİSTEMİ
        case 'E1P001AO':
            fieldNameText = 'G-1001';
            surfaceAreaText = '71.390,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P002AO':
            fieldNameText = 'G-1002';
            surfaceAreaText = '68.558,38 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P003AO':
            fieldNameText = 'G-1003';
            surfaceAreaText = '37.977,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P004AO':
            fieldNameText = 'G-1004';
            surfaceAreaText = '80.855,46 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P005AO':
            fieldNameText = 'G-1005';
            surfaceAreaText = '75.507,49 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;       
        case 'E1P006AO':
            fieldNameText = 'G-1006';
            surfaceAreaText = '54.777,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;      
        case 'E1P007AO':
            fieldNameText = 'G-1007';
            surfaceAreaText = '51.319,59 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P008AO':
            fieldNameText = 'G-1008';
            surfaceAreaText = '54.504,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P009AO':
            fieldNameText = 'G-1009';
            surfaceAreaText = '54.504,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P010AO':
            fieldNameText = 'G-1010';
            surfaceAreaText = '74.301,76 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E1P011AO':
            fieldNameText = 'G-1011';
            surfaceAreaText = '59.512,38 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                               
        case 'E1P012AO':
            fieldNameText = 'G-1012';
            surfaceAreaText = '63.397,00 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E1P013AO':
            fieldNameText = 'G-1013';
            surfaceAreaText = '58.903,23 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E1P014AO':
            fieldNameText = 'G-1014';
            surfaceAreaText = '63.956,89 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E1P015AO':
            fieldNameText = 'G-1015';
            surfaceAreaText = '104.419,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P016AO':
            fieldNameText = 'G-1016';
            surfaceAreaText = '58.825,86 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P017AO':
            fieldNameText = 'G-1017';
            surfaceAreaText = '79.245,84 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                          
        case 'E1P018AO':
            fieldNameText = 'G-1018';
            surfaceAreaText = '84.579,61 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P019AO':
            fieldNameText = 'G-1019';
            surfaceAreaText = '52.532,27 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P020AO':
            fieldNameText = 'G-1020';
            surfaceAreaText = '84.222,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P021AO':
            fieldNameText = 'G-1021';
            surfaceAreaText = '45.943,71 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P022AO':
            fieldNameText = 'G-1022';
            surfaceAreaText = '40.647,24 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P023AO':
            fieldNameText = 'G-1023';
            surfaceAreaText = '66.674,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P024AO':
            fieldNameText = 'G-1024';
            surfaceAreaText = '42.031,33 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P025AO':
            fieldNameText = 'G-1025';
            surfaceAreaText = '117.145,80 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P026AO':
            fieldNameText = 'G-1026';
            surfaceAreaText = '43.432,80 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P027AO':
            fieldNameText = 'G-1027';
            surfaceAreaText = '47.763,48 m²';
            moreDetailsText = '<img src="/media/Ico-Mosque.png" style="width: auto; height: 60px;">';
            backgroundColor = '#03fc98';
            detailsPanel.style.backgroundColor = 'rgba(3, 252, 152, 0.6)'
            break;
        case 'E1P028AO':
            fieldNameText = 'G-1028';
            surfaceAreaText = '48.347,37 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)'
            break;
        case 'E1P029AO':
            fieldNameText = 'G-1029';
            surfaceAreaText = '130.678,66 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P030AO':
            fieldNameText = 'G-1030';
            surfaceAreaText = '34.927,98 m²';
            moreDetailsText = '<img src="/media/Ico-Water.png" style="width: auto; height: 50px;">';
            backgroundColor = '#7732a8';
            detailsPanel.style.backgroundColor = 'rgba(119, 50, 168, 0.6)'
            break;                                                                                                             
        case 'E1P031AO':
            fieldNameText = 'G-1031';
            surfaceAreaText = '104.376,08 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P032AO':
            fieldNameText = 'G-1032';
            surfaceAreaText = '47.433,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P033AO':
            fieldNameText = 'G-1033';
            surfaceAreaText = '183.099,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P034AO':
            fieldNameText = 'G-1034';
            surfaceAreaText = '75.811,45 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                
        case 'E1P035AO':
            fieldNameText = 'G-1035';
            surfaceAreaText = '66.405,33 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P036AO':
            fieldNameText = 'G-1036';
            surfaceAreaText = '52.177,23 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                        
        case 'E1P037AO':
            fieldNameText = 'G-1037';
            surfaceAreaText = '55.419,41 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P038AO':
            fieldNameText = 'G-1038';
            surfaceAreaText = '175.625,99 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P039AO':
            fieldNameText = 'G-1039';
            surfaceAreaText = '107.242,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                        
        case 'E1P040AO':
            fieldNameText = 'G-1040';
            surfaceAreaText = '108.326,30 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P041AO':
            fieldNameText = 'G-1041';
            surfaceAreaText = '107.851,31 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P042AO':
            fieldNameText = 'G-1042';
            surfaceAreaText = '54.897,53 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P043AO':
            fieldNameText = 'G-1043';
            surfaceAreaText = '226.045,65 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P044AO':
            fieldNameText = 'G-1044';
            surfaceAreaText = '131.203,76 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                
        case 'E1P045AO':
            fieldNameText = 'G-1045';
            surfaceAreaText = '103.739,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P046AO':
            fieldNameText = 'G-1046';
            surfaceAreaText = '39.609,84 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;            
        case 'E1P047AO':
            fieldNameText = 'G-1047';
            surfaceAreaText = '24.953,88 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;            
        case 'E1P048AO':
            fieldNameText = 'G-1048';
            surfaceAreaText = '308.038,69 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E1P049AO':
            fieldNameText = 'G-1049';
            surfaceAreaText = '260.546,19 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                


        // ETAP 2 ADA SİSTEMİ
        case 'E2P001AO':
            fieldNameText = 'G-2001';
            surfaceAreaText = '112.524,48 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P002AO':
            fieldNameText = 'G-2002';
            surfaceAreaText = '52.049,80 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P003AO':
            fieldNameText = 'G-2003';
            surfaceAreaText = '39.733,09 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P004AO':
            fieldNameText = 'G-2004';
            surfaceAreaText = '43.550,92 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;  
        case 'E2P005AO':
            fieldNameText = 'G-2006';
            surfaceAreaText = '49.066,92 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E2P006AO':
            fieldNameText = 'G-2005';
            surfaceAreaText = '57.739,65 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P007AO':
            fieldNameText = 'G-2007';
            surfaceAreaText = '71.922,43 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E2P008AO':
            fieldNameText = 'G-2009';
            surfaceAreaText = '72.600,17 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P009AO':
            fieldNameText = 'G-2008';
            surfaceAreaText = '58.778,05 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P010AO':
            fieldNameText = 'G-2012';
            surfaceAreaText = '76.468,32 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P011AO':
            fieldNameText = 'G-2011';
            surfaceAreaText = '76.416,65 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P012AO':
            fieldNameText = 'G-2010';
            surfaceAreaText = '82.028,85 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P013AO':
            fieldNameText = 'G-2015';
            surfaceAreaText = '97.795,52 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P014AO':
            fieldNameText = 'G-2014';
            surfaceAreaText = '97.766,45 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P015AO':
            fieldNameText = 'G-2013';
            surfaceAreaText = '130.104,30 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                                                                                                                                                      
        case 'E2P016AO':
            fieldNameText = 'G-2016';
            surfaceAreaText = '189.511,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P017AO':
            fieldNameText = 'G-2019';
            surfaceAreaText = '104.873,22 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P018AO':
            fieldNameText = 'G-2018';
            surfaceAreaText = '132.538,05 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P019AO':
            fieldNameText = 'G-2017';
            surfaceAreaText = '151.153,76 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P020AO':
            fieldNameText = 'G-2022';
            surfaceAreaText = '161.059,67 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P021AO':
            fieldNameText = 'G-2021';
            surfaceAreaText = '90.211,90 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P022AO':
            fieldNameText = 'G-2020';
            surfaceAreaText = '122.258,24 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P023AO':
            fieldNameText = 'G-2027';
            surfaceAreaText = '177.605,97 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P024AO':
            fieldNameText = 'G-2026';
            surfaceAreaText = '136.242,50 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                                                                   
        case 'E2P025AO':
            fieldNameText = 'G-2025';
            surfaceAreaText = '186.487,16 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P026AO':
            fieldNameText = 'G-2024';
            surfaceAreaText = '111.641,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P027AO':
            fieldNameText = 'G-2023';
            surfaceAreaText = '45.756,46 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P028AO':
            fieldNameText = 'G-2031';
            surfaceAreaText = '175.872,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P029AO':
            fieldNameText = 'G-2030';
            surfaceAreaText = '192.382,84 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P030AO':
            fieldNameText = 'G-2029';
            surfaceAreaText = '152.566,51 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P031AO':
            fieldNameText = 'G-2028';
            surfaceAreaText = '130.262,21 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P032AO':
            fieldNameText = 'G-2033';
            surfaceAreaText = '257.280,31 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E2P033AO':
            fieldNameText = 'G-2032';
            surfaceAreaText = '73.495,48 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                                                    


        // ETAP 3 ADA SİSTEMİ
        case 'E3P001AO':
            fieldNameText = 'G-3001';
            surfaceAreaText = '154.180,36 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P002AO':
            fieldNameText = 'G-3004';
            surfaceAreaText = '480.618,60 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P003AO':
            fieldNameText = 'G-3003';
            surfaceAreaText = '310.586,37 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P004AO':
            fieldNameText = 'G-3008';
            surfaceAreaText = '100.325,58 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P005AO':
            fieldNameText = 'G-3007';
            surfaceAreaText = '69.822,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                               
        case 'E3P006AO':
            fieldNameText = 'G-3006';
            surfaceAreaText = '94.927,98 m²';
            moreDetailsText = '<img src="/media/Ico-Water.png" style="width: auto; height: 50px;">';
            backgroundColor = '#7732a8';
            detailsPanel.style.backgroundColor = 'rgba(119, 50, 168, 0.6)'
            break;
        case 'E3P007AO':
            fieldNameText = 'G-3005';
            surfaceAreaText = '36.905,26 m²';
            moreDetailsText = '<img src="/media/Ico-Fuel.png" style="width: auto; height: 50px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)'
            break;
        case 'E3P008AO':
            fieldNameText = 'G-3014';
            surfaceAreaText = '118.809,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P009AO':
            fieldNameText = 'G-3013';
            surfaceAreaText = '66.822,99 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P010AO':
            fieldNameText = 'G-3012';
            surfaceAreaText = '42.776,00 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)'
            break;                                                
        case 'E3P011AO':
            fieldNameText = 'G-3011';
            surfaceAreaText = '13.477,54 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P012AO':
            fieldNameText = 'G-3017';
            surfaceAreaText = '99.901,06 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)';
            break; 
        case 'E3P013AO':
            fieldNameText = 'G-3010';
            surfaceAreaText = '79.013,62 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)';
            break; 
        case 'E3P014AO':
            fieldNameText = 'G-3021';
            surfaceAreaText = '216.924,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P015AO':
            fieldNameText = 'G-3020';
            surfaceAreaText = '117.701,37 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P016AO':
            fieldNameText = 'G-3019';
            surfaceAreaText = '50.956,49 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P017AO':
            fieldNameText = 'G-3018';
            surfaceAreaText = '35.572,74 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P018AO':
            fieldNameText = 'G-3016';
            surfaceAreaText = '54.637,26 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)';
            break; 
        case 'E3P019AO':
            fieldNameText = 'G-3022';
            surfaceAreaText = '186.335,51 m²';
            moreDetailsText = '<img src="/media/Ico-Solar.png" style="width: auto; height: 50px;">';
            backgroundColor = '#7732a8';
            detailsPanel.style.backgroundColor = 'rgba(119, 50, 168, 0.6)'
            break;
        case 'E3P020AO':
            fieldNameText = 'G-3026';
            surfaceAreaText = '115.781,37 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P021AO':
            fieldNameText = 'G-3025';
            surfaceAreaText = '65.818,49 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P022AO':
            fieldNameText = 'G-3024';
            surfaceAreaText = '90.164,75 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)';
            break; 
        case 'E3P023AO':
            fieldNameText = 'G-3027';
            surfaceAreaText = '217.517,75 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P024AO':
            fieldNameText = 'G-3030';
            surfaceAreaText = '316.124,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P025AO':
            fieldNameText = 'G-3029';
            surfaceAreaText = '197.339,82 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P026AO':
            fieldNameText = 'G-3028';
            surfaceAreaText = '112.260,73 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P027AO':
            fieldNameText = 'G-3031';
            surfaceAreaText = '107.680,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P028AO':
            fieldNameText = 'G-3033';
            surfaceAreaText = '418.542,87 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P029AO':
            fieldNameText = 'G-3032';
            surfaceAreaText = '198.356,96 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P030AO':
            fieldNameText = 'G-3037';
            surfaceAreaText = '271.369,30 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P031AO':
            fieldNameText = 'G-3035';
            surfaceAreaText = '65.049,83 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P032AO':
            fieldNameText = 'G-3034';
            surfaceAreaText = '77.218,38 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P033AO':
            fieldNameText = 'G-3036';
            surfaceAreaText = '96.482,00 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P034AO':
            fieldNameText = 'G-3039';
            surfaceAreaText = '298.865,76 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E3P035AO':
            fieldNameText = 'G-3038';
            surfaceAreaText = '120.126,11 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;    
        case 'E3P001AOE':
            fieldNameText = 'G-3002';
            surfaceAreaText = '24.554,06 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E3P002AOE':
            fieldNameText = 'G-3009';
            surfaceAreaText = '165.396,23 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                                                                                                                                                                                                                                                                         

        //ETAP 4 ADA SİSTEMİ
        case 'E4P001AO':
            fieldNameText = 'G-4005';
            surfaceAreaText = '1.325.010,17 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E4P002AO':
            fieldNameText = 'G-4004';
            surfaceAreaText = '533.463,24 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'E4P003AO':
            fieldNameText = 'G-4003';
            surfaceAreaText = '442.459,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break; 
        case 'E4P004AO':
            fieldNameText = 'G-4002';
            surfaceAreaText = '341.372,69 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;  
        case 'E4P005AO':
            fieldNameText = 'G-4001';
            surfaceAreaText = '1.085.416,70 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;                                                

        //ETAP 5 ADA SİSTEMİ
        case 'E5P001AO':
            fieldNameText = 'GIA';
            surfaceAreaText = 'SERBEST BÖLGE';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;

        case 'E5P028AO':
            fieldNameText = 'G-5002';
            surfaceAreaText = '249.176,84 m²';
            moreDetailsText = '<img src="/media/Ico-Truck.png" style="width: auto; height: 60px;">';
            backgroundColor = '#de3ae0';
            detailsPanel.style.backgroundColor = 'rgba(222, 58, 224, 0.6)';
            break;                                        
        case 'E5P029AO':
            fieldNameText = 'G-5001';
            surfaceAreaText = '351.391,47 m²';
            moreDetailsText = '<img src="/media/Ico-Truck.png" style="width: auto; height: 60px;">';
            backgroundColor = '#de3ae0';
            detailsPanel.style.backgroundColor = 'rgba(222, 58, 224, 0.6)';
            break;                               
        case 'E5P030AO':
            fieldNameText = 'G-5003';
            surfaceAreaText = '374.770,40 m²';
            moreDetailsText = '<img src="/media/Ico-Truck.png" style="width: auto; height: 60px;">';
            backgroundColor = '#de3ae0';
            detailsPanel.style.backgroundColor = 'rgba(222, 58, 224, 0.6)';
            break;       
        case 'E5P031AO':
            fieldNameText = 'G-5005';
            surfaceAreaText = '513.763,35 m²';
            moreDetailsText = '<img src="/media/Ico-Rest.png" style="width: auto; height: 60px;">';
            backgroundColor = '#f20558';
            detailsPanel.style.backgroundColor = 'rgba(242, 5, 88, 0.6)';
            break; 
        case 'E5P032AO':
            fieldNameText = 'G-5006';
            surfaceAreaText = '406.984,96 m²';
            moreDetailsText = '<img src="/media/Ico-Sport.png" style="width: auto; height: 60px;">';
            backgroundColor = '#7bab16';
            detailsPanel.style.backgroundColor = 'rgba(123, 171, 22, 0.6)';
            break; 
        case 'E5P033AO':
            fieldNameText = 'G-5007';
            surfaceAreaText = '263.904,11 m²';
            moreDetailsText = '<img src="/media/Ico-Exhibithion.png" style="width: auto; height: 60px;">';
            backgroundColor = '#ad5dfc';
            detailsPanel.style.backgroundColor = 'rgba(173, 93, 252, 0.6)';
            break;            
        case 'E5P034AO':
            fieldNameText = 'G-5008';
            surfaceAreaText = '155.032,42 m²';
            moreDetailsText = '<img src="/media/Ico-Hotel.png" style="width: auto; height: 60px;">';
            backgroundColor = '#733c02';
            detailsPanel.style.backgroundColor = 'rgba(115, 60, 2, 0.6)';
            break;  
        case 'E5P035AO':
            fieldNameText = 'G-5011';
            surfaceAreaText = '716.035,98 m²';
            moreDetailsText = '<img src="/media/Ico-Edu.png" style="width: auto; height: 60px;">';
            backgroundColor = '#de355d';
            detailsPanel.style.backgroundColor = 'rgba(222, 53, 93, 0.6)';
            break;  
        case 'E5P036AO':
            fieldNameText = 'G-5012';
            surfaceAreaText = '399.013,58 m²';
            moreDetailsText = '<img src="/media/Ico-House.png" style="width: auto; height: 60px;">';
            backgroundColor = '#f5790c';
            detailsPanel.style.backgroundColor = 'rgba(245, 121, 12, 0.6)'
            break;                                                               
        case 'E5P037AO':
            fieldNameText = 'G-5010';
            surfaceAreaText = '215.482,54 m²';
            moreDetailsText = '<img src="/media/Ico-Hospital.png" style="width: auto; height: 60px;">';
            backgroundColor = '#466c6e';
            detailsPanel.style.backgroundColor = 'rgba(70, 108, 110, 0.6)'
            break;
        case 'E5P038AO':
            fieldNameText = 'G-5017';
            surfaceAreaText = '212.374,08 m²';
            moreDetailsText = '<img src="/media/Ico-Mosque.png" style="width: auto; height: 60px;">';
            backgroundColor = '#03fc98';
            detailsPanel.style.backgroundColor = 'rgba(3, 252, 152, 0.6)'
            break;
        case 'E5P039AO':
            fieldNameText = 'G-5013';
            surfaceAreaText = '537.041,79 m²';
            moreDetailsText = '<img src="/media/Ico-House.png" style="width: auto; height: 60px;">';
            backgroundColor = '#f5790c';
            detailsPanel.style.backgroundColor = 'rgba(245, 121, 12, 0.6)'
            break;   
        case 'E5P040AO':
            fieldNameText = 'G-5016';
            surfaceAreaText = '248.377,94 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#bab404';
            detailsPanel.style.backgroundColor = 'rgba(186, 180, 4, 0.6)'
            break;                                    
        case 'E5P041AO':
            fieldNameText = 'G-5014';
            surfaceAreaText = '931.940,27 m²';
            moreDetailsText = '<img src="/media/Ico-House.png" style="width: auto; height: 60px;">';
            backgroundColor = '#f5790c';
            detailsPanel.style.backgroundColor = 'rgba(245, 121, 12, 0.6)'
            break;   
        case 'E5P042AO':
            fieldNameText = 'G-5015';
            surfaceAreaText = '566.774,13 m²';
            moreDetailsText = '<img src="/media/Ico-House.png" style="width: auto; height: 60px;">';
            backgroundColor = '#f5790c';
            detailsPanel.style.backgroundColor = 'rgba(245, 121, 12, 0.6)'
            break;   
            
            

        //TASLAK PARSELİZASYON PLANI
        case 'G-1001-1':
            fieldNameText = 'G-1001-1';
            surfaceAreaText = '12.173,05 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 50px;">';
            break;
        case 'G-1001-2':
            fieldNameText = 'G-1001-2';
            surfaceAreaText = '6.744,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;           
        case 'G-1001-3':
            fieldNameText = 'G-1001-3';
            surfaceAreaText = '32.590,02 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1001-4':
            fieldNameText = 'G-1001-4';
            surfaceAreaText = '7.032,30 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1001-5_':
            fieldNameText = 'G-1001-5';
            surfaceAreaText = '12.851,25 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1002-1':
            fieldNameText = 'G-1002-1';
            surfaceAreaText = '10.054,44 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1002-2':
            fieldNameText = 'G-1002-2';
            surfaceAreaText = '6.542,50 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1002-3':
            fieldNameText = 'G-1002-3';
            surfaceAreaText = '9.970,85 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1002-4':
            fieldNameText = 'G-1002-4';
            surfaceAreaText = '9.865,32 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;          
        case 'G-1002-5':
            fieldNameText = 'G-1002-5';
            surfaceAreaText = '6.365,64 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1002-6':
            fieldNameText = 'G-1002-6';
            surfaceAreaText = '9.901,06 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1002-7':
            fieldNameText = 'G-1002-7';
            surfaceAreaText = '15.858,59 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1003-1':
            fieldNameText = 'G-1003-1';
            surfaceAreaText = '9.550,07 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1003-2':
            fieldNameText = 'G-1003-2';
            surfaceAreaText = '8.065,03 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1003-3':
            fieldNameText = 'G-1003-3';
            surfaceAreaText = '9.908,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1003-4':
            fieldNameText = 'G-1003-4';
            surfaceAreaText = '10.454,18 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;  
        case 'G-1004-1':
            fieldNameText = 'G-1004-1';
            surfaceAreaText = '15.238,47 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1004-2':
            fieldNameText = 'G-1004-2';
            surfaceAreaText = '14.430,78 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1004-3':
            fieldNameText = 'G-1004-3';
            surfaceAreaText = '7.612,64 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1004-4':
            fieldNameText = 'G-1004-4';
            surfaceAreaText = '35.656,85 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1004-5':
            fieldNameText = 'G-1004-5';
            surfaceAreaText = '7.916,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1005-1':
            fieldNameText = 'G-1005-1';
            surfaceAreaText = '23.842,99 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;  
        case 'G-1005-2':
            fieldNameText = 'G-1005-2';
            surfaceAreaText = '7.233,84 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1005-3':
            fieldNameText = 'G-1005-3';
            surfaceAreaText = '10.168,33 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;           
        case 'G-1005-4':
            fieldNameText = 'G-1005-4';
            surfaceAreaText = '9.238,49 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1005-5':
            fieldNameText = 'G-1005-5';
            surfaceAreaText = '5.816,38 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;       
        case 'G-1005-6':
            fieldNameText = 'G-1005-6';
            surfaceAreaText = '19.207,46 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;          
        case 'G-1006-1':
            fieldNameText = 'G-1006-1';
            surfaceAreaText = '20.504,55 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1006-2':
            fieldNameText = 'G-1006-2';
            surfaceAreaText = '13.111,47 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1006-3':
            fieldNameText = 'G-1006-3';
            surfaceAreaText = '21.161,70 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1007-1':
            fieldNameText = 'G-1007-1';
            surfaceAreaText = '24.234,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1007-2':
            fieldNameText = 'G-1007-2';
            surfaceAreaText = '27.084,32 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1008-1':
            fieldNameText = 'G-1008-1';
            surfaceAreaText = '20.643,17 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1008-2':
            fieldNameText = 'G-1008-2';
            surfaceAreaText = '33.681,77 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;    
        case 'G-1009-1':
            fieldNameText = 'G-1009-1';
            surfaceAreaText = '26.123,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;    
        case 'G-1009-2':
            fieldNameText = 'G-1009-2';
            surfaceAreaText = '11.026,87 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1009-3':
            fieldNameText = 'G-1009-3';
            surfaceAreaText = '5.097,87 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1009-4':
            fieldNameText = 'G-1009-4';
            surfaceAreaText = '13.116,42 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1009-5':
            fieldNameText = 'G-1009-5';
            surfaceAreaText = '19.102,05 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1010-1':
            fieldNameText = 'G-1010-1';
            surfaceAreaText = '17.574,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;         
        case 'G-1010-2':
            fieldNameText = 'G-1010-2';
            surfaceAreaText = '24.953,95 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1010-3':
            fieldNameText = 'G-1010-3';
            surfaceAreaText = '18.086,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1010-4':
            fieldNameText = 'G-1010-4';
            surfaceAreaText = '13.686,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                
        case 'G-1011-1':
            fieldNameText = 'G-1011-1';
            surfaceAreaText = '15.513,44 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;  
        case 'G-1011-2':
            fieldNameText = 'G-1011-2';
            surfaceAreaText = '18.838,30 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1011-3':
            fieldNameText = 'G-1011-3';
            surfaceAreaText = '25.160,65 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1012-1':
            fieldNameText = 'G-1012-1';
            surfaceAreaText = '22.583,06 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1012-2':
            fieldNameText = 'G-1012-2';
            surfaceAreaText = '14.941.53 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1012-3':
            fieldNameText = 'G-1012-3';
            surfaceAreaText = '8.589,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;    
        case 'G-1012-4':
            fieldNameText = 'G-1012-4';
            surfaceAreaText = '16.282,66 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1013-1':
            fieldNameText = 'G-1013-1';
            surfaceAreaText = '33.348,74 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1013-2':
            fieldNameText = 'G-1013-2';
            surfaceAreaText = '6.422,93 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1013-3':
            fieldNameText = 'G-1013-3';
            surfaceAreaText = '8.594,29 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1013-4':
            fieldNameText = 'G-1013-4';
            surfaceAreaText = '5.336,73 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1013-5':
            fieldNameText = 'G-1013-5';
            surfaceAreaText = '5.200,54 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;              
        case 'G-1014-1':
            fieldNameText = 'G-1014-1';
            surfaceAreaText = '28.500,19 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1014-2':
            fieldNameText = 'G-1014-2';
            surfaceAreaText = '22.876,51 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;           
        case 'G-1014-3':
            fieldNameText = 'G-1014-3';
            surfaceAreaText = '12.580,20 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1015-1':
            fieldNameText = 'G-1015-1';
            surfaceAreaText = '32.030,89 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1015-2':
            fieldNameText = 'G-1015-2';
            surfaceAreaText = '15.911,20 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1015-3':
            fieldNameText = 'G-1015-3';
            surfaceAreaText = '31.996,88 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;    
        case 'G-1015-4':
            fieldNameText = 'G-1015-4';
            surfaceAreaText = '17.021,83 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1015-5':
            fieldNameText = 'G-1015-5';
            surfaceAreaText = '7.458,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1016-1':
            fieldNameText = 'G-1016-1';
            surfaceAreaText = '32.226,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1016-2':
            fieldNameText = 'G-1016-2';
            surfaceAreaText = '6.101,75 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1016-3':
            fieldNameText = 'G-1016-3';
            surfaceAreaText = '6.231,56 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1016-4':
            fieldNameText = 'G-1016-4';
            surfaceAreaText = '6.165,66 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1016-5':
            fieldNameText = 'G-1016-5';
            surfaceAreaText = '6.100,54 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1017-1':
            fieldNameText = 'G-1017-1';
            surfaceAreaText = '16.713,61 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1017-2':
            fieldNameText = 'G-1017-2';
            surfaceAreaText = '9.496,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;         
        case 'G-1017-3':
            fieldNameText = 'G-1017-3';
            surfaceAreaText = '14.756,74 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1017-4':
            fieldNameText = 'G-1017-4';
            surfaceAreaText = '9.504,42 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1017-5':
            fieldNameText = 'G-1017-5';
            surfaceAreaText = '9.226,94 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;         
        case 'G-1017-6':
            fieldNameText = 'G-1017-6';
            surfaceAreaText = '8.975,29 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                     
        case 'G-1017-7':
            fieldNameText = 'G-1017-7';
            surfaceAreaText = '13.571,93 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                         
        case 'G-1018-1':
            fieldNameText = 'G-1018-1';
            surfaceAreaText = '19.060,95 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                     
        case 'G-1018-2':
            fieldNameText = 'G-1018-2';
            surfaceAreaText = '10.259,53 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                     
        case 'G-1018-3':
            fieldNameText = 'G-1018-3';
            surfaceAreaText = '45.175,40 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                     
        case 'G-1018-4':
            fieldNameText = 'G-1018-4';
            surfaceAreaText = '10.083,74 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                     
        case 'G-1019-1':
            fieldNameText = 'G-1019-1';
            surfaceAreaText = '29.009,74 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1019-2':
            fieldNameText = 'G-1019-2';
            surfaceAreaText = '6.559,32 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1019-3':
            fieldNameText = 'G-1019-3';
            surfaceAreaText = '6.553,41 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1019-4':
            fieldNameText = 'G-1019-4';
            surfaceAreaText = '5.178,58 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1019-5':
            fieldNameText = 'G-1019-5';
            surfaceAreaText = '5.331,22 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1020-1':
            fieldNameText = 'G-1020-1';
            surfaceAreaText = '26.970,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1020-2':
            fieldNameText = 'G-1020-2';
            surfaceAreaText = '9.004,54 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                           
        case 'G-1020-3':
            fieldNameText = 'G-1020-3';
            surfaceAreaText = '9.431,56 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;              
        case 'G-1020-4':
            fieldNameText = 'G-1020-4';
            surfaceAreaText = '20.348,40 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1020-5':
            fieldNameText = 'G-1020-5';
            surfaceAreaText = '9.481,94 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1020-6':
            fieldNameText = 'G-1020-6';
            surfaceAreaText = '8.985.55 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                            
        case 'G-1021-1':
            fieldNameText = 'G-1021-1';
            surfaceAreaText = '23.979,64 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                          
        case 'G-1021-2':
            fieldNameText = 'G-1021-2';
            surfaceAreaText = '6.077,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1021-3':
            fieldNameText = 'G-1021-3';
            surfaceAreaText = '10.865,73 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1021-4':
            fieldNameText = 'G-1021-4';
            surfaceAreaText = '5.021,07 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1022-1':
            fieldNameText = 'G-1022-1';
            surfaceAreaText = '20.689,31 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1022-2':
            fieldNameText = 'G-1022-2';
            surfaceAreaText = '5.113,31 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1022-3':
            fieldNameText = 'G-1022-3';
            surfaceAreaText = '9.683,22 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1022-4':
            fieldNameText = 'G-1022-4';
            surfaceAreaText = '5.161,39 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                            
        case 'G-1023-1':
            fieldNameText = 'G-1023-1';
            surfaceAreaText = '11.006,14 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1023-2':
            fieldNameText = 'G-1023-2';
            surfaceAreaText = '9.281,23 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1023-3':
            fieldNameText = 'G-1023-3';
            surfaceAreaText = '5.063,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1023-4':
            fieldNameText = 'G-1023-4';
            surfaceAreaText = '5.067,71 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                    
        case 'G-1023-5':
            fieldNameText = 'G-1023-5';
            surfaceAreaText = '21.621,70 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1023-6':
            fieldNameText = 'G-1023-6';
            surfaceAreaText = '14.634,75 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1024-1':
            fieldNameText = 'G-1024-1';
            surfaceAreaText = '13.719,44 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1024-2':
            fieldNameText = 'G-1024-2';
            surfaceAreaText = '28.311,96 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;      
        case 'G-1025-1':
            fieldNameText = 'G-1025-1';
            surfaceAreaText = '11.878,65 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1025-2':
            fieldNameText = 'G-1025-2';
            surfaceAreaText = '9.884,67 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1025-3':
            fieldNameText = 'G-1025-3';
            surfaceAreaText = '11.077,07 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1025-4':
            fieldNameText = 'G-1025-4';
            surfaceAreaText = '21.371,51 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1025-5':
            fieldNameText = 'G-1025-5';
            surfaceAreaText = '16.812,39 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1025-6':
            fieldNameText = 'G-1025-6';
            surfaceAreaText = '31.244,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1025-7':
            fieldNameText = 'G-1025-7';
            surfaceAreaText = '14.876,93 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1026':
            fieldNameText = 'G-1026';
            surfaceAreaText = '43.432,78 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1027':
            fieldNameText = 'G-1027';
            surfaceAreaText = '47.763,48 m²';
            moreDetailsText = '<img src="/media/Ico-Mosque.png" style="width: auto; height: 60px;">';
            backgroundColor = '#00eaff';
            detailsPanel.style.backgroundColor = 'rgba(0, 234, 255, 0.6)'
            break;                 
        case 'G-1028':
            fieldNameText = 'G-1028';
            surfaceAreaText = '48.313,00 m²';
            moreDetailsText = '<img src="/media/Ico-Office.png" style="width: auto; height: 60px;">';
            backgroundColor = '#85051b';
            detailsPanel.style.backgroundColor = 'rgba(133, 5, 27, 0.6)'
            break;                 
        case 'G-1029':
            fieldNameText = 'G-1029';
            surfaceAreaText = '130.637,81 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1030':
            fieldNameText = 'G-1030';
            surfaceAreaText = '34.686,62 m²';
            moreDetailsText = '<img src="/media/Ico-Water.png" style="width: auto; height: 50px;">';
            backgroundColor = '#7732a8';
            detailsPanel.style.backgroundColor = 'rgba(119, 50, 168, 0.6)'
            break;                    
        case 'G-1031-1':
            fieldNameText = 'G-1031-1';
            surfaceAreaText = '15.962,56 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1031-2':
            fieldNameText = 'G-1031-2';
            surfaceAreaText = '8.275,13 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1031-3':
            fieldNameText = 'G-1031-3';
            surfaceAreaText = '13.439,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1031-4':
            fieldNameText = 'G-1031-4';
            surfaceAreaText = '24.305,71 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1031-5':
            fieldNameText = 'G-1031-5';
            surfaceAreaText = '13.941,51 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1031-6':
            fieldNameText = 'G-1031-6';
            surfaceAreaText = '28.452,26 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                    
        case 'G-1032':
            fieldNameText = 'G-1032';
            surfaceAreaText = '47.433,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-1':
            fieldNameText = 'G-1033-1';
            surfaceAreaText = '13.059,08 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-2':
            fieldNameText = 'G-1033-2';
            surfaceAreaText = '20.124,70 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-3':
            fieldNameText = 'G-1033-3';
            surfaceAreaText = '23.573,16 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-4':
            fieldNameText = 'G-1033-4';
            surfaceAreaText = '42.325,00 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-5':
            fieldNameText = 'G-1033-5';
            surfaceAreaText = '25.292,60 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1033-6':
            fieldNameText = 'G-1033-6';
            surfaceAreaText = '14.715,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1033-7':
            fieldNameText = 'G-1033-7';
            surfaceAreaText = '14.101,06 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1033-8':
            fieldNameText = 'G-1033-8';
            surfaceAreaText = '19.463,25 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1034-1':
            fieldNameText = 'G-1034-1';
            surfaceAreaText = '18.184,75 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                 
        case 'G-1034-2':
            fieldNameText = 'G-1034-2';
            surfaceAreaText = '18.741,59 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1034-3':
            fieldNameText = 'G-1034-3';
            surfaceAreaText = '19.113,15 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1034-4':
            fieldNameText = 'G-1034-4';
            surfaceAreaText = '19.771,83 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;  
        case 'G-1035-1':
            fieldNameText = 'G-1035-1';
            surfaceAreaText = '16.330,90 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1035-2':
            fieldNameText = 'G-1035-2';
            surfaceAreaText = '16.118,83 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1035-3':
            fieldNameText = 'G-1035-3';
            surfaceAreaText = '6.873,53 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1035-4':
            fieldNameText = 'G-1035-4';
            surfaceAreaText = '10.715,90 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;           
        case 'G-1035-6':
            fieldNameText = 'G-1035-6';
            surfaceAreaText = '6.128.71 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;   
        case 'G-1036-1':
            fieldNameText = 'G-1036-1';
            surfaceAreaText = '10.755,64 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1036-2':
            fieldNameText = 'G-1036-2';
            surfaceAreaText = '14.429,43 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1036-3':
            fieldNameText = 'G-1036-3';
            surfaceAreaText = '6.190,44 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1036-4':
            fieldNameText = 'G-1036-4';
            surfaceAreaText = '7.519,77 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1036-5':
            fieldNameText = 'G-1036-5';
            surfaceAreaText = '7.775,29 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1036-6':
            fieldNameText = 'G-1036-6';
            surfaceAreaText = '5.506,60 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1037-1':
            fieldNameText = 'G-1037-1';
            surfaceAreaText = '16.148,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1037-2':
            fieldNameText = 'G-1037-2';
            surfaceAreaText = '13.509,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1037-3':
            fieldNameText = 'G-1037-3';
            surfaceAreaText = '10.810,33 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1037-4':
            fieldNameText = 'G-1037-4';
            surfaceAreaText = '14.951,73 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1038-1':
            fieldNameText = 'G-1038-1';
            surfaceAreaText = '15.680,10 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1038-2':
            fieldNameText = 'G-1038-2';
            surfaceAreaText = '14.325,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1038-3':
            fieldNameText = 'G-1038-3';
            surfaceAreaText = '17.503,98 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1038-4':
            fieldNameText = 'G-1038-4';
            surfaceAreaText = '34.248,43 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1038-5':
            fieldNameText = 'G-1038-5';
            surfaceAreaText = '30.848,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;               
        case 'G-1038-6':
            fieldNameText = 'G-1038-6';
            surfaceAreaText = '18.552,36 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;
        case 'G-1038-7':
            fieldNameText = 'G-1038-7';
            surfaceAreaText = '18.332,69 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1038-8':
            fieldNameText = 'G-1038-8';
            surfaceAreaText = '26.133,88 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
        case 'G-1039-1':
            fieldNameText = 'G-1039-1';
            surfaceAreaText = '18.332,69 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-2':
            fieldNameText = 'G-1039-2';
            surfaceAreaText = '12.478,82 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-3':
            fieldNameText = 'G-1039-3';
            surfaceAreaText = '10.439,91 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-4':
            fieldNameText = 'G-1039-4';
            surfaceAreaText = '6.566,49 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-5':
            fieldNameText = 'G-1039-5';
            surfaceAreaText = '6.544,36 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-6':
            fieldNameText = 'G-1039-6';
            surfaceAreaText = '13.783,18 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-7':
            fieldNameText = 'G-1039-7';
            surfaceAreaText = '11.429,50 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1039-8':
            fieldNameText = 'G-1039-8';
            surfaceAreaText = '22.061,67 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-1':
            fieldNameText = 'G-1040-1';
            surfaceAreaText = '17.050,20 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-2':
            fieldNameText = 'G-1040-2';
            surfaceAreaText = '18.951,97 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-3':
            fieldNameText = 'G-1040-3';
            surfaceAreaText = '9.442,82 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-4':
            fieldNameText = 'G-1040-4';
            surfaceAreaText = '9.231,92 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-5':
            fieldNameText = 'G-1040-5';
            surfaceAreaText = '18.367,90 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-6':
            fieldNameText = 'G-1040-6';
            surfaceAreaText = '17.407,75 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-7':
            fieldNameText = 'G-1040-7';
            surfaceAreaText = '8.717,94 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1040-8':
            fieldNameText = 'G-1040-8';
            surfaceAreaText = '9.155,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;  
        case 'G-1041-1':
            fieldNameText = 'G-1041-1';
            surfaceAreaText = '17.398,82 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-2':
            fieldNameText = 'G-1041-2';
            surfaceAreaText = '20.337,01 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-3':
            fieldNameText = 'G-1041-3';
            surfaceAreaText = '9.132.95 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-4':
            fieldNameText = 'G-1041-4';
            surfaceAreaText = '9.301,24 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-5':
            fieldNameText = 'G-1041-5';
            surfaceAreaText = '17.693,96 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-6':
            fieldNameText = 'G-1041-6';
            surfaceAreaText = '17.055,57 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-7':
            fieldNameText = 'G-1041-7';
            surfaceAreaText = '8.562,72 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1041-8':
            fieldNameText = 'G-1041-8';
            surfaceAreaText = '8.396,04 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1042-1':
            fieldNameText = 'G-1042-1';
            surfaceAreaText = '18.312,19 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1042-2':
            fieldNameText = 'G-1042-2';
            surfaceAreaText = '7.312,51 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1042-3':
            fieldNameText = 'G-1042-3';
            surfaceAreaText = '7.974,70 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1042-4':
            fieldNameText = 'G-1042-4';
            surfaceAreaText = '21.298,13 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;        
        case 'G-1043-1':
            fieldNameText = 'G-1043-1';
            surfaceAreaText = '16.608,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-2':
            fieldNameText = 'G-1043-2';
            surfaceAreaText = '16.659,93 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-3':
            fieldNameText = 'G-1043-3';
            surfaceAreaText = '39.904,00 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-4':
            fieldNameText = 'G-1043-4';
            surfaceAreaText = '26.800,35 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-5':
            fieldNameText = 'G-1043-5';
            surfaceAreaText = '26.798,48 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-6':
            fieldNameText = 'G-1043-6';
            surfaceAreaText = '48.908,98 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-7':
            fieldNameText = 'G-1043-7';
            surfaceAreaText = '22.693,16 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1043-8':
            fieldNameText = 'G-1043-8';
            surfaceAreaText = '27.671,94 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;                         
        case 'G-1044-1':
            fieldNameText = 'G-1044-1';
            surfaceAreaText = '23.610,18 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-2':
            fieldNameText = 'G-1044-2';
            surfaceAreaText = '10.204,29 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-3':
            fieldNameText = 'G-1044-3';
            surfaceAreaText = '10.360,71 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-4':
            fieldNameText = 'G-1044-4';
            surfaceAreaText = '9.693,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-5':
            fieldNameText = 'G-1044-5';
            surfaceAreaText = '16.729,19 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-6':
            fieldNameText = 'G-1044-6';
            surfaceAreaText = '14.629,53 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-7':
            fieldNameText = 'G-1044-7';
            surfaceAreaText = '13.718,59 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1044-8':
            fieldNameText = 'G-1044-8';
            surfaceAreaText = '32.257,46 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1045-1':
            fieldNameText = 'G-1045-1';
            surfaceAreaText = '14.186,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-2':
            fieldNameText = 'G-1045-2';
            surfaceAreaText = '25.586,14 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-3':
            fieldNameText = 'G-1045-3';
            surfaceAreaText = '8.987,00 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-4':
            fieldNameText = 'G-1045-4';
            surfaceAreaText = '6.799,99 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-5':
            fieldNameText = 'G-1045-5';
            surfaceAreaText = '20.434,63 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-6':
            fieldNameText = 'G-1045-6';
            surfaceAreaText = '14.394,67 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1045-7':
            fieldNameText = 'G-1045-7';
            surfaceAreaText = '13.351,07 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;            
        case 'G-1046-1':
            fieldNameText = 'G-1046-1';
            surfaceAreaText = '16.335,79 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1046-2':
            fieldNameText = 'G-1046-2';
            surfaceAreaText = '10.509,86 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1046-3':
            fieldNameText = 'G-1046-3';
            surfaceAreaText = '12.764,27 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;             
        case 'G-1047-1':
            fieldNameText = 'G-1047-1';
            surfaceAreaText = '13.282,66 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1047-2':
            fieldNameText = 'G-1047-2';
            surfaceAreaText = '11.671,28 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1048':
            fieldNameText = 'G-1048';
            surfaceAreaText = '308,038,69 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break; 
        case 'G-1049':
            fieldNameText = 'G-1049';
            surfaceAreaText = '260.546,23 m²';
            moreDetailsText = '<img src="/media/Ico-Factory.png" style="width: auto; height: 60px;">';
            break;     
            
        
        //DEAFULT SETTINGS    
        default: 
            document.getElementById('showDetailsOnScreen').style.display = 'none';
            return;
    }

    const showDetailsElement = document.getElementById('showDetailsOnScreen');
    showDetailsElement.innerHTML = `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: right; right: 0; ">
                    <span style="font-size: 20pt; font-weight: regular;">${fieldNameText}</span><br>
                    <span style="font-size: 11pt; ">${surfaceAreaText}</span>
                </div>
                <div style="text-align: center; display: flex; align-items: center; box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.6);">
                    <span style="font-size: 40pt; padding: 10%; background-color: ${backgroundColor}; width: auto; height: 100%; display: flex; align-items: center;">${moreDetailsText}</span>
                </div>
            
            </div>
        </div>
    `;
};

export default handleMeshClick;

//local http://localhost:3004/
//network http://192.168.0.100:3004/
//network http://192.168.3.38:5173/
//[vite] page reload 