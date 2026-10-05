import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ProjectWithDatabaseResponseOutput, V1ProjectWithDatabaseResponseOutputLoadMatch, V1ProjectWithDatabaseResponseOutputListMatch, V1ProjectWithDatabaseResponseOutputCreateData, V1ProjectWithDatabaseResponseOutputUpdateData, V1ProjectWithDatabaseResponseOutputRemoveMatch } from '../SupabaseMgmtTypes';
declare class V1ProjectWithDatabaseResponseOutputEntity extends SupabaseMgmtEntityBase<V1ProjectWithDatabaseResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ProjectWithDatabaseResponseOutputEntity): V1ProjectWithDatabaseResponseOutputEntity;
    load(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputLoadMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    list(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputListMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity[]>;
    create(this: any, reqdata?: V1ProjectWithDatabaseResponseOutputCreateData, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    update(this: any, reqdata?: V1ProjectWithDatabaseResponseOutputUpdateData, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
    remove(this: any, reqmatch?: V1ProjectWithDatabaseResponseOutputRemoveMatch, ctrl?: Control): Promise<V1ProjectWithDatabaseResponseOutputEntity>;
}
export { V1ProjectWithDatabaseResponseOutputEntity };
