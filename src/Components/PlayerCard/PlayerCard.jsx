import "./PlayerCard.css";

function PlayerCard(props) {
  return (
    <div className="player-card">
      <h2>{props.playername}</h2>

      <div className="main-stats">
        <div>
          <span>Town Hall</span>
          <strong>{props.townhall}</strong>
        </div>

        <div>
          <span>Level</span>
          <strong>{props.level}</strong>
        </div>
      </div>

      <div className="trophies">
        <strong>🏆 {props.trophies}</strong>
        <span>Trophies</span>
      </div>

      <div className="clan">
        <span>Clan</span>
        <strong>{props.clan || "No Clan"}</strong>
      </div>

      <div className="win-stats">
        <div>
          <span>⚔ Attack Wins</span>
          <strong>{props.attackWins}</strong>
        </div>

        <div>
          <span>🛡 Defense Wins</span>
          <strong>{props.defenseWins}</strong>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
