const _0xe4eb6c=(function(){let _0x18b59a=!![];return function(_0x3d905b,_0x2f2ab7){const _0x4ab303=_0x18b59a?function(){if(_0x2f2ab7){const _0x29458e=_0x2f2ab7['apply'](_0x3d905b,arguments);return _0x2f2ab7=null,_0x29458e;}}:function(){};return _0x18b59a=![],_0x4ab303;};}()),_0x535e23=_0xe4eb6c(this,function(){return _0x535e23['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x535e23)['search']('(((.+)+)+)+$');});_0x535e23();const _0x571732=(function(){let _0x91388d=!![];return function(_0x414ffc,_0x1f4e37){const _0x230941=_0x91388d?function(){if(_0x1f4e37){const _0x228004=_0x1f4e37['apply'](_0x414ffc,arguments);return _0x1f4e37=null,_0x228004;}}:function(){};return _0x91388d=![],_0x230941;};}()),_0x5c8962=_0x571732(this,function(){let _0x3e340f;try{const _0x2f3807=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3e340f=_0x2f3807();}catch(_0x325b5a){_0x3e340f=window;}const _0x212df2=_0x3e340f['console']=_0x3e340f['console']||{},_0x206a39=['log','warn','info','error','exception','table','trace'];for(let _0x3fc305=0x0;_0x3fc305<_0x206a39['length'];_0x3fc305++){const _0x14c8dc=_0x571732['constructor']['prototype']['bind'](_0x571732),_0x215d1b=_0x206a39[_0x3fc305],_0x5b74dc=_0x212df2[_0x215d1b]||_0x14c8dc;_0x14c8dc['__proto__']=_0x571732['bind'](_0x571732),_0x14c8dc['toString']=_0x5b74dc['toString']['bind'](_0x5b74dc),_0x212df2[_0x215d1b]=_0x14c8dc;}});_0x5c8962();const SyncDocumentController=class{constructor(){this['executing']=!0x1;}async['importFromSocket'](_0xd819f2,_0xa71203,_0xa13580){try{do!0x1!==this['executing']&&await Tools['waitTime'](0x1);while(!0x1!==this['executing']);this['executing']=!0x0;const _0xd759f4=await Header['get'](_0xd819f2['name']);if(!_0xd759f4['name'])throw'header\x20does\x20not\x20exist\x20on\x20database';if(JSON['stringify'](_0xd759f4['references_type'])!==JSON['stringify'](_0xd819f2['references_type']))throw'references_type\x20dont\x20match';await this['storeOnDatabase']({'serverHeader':_0xd819f2,'serverContent':_0xa71203,'reportOperationManager':!0x1,'downloadAll':!0x1}),(await Content['getAll'](_0xd759f4['name']))['length']<_0xa13580&&(console['log']('importFromSocket:\x20la\x20cantidad\x20de\x20contenido\x20en\x20la\x20base\x20de\x20datos\x20no\x20coincide\x20con\x20la\x20del\x20servidor'),this['executing']=!0x1,await this['importFromServer']({'name':_0xd759f4['name'],'downloadAll':!0x1,'reportOperationManager':!0x1,'setAsActive':!0x1})),this['executing']=!0x1;}catch(_0x5c21bf){throw console['error'](_0x5c21bf),this['executing']=!0x1,_0x5c21bf;}}async['storeOnDatabase']({serverHeader:_0x4ce881,serverContent:_0xbfc2f5,downloadAll:_0x32682a=!0x1,reportOperationManager:_0x5dbe2c=!0x1}){if('object'===typeof _0x4ce881['configuration']){for(var _0x189572 in DEFAULT_VALUES['header']['configuration'])void 0x0===_0x4ce881['configuration'][_0x189572]&&(_0x4ce881['configuration'][_0x189572]=DEFAULT_VALUES['header']['configuration'][_0x189572]);}else _0x4ce881['configuration']=DEFAULT_VALUES['header']['configuration'];_0x32682a?(await Header['remove'](_0x4ce881['name']),await Header['save']({'name':_0x4ce881['name'],'associated_task':_0x4ce881['associated_task'],'contain':_0x4ce881['contain'],'active':!0x1,'references_data':_0x4ce881['references_data'],'references_type':_0x4ce881['references_type'],'send_time':_0x4ce881['send_time'],'update_date':Tools['getDateString'](),'configuration':_0x4ce881['configuration']})):(_0x189572=await Header['get'](_0x4ce881['name']),_0x189572['configuration']=_0x4ce881['configuration'],_0x189572['send_time']=null!==_0x4ce881['send_time']?_0x4ce881['send_time']:_0x189572['send_time'],await _0x189572['save']()),_0x4ce881=null;for(let [_0x1ef130,_0x5d0761]of _0xbfc2f5['entries']())_0x32682a||(_0x189572=await Content['get']({'name':_0x5d0761['name'],'references_content':_0x5d0761['references_content']}),_0x189572['name']&&await _0x189572['remove']()),await Content['save']({'name':_0x5d0761['name'],'inputs':_0x5d0761['inputs'],'properties':{'database_id':_0x5d0761['id'],'register_date':_0x5d0761['register_date'],'register_username':_0x5d0761['register_username'],'uploaded':!0x0},'references_content':_0x5d0761['references_content'],'token':Tools['generateToken']()},!0x1,!0x1),_0x5dbe2c&&(_0x189572=Tools['percentageOfItemsProcessed']({'totalElements':_0xbfc2f5['length'],'processedElements':_0x1ef130+0x1,'previousPercentage':_0x4ce881}),null!==_0x189572&&(OperationsManagerController['set']({'component':'server-controller','operation':{'type':'documentDownload','loading':!0x0,'error':null,'message':_0x189572['toFixed']()+'%'}}),_0x4ce881=_0x189572));}async['importFromServer']({name:_0x479dff,downloadAll:_0xaa69e9,reportOperationManager:_0x3510c8=!0x1,setAsActive:_0x16e9a9=!0x0}){try{do!0x1!==this['executing']&&await Tools['waitTime'](0x1);while(!0x1!==this['executing']);this['executing']=!0x0,_0x3510c8&&OperationsManagerController['set']({'component':'server-controller','operation':{'type':'documentDownload','loading':!0x0,'error':null,'message':'Descargando\x20datos...'}});let _0x2614a2={'name':_0x479dff,'header':null,'contentIDs':null};if(!_0xaa69e9){let _0x181d8a=await Header['get'](_0x479dff);if(''!==_0x181d8a['name']){let _0x48c94b=[],_0x5ce425=await Content['getAll'](_0x479dff);for(let _0x29195d of _0x5ce425)null!==_0x29195d['properties']['database_id']&&_0x48c94b['push']({'database_id':_0x29195d['properties']['database_id'],'register_date':_0x29195d['properties']['register_date']});_0x2614a2['header']=_0x181d8a,_0x2614a2['contentIDs']=_0x48c94b;}else _0xaa69e9=!0x0;}_0x2614a2['downloadAll']=_0xaa69e9;const _0x3f41cc=new ServerController();await _0x3f41cc['configure']({'request':'importHeader'});const _0x49eba1=await _0x3f41cc['execute'](_0x2614a2);Tools['checkResponse']({'data':_0x49eba1['data'],'typeDataExpected':'object','propertiesExpected':['header','content']}),Tools['checkResponse']({'data':_0x49eba1['data']['header'],'typeDataExpected':'object','propertiesExpected':['associated_task','register_username']}),Tools['checkResponse']({'data':_0x49eba1['data']['content'],'typeDataExpected':'array'}),_0x3510c8&&OperationsManagerController['set']({'component':'server-controller','operation':{'type':'documentDownload','loading':!0x0,'error':null,'message':'Procesando\x20datos...'}});const _0x2e0ec4=_0x49eba1['data']['header'];await this['storeOnDatabase']({'serverHeader':_0x2e0ec4,'serverContent':_0x49eba1['data']['content'],'downloadAll':_0xaa69e9,'reportOperationManager':_0x3510c8}),_0x16e9a9&&await LocalDocumentController['setActive'](_0x2e0ec4['name']),await(await Header['get'](_0x2e0ec4['name']))['save'](),OperationsManagerController['set']({'component':'server-controller','operation':{'type':'documentDownload','loading':!0x1,'error':null,'message':'completed'}}),this['executing']=!0x1;}catch(_0x3d4c1d){if(this['executing']=!0x1,console['error'](_0x3d4c1d['response']?_0x3d4c1d['response']['data']:_0x3d4c1d),_0x3510c8)OperationsManagerController['set']({'component':'server-controller','operation':{'type':'documentDownload','loading':!0x1,'error':_0x3d4c1d['response']?_0x3d4c1d['response']['data']['error']?_0x3d4c1d['response']['data']['error']:_0x3d4c1d['response']['data']:_0x3d4c1d['message']?_0x3d4c1d['message']:_0x3d4c1d,'message':null}});else throw _0x3d4c1d['response']?_0x3d4c1d['response']['data']:_0x3d4c1d;}}async['export']({name:_0x3b723c,exportAll:_0x148fd7,reportOperationManager:_0x105d63=!0x1}){try{do!0x1!==this['executing']&&await Tools['waitTime'](0x1);while(!0x1!==this['executing']);this['executing']=!0x0,_0x105d63&&OperationsManagerController['set']({'component':'local-controller','operation':{'type':'documentExport','loading':!0x0,'error':null,'message':'Procesando\x20datos...'}});let _0x46b1d6=await Header['get'](_0x3b723c);if(''===_0x46b1d6['name'])throw'document\x20not\x20found';var _0x69b65a=new ServerController();await _0x69b65a['configure']({'request':'exportHeader'});var _0x5ec903=await _0x69b65a['execute']({'header':_0x46b1d6});Tools['checkResponse']({'data':_0x5ec903['data'],'typeDataExpected':'object','propertiesExpected':['message']});if('send\x20content'!==_0x5ec903['data']['message'])throw _0x5ec903['data'];let _0x410a2e=await Content['getAll'](_0x46b1d6['name'],!0x1);_0x3b723c=[],_0x69b65a=[],_0x5ec903=0x0;for(let [_0x148156,_0x3181b6]of _0x410a2e['entries']()){if(!0x1===_0x148fd7&&!0x0===_0x3181b6['properties']['uploaded']){if(_0x410a2e['length']<_0x148156+0x1||0x0===_0x3b723c['length'])continue;}else _0x3b723c['push'](_0x3181b6);if(_0x3b723c['length']>=UPLOAD_LENGTH||_0x410a2e['length']===_0x148156+0x1&&0x1<=_0x3b723c['length']){const _0x1cad9c=new ServerController();await _0x1cad9c['configure']({'request':'exportContent'});const _0x285bd8=await _0x1cad9c['execute']({'content':_0x3b723c});Tools['checkResponse']({'data':_0x285bd8['data'],'typeDataExpected':'object','propertiesExpected':['token_id_db']}),Tools['checkResponse']({'data':_0x285bd8['data']['token_id_db'],'typeDataExpected':'array'}),_0x3b723c=[];for(let _0x400746 of _0x285bd8['data']['token_id_db']){let _0x35758f=await Content['get']({'token':_0x400746['token']});_0x35758f['name']&&(_0x35758f['properties']['database_id']=_0x400746['database_id'],_0x35758f['properties']['uploaded']=!0x0,await _0x35758f['save']()),_0x69b65a['push'](_0x400746['database_id']);}if(_0x105d63){let _0x21511f=Tools['percentageOfItemsProcessed']({'totalElements':_0x410a2e['length'],'processedElements':_0x148156+0x1,'previousPercentage':_0x5ec903,'notifyEveryPercentage':0x3});null!==_0x21511f&&(OperationsManagerController['set']({'component':'local-controller','operation':{'type':'documentExport','loading':!0x0,'error':null,'message':_0x21511f['toFixed']()+'%'}}),_0x5ec903=_0x21511f);}}}OperationsManagerController['set']({'component':'local-controller','operation':{'type':'documentExport','loading':!0x1,'error':null,'message':'completed'}}),GI['EventBus']['emit']('emitRequest',{'request':'documentExport','data':{'name':_0x46b1d6['name'],'ids':_0x69b65a}}),this['executing']=!0x1;}catch(_0x5f2b49){if(this['executing']=!0x1,console['log'](_0x5f2b49['response']?_0x5f2b49['response']['data']:_0x5f2b49),_0x105d63)OperationsManagerController['set']({'component':'local-controller','operation':{'type':'documentExport','loading':!0x1,'error':_0x5f2b49['response']?_0x5f2b49['response']['data']['error']?_0x5f2b49['response']['data']['error']:_0x5f2b49['response']['data']:_0x5f2b49['message']?_0x5f2b49['message']:_0x5f2b49,'message':null}});else throw _0x5f2b49['response']?_0x5f2b49['response']['data']:_0x5f2b49;}}},LocalDocumentController=class{static async['getActive']({taskId:_0x5eb415=null,onlyByTaskId:_0x5b25dd=!0x1,returnDetailedInformation:_0x3e7522=!0x1}){let _0x207b0a=await Header['getAll']();if(null!==_0x5eb415){for(let _0x4f845e of _0x207b0a)if(_0x4f845e['associated_task']['find'](_0x5d7831=>_0x5d7831['id']===_0x5eb415))return _0x3e7522?{'header':_0x4f845e,'foundType':'task\x20id\x20search'}:_0x4f845e;if(_0x5b25dd){if(_0x3e7522)throw{'error':'active\x20document\x20not\x20found','foundType':'task\x20id\x20search'};throw'active\x20document\x20not\x20found';}}if(_0x5b25dd=_0x207b0a['find'](_0x5bb2bc=>!0x0===_0x5bb2bc['active']))return _0x3e7522?{'header':_0x5b25dd,'foundType':'global\x20search'}:_0x5b25dd;if(_0x3e7522)throw{'error':'active\x20document\x20not\x20found','foundType':'global\x20search'};throw'active\x20document\x20not\x20found';}static async['setActive'](_0x13d6df,_0x3a0a50=!0x0){let _0x220ceb=await Header['getAll']();if(-0x1===_0x220ceb['findIndex'](_0x50e772=>_0x50e772['name']===_0x13d6df)&&null!==_0x13d6df)throw'document\x20not\x20found';for(let _0x2eff96 of _0x220ceb)_0x2eff96['name']===_0x13d6df?_0x2eff96['active']=_0x3a0a50:!0x0===_0x3a0a50&&(_0x2eff96['active']=!0x1),await _0x2eff96['save'](!0x0,!0x1);return!0x0;}static async['addHeaderAssociation'](_0x222633,_0x242978,_0x27e013){_0x222633=await Header['get'](_0x222633);if(''===_0x222633['name'])throw'document\x20not\x20found';if(!0x0===_0x222633['associated_task']['map'](_0x2fddf4=>_0x2fddf4['id'])['includes'](_0x27e013))throw'task\x20id\x20already\x20exist\x20in\x20association';return _0x222633['associated_task']['push']({'id':_0x27e013,'name':_0x242978}),await _0x222633['save'](),!0x0;}static async['removeHeaderAssociation'](_0x43b79b,_0x499da3){_0x43b79b=await Header['get'](_0x43b79b);if(''===_0x43b79b['name'])throw'document\x20not\x20found';return _0x499da3=_0x43b79b['associated_task']['map'](_0x174420=>_0x174420['id'])['indexOf'](_0x499da3),0x0<=_0x499da3&&(_0x43b79b['associated_task']['splice'](_0x499da3,0x1),await _0x43b79b['save']()),!0x0;}};