import { useUserStore } from "entities/User/model/store/userStore";
import { FC, ReactElement } from "react";
import { Button } from "shared/ui/Button/Button";
import LogoutIcon from "shared/assets/icons/logout-icon.svg?react";
import "./style.css";

export const Navbar: FC = (): ReactElement => {
  const { isAuth, onLogout } = useUserStore();

  return (
    <div className="navbar">
      {isAuth ? (
        <Button onClick={onLogout} theme="clear">
          <LogoutIcon className="navbar-logout-icon" />
        </Button>
      ) : null}
    </div>
  );
};
