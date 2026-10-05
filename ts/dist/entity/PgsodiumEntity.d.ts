import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Pgsodium, PgsodiumLoadMatch, PgsodiumUpdateData } from '../SupabaseMgmtTypes';
declare class PgsodiumEntity extends SupabaseMgmtEntityBase<Pgsodium> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: PgsodiumEntity): PgsodiumEntity;
    load(this: any, reqmatch?: PgsodiumLoadMatch, ctrl?: Control): Promise<PgsodiumEntity>;
    update(this: any, reqdata?: PgsodiumUpdateData, ctrl?: Control): Promise<PgsodiumEntity>;
}
export { PgsodiumEntity };
