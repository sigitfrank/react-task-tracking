import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Providers from './Providers/Providers';

ReactDOM.render(<>
   <Providers>
    <App />
   </Providers>
     </>,
  document.getElementById('root')
)