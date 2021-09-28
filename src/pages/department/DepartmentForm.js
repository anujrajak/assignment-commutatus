import { useState } from "react";
import { Header, Grid, Container, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { saveDepartment } from "../../helper/HelperApi";

const DepartmentForm = () => {
  let history = useHistory();

  const [name, setName] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name) {
      const result = saveDepartment(name);
      if (!result) {
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

export default DepartmentForm;
