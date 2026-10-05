import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { DatabaseUpgradeStatusResponseOutput, DatabaseUpgradeStatusResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class DatabaseUpgradeStatusResponseOutputEntity extends SupabaseMgmtEntityBase<DatabaseUpgradeStatusResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DatabaseUpgradeStatusResponseOutputEntity): DatabaseUpgradeStatusResponseOutputEntity;
    load(this: any, reqmatch?: DatabaseUpgradeStatusResponseOutputLoadMatch, ctrl?: Control): Promise<DatabaseUpgradeStatusResponseOutputEntity>;
}
export { DatabaseUpgradeStatusResponseOutputEntity };
