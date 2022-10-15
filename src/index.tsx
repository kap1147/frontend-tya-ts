import ReactDOM from 'react-dom/client';
import React from 'react';
import type * as CSS from 'csstype';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const style: CSS.Properties = {
    color: 'green',
    margin: '1em',
  };

const App = () => {
    return (
        <div>
            <h3 style={style}>Hello World</h3>
        </div>
    );
};

root.render(<App />);
