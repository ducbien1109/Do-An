import Login from "./features/login/components/Login";
import MainPage from "./features/spotify/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/spotify/pages/HomePage";
import SearchPage from "./features/spotify/pages/SearchPage";
import PlaylistPage from "./features/spotify/pages/PlaylistPage";
import ErrorPage from "./features/spotify/pages/ErrorPage";
import ArtistPage from "./features/spotify/pages/ArtistPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistPage />} />
        <Route path="/artist/:artistId" element={<ArtistPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
