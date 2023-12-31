import { useUserStore } from "entities/User";
import { ChangeEvent, FC, ReactElement, memo, useCallback } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import "./style.css";

export const LoginPage: FC = memo((): ReactElement => {
  const { username, password, setUsername, setPassword, onLogin } = useUserStore();

  const onChangeLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      <p className="login-page__subtitle">Уникальная технология доступна для вашего бизнеса уже сейчас!</p>

      <form onSubmit={onSubmit} className="login-page__form">
        <Input value={username} onChange={onChangeLogin} placeholder="Логин" />
        <Input value={password} onChange={onChangePassword} placeholder="Пароль" />

        <Button>Войти</Button>
      </form>
    </div>
  );
});
