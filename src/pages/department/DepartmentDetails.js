import { Header, Grid, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { getObjectById } from "../../helper/HelperApi";

const DepartmentDetails = () => {
  const { departments, employees } = useContext(DepartmentsContext);

  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={13}>
          <Header as="h3">Departments Details</Header>
          <p>Departments details and some more actions</p>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <Link to="/AddDepartment" className="ui primary right floated button mini">
            <Icon name="plus" /> New
          </Link>
        </Grid.Column>
        <Grid.Column width={16}>
          <Table color="blue" key="departmentsTable">
            <Table.Header>
              <Table.Row>
                {["ID", "Department Name", "Head", "Action"].map((title) => {
                  return (
                    <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {departments &&
                departments.map(({ name, id, teams, head }) => {
                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{getObjectById(employees, head).name}</Table.Cell>
                      <Table.Cell>
                        <Link
                          to={`/departmentDetails/${id}`}
                          className="ui primary button mini"
                        >
                          <Icon name="eye" /> View
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default DepartmentDetails;
