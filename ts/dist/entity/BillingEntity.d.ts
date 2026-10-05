import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Billing, BillingUpdateData, BillingRemoveMatch } from '../SupabaseMgmtTypes';
declare class BillingEntity extends SupabaseMgmtEntityBase<Billing> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: BillingEntity): BillingEntity;
    update(this: any, reqdata?: BillingUpdateData, ctrl?: Control): Promise<BillingEntity>;
    remove(this: any, reqmatch?: BillingRemoveMatch, ctrl?: Control): Promise<BillingEntity>;
}
export { BillingEntity };
