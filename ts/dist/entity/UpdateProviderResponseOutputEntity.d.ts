import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { UpdateProviderResponseOutput, UpdateProviderResponseOutputUpdateData } from '../SupabaseMgmtTypes';
declare class UpdateProviderResponseOutputEntity extends SupabaseMgmtEntityBase<UpdateProviderResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: UpdateProviderResponseOutputEntity): UpdateProviderResponseOutputEntity;
    update(this: any, reqdata?: UpdateProviderResponseOutputUpdateData, ctrl?: Control): Promise<UpdateProviderResponseOutputEntity>;
}
export { UpdateProviderResponseOutputEntity };
