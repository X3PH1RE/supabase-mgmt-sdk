import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ListEntitlementsResponseOutput, V1ListEntitlementsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1ListEntitlementsResponseOutputEntity extends SupabaseMgmtEntityBase<V1ListEntitlementsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ListEntitlementsResponseOutputEntity): V1ListEntitlementsResponseOutputEntity;
    list(this: any, reqmatch?: V1ListEntitlementsResponseOutputListMatch, ctrl?: Control): Promise<V1ListEntitlementsResponseOutputEntity[]>;
}
export { V1ListEntitlementsResponseOutputEntity };
