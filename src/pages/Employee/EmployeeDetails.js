import { Header, Grid, Button, Icon, Table } from "semantic-ui-react";
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
    <>
      <Grid>
        <Grid.Column floated="left" width={6}>
          <Header as="h3">Employee Details</Header>
          <p>Emplyee details and some more actions</p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Link to="/updateEmployee">
            <Button color="blue">
              <Icon name="plus" /> Add New
            </Button>
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
                        <Button.Group>
                          <Link to={`/updateEmployee/${id}`}>
                            <Button icon color="blue">
                              <Icon name="edit" /> Edit
                            </Button>
                          </Link>
                        </Button.Group>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EmployeeDetails;
