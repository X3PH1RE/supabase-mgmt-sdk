import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Activate, ActivateCreateData } from '../SupabaseMgmtTypes';
declare class ActivateEntity extends SupabaseMgmtEntityBase<Activate> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ActivateEntity): ActivateEntity;
    create(this: any, reqdata?: ActivateCreateData, ctrl?: Control): Promise<ActivateEntity>;
}
export { ActivateEntity };
