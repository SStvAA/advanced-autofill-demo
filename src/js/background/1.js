const _0x5e36a9=(function(){let _0x3c9122=!![];return function(_0x3402fb,_0x2e4b2d){const _0x362380=_0x3c9122?function(){if(_0x2e4b2d){const _0x38cbc6=_0x2e4b2d['apply'](_0x3402fb,arguments);return _0x2e4b2d=null,_0x38cbc6;}}:function(){};return _0x3c9122=![],_0x362380;};}()),_0x3be4f9=_0x5e36a9(this,function(){return _0x3be4f9['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x3be4f9)['search']('(((.+)+)+)+$');});_0x3be4f9();const _0x46b9c1=(function(){let _0x31472d=!![];return function(_0xd9b88b,_0xc1fbe4){const _0x2b353c=_0x31472d?function(){if(_0xc1fbe4){const _0x33bfc5=_0xc1fbe4['apply'](_0xd9b88b,arguments);return _0xc1fbe4=null,_0x33bfc5;}}:function(){};return _0x31472d=![],_0x2b353c;};}()),_0x3704c4=_0x46b9c1(this,function(){let _0x1c4cd2;try{const _0x265072=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1c4cd2=_0x265072();}catch(_0x2cf6ce){_0x1c4cd2=window;}const _0x59b79d=_0x1c4cd2['console']=_0x1c4cd2['console']||{},_0x27fcf7=['log','warn','info','error','exception','table','trace'];for(let _0x570fe2=0x0;_0x570fe2<_0x27fcf7['length'];_0x570fe2++){const _0x2ae755=_0x46b9c1['constructor']['prototype']['bind'](_0x46b9c1),_0x155331=_0x27fcf7[_0x570fe2],_0x138d0a=_0x59b79d[_0x155331]||_0x2ae755;_0x2ae755['__proto__']=_0x46b9c1['bind'](_0x46b9c1),_0x2ae755['toString']=_0x138d0a['toString']['bind'](_0x138d0a),_0x59b79d[_0x155331]=_0x2ae755;}});_0x3704c4();const VERSION='9.98',UPLOAD_LENGTH=0xf,PERSONALIZED_COLUMNS_OF_CONTENT_TABLE={'properties':['database_id','uploaded','register_date','register_username']},WORKING_TITLE={'english':'Working\x20on\x20Task','spanish':'Trabajando\x20en\x20la\x20tarea'},NO_WORK_TITLE={'english':'There\x20is\x20no\x20work\x20currently\x20available\x20in\x20this\x20task','spanish':['No\x20hay\x20trabajo\x20disponible\x20actualmente\x20en\x20esta\x20tarea','En\x20este\x20momento\x20no\x20hay\x20trabajo\x20disponible\x20en\x20esta\x20tarea']},SERVER_ERROR_TITLE={'english':'We\x27re\x20sorry,\x20but\x20something\x20went\x20wrong','spanish':'504\x20Gateway\x20Time-out'},NO_INTERNET_TITLE={'english':'account.appen.com'},SIGN_IN_TITLE={'english':'Log\x20in\x20to\x20Appen\x20Connect','spanish':'Iniciar\x20sesión\x20en\x20Appen\x20Connect'},COMPLETED_TITLE={'english':'You\x27ve\x20completed\x20all\x20your\x20work','spanish':'Has\x20completado\x20todo\x20tu\x20trabajo'},CREATE_TASK_TITLE={'english':'Create\x20Task\x20Work','spanish':'Crear\x20trabajo\x20de\x20tarea'},MAXIMUM_TITLE={'english':'You\x20have\x20done\x20the\x20maximum\x20amount\x20of\x20work\x20on\x20this\x20job','spanish':['Has\x20realizado\x20la\x20cantidad\x20máxima\x20de\x20trabajo\x20en\x20este\x20trabajo','Has\x20realizado\x20la\x20cantidad\x20máxima\x20de\x20trabajo\x20en\x20esta\x20tarea']},EXTREME_AUTO_REFRESH_TITLE={'english':'Extreme\x20Auto\x20Refresh'},WORKING_URL='https://view.appen.io/*',THERE_URL='https://account.appen.com/*',SOCKET_REQUESTS={'request':null,'data':null},GI={},AUTO_CLOSE={'timeout':0x1388,'title':'Closing\x20in\x205\x20seconds...'},AUTO_CLOSE_TIMEOUT=0x1388,URL_LOCAL_MEDIA={'autoRefresh':{'sound':{'task':'src/sound/auto-refresh-task.mp3','error':'src/sound/auto-refresh-error.mp3'}},'autoOpen':{'sound':{'task':'src/sound/auto-open-task.mp3'}}},DEFAULT_VALUES={'header':{'configuration':{'registerEmptyTQ':!0x1,'customBoxZoom':{'base':null,'x':null,'y':null}}}},Tools=class{static async['getContributorId'](){try{return await(await fetch('https://account.appen.com/profile'))['text']()['then'](_0xc13323=>new DOMParser()['parseFromString'](_0xc13323,'text/html'))['then'](_0x192771=>_0x192771['querySelector']('table\x20>\x20tbody\x20>\x20tr\x20>\x20td')['textContent']);}catch(_0x1fb385){throw console['error']('error\x20getting\x20contributor\x20id:',_0x1fb385),'cannot\x20get\x20user\x20profile';}}static['isJson'](_0x4d2934){try{JSON['parse'](_0x4d2934);}catch(_0x3cb324){return!0x1;}return!0x0;}static['waitTime'](_0x2b5395){return new Promise(function(_0x325b7e){setTimeout(function(){_0x325b7e();},0x3e8*_0x2b5395);});}static async['getFingerprint'](_0x1b9963){let _0xda3853=0x0;var _0x449c36=null;do{var _0x262da9=await fingerprintReport();if(_0x449c36===_0x262da9||!_0x1b9963)return _0x262da9;_0x449c36=_0x262da9,_0xda3853++;}while(0xa>=_0xda3853);throw'cannot\x20get\x20fingerprint';}static['checkResponse']({data:_0x11c721,typeDataExpected:_0x910e45,propertiesExpected:_0x26637d=[],nullable:_0xf19cfd=!0x1}){if(null===_0x11c721&&!0x1===_0xf19cfd)throw'data\x20is\x20null';if('string'===typeof _0x11c721&&_0x11c721['includes']('Fatal\x20error'))throw'fatal\x20error';if('array'===_0x910e45&&!Array['isArray'](_0x11c721))throw'data\x20is\x20not\x20an\x20array';if(0x0<_0x26637d['length']){for(let _0x3ad0cf of _0x26637d)if(void 0x0===_0x11c721[_0x3ad0cf])throw _0x3ad0cf+'\x20not\x20found\x20in\x20data';}return!0x0;}static['getDateString'](){return new Date(window['navigator']['userAgent']['includes']('NT\x206.')&&Intl['DateTimeFormat']()['resolvedOptions']()['timeZone']['includes']('Caracas')?new Date()['setMinutes'](new Date()['getMinutes']()-0x1e):new Date())['toISOString']();}static['generateToken'](_0x6c2577=0x40){let _0x21dffc='';for(let _0x567338=0x0;_0x567338<_0x6c2577;_0x567338++)_0x21dffc+='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math['floor'](0x3e*Math['random']())];return _0x21dffc;}static['percentageOfItemsProcessed']({totalElements:_0x4e2ae7,processedElements:_0xea5ea2,previousPercentage:_0x476a8f=null,notifyEveryPercentage:_0x5aaf47=0x5}){return _0x4e2ae7=0x64/_0x4e2ae7*_0xea5ea2,null!==_0x476a8f?_0x4e2ae7-_0x476a8f>=_0x5aaf47||0x63<=_0x4e2ae7||0x0===_0x4e2ae7?_0x4e2ae7:null:_0x4e2ae7;}static['reloadTab'](_0x3957d6,_0x23c6fd=0x0){return new Promise(function(_0xa83c56,_0x4e0f6b){setTimeout(()=>{chrome['tabs']['reload'](_0x3957d6,function(_0x51c8e4){chrome['runtimelastError']?_0x4e0f6b(chrome['runtime']['lastError']['message']):_0xa83c56(_0x51c8e4);});},0x3e8*_0x23c6fd);});}static['getTab'](_0x2dbb0a){return new Promise(async function(_0x4b545e,_0x21c74a){chrome['tabs']['get'](_0x2dbb0a,function(_0x5702c2){chrome['runtimelastError']?_0x21c74a(chrome['runtime']['lastError']['message']):_0x4b545e(_0x5702c2);});});}static async['getTabs'](_0x10ad41){return new Promise(async function(_0x514039){chrome['tabs']['query'](_0x10ad41,function(_0x1601b9){_0x514039(_0x1601b9);});});}static async['sendNotification'](_0x3ca3a8,_0x3430c6=null,_0x537f5a=null){_0x3ca3a8={'type':'basic','title':_0x3ca3a8,'icon':'src/img/icon.png','isClickable':null!==_0x537f5a,'buttons':[{'title':'Mostrar\x20Pestaña'},{'title':'Descartar'}]};let _0x37812b=new Notification(_0x3ca3a8['title'],_0x3ca3a8);_0x37812b['onclick']=_0x537f5a,setTimeout(()=>{_0x37812b['close']();},0x1388),_0x3430c6&&new Audio(_0x3430c6)['play']();}};window['Tools']=Tools,window['getURL']=chrome['runtime']['getURL'];