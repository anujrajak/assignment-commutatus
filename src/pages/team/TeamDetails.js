import { Header, Grid, Icon, Table } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { getObjectById } from "../../helper/HelperApi";

const TeamDetails = () => {
  const { departments } = useContext(DepartmentsContext);
  const { id } = useParams();

  const [departmentInfo] = useState(getObjectById(departments, id));

  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={6}>
          <Header as="h3">{departmentInfo && departmentInfo.name}</Header>
          <p>Below are the team details present under this department</p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Link to={`/addTeam/${id}`} className="ui primary button mini">
            <Icon name="plus" /> New
          </Link>
        </Grid.Column>
        <Grid.Column width={12}>
          <Table color="blue" key="departmentsTable">
            <Table.Header>
              <Table.Row>
                {["ID", "Team Name", "Team Leader", "Action"].map((title) => {
                  return (
                    <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {departmentInfo &&
                departmentInfo.teams.map(({ name, id }) => {
                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>
                        <Link
                          to={`/department/${id}`}
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

export default TeamDetails;
