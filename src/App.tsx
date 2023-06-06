import { Header } from "./components/common/header";
import { Sidebar } from "./components/common/sidebar";
import { Home } from "./pages/home";
import { S } from "./app.styled";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <S.MainBody>
          <Sidebar />
          <Home />
        </S.MainBody>
      </>
    </Provider>
  );
}

export default App;
