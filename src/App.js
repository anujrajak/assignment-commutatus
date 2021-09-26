import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { List, Divider, Header, Grid } from "semantic-ui-react";

import EmployeeDetails from "./pages/Employee/EmployeeDetails";
import AddUpdateEmployee from "./pages/Employee/AddUpdateEmployee";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <Header as="h2">Employee Management</Header>
      <Divider />
      <Router>
        <Grid>
          <Grid.Column width={4}>
            <ListExampleTree />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route path="/employee">
                <EmployeeDetails />
              </Route>
              <Route path="/updateEmployee/:id">
                <AddUpdateEmployee />
              </Route>
              <Route path="/updateEmployee">
                <AddUpdateEmployee />
              </Route>
            </Switch>
          </Grid.Column>
        </Grid>
      </Router>
    </div>
  );
}

const ListExampleTree = () => (
  <List>
    <List.Item>
        <List.Icon name="users" />
        <List.Content>
          <Link to="/employee">
            <List.Header>Employee Details</List.Header>
          </Link>
        </List.Content>
    </List.Item>
    <Divider />
    <List.Item>
      <List.Icon name="folder" />
      <List.Content>
        <List.Header>CEO</List.Header>
        <List.List>
          <List.Item>
            <List.Icon name="building" />
            <List.Content>
              <List.Header>Head of Engineering</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <List.Header>Team 1</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <List.Header>Team 2</List.Header>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="building" />
            <List.Content>
              <List.Header>Head of HR</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <List.Header>Team 1</List.Header>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="building" />
            <List.Content>
              <List.Header>Head of Design</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <List.Header>Team 1</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <List.Header>Team 2</List.Header>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
  </List>
);

export default App;
