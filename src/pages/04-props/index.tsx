import { useState } from "react";

export default () => {
  let [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main>
      Name: <input type="text" value={name} onChange={handleChange} />
      <Label greeting="Hello" text={name}></Label>
    </main>
  );
};

const Label = (props: { greeting: string; text: string }) => (
  <p>
    {props.greeting} {props.text}
  </p>
);
