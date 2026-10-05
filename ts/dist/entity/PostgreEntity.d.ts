import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Postgre, PostgreLoadMatch, PostgreUpdateData } from '../SupabaseMgmtTypes';
declare class PostgreEntity extends SupabaseMgmtEntityBase<Postgre> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: PostgreEntity): PostgreEntity;
    load(this: any, reqmatch?: PostgreLoadMatch, ctrl?: Control): Promise<PostgreEntity>;
    update(this: any, reqdata?: PostgreUpdateData, ctrl?: Control): Promise<PostgreEntity>;
}
export { PostgreEntity };
