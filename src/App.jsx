import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/sign-in" element={<SignIn />}>
          Sign In
        </Route>
        <Route path="/sign-up" element={<SignUp />}>
          Sign Up
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/profile" element={<Profile />}>
          Profile
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
