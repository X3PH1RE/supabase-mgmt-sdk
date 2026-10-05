import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1RestorePoint, V1RestorePointLoadMatch, V1RestorePointCreateData } from '../SupabaseMgmtTypes';
declare class V1RestorePointEntity extends SupabaseMgmtEntityBase<V1RestorePoint> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1RestorePointEntity): V1RestorePointEntity;
    load(this: any, reqmatch?: V1RestorePointLoadMatch, ctrl?: Control): Promise<V1RestorePointEntity>;
    create(this: any, reqdata?: V1RestorePointCreateData, ctrl?: Control): Promise<V1RestorePointEntity>;
}
export { V1RestorePointEntity };
