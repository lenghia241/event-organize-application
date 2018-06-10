import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import UserDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => {
            return (
              <div>
                <NavBar />
                <Container className="main">
                  <Switch>
                    <Route path="/events" component={EventDashboard} />
                    <Route path="/events/:id" component={EventDetailedPage} />
                    <Route path="/people" component={PeopleDashboard} />
                    <Route path="/profile/:id" component={UserDetailedPage} />
                    <Route path="/settings" component={SettingsDashboard} />
                    <Route path="/createEvent" component={EventForm} />
                  </Switch>
                </Container>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
