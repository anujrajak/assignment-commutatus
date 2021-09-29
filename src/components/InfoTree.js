import {
  List,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { DepartmentsContext } from "../context/DepartmentsContext";
import { useContext } from "react";

const InfoTree = () => {
  const { departments } = useContext(DepartmentsContext);

  return (
    <List>
      <ListItem icon="users" label="Employee Details" route="/employee" id="usersList" />
      <Divider />
      <List.Item key="deps&teams">
        <List.Icon name="user" />
        <List.Content>
          <Link to="/departments">
            <List.Header>CEO</List.Header>
          </Link>
					<List.List key="departments">
						{departments && departments.map(department => {
							return <ListItem
								id={department.id}
								label={department.name}
								icon='building'
								route={`/departmentDetails/${department.id}`}
							/>
						})}
					</List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};

const ListItem = ({ id, icon, route, label }) => {
  return (
    <List.Item key={id}>
      <List.Icon name={icon} />
      <List.Content>
        <Link to={route}>
          <List.Header>{label}</List.Header>
				</Link>
      </List.Content>
    </List.Item>
  );
};

export default InfoTree;
