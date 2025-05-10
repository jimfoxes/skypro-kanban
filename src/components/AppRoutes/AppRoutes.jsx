import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/Main";
import { SignInPage } from "../../pages/SignIn";
import { SignUpPage } from "../../pages/SignUp";
import { PopNewCardPage } from "../../pages/PopNewCard";
import { PopBrowsePage } from "../../pages/PopBrowse";
import { PopExitPage } from "../../pages/PopExit";
import { NotFoundPage } from "../../pages/NotFound";
import PrivateRoute from "../PrivateRoute"

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/new" element={<PopNewCardPage />} />
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
