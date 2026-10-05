import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ListActionRunResponseOutput, ListActionRunResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class ListActionRunResponseOutputEntity extends SupabaseMgmtEntityBase<ListActionRunResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ListActionRunResponseOutputEntity): ListActionRunResponseOutputEntity;
    list(this: any, reqmatch?: ListActionRunResponseOutputListMatch, ctrl?: Control): Promise<ListActionRunResponseOutputEntity[]>;
}
export { ListActionRunResponseOutputEntity };
