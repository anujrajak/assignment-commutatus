import { Header, Grid, Icon, Table, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCollection } from "../../helper/HelperApi";

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let collection = getCollection("employees");
    setEmployees(collection);
    setSearchResults(collection);
    console.log(collection);
  }, []);

  /**
   * Personally I don't think this is the correct way to implement
   * the searching but I want to avoid any other npm package so
   * implemented this logic.
   */
  const searchEmployee = (e, { value }) => {
    if (value) {
      const newEmployeeList = employees.filter((employee) => {
        return Object.values(employee)
          .join(" ")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setSearchResults(newEmployeeList);
    } else {
      setSearchResults(employees);
    }
  };

  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={13}>
          <Header as="h3">Employee Details</Header>
          <p>Emplyee details and some more actions</p>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <Link to="/updateEmployee" className="ui primary right floated button mini">
            <Icon name="plus" /> New
          </Link>
        </Grid.Column>
        <Grid.Column width={16}>
          <Table key="employeesTable" celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan={5}>
                  <p>Please enter any employee details to search.</p>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Input
                    icon="search"
                    placeholder="Search..."
                    className="mini"
                    onChange={searchEmployee}
                  />
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Position</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {searchResults &&
                searchResults.map(
                  ({ id, name, email, phoneNumber, position, departmentId, teamId }) => {
                    return (
                      <Table.Row key={id}>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{email}</Table.Cell>
                        <Table.Cell>{phoneNumber}</Table.Cell>
                        <Table.Cell>{position}</Table.Cell>
                        <Table.Cell width={2}>
                          <Link
                            to={`/updateEmployee/${id}`}
                            className="ui primary center floated button mini"
                          >
                            <Icon name="edit" /> Edit
                          </Link>

                          {departmentId && teamId && id && position === 'team member' && <Link
                            to={`/changeTeam/${departmentId}/${teamId}/${id}`}
                            className="ui secondary center floated button mini"
                          >
                            Change Team
                          </Link>}
                        </Table.Cell>
                      </Table.Row>
                    );
                  }
                )}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EmployeeDetails;
