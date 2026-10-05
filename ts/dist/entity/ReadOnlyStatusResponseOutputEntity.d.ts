import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ReadOnlyStatusResponseOutput, ReadOnlyStatusResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class ReadOnlyStatusResponseOutputEntity extends SupabaseMgmtEntityBase<ReadOnlyStatusResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ReadOnlyStatusResponseOutputEntity): ReadOnlyStatusResponseOutputEntity;
    load(this: any, reqmatch?: ReadOnlyStatusResponseOutputLoadMatch, ctrl?: Control): Promise<ReadOnlyStatusResponseOutputEntity>;
}
export { ReadOnlyStatusResponseOutputEntity };
