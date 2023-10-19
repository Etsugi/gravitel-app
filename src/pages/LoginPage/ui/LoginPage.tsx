import { FC, ReactElement, memo } from "react";
import "./style.css";
import { Input } from "shared/ui/Input/Input";

export const LoginPage: FC = memo((): ReactElement => {
  return (
    <div className="login-page">
      <h1>Вход</h1>
      <p className="login-page__subtitle">Уникальная технология доступна для вашего бизнеса уже сейчас!</p>

      <form className="login-page__form">
        <Input placeholder="Логин" />
        <Input placeholder="Пароль" />
        {/* input */}
        {/* input */}
        {/* button */}
      </form>
    </div>
  );
});
