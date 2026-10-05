import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1OrganizationMemberResponseOutput, V1OrganizationMemberResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1OrganizationMemberResponseOutputEntity extends SupabaseMgmtEntityBase<V1OrganizationMemberResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1OrganizationMemberResponseOutputEntity): V1OrganizationMemberResponseOutputEntity;
    list(this: any, reqmatch?: V1OrganizationMemberResponseOutputListMatch, ctrl?: Control): Promise<V1OrganizationMemberResponseOutputEntity[]>;
}
export { V1OrganizationMemberResponseOutputEntity };
