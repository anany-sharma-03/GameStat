import Navbar from "./Components/Navbar/Navbar";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSearch(tag) {
    setLoading(true);
    setSelectedPlayer(null);
    setNotFound(false);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/player?tag=${encodeURIComponent(tag)}`,
      );

      if (!response.ok) {
        throw new Error("Failed to Fetch the player");
      }

      const data = await response.json();

      setSelectedPlayer(data);
      setNotFound(false);
    } catch (error) {
      console.log(error);
      setSelectedPlayer(null);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/coc-bg.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="app-content">
        <Navbar />
        <SearchBox onSearch={handleSearch} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Searching for player...</p>
          </div>
        )}

        {notFound && <p>❌ Player not found</p>}

        {selectedPlayer && (
          <PlayerCard
            playername={selectedPlayer.playername}
            townhall={selectedPlayer.townhall}
            level={selectedPlayer.level}
            trophies={selectedPlayer.trophies}
            clan={selectedPlayer.clan}
            attackWins={selectedPlayer.attackWins}
            defenseWins={selectedPlayer.defenseWins}
          />
        )}
      </div>
    </>
  );
}

export default App;
