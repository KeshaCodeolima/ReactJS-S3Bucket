import { Route, Routes } from "react-router-dom";
import Mainpage from "./Components/mainpage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
