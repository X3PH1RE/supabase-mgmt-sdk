import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { OrganizationProjectClaimResponseOutput, OrganizationProjectClaimResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class OrganizationProjectClaimResponseOutputEntity extends SupabaseMgmtEntityBase<OrganizationProjectClaimResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: OrganizationProjectClaimResponseOutputEntity): OrganizationProjectClaimResponseOutputEntity;
    load(this: any, reqmatch?: OrganizationProjectClaimResponseOutputLoadMatch, ctrl?: Control): Promise<OrganizationProjectClaimResponseOutputEntity>;
}
export { OrganizationProjectClaimResponseOutputEntity };
