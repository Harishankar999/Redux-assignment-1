import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../Counter/counterAction.types";

export const CounterInc = () => ({ type: COUNTER_INCREMENT });
export const CounterDec = () => ({ type: COUNTER_DECREMENT });
