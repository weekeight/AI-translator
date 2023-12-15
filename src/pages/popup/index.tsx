import React from 'react';
import {createRoot} from 'react-dom/client';
import '@pages/popup/index.scss';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/popup');

function init() {
    const container = document.querySelector('#app-container');

    if(!container) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(container);
    root.render(<Popup />);
}

init();

