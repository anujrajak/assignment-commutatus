import { Header, Grid, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCollection } from "../../helper/HelperApi";

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    let collection = getCollection("employees");
    setEmployees(collection);
    console.log(collection);
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={6}>
          <Header as="h3">Employee Details</Header>
          <p>Emplyee details and some more actions</p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Link to="/updateEmployee" className="ui primary button">
            <Icon name="plus" /> New
          </Link>
        </Grid.Column>
        <Grid.Column width={12}>
          <Table color="blue" key="employeesTable">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {employees &&
                employees.map(({ id, name, email, phoneNumber }) => {
                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{email}</Table.Cell>
                      <Table.Cell>{phoneNumber}</Table.Cell>
                      <Table.Cell>
                        <Link to={`/updateEmployee/${id}`} className="ui primary button">
                          <Icon name="edit" /> Edit
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

export default EmployeeDetails;
