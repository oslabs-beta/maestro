

const initialState: State = {
    cpuMetric: 0
} 

type State = {
    cpuMetric: number
}


// type Action = {
//     type: string,
//     payload?: any //for now.. will be updated
// }

interface CPUUsage {
    type: 'cpuMetric'
    mb: number
}

interface MemoryUsage {
    type: "memoryMetric"
    payload: number,
}

type Action = CPUUsage | MemoryUsage

const reducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case 'memoryMetric':

        case 'cpuMetric':
        default:
            return state
    }
}