import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { RolesResponseOutput, RolesResponseOutputRemoveMatch } from '../SupabaseMgmtTypes';
declare class RolesResponseOutputEntity extends SupabaseMgmtEntityBase<RolesResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: RolesResponseOutputEntity): RolesResponseOutputEntity;
    remove(this: any, reqmatch?: RolesResponseOutputRemoveMatch, ctrl?: Control): Promise<RolesResponseOutputEntity>;
}
export { RolesResponseOutputEntity };
