import { useState } from "react";

export default function () {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked ? <div>Checked!</div> : null}
    </div>
  );
}
