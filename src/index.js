/**
 * Entry Point of App
 * Create Store with i18n data
 * Set history for routing
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { IntlProvider} from 'react-intl-redux';
import ObgThemeProvider from 'theme/ObgThemeProvider';
import { intlData } from './i18n/initIntl';
import ObgEventsProvider from 'obgEvents/ObgEventsProvider';
import 'resources/css/reset.css';

import routes from './routes';

const store = configureStore(intlData);
const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider key='intl' {...intlData}>
            <ObgThemeProvider >
                <ObgEventsProvider>
                    <Router history={history} routes={routes}/>
                </ObgEventsProvider>
            </ObgThemeProvider>
        </IntlProvider>
    </Provider>,
    document.getElementById('app')
);
