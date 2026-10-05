import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ListProjectAddonsResponseOutput, ListProjectAddonsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class ListProjectAddonsResponseOutputEntity extends SupabaseMgmtEntityBase<ListProjectAddonsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ListProjectAddonsResponseOutputEntity): ListProjectAddonsResponseOutputEntity;
    list(this: any, reqmatch?: ListProjectAddonsResponseOutputListMatch, ctrl?: Control): Promise<ListProjectAddonsResponseOutputEntity[]>;
}
export { ListProjectAddonsResponseOutputEntity };
