import React from 'react';
import {GridList, GridListItem, Spinner} from 'obgComponents';
import AppHeader from '../AppHeader/AppHeader';
import AppInitializer from "../lib/AppInitializer";
import styles from "./MainPage.css";


class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            appList : [],
            spinnerShow : false,
        };


        this.getAppItems = this.getAppItems.bind(this);
        this.updateComplete = this.updateComplete.bind(this);
        this.appInitStart= this.appInitStart.bind(this);
        this.appInitEnd= this.appInitEnd.bind(this);
        this.appInstallComplete= this.appInstallComplete.bind(this);


        AppInitializer.init({
            appInitStart : this.appInitStart, 
            appInitEnd : this.appInitEnd,
            appInstallComplete : this.appInstallComplete
        });



    }

    appInitStart(){
        this.setState({
            spinnerShow:true
        });
    }
    appInitEnd(){
        this.setState({
            spinnerShow:false
        });
    }
    appInstallComplete(installedApp){

    }











    startApp(app){
        AppInitializer.startApp(app);
    }
    componentDidMount(){
        this.setState({
            appList : AppInitializer.getAppList(),
            spinnerShow : false,
        });
    }
    updateComplete(list){
        this.setState({
            appList : list,
            spinnerShow:false,
        });
    }

    getAppItems(){

    }

    render(){
        let apps = [];
        for(let i = 0 ;i<this.state.appList.length;i++){
            if(this.state.appList.item(i).widgetName == "Launcher"){
                continue;
            }
            apps.push(
                <GridListItem style={{border:"none"}} 
                    key = {i}
                    onClick={()=>{
                        this.startApp(this.state.appList.item(i));
                    }}
                >
                    <div>{this.state.appList.item(i).widgetName}</div>
                </GridListItem>
            );
        }
    
        return (
            <div className={styles.container}  >
                <AppHeader/>
                <div className='contentArea' >
                    <GridList style={{marginTop:"20px"}}>
                        {apps}
                    </GridList>
                </div>
                {(()=>{
                    if(this.state.spinnerShow){
                        return (<div className={styles.spinnerContainer} > <Spinner/> </div>);
                    }else{
                        return false;
                    }
                })()}
            </div>
        );
    }
}
MainPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default  MainPage;
