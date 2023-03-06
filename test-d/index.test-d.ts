import { expectType } from 'tsd';
import { sum, diff } from 'simple-math';

expectType<number>(sum(1, 2));
expectType<number>(diff(2, 1));