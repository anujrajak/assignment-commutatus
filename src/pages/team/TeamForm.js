import { useState, useContext, useEffect } from "react";
import {
  Header,
  Grid,
  Container,
  Form,
  Input,
  Select,
  List,
} from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import {
  saveTeam,
  getExistingTeam,
  getObjectById,
  updateTeam,
  filterEmployees,
} from "../../helper/HelperApi";

const TeamForm = () => {
  const history = useHistory();
  const { departmentId, teamId } = useParams();

  const { departments, setDepartments, employees, setEmployees } =
    useContext(DepartmentsContext);

  const [teamInfo, setTeamInfo] = useState({ departmentId: +departmentId });
  const [employeesOptions, setEmployeesOptions] = useState([]);
  const [leaderOptions, setLeaderOptions] = useState([]);
  const [updateAction, setUpdateAction] = useState(false);

  useEffect(() => {
    const empOptions = filterEmployees(employees, teamId, departmentId);
    setEmployeesOptions(empOptions);
    setLeaderOptions(empOptions);
  }, [employees, departmentId, teamId, departments]);

  useEffect(() => {
    const existingInfo = getExistingTeam(departmentId, teamId, departments);
    if (existingInfo.id) {
      setTeamInfo(existingInfo);
      setUpdateAction(true);
      console.log(teamInfo);
    }
  }, [employees, departmentId, teamId, departments, teamInfo]);

  const handleChange = (e, { name, value }) => {
    const team = teamInfo;
    team[name] = value;
    setTeamInfo(team);
    console.log(teamInfo);
    if (name === "teamLeader") {
      const filterEmployeesOptions = filterEmployees(
        employees,
        teamId,
        departmentId
      ).filter((emp) => {
        return emp.value !== value;
      });
      setEmployeesOptions(filterEmployeesOptions);
    }
  };

  const handleSubmit = (e) => {
    let result;
    if (updateAction) {
      result = updateTeam(teamInfo);
    } else {
      result = saveTeam(teamInfo);
    }
    setEmployees(result.updatedEmployees);
    setDepartments(result.updatedDepartments);
    history.push(`/departmentDetails/${departmentId}`);
  };

  return (
    <>
      <Container>
        <Header as="h3">
          {teamId && departmentId ? "Update" : "Add"} Team Details
        </Header>
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Field
                id="full-name"
                control={Input}
                label="Team Name"
                name="name"
                defaultValue={(updateAction && teamInfo.name) || ""}
                onChange={handleChange}
              />
              {updateAction && teamInfo && teamInfo.teamLeader && (
                <p>Old team leader : {getObjectById(employees, teamInfo.teamLeader).name}</p>
              )}
              <Form.Field
                control={Select}
                label="Team Leader"
                name="teamLeader"
                options={leaderOptions}
                placeholder="Team Leader"
                search
                onChange={handleChange}
              />
              {updateAction && teamInfo && teamInfo.teamMembers.length && (
                <>
                  <List.Item as="li" value="*">
                    Old team members
                    <List.Item as="ol">
                      {teamInfo.teamMembers.map((mem) => {
                        return (
                          <List.Item key={mem.id} as="li" value="-">
                            {getObjectById(employees, mem).name}
                          </List.Item>
                        );
                      })}
                    </List.Item>
                  </List.Item>
                </>
              )}
              <Form.Dropdown
                control={Select}
                label="Team Members"
                placeholder="Team Memebers"
                name="teamMembers"
                options={employeesOptions}
                search
                multiple
                selection
                onChange={handleChange}
              />

              <button className="ui primary button" onClick={handleSubmit}>
                Save
              </button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default TeamForm;
