import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Storage, StorageLoadMatch, StorageUpdateData } from '../SupabaseMgmtTypes';
declare class StorageEntity extends SupabaseMgmtEntityBase<Storage> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: StorageEntity): StorageEntity;
    load(this: any, reqmatch?: StorageLoadMatch, ctrl?: Control): Promise<StorageEntity>;
    update(this: any, reqdata?: StorageUpdateData, ctrl?: Control): Promise<StorageEntity>;
}
export { StorageEntity };
