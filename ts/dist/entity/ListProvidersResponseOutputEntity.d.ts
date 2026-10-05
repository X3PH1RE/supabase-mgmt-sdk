import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ListProvidersResponseOutput, ListProvidersResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class ListProvidersResponseOutputEntity extends SupabaseMgmtEntityBase<ListProvidersResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ListProvidersResponseOutputEntity): ListProvidersResponseOutputEntity;
    list(this: any, reqmatch?: ListProvidersResponseOutputListMatch, ctrl?: Control): Promise<ListProvidersResponseOutputEntity[]>;
}
export { ListProvidersResponseOutputEntity };
