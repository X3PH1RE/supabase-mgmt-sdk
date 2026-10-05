import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1OrganizationSlugResponseOutput, V1OrganizationSlugResponseOutputLoadMatch, V1OrganizationSlugResponseOutputListMatch, V1OrganizationSlugResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class V1OrganizationSlugResponseOutputEntity extends SupabaseMgmtEntityBase<V1OrganizationSlugResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1OrganizationSlugResponseOutputEntity): V1OrganizationSlugResponseOutputEntity;
    load(this: any, reqmatch?: V1OrganizationSlugResponseOutputLoadMatch, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity>;
    list(this: any, reqmatch?: V1OrganizationSlugResponseOutputListMatch, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity[]>;
    create(this: any, reqdata?: V1OrganizationSlugResponseOutputCreateData, ctrl?: Control): Promise<V1OrganizationSlugResponseOutputEntity>;
}
export { V1OrganizationSlugResponseOutputEntity };
