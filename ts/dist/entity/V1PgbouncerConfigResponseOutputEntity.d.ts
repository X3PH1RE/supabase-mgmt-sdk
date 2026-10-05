import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1PgbouncerConfigResponseOutput, V1PgbouncerConfigResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class V1PgbouncerConfigResponseOutputEntity extends SupabaseMgmtEntityBase<V1PgbouncerConfigResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1PgbouncerConfigResponseOutputEntity): V1PgbouncerConfigResponseOutputEntity;
    load(this: any, reqmatch?: V1PgbouncerConfigResponseOutputLoadMatch, ctrl?: Control): Promise<V1PgbouncerConfigResponseOutputEntity>;
}
export { V1PgbouncerConfigResponseOutputEntity };
