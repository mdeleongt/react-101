import FormExample from "@/components/FormExample";

export default function () {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Anything</p>
      <Another></Another>
      <ShowInfo info="Whatever"></ShowInfo>
      <FormExample></FormExample>
    </div>
  );
}

const Another = () => <h2>Another</h2>;

function ShowInfo(props: { info: string }) {
  return <div>The info is: {props.info}</div>;
}
