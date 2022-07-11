const fetch:any = (...args:any) =>
  import('node-fetch').then(({ default: fetch }:any) => fetch(...args));

export function convertUnixToISOString (unixTimestamp: number) {
    return new Date(unixTimestamp*1000).toISOString()
  }

export function getStartAndEndDateTime() {
    let now: Date = new Date();
    let nowCopy: Date = new Date(now.getTime());
  
    nowCopy.setHours(nowCopy.getHours() - 24);
    let startDateTime: string = nowCopy.toISOString();
    let endDateTime: string = now.toISOString();
    console.log('startDateTime', startDateTime)
    console.log('endDateTime', endDateTime)
  
    return {
      startDateTime: startDateTime,
      endDateTime: endDateTime
    }
  }

export async function fetchMetricsData(query: string) {
    try {
        const res = await fetch(query);
        const data = await res.json();
        return data.data
    } catch (err) {
        console.log(err)
    }
}