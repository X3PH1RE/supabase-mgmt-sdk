import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentLoadMatch, EnvironmentRemoveMatch } from '../SupabaseMgmtTypes';
declare class EnvironmentEntity extends SupabaseMgmtEntityBase<Environment> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    load(this: any, reqmatch?: EnvironmentLoadMatch, ctrl?: Control): Promise<EnvironmentEntity>;
    remove(this: any, reqmatch?: EnvironmentRemoveMatch, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
