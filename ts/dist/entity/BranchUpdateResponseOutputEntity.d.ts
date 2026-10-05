import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { BranchUpdateResponseOutput, BranchUpdateResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class BranchUpdateResponseOutputEntity extends SupabaseMgmtEntityBase<BranchUpdateResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: BranchUpdateResponseOutputEntity): BranchUpdateResponseOutputEntity;
    create(this: any, reqdata?: BranchUpdateResponseOutputCreateData, ctrl?: Control): Promise<BranchUpdateResponseOutputEntity>;
}
export { BranchUpdateResponseOutputEntity };
