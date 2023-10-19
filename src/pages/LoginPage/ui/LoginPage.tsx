import { FC, ReactElement, memo, useState, useCallback, ChangeEvent } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import "./style.css";

export const LoginPage: FC = memo((): ReactElement => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }, []);

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(login, password);
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      <p className="login-page__subtitle">Уникальная технология доступна для вашего бизнеса уже сейчас!</p>

      <form onSubmit={onSubmit} className="login-page__form">
        <Input value={login} onChange={onChangeLogin} placeholder="Логин" />
        <Input value={password} onChange={onChangePassword} placeholder="Пароль" />

        <Button title="Войти" />
      </form>
    </div>
  );
});
