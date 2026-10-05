import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { OrganizationProjectsResponseOutput, OrganizationProjectsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class OrganizationProjectsResponseOutputEntity extends SupabaseMgmtEntityBase<OrganizationProjectsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: OrganizationProjectsResponseOutputEntity): OrganizationProjectsResponseOutputEntity;
    list(this: any, reqmatch?: OrganizationProjectsResponseOutputListMatch, ctrl?: Control): Promise<OrganizationProjectsResponseOutputEntity[]>;
}
export { OrganizationProjectsResponseOutputEntity };
