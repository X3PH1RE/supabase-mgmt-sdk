import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { NetworkRestriction, NetworkRestrictionLoadMatch, NetworkRestrictionUpdateData } from '../SupabaseMgmtTypes';
declare class NetworkRestrictionEntity extends SupabaseMgmtEntityBase<NetworkRestriction> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: NetworkRestrictionEntity): NetworkRestrictionEntity;
    load(this: any, reqmatch?: NetworkRestrictionLoadMatch, ctrl?: Control): Promise<NetworkRestrictionEntity>;
    update(this: any, reqdata?: NetworkRestrictionUpdateData, ctrl?: Control): Promise<NetworkRestrictionEntity>;
}
export { NetworkRestrictionEntity };
