import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { CreateRoleResponseOutput, CreateRoleResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class CreateRoleResponseOutputEntity extends SupabaseMgmtEntityBase<CreateRoleResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: CreateRoleResponseOutputEntity): CreateRoleResponseOutputEntity;
    create(this: any, reqdata?: CreateRoleResponseOutputCreateData, ctrl?: Control): Promise<CreateRoleResponseOutputEntity>;
}
export { CreateRoleResponseOutputEntity };
