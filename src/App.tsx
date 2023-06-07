import { Header } from "./components/common/header";
import { Sidebar } from "./components/common/sidebar";
import { Home } from "./pages/home";
import { S } from "./app.styled";
import { store } from "./store";
import { Provider } from "react-redux";
import { Login } from "./pages/login";

function App() {
  return (
    <Provider store={store}>
      {false ? (
        <Login />
      ) : (
        <>
          <Header />
          <S.MainBody>
            <Sidebar />
            <Home />
          </S.MainBody>
        </>
      )}
    </Provider>
  );
}

export default App;
