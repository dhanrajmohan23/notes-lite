import { Header } from "./components/common/header";
import { Sidebar } from "./components/common/sidebar";
import { Home } from "./pages/home";
import { S } from "./app.styled";

function App() {
  return (
    <>
      <Header />
      <S.MainBody>
        <Sidebar />
        <Home />
      </S.MainBody>
    </>
  );
}

export default App;
