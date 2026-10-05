import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { CreateProviderResponseOutput, CreateProviderResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class CreateProviderResponseOutputEntity extends SupabaseMgmtEntityBase<CreateProviderResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: CreateProviderResponseOutputEntity): CreateProviderResponseOutputEntity;
    create(this: any, reqdata?: CreateProviderResponseOutputCreateData, ctrl?: Control): Promise<CreateProviderResponseOutputEntity>;
}
export { CreateProviderResponseOutputEntity };
