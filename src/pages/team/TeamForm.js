import { useState, useContext, useEffect } from "react";
import {
  Header,
  Grid,
  Container,
  Form,
  Input,
  Select,
} from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import { saveTeam } from "../../helper/HelperApi";

const TeamForm = () => {
  const history = useHistory();
  const { departmentId } = useParams();

  const { setDepartments, employees, setEmployees } =
    useContext(DepartmentsContext);

  const [teamInfo, setTeamInfo] = useState({ departmentId: +departmentId });
  const [employeesOptions, setEmployeesOptions] = useState([]);

  useEffect(() => {
    const empOptions = employees.map(({ id, name }) => {
      return {
        key: id,
        text: name,
        value: id,
      };
    });
    setEmployeesOptions(empOptions);
  }, [employees]);

  const handleChange = (e, { name, value }) => {
    const team = teamInfo;
    team[name] = value;
    setTeamInfo(team);
    console.log(teamInfo);
  };

  const handleSubmit = (e) => {
    const { updatedDepartments, updatedEmployees } = saveTeam(teamInfo);
    setEmployees(updatedEmployees);
    setDepartments(updatedDepartments);
    history.push(`/departmentDetails/${departmentId}`);
  };

  return (
    <>
      <Container>
        <Header as="h3">Add Team Details</Header>
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Field
                id="full-name"
                control={Input}
                label="Team Name"
                name="name"
                onChange={handleChange}
              />
              <Form.Field
                control={Select}
                label="Team Leader"
                name="teamLeader"
                options={employeesOptions}
                placeholder="Team Leader"
                search
                onChange={handleChange}
              />
              <Form.Field
                control={Select}
                label="Team Members"
                options={employeesOptions}
                placeholder="Team Memebers"
                name="teamMembers"
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
