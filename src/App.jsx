import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
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
