
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './i18n';


ReactDOM.render(
    <Suspense fallback={(<b style={{textAlign : 'center'}}><div className="spinner-border" role="status">
    <span className="sr-only"></span>
  </div></b>)}>
        <App />
    </Suspense>
    , document.getElementById('root'));