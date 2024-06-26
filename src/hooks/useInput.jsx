import { useState } from "react";

function useInput(value = "") {
  const [data, setData] = useState(value);
  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  return { data, onChange: handleChange };
}

export default useInput;
