import { sharedName } from "@/functions/sharedState";

export default () => {
  const [name, setName] = sharedName();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main>
      Name: <input type="text" value={name} onChange={handleChange} />
      <Hello></Hello>
      <Goodbye></Goodbye>
    </main>
  );
};

const Hello = () => {
  const [name] = sharedName();
  // const [name] = useState("");
  return <p>Hello: {name}</p>;
};

const Goodbye = () => {
  const [name, setName] = sharedName();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      Goodbye name: <input type="text" value={name} onChange={handleChange} />
      <p>Goodbye: {name}</p>
    </div>
  );
};

// Redux?
