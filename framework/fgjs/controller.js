function fingerprintReport(c){return new Promise(function(b){Fingerprint2.get({excludes:{deviceMemory:!0,timezoneOffset:!0,timezone:!0,pixelRatio:!0,hasLiedOs:!0,hasLiedBrowser:!0,touchSupport:!0,addBehavior:!0,openDatabase:!0,fontsFlash:!0,fonts:!0,audio:!0,enumerateDevices:!0,userAgent:!0,adBlock:!0,doNotTrack:!0,plugins:!0,cpuClass:!0,webdriver:!0,language:!0,sessionStorage:!0,localStorage:!0,indexedDb:!0}},function(a){c?b(a):(a=Fingerprint2.x64hash128(a.map(function(d){return d.value}).join(),
31),b(a))})})};