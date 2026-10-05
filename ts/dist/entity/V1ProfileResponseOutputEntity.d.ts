import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ProfileResponseOutput, V1ProfileResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class V1ProfileResponseOutputEntity extends SupabaseMgmtEntityBase<V1ProfileResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ProfileResponseOutputEntity): V1ProfileResponseOutputEntity;
    load(this: any, reqmatch?: V1ProfileResponseOutputLoadMatch, ctrl?: Control): Promise<V1ProfileResponseOutputEntity>;
}
export { V1ProfileResponseOutputEntity };
