import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { SslEnforcement, SslEnforcementLoadMatch, SslEnforcementUpdateData } from '../SupabaseMgmtTypes';
declare class SslEnforcementEntity extends SupabaseMgmtEntityBase<SslEnforcement> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SslEnforcementEntity): SslEnforcementEntity;
    load(this: any, reqmatch?: SslEnforcementLoadMatch, ctrl?: Control): Promise<SslEnforcementEntity>;
    update(this: any, reqdata?: SslEnforcementUpdateData, ctrl?: Control): Promise<SslEnforcementEntity>;
}
export { SslEnforcementEntity };
