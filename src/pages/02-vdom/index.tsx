interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Click me!</button>;
};

export default () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    prompt = "Changed";
    console.log("Got a click!");
  };

  let prompt = "This is the button: ";

  return (
    <div>
      {prompt}
      <Button onClick={handleClick}></Button>
    </div>
  );
};
