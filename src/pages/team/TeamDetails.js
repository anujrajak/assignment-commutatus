import { Header, Grid, Icon, Table, List } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { getObjectById } from "../../helper/HelperApi";

const TeamDetails = () => {
  const { departments, employees } = useContext(DepartmentsContext);
  const { id: departmentId } = useParams();

  const [departmentInfo] = useState(getObjectById(departments, departmentId));

  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={6}>
          <Header as="h3">{departmentInfo && departmentInfo.name}</Header>
          <p>Below are the team details present under this department</p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Link to={`/addTeam/${departmentId}`} className="ui primary button mini">
            <Icon name="plus" /> New
          </Link>
        </Grid.Column>
        <Grid.Column width={12}>
          <Table color="blue" key="departmentsTable">
            <Table.Header>
              <Table.Row>
                {["ID", "Team Name", "Team Leader", "Team Members", "Action"].map((title) => {
                  return (
                    <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {departmentInfo &&
                departmentInfo.teams.map(({ name, id, teamLeader, teamMembers }) => {
                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{getObjectById(employees, teamLeader).name}</Table.Cell>
                      <Table.Cell>
                        <List key={id} items={teamMembers.map(mem => {
                          return getObjectById(employees, mem).name
                        })} />
                      </Table.Cell>
                      <Table.Cell>
                        <Link to={`/updateTeam/${departmentId}/${id}`} className="ui primary button mini">
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

export default TeamDetails;
