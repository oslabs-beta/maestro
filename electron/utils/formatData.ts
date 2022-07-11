export default function convertUnixToISOString (unixTimestamp: number) {
    return new Date(unixTimestamp*1000).toISOString()
  }