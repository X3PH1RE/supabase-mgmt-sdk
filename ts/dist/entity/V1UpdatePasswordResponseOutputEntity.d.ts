import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1UpdatePasswordResponseOutput, V1UpdatePasswordResponseOutputUpdateData } from '../SupabaseMgmtTypes';
declare class V1UpdatePasswordResponseOutputEntity extends SupabaseMgmtEntityBase<V1UpdatePasswordResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1UpdatePasswordResponseOutputEntity): V1UpdatePasswordResponseOutputEntity;
    update(this: any, reqdata?: V1UpdatePasswordResponseOutputUpdateData, ctrl?: Control): Promise<V1UpdatePasswordResponseOutputEntity>;
}
export { V1UpdatePasswordResponseOutputEntity };
