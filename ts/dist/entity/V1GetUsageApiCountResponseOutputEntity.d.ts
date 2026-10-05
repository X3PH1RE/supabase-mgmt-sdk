import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1GetUsageApiCountResponseOutput, V1GetUsageApiCountResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1GetUsageApiCountResponseOutputEntity extends SupabaseMgmtEntityBase<V1GetUsageApiCountResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1GetUsageApiCountResponseOutputEntity): V1GetUsageApiCountResponseOutputEntity;
    list(this: any, reqmatch?: V1GetUsageApiCountResponseOutputListMatch, ctrl?: Control): Promise<V1GetUsageApiCountResponseOutputEntity[]>;
}
export { V1GetUsageApiCountResponseOutputEntity };
