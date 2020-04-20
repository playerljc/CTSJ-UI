import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js/lib/index';

import Router from './router';

import './index.less';

hljs.initHighlightingOnLoad();
ReactDOM.render(Router, document.getElementById('app'));
