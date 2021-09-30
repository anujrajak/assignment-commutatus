import {
  Header,
  Container,
  Form,
  Grid,
  Select,
  Message,
} from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { DepartmentsContext } from "../../context/DepartmentsContext";

import { changeTeam } from "../../helper/HelperApi";

const ChangeTeam = () => {
  const history = useHistory();
  const { departmentId, teamId, employeeId } = useParams();

  const { departments, setEmployees, setDepartments } =
    useContext(DepartmentsContext);

  const [newInfo, setNewInfo] = useState({});
  const [oldInfo] = useState({
    oldDep: +departmentId,
    oldTeam: +teamId
  });
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(true);

  useEffect(() => {
    setDepartmentOptions(
      departments.map(({ id, name }) => {
        return {
          key: id,
          text: name,
          value: id,
        };
      })
    );
  }, [departmentId, teamId, departments, employeeId]);

  const handleChange = (e, { name, value }) => {
    const info = newInfo;
    info[name] = value;

    if (name === "departmentId") {
      // preventing from assigning HR member to Design team
      // Hard coding these values since no other way identify
      // whether department is HR or design.
      // HR = 2, Design = 3
      if (+departmentId === 2 && +value === 3) {
        setError("Any employee from HR can't be moved to the design Team.");
      } else {
        setError(null);
        const department = departments.find((dep) => dep.id === value);
        if (department) {
          setTeamOptions(
            department.teams.map(({ id, name }) => {
              return {
                key: id,
                text: name,
                value: id
              };
            })
          );
        }
        info.teamId = null;
      }
      setNewInfo(info);
    }

    // Checking Validation
    if (info["departmentId"] && info["teamId"]) {
      setFormError(false);
    }
  };

  const handleSubmit = (e) => {
    const result = changeTeam(oldInfo, newInfo, employeeId);
    if (result.error) {
      setError(result.error);
    } else {
      setDepartments(result.updatedDepartments);
      setEmployees(result.updatedEmployees);
      history.push(`/employee`);
    }
  };

  return (
    <>
      <Container>
        <Header as="h3">Change Team Details</Header>
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Dropdown
                control={Select}
                label="Departments"
                name="departmentId"
                placeholder="Department"
                options={departmentOptions}
                onChange={handleChange}
                selectOnBlur={false}
              />

              {<Form.Field
                control={Select}
                label="Teams"
                name="teamId"
                placeholder="Team"
                search
                options={teamOptions}
                onChange={handleChange}
                selectOnBlur={false}
              />}

              {error && <Message info header={error} />}

              <button className="ui primary button" onClick={handleSubmit} disabled={formError}>
                Save
              </button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default ChangeTeam;
