import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { RegionsInfoOutput, RegionsInfoOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class RegionsInfoOutputEntity extends SupabaseMgmtEntityBase<RegionsInfoOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: RegionsInfoOutputEntity): RegionsInfoOutputEntity;
    load(this: any, reqmatch?: RegionsInfoOutputLoadMatch, ctrl?: Control): Promise<RegionsInfoOutputEntity>;
}
export { RegionsInfoOutputEntity };
