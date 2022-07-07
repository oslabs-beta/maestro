import React, { Fragment, useState, FC, useEffect, useCallback } from 'react';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import { setCurrentNamespace } from './namespaceSlice';
import { getNamespaces } from './namespaceSlice';
import Select from 'react-select'


const Namespace: React.FC = () => {
    const dispatch = useAppDispatch();

    const initApp = useCallback(async () => {
      await dispatch(getNamespaces());
    }, [dispatch]);

    useEffect(() => {
      initApp();
    }, [])
  
    const namespaceData = useAppSelector(state => state.namespace.allNamespaces);
    console.log(namespaceData)
    return (
      <>
        <Select />
      </>
    );
};

export default Namespace;