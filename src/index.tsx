import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { BackendService } from "./backend";
import "./index.css";
import TicketsList from "./TicketsList/TicketsList";
import TicketDetails from "./TicketDetails/TicketDetails";

const backend = new BackendService();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/ticket/:id">
            <TicketDetails backend={backend} />
          </Route>
          <Route path="/">
            <TicketsList backend={backend} />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
