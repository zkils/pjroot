import React from 'react';
import Button from 'obgComponents/Button/Button';

class Test extends React.Component{
    constructor(props){
        super(props);

        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);
        this.onClick4 = this.onClick4.bind(this);
        this.onClick5 = this.onClick5.bind(this);
        this.onClick6 = this.onClick6.bind(this);
    }
    componentDidMount(){
        this.c1 = this.context.obgEvents.on('click1',()=>{
            console.log('tb1 click1');
        });
        this.c2 = this.context.obgEvents.on('click2', this.test );
        this.c3 = this.context.obgEvents.on('click3', ()=>{
            console.log('testzzzz');
        });
    }
    test(){
        console.log('test comp');
    }
    onClick1(){
        this.context.obgEvents.trigger('click1');
        this.context.obgEvents.off('click1',this.c1);

    }
    onClick2(){
        this.context.obgEvents.trigger('click2','aaaa');
    }
    onClick3(){
        this.context.obgEvents.trigger('click3');
    }

    onClick4() {
        this.context.obgEvents.trigger('click1');
    }

    onClick5() {
        this.context.obgEvents.trigger('click2', 'aaaa');
    }

    onClick6() {
        this.context.obgEvents.trigger('click3');
    }


    /**
     * render app container
     * @returns {XML}
     */
    render(){

        return (
            <div>
                <Button label='tb1' onClick={this.onClick1} />
                <Button label='tb2' onClick={this.onClick2}/>

            </div>
        );
    }
    static get contextTypes(){
        return {
            obgTheme:React.PropTypes.object,
            obgEvents:React.PropTypes.object,
            intl:React.PropTypes.object,
        };
    }
}

export default  Test;