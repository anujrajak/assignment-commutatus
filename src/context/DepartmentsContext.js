import { createContext, useEffect, useState } from "react";
import { getCollection, loadDepartmentsData, loadEmployeesData } from "../helper/HelperApi";

export const DepartmentsContext = createContext();

export const DepartmentsProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let deps = getCollection('departments');
    let emps = getCollection('employees');
    if (!deps.length) {
      deps = loadDepartmentsData();
    }
    if (!emps.length) {
      emps = loadEmployeesData();
    }
    setDepartments(deps);
    setEmployees(emps);
  }, []);

  return (
    <DepartmentsContext.Provider
      value={{
        departments,
        setDepartments,
        employees,
        setEmployees
      }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};
