import { formatMatrixData } from '../formatData/formatMatrixData';
const fetch: any = (...args: any) =>
  import('node-fetch').then(({ default: fetch }:any) => fetch(...args));

export async function fetchMetricsData(query: string, unitType?: string) {
    try {
        const res = await fetch(query);
        const data = await res.json();
        
        //return data
        return formatMatrixData(data.data, unitType);
    } catch (err) {
        console.log(err);
    }
}