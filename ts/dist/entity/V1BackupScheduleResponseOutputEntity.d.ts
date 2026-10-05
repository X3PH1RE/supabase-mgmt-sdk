import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1BackupScheduleResponseOutput, V1BackupScheduleResponseOutputLoadMatch, V1BackupScheduleResponseOutputUpdateData } from '../SupabaseMgmtTypes';
declare class V1BackupScheduleResponseOutputEntity extends SupabaseMgmtEntityBase<V1BackupScheduleResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1BackupScheduleResponseOutputEntity): V1BackupScheduleResponseOutputEntity;
    load(this: any, reqmatch?: V1BackupScheduleResponseOutputLoadMatch, ctrl?: Control): Promise<V1BackupScheduleResponseOutputEntity>;
    update(this: any, reqdata?: V1BackupScheduleResponseOutputUpdateData, ctrl?: Control): Promise<V1BackupScheduleResponseOutputEntity>;
}
export { V1BackupScheduleResponseOutputEntity };
