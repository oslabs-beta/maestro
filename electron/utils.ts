// converts Unix timestamp to ISO string
export function convertUnixToISOString (unixTimestamp: number) {
  return new Date(unixTimestamp*1000).toISOString()
}

// gets ISO formatted start and end time for fetch requests in main.ts
export function getStartAndEndDateTime() {
  let now: Date = new Date();
  let nowCopy: Date = new Date(now.getTime());
  nowCopy.setHours(nowCopy.getHours() - 24);
  let startDateTime: string = nowCopy.toISOString();
  let endDateTime: string = now.toISOString();
  return {
    startDateTime: startDateTime,
    endDateTime: endDateTime
  }
}

// converts bites to Gb
export function bytesToGb(num: number) {
  if (num === 0) return 0;
  const k = 1024;
  const i = Math.floor(Math.log(num) / Math.log(k));
  return (num / Math.pow(k, i));
}