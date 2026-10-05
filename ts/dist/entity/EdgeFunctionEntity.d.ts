import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { EdgeFunction, EdgeFunctionRemoveMatch } from '../SupabaseMgmtTypes';
declare class EdgeFunctionEntity extends SupabaseMgmtEntityBase<EdgeFunction> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: EdgeFunctionEntity): EdgeFunctionEntity;
    remove(this: any, reqmatch?: EdgeFunctionRemoveMatch, ctrl?: Control): Promise<EdgeFunctionEntity>;
}
export { EdgeFunctionEntity };
