import { render, screen } from '@testing-library/react';
import InfoTree from './InfoTree';
import { DepartmentsContext } from "../context/DepartmentsContext";
import { BrowserRouter as Router } from "react-router-dom";

test('renders the hierarchy structure', () => {

    let employees = [{
        "id": 1,
        "name": "Jaime Bernard",
        "email": "jaimebernard@boink.com",
        "phoneNumber": "+1 (993) 442-2118",
        "departmentId": 1,
        "position": "head"
    }];

    let departments = [{
        "name": "head of engineering",
        "head": 1,
        "teams": [{
            "departmentId": 1,
            "name": "Team 1",
            "teamLeader": 4,
            "teamMembers": [5, 6, 7],
            "id": 1
        }],
        "id": 1
    }];

    render(
        <DepartmentsContext.Provider value={{ employees, departments }}>
            <Router>
                <InfoTree />
            </Router>
        </DepartmentsContext.Provider>
    );

    expect(screen.getByText(/CEO/i)).toBeInTheDocument();
    expect(screen.getByText(/head of engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Team 1/i)).toBeInTheDocument();
});