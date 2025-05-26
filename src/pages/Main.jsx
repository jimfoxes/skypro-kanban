import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";


export const MainPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Outlet />
    </div>
  );
};
