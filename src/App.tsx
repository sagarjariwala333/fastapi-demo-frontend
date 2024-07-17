import { useState } from "react";
import HorizontalMenuBar from "./components/menu";
import EmployeePage from "./modules/employee/page";
import TaskPage from "./modules/task/page";
import EmployeeTaskPage from "./modules/employee_task/page";

function App() {
  const [menuState, setMenuState] = useState("");

  const handleMenu = (menu: string) => {
    setMenuState(menu);
  };

  console.log(menuState);
  return (
    <>
      <HorizontalMenuBar handleMenu={(menu) => handleMenu(menu)} />
      {menuState.toLowerCase() === "employee" && <EmployeePage />}
      {menuState.toLowerCase() === "task" && <TaskPage />}
      {menuState.toLowerCase() === "employee task" && <EmployeeTaskPage />}
    </>
  );
}

export default App;
