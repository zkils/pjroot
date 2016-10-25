/**
 * Entry Point of App
 * Create Store with i18n data
 * Set history for routing
 * 특별한 경우 외에는 수정하지 않음
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { IntlProvider} from 'react-intl-redux';
import { intlData } from './i18n/initIntl';
import 'resources/css/reset.css';
import 'libs/app_manager';
//import 'libs/ccpInputControl';
import 'libs/consoleSwitch';
// import 'libs/geolocation';
// import 'libs/util';

import routes from './routes';

const store = configureStore(intlData);
const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider key='intl' {...intlData}>
            <Router history={history} routes={routes}/>
        </IntlProvider>
    </Provider>,
    document.getElementById('app')
);
