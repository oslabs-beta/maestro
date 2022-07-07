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

    // const options = namespaceData.map((el: string) => { 
    //   return {value: el, label: el} 
    // })
    
    const options = [
      {value: 'default', label: 'default'},
      {value: 'kube-node-lease', label: 'kube-node-lease'},
      {value: 'kube-public', label: 'kube-public'},
      {value: 'kube-system', label: 'kube-system'},
      {value: 'kubernetes-dashboard', label: 'kubernetes-dashboard'},
    ]

    return (
      <>
        <Select options={options} />
      </>
    );
};

export default Namespace;