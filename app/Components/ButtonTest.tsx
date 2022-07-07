import React from 'react';

const renderThis= async (): Promise<any> => {
    // Use IPC API to query Electron's main thread and run this method
    // const result = await window.electron.getAlerts()
    // const result2 = await window.electron.getEvents()
    const namespace = await window.electron.getNamespace()

    // console.log("after1",result)
    // console.log("after2",result2)
    console.log(namespace)
  }

const ButtonTest = (): JSX.Element => {
    return (
        <>
            <button onClick={renderThis}>show me a button</button>
        </>
    );
};

export default ButtonTest;