import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { BulkUpdateFunctionResponseOutput, BulkUpdateFunctionResponseOutputUpdateData } from '../SupabaseMgmtTypes';
declare class BulkUpdateFunctionResponseOutputEntity extends SupabaseMgmtEntityBase<BulkUpdateFunctionResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: BulkUpdateFunctionResponseOutputEntity): BulkUpdateFunctionResponseOutputEntity;
    update(this: any, reqdata?: BulkUpdateFunctionResponseOutputUpdateData, ctrl?: Control): Promise<BulkUpdateFunctionResponseOutputEntity>;
}
export { BulkUpdateFunctionResponseOutputEntity };
