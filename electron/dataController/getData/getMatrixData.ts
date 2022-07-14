import { formatMatrixData } from '../formatData/formatMatrixData';
const fetch: any = (...args: any) =>
  import('node-fetch').then(({ default: fetch }:any) => fetch(...args));

export async function fetchMetricsData(query: string, unitType?: string) {
    try {
        const res = await fetch(query);
        const data = await res.json();
        
        return formatMatrixData(data.data, unitType);
        // return data
    } catch (err) {
        console.log(err);
    }
}