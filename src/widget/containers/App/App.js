import React from 'react';
import styles from './App.css';


class App extends React.Component{
    /**
     * nothing comments..
     * @param props
     */
    constructor(props){
        super(props);

    }



    /**
     * render app container
     * @returns {XML}
     */
    render(){
    
        return (
            <div className={styles.appMain} >
            {/*
                <Header history={this.props.history} />
                <div className={styles.contentArea} >{this.props.children}</div>
                */}
                {this.props.children}
            </div>
        );
    }
}

export default  App;
