import React from "react";
import {
  Redirect,
  Route,
  MemoryRouter as Router,
  Switch,
} from "react-router-dom";
import { ExtensionProvider } from "@looker/extension-sdk-react";
import MainLayout from "./Layout/MainLayout";

export const App = ({}) => {
  return (
    <ExtensionProvider>
      {/* <MainLayout /> */}
      <Router>
        <Switch>
          {/* Home route */}
          <Route exact path="/" component={MainLayout} />

          {/* Redirect /profile to Looker dashboard */}
          <Route
            path="/people"
            render={() => <Redirect to="https://www.google.com/" />}
          />

          {/* Catch-all fallback: redirect unknown routes to home */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </ExtensionProvider>
  );
};
