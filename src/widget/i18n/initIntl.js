/**
 * Initialize i18n message
 */
import * as messageList from './messages';
import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import fr from 'react-intl/locale-data/fr';
// import message list and add to locale data
addLocaleData([...en, ...fr, ...ko, ...ja]);

const LOCALE = navigator.language || 'en';
export const intlData = {
    intl:{
        locale: LOCALE,
        messages:messageList[LOCALE]
    }
};