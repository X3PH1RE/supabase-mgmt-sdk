import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { VanitySubdomain, VanitySubdomainLoadMatch } from '../SupabaseMgmtTypes';
declare class VanitySubdomainEntity extends SupabaseMgmtEntityBase<VanitySubdomain> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: VanitySubdomainEntity): VanitySubdomainEntity;
    load(this: any, reqmatch?: VanitySubdomainLoadMatch, ctrl?: Control): Promise<VanitySubdomainEntity>;
}
export { VanitySubdomainEntity };
