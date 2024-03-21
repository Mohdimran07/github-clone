import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ExplorePage from "./pages/ExplorePage";
import Login from "./pages/Login";
import { LikesPage } from "./pages/LikesPage";

import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
