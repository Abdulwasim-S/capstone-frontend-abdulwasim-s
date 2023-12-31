import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Routers/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage from "./Routers/SignUpPage";
import ActivatePage from "./Routers/ActivatePage";
import CheckMail from "./Routers/CheckMail";
import Forgetpassword from "./Routers/ForgetPasswordPage";
import ResetPage from "./Routers/ResetPage";
import MarkdownCreatePage from "./Routers/MarkdownCreatePage";
import MarkdownPage from "./Routers/MarkdownPage";

function App() {
  return (
    <div className="App">
      <Routes exact path="/">
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/activation" element={<ActivatePage />}></Route>
        <Route path="/checkmail" element={<CheckMail />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword" element={<ResetPage />} />
        <Route path="/createmarkdownpage" element={<MarkdownCreatePage />} />
        <Route path="/markdownpage" element={<MarkdownPage />} />
      </Routes>
    </div>
  );
}

export default App;
