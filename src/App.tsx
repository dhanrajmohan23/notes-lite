import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/common/header";
import { Sidebar } from "./components/common/sidebar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { RootState } from "./store";
import { setIsLogged } from "./store/app/appSlice";
import { S } from "./app.styled";

const App = () => {
  const { isLogged } = useSelector((state: RootState) => state.app);
  const userToken = Cookies.get("userToken");
  const dispatch = useDispatch();

  useEffect(() => {
    userToken && dispatch(setIsLogged(true));
  }, [userToken]);

  return (
    <>
      {userToken && isLogged ? (
        <>
          {/* <Header /> */}
          <S.MainBody>
            <Sidebar />
            <Home />
          </S.MainBody>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
