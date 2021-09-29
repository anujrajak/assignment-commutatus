import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { List, Divider, Header, Grid } from "semantic-ui-react";

import { DepartmentsProvider } from "./context/DepartmentsContext";

import EmployeeDetails from "./pages/employee/EmployeeDetails";
import AddUpdateEmployee from "./pages/employee/AddUpdateEmployee";

import DepartmentDetails from "./pages/department/DepartmentDetails";
import DepartmentForm from "./pages/department/DepartmentForm";
import TeamDetails from "./pages/team/TeamDetails";
import TeamForm from "./pages/team/TeamForm";

function App() {
  return (
    <DepartmentsProvider>
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
                <Route path="/departmentDetails/:id">
                  <TeamDetails />
                </Route>
                <Route path="/addDepartment">
                  <DepartmentForm />
                </Route>
                <Route path="/departments">
                  <DepartmentDetails />
                </Route>
                <Route path="/addTeam/:departmentId">
                  <TeamForm />
                </Route>
                <Route path="/updateTeam/:departmentId/:teamId">
                  <TeamForm />
                </Route>
              </Switch>
            </Grid.Column>
          </Grid>
        </Router>
      </div>
    </DepartmentsProvider>
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

    <List.Item>
      <List.Icon name="user" />
      <List.Content>
        <Link to="/departments">
          <List.Header>CEO</List.Header>
        </Link>
        <List.List>
          <List.Item>
            <List.Icon name="building" />
            <List.Content>
              <Link to="/department/1">
                <List.Header>Head of Engineering</List.Header>
              </Link>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
  </List>
);

export default App;
