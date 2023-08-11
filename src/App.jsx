import { BrowserRouter as Router } from "react-router-dom";
import Header from "../public/header";
import Main from "../public/main"

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Main/>
      </>
    </Router>
  );
};

export default App;
