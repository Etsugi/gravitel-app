import { useUserStore } from "entities/User/model/store/userStore";
import { ReactElement, useEffect } from "react";
import { AppRouter } from "./providers/router";

function App(): ReactElement {
  const { _initial, initAuthData } = useUserStore();

  useEffect(() => {
    initAuthData();
  }, []);

  return (
    <div>
      {/* navbar */}

      {_initial ? <AppRouter /> : null}
    </div>
  );
}

export default App;
