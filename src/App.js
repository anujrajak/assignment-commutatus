import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Header,
  Grid,
  Container,
  Segment,
} from "semantic-ui-react";

import { DepartmentsProvider } from "./context/DepartmentsContext";

import EmployeeDetails from "./pages/employee/EmployeeDetails";
import AddUpdateEmployee from "./pages/employee/AddUpdateEmployee";

import DepartmentDetails from "./pages/department/DepartmentDetails";
import DepartmentForm from "./pages/department/DepartmentForm";
import TeamDetails from "./pages/team/TeamDetails";
import TeamForm from "./pages/team/TeamForm";
import TeamMemberForm from "./pages/team/TeamMemberForm";
import ChangeTeam from "./pages/employee/ChangeTeam";

import InfoTree from "./components/InfoTree";
import ViewTeam from "./pages/team/ViewTeam";

function App() {
  return (
    <DepartmentsProvider>
      <Container style={{ padding: "1rem" }}>
        <Header as="h2" attached="top">
          React Assignment
        </Header>
        <Segment attached>
          <Router>
            <Grid>
              <Grid.Column mobile={16} tablet={4} computer={4}>
                <InfoTree />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={12} computer={12}>
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
                  <Route path="/updateMembers/:action/:departmentId/:teamId">
                    <TeamMemberForm />
                  </Route>
                  <Route path="/changeTeam/:departmentId/:teamId/:employeeId">
                    <ChangeTeam />
                  </Route>
                  <Route path="/viewTeam/:departmentId/:teamId">
                    <ViewTeam />
                  </Route>
                  <Route path="/">
                    <EmployeeDetails />
                  </Route>
                </Switch>
              </Grid.Column>
            </Grid>
          </Router>
        </Segment>
      </Container>
    </DepartmentsProvider>
  );
}

export default App;
