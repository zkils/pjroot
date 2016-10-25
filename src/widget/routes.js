import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, MainPage} from './containers';

/**
 * 최상위 Route와 Child Route를 선언
 * @example
 * <Route path='/' component={App}>
 *     <Route path='/child' compnent={child} />
 * </Route>
 */
/**
 * Index Route 지정
 * @example
 * <IndexRoute component={Home}/>
 */
/**
 * Child Route - Path와 Component를 지정
 * @example
 * <Route path='/foo' component={Foo}/>
 */
//TODO Home,Foo,Bar Container는 추후 삭제
export default (
    <Route path='/'  name='App' component={App} >
        <IndexRoute component={MainPage} />
        <Route path='/main' name='main' component={MainPage} />

        {/*
        <Route path='/foo' component={Foo}/>
        */}
    </Route>
);
