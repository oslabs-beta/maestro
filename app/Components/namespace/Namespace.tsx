import React, { Fragment, useState, FC, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setCurrentNamespace } from "./namespaceSlice";
import { getNamespaces } from "./namespaceSlice";
import Select from "react-select";

const Namespace: React.FC = () => {
  const dispatch = useAppDispatch();
  const [namespace, setNamespace] = useState([]);

  const initApp = useCallback(async () => {
    await dispatch(getNamespaces());
  }, [dispatch]);

  useEffect(() => {
    initApp();
    getNamespace();
  }, []);

  const namespaceData = useAppSelector(
    (state) => state.namespace.allNamespaces
  );
  // console.log(namespaceData)
  //add dispatch to current namespace reducers
  // console.log(namespaceData, "namespace")

  // const options = namespaceData.map((el: string) => {
  //   return {value: el, label: el}
  // })

  const getNamespace = async () => {
    const namespace = await window.electron.getNamespaces();
    setNamespace(namespace);
  };

  const options = namespace.map((el: string) => {
    return { value: el, label: el };
  });

  console.log(options, "namespace", namespace);

  return (
    <>
      <Select options={options} />
    </>
  );
};

export default Namespace;
