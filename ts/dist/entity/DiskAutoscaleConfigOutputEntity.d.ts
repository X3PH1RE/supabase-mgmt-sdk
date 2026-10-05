import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { DiskAutoscaleConfigOutput, DiskAutoscaleConfigOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class DiskAutoscaleConfigOutputEntity extends SupabaseMgmtEntityBase<DiskAutoscaleConfigOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DiskAutoscaleConfigOutputEntity): DiskAutoscaleConfigOutputEntity;
    load(this: any, reqmatch?: DiskAutoscaleConfigOutputLoadMatch, ctrl?: Control): Promise<DiskAutoscaleConfigOutputEntity>;
}
export { DiskAutoscaleConfigOutputEntity };
