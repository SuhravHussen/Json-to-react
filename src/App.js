import React, { useEffect } from "react";
import sampleData from "./sampleData/sampleData.json";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllComponents,
  setLoading,
} from "./features/Slices/allComponentsSlicer";
import InReactiveWay from "./Reactiveway/InReactiveWay";
import "bootstrap/dist/css/bootstrap.min.css";
// import RenderedFromJson from "./RenderedFromJson";
// import Editvalues from "./Editvalues";
// import Withoutjson from "./WithoutJson";

function App() {
  const dispatch = useDispatch();
  const allComponentsData = useSelector((state) => state.components);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setAllComponents(sampleData));
    dispatch(setLoading(false));
  }, []);

  return allComponentsData.data && !allComponentsData.loading ? (
    <>
      {/* <RenderedFromJson root={allComponentsData.data.rootNodeId} />
      <Editvalues /> */}
      {/* <Withoutjson/> */}
      <InReactiveWay id={allComponentsData.data.rootNodeId} />
    </>
  ) : (
    <p>NO DATA</p>
  );
}

export default App;
