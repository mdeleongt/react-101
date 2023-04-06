import { useState } from "react";

export default function () {
  const startingList = ["Alice", "Bob", "Charlie"];
  const [names, setNames] = useState(startingList);
  const [newName, setNewName] = useState("");

  const handleAddName = () => {
    setNames([...names, newName]); // ?
    setNewName("");
  };

  return (
    <div>
      <h1>Names:</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li> // ?
        ))}
      </ul>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleAddName}>Add Name</button>
    </div>
  );
}
