import { useState, useEffect, useContext } from "react";
import {
  Header,
  Grid,
  Container,
  Form,
  Select,
  Message,
} from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { DepartmentsContext } from "../../context/DepartmentsContext";
import {
  filterEmployees,
  updateTeamMembers,
  getExistingTeamEmployees,
} from "../../helper/HelperApi";

const TeamMemberForm = () => {
  const history = useHistory();
  const { action, departmentId, teamId } = useParams();

  const { employees, setDepartments, setEmployees } =
    useContext(DepartmentsContext);
  const [employeesOptions, setEmployeesOptions] = useState([]);
  const [newMembers, setNewMembers] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (action === "add") {
      const empOptions = filterEmployees(employees);
      setEmployeesOptions(empOptions);
    } else if (action === "remove") {
      const result = getExistingTeamEmployees(departmentId, teamId);
      if (result.error) {
        setError(result.error);
      } else {
        setEmployeesOptions(result);
      }
    }
  }, [employees, departmentId, teamId, action]);

  const handleChange = (e, { name, value }) => {
    setNewMembers(value);
  };

  const handleSubmit = (e) => {
    const { updatedEmployees, updatedDepartments } = updateTeamMembers(
      newMembers,
      departmentId,
			teamId,
			action
    );
    setDepartments(updatedDepartments);
    setEmployees(updatedEmployees);
    history.push(`/departmentDetails/${departmentId}`);
  };

  return (
    <Container>
      {!error ? (
        <>
          <Header as="h3">
            {action === "add" ? "Add new" : "Remove"} team members
          </Header>
          <p>
            You can {action === "add" ? "add" : "remove"} multiple team members
            in the existing team.
					</p>
					<p>
						Below field is showing all the employees which are
						{action === "add" ? " not assigned into any teams." : " present in the team."}
          </p>
          <Grid>
            <Grid.Column width={8}>
              <Form>
                <Form.Select
                  control={Select}
                  label="Team Members"
                  placeholder="Team Memebers"
                  name="teamMembers"
                  options={employeesOptions}
                  search
                  multiple
                  onChange={handleChange}
                  selectOnBlur={false}
                />
                <button className="ui primary button" onClick={handleSubmit}>
                  Save
                </button>
              </Form>
            </Grid.Column>
          </Grid>
        </>
      ) : (
        <Message info header={error} content="" />
      )}
    </Container>
  );
};

export default TeamMemberForm;
