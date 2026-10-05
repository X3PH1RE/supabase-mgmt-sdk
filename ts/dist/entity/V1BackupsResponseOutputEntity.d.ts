import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1BackupsResponseOutput, V1BackupsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1BackupsResponseOutputEntity extends SupabaseMgmtEntityBase<V1BackupsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1BackupsResponseOutputEntity): V1BackupsResponseOutputEntity;
    list(this: any, reqmatch?: V1BackupsResponseOutputListMatch, ctrl?: Control): Promise<V1BackupsResponseOutputEntity[]>;
}
export { V1BackupsResponseOutputEntity };
