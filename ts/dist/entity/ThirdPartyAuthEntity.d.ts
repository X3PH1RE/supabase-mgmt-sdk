import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ThirdPartyAuth, ThirdPartyAuthLoadMatch, ThirdPartyAuthListMatch, ThirdPartyAuthCreateData, ThirdPartyAuthRemoveMatch } from '../SupabaseMgmtTypes';
declare class ThirdPartyAuthEntity extends SupabaseMgmtEntityBase<ThirdPartyAuth> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ThirdPartyAuthEntity): ThirdPartyAuthEntity;
    load(this: any, reqmatch?: ThirdPartyAuthLoadMatch, ctrl?: Control): Promise<ThirdPartyAuthEntity>;
    list(this: any, reqmatch?: ThirdPartyAuthListMatch, ctrl?: Control): Promise<ThirdPartyAuthEntity[]>;
    create(this: any, reqdata?: ThirdPartyAuthCreateData, ctrl?: Control): Promise<ThirdPartyAuthEntity>;
    remove(this: any, reqmatch?: ThirdPartyAuthRemoveMatch, ctrl?: Control): Promise<ThirdPartyAuthEntity>;
}
export { ThirdPartyAuthEntity };
