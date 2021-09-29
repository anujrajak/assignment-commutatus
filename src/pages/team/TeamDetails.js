import { Header, Grid, Icon, Table, List } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { getObjectById } from "../../helper/HelperApi";

const TeamDetails = () => {
  const { departments, employees } = useContext(DepartmentsContext);
  const { id: departmentId } = useParams();

  const [departmentInfo, setDepartmentInfo] = useState();

  useEffect(() => {
    setDepartmentInfo(getObjectById(departments, +departmentId));
  }, [departments, departmentId])

  return (
    <>
      {departmentInfo && (<div>
        <Grid>
          <Grid.Column floated="left" width={13}>
            <Header as="h3">{departmentInfo && departmentInfo.name}</Header>
            <p>Below are the team details of selected present under this department</p>
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <Link to={`/addTeam/${departmentId}`} className="ui primary right floated button mini">
              <Icon name="plus" /> New
            </Link>
          </Grid.Column>
          <Grid.Column width={16}>
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
                            Edit
                          </Link>
                          <Link to={`/updateMembers/add/${departmentId}/${id}`} className="ui orange button mini">
                            Add member
                          </Link>
                          <Link to={`/updateMembers/remove/${departmentId}/${id}`} className="ui red button mini" color='red'>
                            Remove member
                          </Link>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </div>)}
    </>
  );
};

export default TeamDetails;
