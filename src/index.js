import React from 'react';
import ReactDOM from 'react-dom';
import Datepicker from './components/Datepicker';
// You can put in props language  es - espanola, pl - poland, and en-gb - english great britain

ReactDOM.render(
    <Datepicker language={'en-gb'}/>,
    document.getElementById('root')
);

