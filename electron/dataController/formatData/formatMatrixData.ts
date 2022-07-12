import { convertUnixToISOString, bytesToGb } from '../../utils';

interface matrixData {
    result: [
        metric: {},
        values: Array<[number, string]>,
    ], 
    resultType: string,
}

/**
 * 
 * @param data 
 * @param unitType 
 * @returns object with group type (node, namespace, pod), timestamps and timeSeriesData
 * @note timeSeriesValues for memory are converted to GB
 */

export function formatMatrixData(data: matrixData, unitType?: string) {
    return data.result.reduce((acc: any, curr: any) => {
        const group = Object.keys(curr.metric)[0]
        acc[group] = {}
        acc[group].timestamps = curr.values.map((el: [number, string]) => convertUnixToISOString(el[0]));
        acc[group].timeSeriesValue = unitType === 'bytes' ? 
        curr.values.map((el: [number, string]) => bytesToGb(parseInt(el[1]))) :
        curr.values.map((el: [number, string]) => parseInt(el[1]));
        return acc;
    }, {});
}
