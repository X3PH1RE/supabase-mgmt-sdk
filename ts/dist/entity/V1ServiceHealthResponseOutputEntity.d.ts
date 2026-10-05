import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ServiceHealthResponseOutput, V1ServiceHealthResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1ServiceHealthResponseOutputEntity extends SupabaseMgmtEntityBase<V1ServiceHealthResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ServiceHealthResponseOutputEntity): V1ServiceHealthResponseOutputEntity;
    list(this: any, reqmatch?: V1ServiceHealthResponseOutputListMatch, ctrl?: Control): Promise<V1ServiceHealthResponseOutputEntity[]>;
}
export { V1ServiceHealthResponseOutputEntity };
