import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1ProjectRefResponseOutput, V1ProjectRefResponseOutputUpdateData, V1ProjectRefResponseOutputRemoveMatch } from '../SupabaseMgmtTypes';
declare class V1ProjectRefResponseOutputEntity extends SupabaseMgmtEntityBase<V1ProjectRefResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1ProjectRefResponseOutputEntity): V1ProjectRefResponseOutputEntity;
    update(this: any, reqdata?: V1ProjectRefResponseOutputUpdateData, ctrl?: Control): Promise<V1ProjectRefResponseOutputEntity>;
    remove(this: any, reqmatch?: V1ProjectRefResponseOutputRemoveMatch, ctrl?: Control): Promise<V1ProjectRefResponseOutputEntity>;
}
export { V1ProjectRefResponseOutputEntity };
