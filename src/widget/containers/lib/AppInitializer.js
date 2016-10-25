let appMgr = window.applicationManager;
let appList = [];

let updateIdx = 0;
let newApps = [];


let callbacks = {
};


let AppInitializer = {
    init : (opt)=>{
    /*
        opt.appInitStart,
        opt.appInitEnd,
        opt.appInstalledComplete
        */

        callbacks = {
            appInitStart : opt.appInitStart,
            appInitEnd : opt.appInitEnd,
            appInstallComplete: opt.appInstallComplete
        };
    },
    getAppList : ()=>{
        if(appMgr){
            appList = appMgr.widgets;
            
            return appMgr.widgets;
        }else{
            return local_apps;
        }
        
    },
    startApp : (app)=>{
        let application = appMgr.getOwnerApplication(window.document);
        application.startWidget(app, false);
    }



};





/*
let AppInitializer_back = {
    getAppList : ()=>{
        if(appMgr){
            appList = appMgr.widgets;
            return appMgr.widgets;
        }else{
            return local_apps;
        }
    },
    updateAppList : (updateList) => {
        newApps = updateList;                       //update start
        let newItem = updateList.item(updateIdx);
        AppManager.updateApp(newItem.update()); 
    },
    updateApp : (wd) => {
        newApps.item(updateIdx).update();
    },
    installNext : (wd, state, reason) => {
        updateIdx ++;
        if(updateIdx < newApps.length){
            AppManager.updateApp();
        }else{                  //update fininsh
            setTimeout(()=>{
                AppManager.updateCompleteCallback(AppManager.getAppList());
            }, 0);
        }
    }
};
*/

window.AppInitializer = AppInitializer;
/*
appMgr.addEventListener('ApplicationLoaded', function (childApplication) {
    console.log('ApplicationLoaded : ================================');
    setTimeout(function(){
        childApplication.show();
    }, 100);
}, false);
*/
let local_path = "";
let local_apps = [ 
    {   
        "category": "weather",
        "widgetName": "Accuweather",
        "widgetID": "http://www.obigo.com/visteon/accuweather",
        "url_apk": "widgetfiles/accuweather.wgt",
        "iconSrcPath": "accuweather.png",
        "localURI" : local_path
    },  
    {   
        "category": "news",
        "widgetName": "NDTV",
        "widgetID": "http://www.obigo.com/visteon/ndtv",
        "url_apk": "widgetfiles/ndtv.wgt",
        "iconSrcPath": "ndtv.png",
        "localURI" : local_path
    },  

    {   
        "category": "news",
        "widgetName": "NY Times",
        "widgetID": "http://www.obigo.com/visteon/nyt",
        "url_apk": "widgetfiles/nyt.wgt",
        "iconSrcPath": "nyt.png",
        "localURI" : local_path
    },  
    {   
        "category": "sports",
        "widgetName": "Cricinfo",
        "widgetID": "http://www.obigo.com/visteon/cricinfo",
        "url_apk": "widgetfiles/cricinfo.wgt",
        "iconSrcPath": "cricinfo.png",
        "localURI" : local_path
    },  
    {   
        "category": "utility",
        "widgetName": "Calculator",
        "widgetID": "http://www.obigo.com/visteon/calculator",
        "url_apk": "widgetfiles/calculator.wgt",
        "iconSrcPath": "calculator.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
    {   
        "category": "about",
        "widgetName": "Setting",
        "widgetID": "http://www.obigo.com/visteon/setting",
        "url_apk": "widgetfiles/setting.wgt",
        "iconSrcPath": "setting.png",
        "localURI" : local_path
    },  
];


local_apps.item = function(i){
    return this[i];
    
};
export default  AppInitializer ;
