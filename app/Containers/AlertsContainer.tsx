import React, { useCallback, useEffect, useState } from 'react'
import Alert from '../Components/Alert';



const AlertsContainer = (alert: any) => {

    const [ alerts, setAlerts ] = useState([])

    const renderThis = async (): Promise<any> => {
   
        const alerts: any = await window.electron.getAlerts();
        // console.log(alerts)
        setAlerts(alerts)
      }
    
   useEffect(() => {
       renderThis()
   }, [])
//    console.log(alerts)

   const allAlerts: any = alerts.map((el: any, i: number) => 
        <Alert
            key={`alert${i}`}
            group={el.group}
            state={el.state}
            name={el.name}
            severity={el.sever}
            description={el.description}
            summary={el.summary}
            // alerts={el.alerts}
        />
    );
   
   return (
       <>

        <div className='alerts-container'>
            {/* <h1 className='alerts-header'>Alerts</h1> */}
                {allAlerts}
        </div>
       </>
   );
}


export default AlertsContainer