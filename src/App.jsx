import { Suspense } from "react";
import "./App.css";
import Bottles from "./component/Bottles/Bottles";

const bottlePromise = fetch("bottles.json").then((response) => response.json());

function App() {
  return (
    <>
      <h1>Battles</h1>
      <Suspense fallback={<h4>Please wait Battles are loading...</h4>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
