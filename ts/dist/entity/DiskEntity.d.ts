import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Disk, DiskLoadMatch } from '../SupabaseMgmtTypes';
declare class DiskEntity extends SupabaseMgmtEntityBase<Disk> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DiskEntity): DiskEntity;
    load(this: any, reqmatch?: DiskLoadMatch, ctrl?: Control): Promise<DiskEntity>;
}
export { DiskEntity };
