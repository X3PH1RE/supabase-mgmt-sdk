import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Postgrest, PostgrestLoadMatch } from '../SupabaseMgmtTypes';
declare class PostgrestEntity extends SupabaseMgmtEntityBase<Postgrest> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: PostgrestEntity): PostgrestEntity;
    load(this: any, reqmatch?: PostgrestLoadMatch, ctrl?: Control): Promise<PostgrestEntity>;
}
export { PostgrestEntity };
