/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { getEmployees } from "../../services/dataService";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { useEffect, useState } from "react";

const EmployeePage = () => {
  const [dataState, setDataState] = useState([]);

  const addEmployee = async (employee: never) => {
    setDataState([...dataState, employee]);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setDataState(data.getEmployees);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <div className="mb-8">
        <EmployeeForm addEmployee={(data) => addEmployee(data)} />
      </div>
      <EmployeeTable employees={dataState} />
    </div>
  );
};

export default EmployeePage;
