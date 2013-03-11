 function getHardCodedInfo(station) {
    switch (station.platform) {
        case "RALEN":
            station.name = "Alewife Station";
            station.lat = 42.39543;
            station.lng = -71.1425;
            break;
        case "RDAVN":
        case "RDAVS":
            station.name = "Davis Station";
            station.lat = 42.39674;
            station.lng = -71.1218;
            break;
        case "RPORN":
        case "RPORS":
            station.name = "Porter Station";
            station.lat = 42.3884;
            station.lng = -71.1191;
            break;
        case "RHARN":
        case "RHARS":
            station.name = "Harvard Station";
            station.lat = 42.37336;
            station.lng = -71.119;
            break;
        case "RCENN":
        case "RCENS":
            station.name = "Central Square Station";
            station.lat = 42.36549;
            station.lng = -71.1038;
            break;
        case "RKENN":
        case "RKENS":
            station.name = "Kendall/MIT Station";
            station.lat = 42.36249079;
            station.lng = -71.08617653;
            break;
		case "RMGHN":
        case "RMGHS":
            station.name = "Charles/MGH Station";
            station.lat =42.361166;
            station.lng = -71.070628;
            break;
        case "RPRKN":
        case "RPRKS":
            station.name = "Park St. Station";
            station.lat = 42.35639457;
            station.lng = -71.0624242;
            break;	
        case "RDTCN":
        case "RDTCS":
            station.name = "Downtown Crossing Station";
            station.lat = 42.355518;
            station.lng = 	-71.060225;
            break;	 
        case "RSOUN":
        case "RSOUS":
            station.name = "South Station";
            station.lat = 42.352271;
            station.lng = 	-71.055242;
            break;	 
        case "RBRON":
        case "RBROS":
            station.name = "Broadway Station";
            station.lat = 42.342622;
            station.lng = -71.056967;
            break;	 
        case "RANDN":
        case "RANDS":
            station.name ="Andrew Station" ;
            station.lat = 42.330154;
            station.lng = -71.057655;
            break;	 
        case "RJFKN":
        case "RJFKS":
            station.name = "JFK/UMass Station";
            station.lat =42.320685;
            station.lng = -71.052391;
            break;	 
        case "RSAVN":
        case "RSAVS":
            station.name = "Savin Hill Station";
            station.lat = 42.31129;
            station.lng = -71.053331;
            break;	 
        case "RFIEN":
        case "RFIES":
            station.name = "Fields Corner Station";
            station.lat = 42.300093;
            station.lng = -71.061667;
            break;	 			
        case "RSHAN":
        case "RSHAS":
            station.name = "Shawmut Station";
            station.lat =42.29312583;
            station.lng = -71.06573796;
            break;	 			
        case "RASHN":
        case "RASHS":
            statiOn.name = "Ashmont Station";
            station.lat =42.284652;
            station.lng = -71.064489;
            break;	
        case "RNQUN":
        case "RNQUS":
            station.name = "North Quincy Station";
            station.lat = 42.275275	
            station.lng = -71.029583;
            break;	
        case "RWOLN":
        case "RWOLS":
            station.name = "Wollaston Station";
            station.lat = 42.2665139;
            station.lng = 	-71.0203369;
            break;	
		case "RQUCN":
        case "RQUCS":
            station.name = "Quincy Center Station";
            station.lat =42.251809 ;
            station.lng = -71.005409;
            break;	
		case "RQUAN":
        case "RQUAS":
            station.name = "Quincy Adams Station";
            station.lat =42.233391;
            station.lng = -71.007153;
            break;	
		case "RBRAS":
            station.name = "Braintree Station";
            station.lat = 42.2078543;
            station.lng = -71.0011385;
            break;	
        default:
            station.name = "Davis Station";
            station.lat = 42.39674;
            station.lng = -71.1218;
            break;
	}
}