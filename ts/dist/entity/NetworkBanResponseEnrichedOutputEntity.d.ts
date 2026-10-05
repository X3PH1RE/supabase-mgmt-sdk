import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { NetworkBanResponseEnrichedOutput, NetworkBanResponseEnrichedOutputCreateData } from '../SupabaseMgmtTypes';
declare class NetworkBanResponseEnrichedOutputEntity extends SupabaseMgmtEntityBase<NetworkBanResponseEnrichedOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: NetworkBanResponseEnrichedOutputEntity): NetworkBanResponseEnrichedOutputEntity;
    create(this: any, reqdata?: NetworkBanResponseEnrichedOutputCreateData, ctrl?: Control): Promise<NetworkBanResponseEnrichedOutputEntity>;
}
export { NetworkBanResponseEnrichedOutputEntity };
