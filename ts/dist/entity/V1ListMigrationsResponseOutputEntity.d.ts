import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ListMigrationsResponseOutput, V1ListMigrationsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1ListMigrationsResponseOutputEntity extends SupabaseMgmtEntityBase<V1ListMigrationsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ListMigrationsResponseOutputEntity): V1ListMigrationsResponseOutputEntity;
    list(this: any, reqmatch?: V1ListMigrationsResponseOutputListMatch, ctrl?: Control): Promise<V1ListMigrationsResponseOutputEntity[]>;
}
export { V1ListMigrationsResponseOutputEntity };
