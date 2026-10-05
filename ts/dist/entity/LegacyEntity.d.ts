import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Legacy, LegacyLoadMatch, LegacyUpdateData } from '../SupabaseMgmtTypes';
declare class LegacyEntity extends SupabaseMgmtEntityBase<Legacy> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: LegacyEntity): LegacyEntity;
    load(this: any, reqmatch?: LegacyLoadMatch, ctrl?: Control): Promise<LegacyEntity>;
    update(this: any, reqdata?: LegacyUpdateData, ctrl?: Control): Promise<LegacyEntity>;
}
export { LegacyEntity };
