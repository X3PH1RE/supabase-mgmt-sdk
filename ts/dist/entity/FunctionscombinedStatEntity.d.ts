import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { FunctionscombinedStat, FunctionscombinedStatListMatch } from '../SupabaseMgmtTypes';
declare class FunctionscombinedStatEntity extends SupabaseMgmtEntityBase<FunctionscombinedStat> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: FunctionscombinedStatEntity): FunctionscombinedStatEntity;
    list(this: any, reqmatch?: FunctionscombinedStatListMatch, ctrl?: Control): Promise<FunctionscombinedStatEntity[]>;
}
export { FunctionscombinedStatEntity };
