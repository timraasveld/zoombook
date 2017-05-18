import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

nw.Window.open('public/index.html', {}, function(win) {
  win.on('loaded', function() {
    debugger;
    ReactDOM.render(
      <App />,
      win.window.document.getElementById('root')
    );
  })
});
