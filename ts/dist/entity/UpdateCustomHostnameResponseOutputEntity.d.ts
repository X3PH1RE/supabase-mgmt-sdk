import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { UpdateCustomHostnameResponseOutput, UpdateCustomHostnameResponseOutputLoadMatch, UpdateCustomHostnameResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class UpdateCustomHostnameResponseOutputEntity extends SupabaseMgmtEntityBase<UpdateCustomHostnameResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: UpdateCustomHostnameResponseOutputEntity): UpdateCustomHostnameResponseOutputEntity;
    load(this: any, reqmatch?: UpdateCustomHostnameResponseOutputLoadMatch, ctrl?: Control): Promise<UpdateCustomHostnameResponseOutputEntity>;
    create(this: any, reqdata?: UpdateCustomHostnameResponseOutputCreateData, ctrl?: Control): Promise<UpdateCustomHostnameResponseOutputEntity>;
}
export { UpdateCustomHostnameResponseOutputEntity };
