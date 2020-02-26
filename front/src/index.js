import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import './js/helpers/i18n';
import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(
    <Suspense fallback ={<div>Chargement ... </div>}>
	    <App />
    </Suspense>		
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
