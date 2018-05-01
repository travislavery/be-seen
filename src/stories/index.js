import React from 'react';
import 'babel-polyfill'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {rootReducer} from '../App/reducers/reducers'
import thunkMiddleware from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import NavbarContainer from '../App/Navbar/NavbarContainer'

storiesOf('NavbarContainer', module)
	.addDecorator((story) => (<Provider store={store}>
						      {story()}
						    </Provider>))
	.add('default', ()=><NavbarContainer />)

import SectionContainer from '../App/Section/SectionContainer'

storiesOf('SectionContainer', module)
	.addDecorator((story) => (<Provider store={store}>
						      {story()}
						    </Provider>))
	.add('default', ()=> <SectionContainer id_string="home" />)

import App from '../App'

storiesOf('Full Application', module)
	.addDecorator((story) => (<Provider store={store}>
						      {story()}
						    </Provider>))
	.add('overview', ()=> <App />)