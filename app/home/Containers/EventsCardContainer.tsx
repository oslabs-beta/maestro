import React, { useCallback, useEffect, useState } from 'react'
import AlertCard from '../Components/AlertCard';
import EventCard from '../Components/EventCard';
import LogCard from '../Components/LogCard';
import { useAppSelector } from '../../state/hooks';

const EventsCardContainer = (props: any) => {
  // let allNamespaces: string[] = useAppSelector(state => state.namespace.allNamespaces) 
  // console.log(allNamespaces)
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace) 
  const [ alerts, setAlerts ] = useState([])
  const [ logs, setLogs ] = useState([])
  const [ events, setEvents ] = useState([])

  const renderThis = async (): Promise<any> => {
    if (props.eventType === 'alerts') {
      const alerts: any = await window.electron.getAlerts(/*namespace*/);
      setAlerts(alerts)
    }
    else if (props.eventType === 'logs') {
      // const logs: any = await window.electron.getLogs(namespace)
      setLogs(logs)
    }
    else if (props.eventType === 'events') {
      // const events: any = await window.electron.getEvents(namespace)
      setEvents(events)
    }
  }

  useEffect(() => {
    namespace = 'default';
    renderThis()
  }, [])

  useEffect(() => {
    renderThis()
  }, [props, namespace])

  const allAlerts: any = alerts.map((el: any, i: number) => 
    <AlertCard
      key={`alert${i}`}
      group={el.group}
      state={el.state}
      name={el.name}
      severity={el.severity}
      description={el.description}
      summary={el.summary}
      // alerts={el.alerts}
    />
  );

  const allLogs: any = logs.map((el: any, i: number) => 
    <LogCard
      // key={`alert${i}`}
      // group={el.group}
      // state={el.state}
      // name={el.name}
      // severity={el.sever}
      // description={el.description}
      // summary={el.summary}
      // alerts={el.alerts}
    />
  );
  
  const allEvents: any = events.map((el: any, i: number) => 
    <LogCard
      // key={`alert${i}`}
      // group={el.group}
      // state={el.state}
      // name={el.name}
      // severity={el.sever}
      // description={el.description}
      // summary={el.summary}
      // alerts={el.alerts}
    />
); 
  
  return (
    <div className='events-card-container'>
      {props.eventType === 'alerts' && allAlerts}
      {props.eventType === 'logs' && allLogs}
      {props.eventType === 'events' && allEvents}
    </div>
  );
}


export default EventsCardContainer