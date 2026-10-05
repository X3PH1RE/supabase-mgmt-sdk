import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { NetworkBanResponseOutput, NetworkBanResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class NetworkBanResponseOutputEntity extends SupabaseMgmtEntityBase<NetworkBanResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: NetworkBanResponseOutputEntity): NetworkBanResponseOutputEntity;
    create(this: any, reqdata?: NetworkBanResponseOutputCreateData, ctrl?: Control): Promise<NetworkBanResponseOutputEntity>;
}
export { NetworkBanResponseOutputEntity };
