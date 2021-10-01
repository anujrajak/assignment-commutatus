import { Grid, List, Card } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { getObjectById } from "../../helper/HelperApi";

const ViewTeam = () => {
  const { departments, employees } = useContext(DepartmentsContext);
  const { departmentId, teamId } = useParams();
  const [teamInfo, setTeamInfo] = useState({});
  const [departmentInfo, setDepartmentInfo] = useState({});

  useEffect(() => {
    const department = getObjectById(departments, +departmentId);
    if (department) {
      setDepartmentInfo(department);
      const team = getObjectById(department.teams, +teamId);
      if (team) {
        setTeamInfo(team);
      }
    }
  }, [departmentId, teamId, departments]);

  return (
    <>
      {departmentInfo && teamInfo && (
        <div>
          <Grid>
            <Grid.Column width={16}>
              <Card style={{ width: "50%" }}>
                <Card.Content>
                  <Card.Header textAlign="center">{teamInfo.name}</Card.Header>
                  <Card.Meta textAlign="center">
                    {departmentInfo.name}
                  </Card.Meta>
                  <Card.Description>
                    <List key="empList">
                      {teamInfo.teamMembers &&
                        employees
                          .filter(
                            ({ id }) =>
                              teamInfo.teamMembers.includes(id) ||
                              id === departmentInfo.head ||
                              id === teamInfo.teamLeader
                          )
                          .map((emp) => {
                            return (
                              <List.Item key={emp.id}>
                                <List.Content>
                                  <List.Header>{emp.name}</List.Header>
                                  {emp.position}
                                </List.Content>
                              </List.Item>
                            );
                          })}
                    </List>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link
                      to={`/updateTeam/${departmentId}/${teamId}`}
                      className="ui primary button"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/updateMembers/add/${departmentId}/${teamId}`}
                      className="ui orange button"
                    >
                      Add member
                    </Link>
                    <Link
                      to={`/updateMembers/remove/${departmentId}/${teamId}`}
                      className="ui red button"
                      color="red"
                    >
                      Remove member
                    </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
      )}
    </>
  );
};

export default ViewTeam;
