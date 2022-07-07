import React, { useCallback, useEffect, useState } from 'react'
import Alerts from '../Components/Alerts';



const AlertsContainer = (alert: any) => {

    const [ alerts, setAlerts ] = useState([])

    const renderThis = async (): Promise<any> => {
   
        const alerts: any = await window.electron.getAlerts();
        console.log(alerts)
        setAlerts(alerts)
      }
    
   useEffect(() => {
       renderThis()
   }, [])
   console.log(alerts)
   const someAlerts = alerts
   
   return (
       <>
        {someAlerts}
       </>
   );
}

export default AlertsContainer