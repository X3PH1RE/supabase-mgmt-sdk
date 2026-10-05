import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Organization, OrganizationCreateData } from '../SupabaseMgmtTypes';
declare class OrganizationEntity extends SupabaseMgmtEntityBase<Organization> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    create(this: any, reqdata?: OrganizationCreateData, ctrl?: Control): Promise<OrganizationEntity>;
}
export { OrganizationEntity };
