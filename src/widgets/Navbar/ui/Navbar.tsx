import { useUserStore } from "entities/User/model/store/userStore";
import { FC, ReactElement } from "react";
import { Button } from "shared/ui/Button/Button";
import "./style.css";

export const Navbar: FC = (): ReactElement => {
  const { isAuth, onLogout } = useUserStore();

  return <div className="navbar">{isAuth ? <Button title="Выйти" onClick={onLogout}></Button> : null}</div>;
};
