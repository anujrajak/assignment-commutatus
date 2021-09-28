import {
  Header,
  Container,
  Form,
  Grid,
  Input,
} from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  saveEmployee,
  getEmployeeById,
  updateEmployeeInfo,
} from "../../helper/HelperApi";

const AddUpdateEmployee = () => {
  let history = useHistory();

  const [employee, setEmployee] = useState({});
  const [updateAction, setUpdateAction] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    const existingInfo = getEmployeeById(+id);
    if (existingInfo && existingInfo.email) {
      setEmployee({ ...existingInfo });
      setUpdateAction(true);
    }
  }, [id]);

  const handleChange = (e) => {
    let emp = employee;
    emp[e.target.name] = e.target.value;
    setEmployee(emp);
    console.log(id);
  };

  const handleSubmit = () => {
    let emp = employee;
    if (updateAction) {
      updateEmployeeInfo(emp);
    } else {
      saveEmployee("employees", emp);
    }
    history.push("/employee");
  };

  return (
    <>
      <Container>
        <Header as="h3">{id ? "Update" : "Add"} Employee Details </Header>
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Field
                id="full-name"
                control={Input}
                label="Name"
                name="name"
                defaultValue={(updateAction && employee && employee.name) || ""}
                placeholder="joe schmoe"
                onChange={handleChange}
              />
              <Form.Field
                id="phone-number"
                control={Input}
                label="Phone Number"
                name="phoneNumber"
                defaultValue={
                  (updateAction && employee && employee.phoneNumber) || ""
                }
                onChange={handleChange}
              />
              <Form.Field
                id="email"
                control={Input}
                label="Email"
                name="email"
                defaultValue={
                  (updateAction && employee && employee.email) || ""
                }
                placeholder="joe@schmoe.com"
                onChange={handleChange}
              />
              <button className="ui primary button" onClick={handleSubmit}>Save</button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default AddUpdateEmployee;
