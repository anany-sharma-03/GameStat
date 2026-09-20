import { useState } from "react";
import "./SearchBox.css";

function SearchBox(props) {
  const [tag, setTag] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(tag);
  }

  return (
    <section className="search-section">
      <h2>Find a Player</h2>
      <p>Enter a Clash of Clans player tag</p>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#PlayerTag"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchBox;
