import React, { Fragment, useState, FC, useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import { setCurrentNamespace, getAllNamespaces } from './namespaceSlice';
import Select from 'react-select'


// const namespaces = useAppSelector(state => state.namespace)
// const dispatch = useAppDispatch()

// const getSomeNamespaces = async (): Promise<Record<string, number | string>>  => {
//   let res = await window.electron.getNamespace()
//   let finalRes = await res
//   let array = []
//   array.push(finalRes)
//   getAllNamespaces(array)
//   return finalRes
// }

// const promiseMeThis = async (): Promise<any> => {
//   const pleaseWork = await getSomeNamespaces()
// }
//const receivedData = promiseMeThis()

const Namespace: React.FC = () => {
  
    const namespaceData = useAppSelector(state => state.namespace.allNamespaces);
    return (
      <>
        <Select />
      </>
    );
};

export default Namespace;