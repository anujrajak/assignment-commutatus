import { useState, useContext, useEffect } from "react";
import { Header, Grid, Container, Form, Input, Select, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { saveDepartment, filterEmployees } from "../../helper/HelperApi";
import { DepartmentsContext } from "../../context/DepartmentsContext";

const DepartmentForm = () => {
  let history = useHistory();

  const { employees, setDepartments, setEmployees } = useContext(DepartmentsContext);

  const [departmentInfo, setDepartmentInfo] = useState({});
  const [empOptions, setEmpOtions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const empOptions = filterEmployees(employees);
    setEmpOtions(empOptions);
  }, [employees]);

  const handleChange = (e, { name, value }) => {
    const depInfo = departmentInfo;
    departmentInfo[name] = value
    setDepartmentInfo(depInfo);
  };

  const handleSubmit = (e) => {
    if (departmentInfo) {
      const result = saveDepartment(departmentInfo);
      if (result.error) {
        setError(true);
      } else {
        setEmployees(result.employees);
        setDepartments(result.departments);
        history.push("/departments");
      }
    }
  };

  return (
    <>
      <Container>
        <Header as="h3">Add Department Details</Header>
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Field
                id="full-name"
                control={Input}
                label="Department Name"
                name="departmentName"
                onChange={handleChange}
              />

              <Form.Field
                control={Select}
                label="Department Head"
                placeholder="Department Head"
                name="departmentHead"
                options={empOptions}
                search
                selection
                onChange={handleChange}
              />
              {error && <Message info header='Department already exists.' content="" />}
              <button className="ui primary button" onClick={handleSubmit} >
                Save
              </button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default DepartmentForm;
