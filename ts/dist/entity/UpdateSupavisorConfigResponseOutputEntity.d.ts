import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { UpdateSupavisorConfigResponseOutput, UpdateSupavisorConfigResponseOutputUpdateData } from '../SupabaseMgmtTypes';
declare class UpdateSupavisorConfigResponseOutputEntity extends SupabaseMgmtEntityBase<UpdateSupavisorConfigResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: UpdateSupavisorConfigResponseOutputEntity): UpdateSupavisorConfigResponseOutputEntity;
    update(this: any, reqdata?: UpdateSupavisorConfigResponseOutputUpdateData, ctrl?: Control): Promise<UpdateSupavisorConfigResponseOutputEntity>;
}
export { UpdateSupavisorConfigResponseOutputEntity };
