import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserList } from "./components/UserList";
import { Navbar } from "./components/Navbar";
import { MoviesPage } from "./pages/MoviesPage";
import { MoviePage } from "./pages/MoviePage";
import { UsersTask } from "./pages/UsersTask";
import { ShopPage } from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/usersTask" element={<UsersTask />} />
        <Route path="/shoppage" element={<ShopPage />} />
      </Routes>
      {/* <UserList /> */}
    </div>
  );
}

export default App;
