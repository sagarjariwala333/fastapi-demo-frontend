import { useEffect, useState } from "react";
import EmployeeTaskForm from "./components/EmployeeTaskForm";
import EmployeeTaskTable from "./components/EmployeeTaskTable";
import {
  getEmployeeTask,
  getEmployees,
  getTasks,
} from "../../services/dataService";

function getMappingsWithDetails(
  mappings: any[],
  employees: any[],
  tasks: any[]
) {
  return mappings.map((mapping: { employeeId: any; taskId: any; id: any }) => {
    const employee = employees.find(
      (emp: { id: any }) => emp.id === mapping.employeeId
    );
    const task = tasks.find((tsk: { id: any }) => tsk.id === mapping.taskId);

    return {
      mappingId: mapping.id,
      taskId: mapping.taskId,
      task: task ? task.name : null,
      employeeId: mapping.employeeId,
      employee: employee ? employee.name : null,
    };
  });
}

const EmployeeTaskPage = () => {
  const [dataState, setDataState] = useState([]);

  const fetchData = async () => {
    const mapping = (await getEmployeeTask()).getEmployeeTask;
    const employees = (await getEmployees()).getEmployees;
    const tasks = (await getTasks()).getTasks;
    const data = getMappingsWithDetails(mapping, tasks, employees);
    setDataState(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <EmployeeTaskForm fetchData={fetchData} />
      <EmployeeTaskTable employeeTasks={dataState} />
    </>
  );
};

export default EmployeeTaskPage;
