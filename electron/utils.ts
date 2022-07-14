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
      startDateTime: '2022-07-08T21:43:40.141Z',
      endDateTime: endDateTime
    }
  }
 // '2022-07-1T21:43:40.141Z'
  export function bytesToGb(num: number) {
    if (num === 0) return 0;

    const k = 1024;
    const i = Math.floor(Math.log(num) / Math.log(k));

    return (num / Math.pow(k, i));
}