import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainComponent from './src/components/MainComponent';
import { createStore } from 'redux';
import { rootReducer } from './src/store/reducers';

const store = createStore(rootReducer);
// render(<Provider store={store}><WrappedAppComponent /></Provider>, document.getElementById('root'));
render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('root'));

export const ACTION_CHANGE_FIRSTNAME = 'ACTION_CHANGE_FIRSTNAME';
export const ACTION_CHANGE_SECONDNAME = 'ACTION_CHANGE_SECONDNAME';



