import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { SubdomainAvailabilityResponseOutput, SubdomainAvailabilityResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class SubdomainAvailabilityResponseOutputEntity extends SupabaseMgmtEntityBase<SubdomainAvailabilityResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SubdomainAvailabilityResponseOutputEntity): SubdomainAvailabilityResponseOutputEntity;
    create(this: any, reqdata?: SubdomainAvailabilityResponseOutputCreateData, ctrl?: Control): Promise<SubdomainAvailabilityResponseOutputEntity>;
}
export { SubdomainAvailabilityResponseOutputEntity };
