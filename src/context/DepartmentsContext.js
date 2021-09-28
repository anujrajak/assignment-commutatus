import { createContext, useEffect, useState } from "react";
import { getCollection } from "../helper/HelperApi";

export const DepartmentsContext = createContext();

export const DepartmentsProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setDepartments(getCollection('departments'));
    setEmployees(getCollection('employees'));
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
