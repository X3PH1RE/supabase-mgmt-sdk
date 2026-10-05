import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Branch, BranchLoadMatch, BranchListMatch, BranchCreateData, BranchUpdateData, BranchRemoveMatch } from '../SupabaseMgmtTypes';
declare class BranchEntity extends SupabaseMgmtEntityBase<Branch> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    load(this: any, reqmatch?: BranchLoadMatch, ctrl?: Control): Promise<BranchEntity>;
    list(this: any, reqmatch?: BranchListMatch, ctrl?: Control): Promise<BranchEntity[]>;
    create(this: any, reqdata?: BranchCreateData, ctrl?: Control): Promise<BranchEntity>;
    update(this: any, reqdata?: BranchUpdateData, ctrl?: Control): Promise<BranchEntity>;
    remove(this: any, reqmatch?: BranchRemoveMatch, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
