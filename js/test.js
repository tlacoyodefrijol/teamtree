var basic_choropleth = new Datamap({
  element: document.getElementById('container'),
  scope: 'world', // Currently supports 'usa' and 'world', however with custom map data you can specify your own
  projection: 'mercator', // Style of projection to be used. try "mercator"
  height: null, // If not null, datamaps will grab the height of 'element'
  width: null, // If not null, datamaps will grab the width of 'element',
  responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
  highlightOnHover: true,
  highlightFillColor: '#eeeee',

 geographyConfig: {
   highlightOnHover: true,
   highlightFillColor: 'rgba(0,153,153,1)',
   highlightBorderColor: 'none',
       highlightBorderWidth: .5,
       highlightBorderOpacity: .5,
       highlightFillOpacity: 0.85,

  popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name +
        ': ' +  data.Prepared + ' '
      },
      highlightBorderWidth: 3
  },

fills: {
  'NOEXIST': "#bababa",
  'ALL': '#009fe5',//Submitted in 2015k, is OKI, Barometer and OGP
  'THREE': '#06e8c1',//Submited in 2015 is OKI and either OGP or Barometer
  'GODI15+OKI': '#0DEC5C', //Submitted in 2015 and is part of OKI Network
  'GODI15+Barometer':'#2ff014',//Submitted in 2015, has info from Barometer
  'GODI15+OGP':'#9cf31b',//Submitted in 2015, belongs to OGP
  'GODI15': '#f7e823',//Submitted to GODI 2015
  'Barometer': '#fb892b',//Barometer information Only
  'OGP': '#ff3236',//Belongs to OGP only
  defaultFill: '#babab2'
},
data:{
"SCG":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI 2015"
  },
"ZMB":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"ZWE":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"LAO":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
"TKM":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
"UZB":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
"ASM":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
"FJI":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"KIR":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MHL":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MTQ":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"PRK":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"PNG":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MYT":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"WSM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"FSM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"TON":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MCO":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"TUV":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"AND":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"BLR":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GRL":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"LIE":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SVN":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"BLZ":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"CUB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"DMA":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"NIC":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"DJI":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"PSE":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"AFG":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"BTN":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MDV":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"AGO":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"BDI":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SMR":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"STP":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"CPV":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"CAF":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"TCD":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"COM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"COG":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"COD":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"ERI":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GAB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SLB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GMB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GNB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"LSO":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MDG":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MRT":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SYC":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SOM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SSD":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SWZ":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"AIA":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GNQ":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"UMI":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GLP":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"GUM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"VUT":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"VAT":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"MAC":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"VGB":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"VIR":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"WLF":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"ESH":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SHN":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"SPM":{
  "fillKey":"NOEXIST",
"Prepared":"No information is available"
},
"KGZ":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"SLE":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"UGA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted to GODI 2015 and has Barometer information"
},
"SOM":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
"NAM":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"MWI":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"ROU":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted to GODI 2015 and is part of OKI Network"
},
"MOZ":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"TWN":{
  "fillKey":"GODI15+OKI",
"Prepared":"Submitted to GODI 2015 and is part of OKI Network"
},
"GBR": {
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"DNK":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"COL":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"AUS":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"FIN":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"URY":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"NLD":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"USA":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"FRA":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"NOR":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"BRA":{
  "fillKey":"ALL",
"Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"MEX":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"BGR":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"ITA":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"ESP":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"CAN":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"IND":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"CZE":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"MDA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"KOR":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"AUT":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"SGP":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"DEU":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"ISL":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"SWE":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"CHE":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"CHL":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"IRL":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"LVA":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"JPN":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"BEL":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"ALB":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"JAM":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"HKG":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"LUX":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI 2015"
},
"IDN":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"THA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"GRC":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"PRI":{
  "fillKey":"GODI15",
  "Prepared":"Submited to GODI in 2015"
},
"ISR":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"RWA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"GEO":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"TUR":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"KAZ":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"GGY":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"SVK":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"PRY":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"PRT":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"UKR":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"ARG":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"ZAF":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"ECU":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"BFA":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"SEN":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"RUS":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"NPL":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"PAK":{
  "fillKey":'THREE',
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"BEN":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"CYM":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"CRI":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"OMN":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"BMU":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"MKD":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"BOL":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"SLV":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"GTM":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"LCA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"KEN":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"DOM":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"MAR":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"AZE":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"PHL":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"BHR":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"CMR":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"GUY":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"TJK":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"EGY":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"TTO":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"QAT":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"TUN":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"PAN":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"JOR":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"BWA":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"MLI":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"TZA":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"CHN":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"TMP":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"KWT":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"TGO":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"MSR":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"LBN":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"ARE":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"CIV":{
  "fillKey":"GODI15+OGP",
  "Prepared":"Submitted in 2015, belongs to OGP"
},
"GIN":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"NER":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"GRD":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"SAU":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"VCT":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"ABW":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"ETH":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"KHM":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"BHS":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"IRQ":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"BRB":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"MYS":{
  "fillKey":"THREE",
  "Prepared":"Submited in 2015 is OKI and either OGP or Barometer"
},
"NGA":{
  "fillKey":"ALL",
  "Prepared":"Submitted in 2015, is OKI, Barometer and OGP"
},
"SDN":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"TCA":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"ATG":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"DZA":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"IRN":{
  "fillKey":"GODI15+OKI",
  "Prepared":"Submitted in 2015 and is part of OKI Network"
},
"KNA":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"LBY":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"SYR":{
  "fillKey":"GODI15",
  "Prepared":"Submitted to GODI in 2015"
},
"MMR":{
  "fillKey":"GODI15+Barometer",
  "Prepared":"Submitted in 2015 and has Barometer information"
},
"ARM":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"MNG":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"NZL":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"PNG":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"VNM":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"BIH":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"HRV":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"EST":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"HUN":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"LTU":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only (this country belongs to OKI as well)"
},
"MLT":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only (this country belongs to OKI as well)"
},
"MNE":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"POL":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country has a potential OKI partner)"
},
"SRB":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"HTI":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"HND":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"YEM":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"PER":{
  "fillKey":"THREE",
  "Prepared":"Has a potential partner, belongs to OGP and has Barometer data"
},
"VEN":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"BGD":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country has a potential OKI partner)"
},
"LKA":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only"
},
"GHA":{
  "fillKey":"Barometer",
  "Prepared":"Barometer information only (this country belongs to OGP as well)"
},
"LBR":{
  "fillKey":"OGP",
  "Prepared":"Belongs to OGP only"
},
"ERI":{
  "fillKey":"NOEXIST",
  "Prepared":"No information is available"
},
},

done: function(datamap) {
    datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
    function redraw() {
        var prefix = '-webkit-transform' in document.body.style ?
                        '-webkit-' : '-moz-transform' in document.body.style ?
                                    '-moz-' : '-ms-transform' in document.body.style ?
                                            '-ms-' : '';
        var x = d3.event.translate[0];
        var y = d3.event.translate[1];
        datamap.svg.selectAll("g")
            .style(prefix + 'transform',
                'translate(' + x +'px, ' + y + 'px) scale(' + (d3.event.scale) + ')');
    }
}
 });
