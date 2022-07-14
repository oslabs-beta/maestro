import React, { Fragment, useState, FC, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setCurrentNamespace } from "./namespaceSlice";
import { getNamespacesForState } from "./namespaceSlice";
import Select from "react-select";

const Namespace: React.FC = () => {
  const dispatch = useAppDispatch();
  const [namespaces, setNamespaces] = useState([]);

  const initApp = useCallback(async () => {
    await dispatch(getNamespacesForState());
  }, [dispatch]);

  useEffect(() => {
    initApp();
    getNamespaces();
  }, []);

  const getNamespaces = async () => {
    const namespaces = await window.electron.getNamespaces();
    setNamespaces(namespaces);
  };

  const options: any = namespaces.map((el: string) => {
    return { value: el, label: el };
  });

  const handleNamespaceChange = (e: any) =>
    dispatch(setCurrentNamespace(e.value));

  return (
    <div className="namespace-container">
      <Select
        className="namespace-dropdown"
        defaultValue="default"
        onChange={handleNamespaceChange}
        options={options}
        placeholder="Namespace"
      />
    </div>
  );
};

export default Namespace;
