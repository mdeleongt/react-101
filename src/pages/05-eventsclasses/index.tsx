import { useState } from "react";

() => <input type="text" className="m-2 text-gray-500" />;

export default function Dynamic() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`main-class ${isSelected ? "selected" : ""}`}>
      <button onClick={() => setIsSelected(!isSelected)}>
        {isSelected ? "Selected" : "Not Selected"}
      </button>
    </div>
  );
}
