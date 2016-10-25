import React from 'react';
import styles from './Widget.css';

/**
 * Widget container
 * control all view component
 * @extends React.Component
 * @example
 * <Widget>
 *     <div> Hello Widget</div>
 * </Widget>
 */
class Widget extends React.Component{
    /**
     * nothing comments..
     * @param props
     */
    constructor(props){
        super(props);

    };
    /**
     * render widget container
     * @returns {XML}
     */
    render(){
        return (
            <div className={styles.Widget}>
                <div>{this.props.children}</div>
            </div>
        )
    };
};

export default Widget;
