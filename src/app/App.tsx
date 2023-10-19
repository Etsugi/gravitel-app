import { useUserStore } from "entities/User/model/store/userStore";
import { ReactElement, useEffect } from "react";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";

function App(): ReactElement {
  const { _initial, initAuthData } = useUserStore();

  useEffect(() => {
    initAuthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Navbar />

      <div className="content-page">{_initial ? <AppRouter /> : null}</div>
    </div>
  );
}

export default App;
