import React from 'react';
import {Header, HeaderColumn, HeaderTitle} from 'obgComponents';
import styles from "./AppHeader.css";


class AppHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time : "",
            timeUpdatePeriod : 6000
        };
        this.updateTime = this.updateTime.bind(this);

    }
    componentDidMount(){
        this.updateTime();
        setInterval(this.updateTime, this.state.timeUpdatePeriod);

    }
    updateTime(){
        let newDate = new Date();
        let h = newDate.getHours().toString();
        let m = newDate.getMinutes().toString();
        if(h.length == 1){
            h = "0"+h;
        }
        if(m.length == 1){
            m = "0" + m;
        }
        this.setState({
            time :h +" : "+m
        });
    }

    render(){
        return (
            <Header>
                <HeaderColumn>24 ℃</HeaderColumn>
                <HeaderTitle className={styles.title} >Launcher</HeaderTitle>
                <HeaderColumn>{this.state.time}</HeaderColumn>
            </Header>
        );
    }
}

AppHeader.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default  AppHeader;
