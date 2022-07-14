import { convertUnixToISOString, bytesToGb } from '../../utils';

interface matrixData {
    result: [
        metric: {},
        values: Array<[number, string]>,
    ], 
    resultType: string,
}

interface output {
    [key: string]: {
        timestamps: string[]
        timeSeriesValues: number[]
    }
}

/**
 * 
 * @param data 
 * @param unitType 
 * @returns object with group type (node, namespace, pod), timestamps and timeSeriesData
 * @note timeSeriesValues for memory are converted to GB
 */

export function formatMatrixData(data: matrixData, unitType?: string) {
    const output: output = {};

    data.result.forEach((obj: any) => {
        const group: string = obj.metric[Object.keys(obj.metric)[0]];

        output[group] = {
            timestamps: [],
            timeSeriesValues: []
        };

        output[group].timestamps = obj.values.map((el: [number, string]) => convertUnixToISOString(el[0]));

        //convert bytes to GB when unit type is bytes
        output[group].timeSeriesValues = unitType === 'bytes' ? 
        obj.values.map((el: [number, string]) => bytesToGb(Number(el[1])).toFixed(5)) :
        obj.values.map((el: [number, string]) => Number(el[1]).toFixed(5));
    });

    return output;
}

