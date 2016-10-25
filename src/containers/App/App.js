import React from 'react';
import styles from './App.css';
import { Header, HeaderColumn, HeaderTitle , Footer, Temperature, Clock } from 'obgComponents';

class App extends React.Component{
    constructor(props){
        super(props);
        this.onClickBack = this.onClickBack.bind(this);
    }

    onClickBack(){
        if(window.applicationManager) {
            window.applicationManager.getOwnerApplication(window.document).back();
        }else{
            this.props.history.goBack();
        }
    }



    /**
     * render app container
     * @returns {XML}
     */
    render(){

        return (
            <div className={styles.appMain} >
                <Header >
                    <HeaderColumn >
                        <Temperature />
                    </HeaderColumn>
                    <HeaderTitle>Title</HeaderTitle>
                    <HeaderColumn >
                        <Clock />
                    </HeaderColumn>
                </Header>
                {this.props.children}

                <Footer onClickLeftButton={this.onClickBack}>
                </Footer>

            </div>
        );
    }
}

export default  App;
