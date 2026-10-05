import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { NetworkRestrictionsResponseOutput, NetworkRestrictionsResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class NetworkRestrictionsResponseOutputEntity extends SupabaseMgmtEntityBase<NetworkRestrictionsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: NetworkRestrictionsResponseOutputEntity): NetworkRestrictionsResponseOutputEntity;
    create(this: any, reqdata?: NetworkRestrictionsResponseOutputCreateData, ctrl?: Control): Promise<NetworkRestrictionsResponseOutputEntity>;
}
export { NetworkRestrictionsResponseOutputEntity };
