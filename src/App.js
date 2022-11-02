import React, { useEffect } from "react";
import sampleData from "./sampleData/sampleData.json";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setAllComponents } from "./features/Slices/allComponentsSlicer";
import Radium from "radium";
import RenderedFromJson from "./RenderedFromJson";

function App() {
  const dispatch = useDispatch();
  const allComponentsData = useSelector((state) => state.components);
  useEffect(() => {
    dispatch(setAllComponents(sampleData));
  }, []);

  return allComponentsData.data ? (
    <RenderedFromJson root={allComponentsData.data.rootNodeId} />
  ) : (
    <p>NO DATA</p>
  );
}

export default Radium(App);
