import React from "react";
import TopMenu from "./components/TopMenu/TopMenu";
import useFetch from "./hooks/useFetch";
import Products from "./components/Products/Products";
import { urlApiProducts } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);

  return (
    <div>
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
