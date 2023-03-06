import { expectType } from "tsd-lite";
import { sum, diff } from "simple-math";

expectType<number>(sum(1, 2));
expectType<number>(diff(2, 1));
