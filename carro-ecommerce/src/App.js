import React from "react";
import TopMenu from "./components/TopMenu/TopMenu";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constants";

function App() {
  const result = useFetch(urlApiProducts);

  console.log(result);
  return (
    <div>
      <TopMenu />
    </div>
  );
}

export default App;
