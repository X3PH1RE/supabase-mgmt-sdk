import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1GetMigrationResponseOutput, V1GetMigrationResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class V1GetMigrationResponseOutputEntity extends SupabaseMgmtEntityBase<V1GetMigrationResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1GetMigrationResponseOutputEntity): V1GetMigrationResponseOutputEntity;
    load(this: any, reqmatch?: V1GetMigrationResponseOutputLoadMatch, ctrl?: Control): Promise<V1GetMigrationResponseOutputEntity>;
}
export { V1GetMigrationResponseOutputEntity };
