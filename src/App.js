import { useState } from "react";
import "./App.css";
import Input from "./input/Input";
import Preview from "./preview/Preview";

function App() {
  const [url, setUrl] = useState("");

  const onSubmit = async (data) => {
    const response = await fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      return response;
    });

    const url = await response.text();

    console.log(url);

    setUrl(url);
  };

  return (
    <div className="App">
      <Input onSubmit={onSubmit} />
      <Preview url={url} />
    </div>
  );
}

export default App;
