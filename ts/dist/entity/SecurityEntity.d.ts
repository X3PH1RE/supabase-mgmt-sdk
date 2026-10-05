import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Security, SecurityListMatch } from '../SupabaseMgmtTypes';
declare class SecurityEntity extends SupabaseMgmtEntityBase<Security> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SecurityEntity): SecurityEntity;
    list(this: any, reqmatch?: SecurityListMatch, ctrl?: Control): Promise<SecurityEntity[]>;
}
export { SecurityEntity };
