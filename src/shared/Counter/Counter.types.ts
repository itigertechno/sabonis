export interface ICounter {
    onChange: (newValue: number) => void,
    startValue: number,
    staticCount?: boolean,
}
