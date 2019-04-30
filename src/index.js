import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";

ReactDOM.render(
  <BrowserRouter>
      <Route path="/" render={props => <Index {...props} />} />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();