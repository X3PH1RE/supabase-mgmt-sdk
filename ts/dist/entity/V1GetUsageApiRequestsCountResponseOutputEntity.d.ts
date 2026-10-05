import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1GetUsageApiRequestsCountResponseOutput, V1GetUsageApiRequestsCountResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1GetUsageApiRequestsCountResponseOutputEntity extends SupabaseMgmtEntityBase<V1GetUsageApiRequestsCountResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1GetUsageApiRequestsCountResponseOutputEntity): V1GetUsageApiRequestsCountResponseOutputEntity;
    list(this: any, reqmatch?: V1GetUsageApiRequestsCountResponseOutputListMatch, ctrl?: Control): Promise<V1GetUsageApiRequestsCountResponseOutputEntity[]>;
}
export { V1GetUsageApiRequestsCountResponseOutputEntity };
