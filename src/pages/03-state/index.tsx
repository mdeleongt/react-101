import { useState } from "react";

export default () => {
  // let name = "";
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // name = event.target.value;
    setName(event.target.value);
  };

  return (
    <main>
      Name: <input type="text" value={name} onChange={handleChange} />
      <p>Hello {name}</p>
    </main>
  );
};
