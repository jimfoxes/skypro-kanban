import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import TasksProvider from "../context/TasksProvider";

export const MainPage = () => {
  return (
    <TasksProvider>
      <div className="wrapper">
        <Header />
        <Main />
        <Outlet />
      </div>
    </TasksProvider>
  );
};
