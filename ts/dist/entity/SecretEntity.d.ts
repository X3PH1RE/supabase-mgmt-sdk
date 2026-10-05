import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Secret, SecretListMatch, SecretCreateData, SecretRemoveMatch } from '../SupabaseMgmtTypes';
declare class SecretEntity extends SupabaseMgmtEntityBase<Secret> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SecretEntity): SecretEntity;
    list(this: any, reqmatch?: SecretListMatch, ctrl?: Control): Promise<SecretEntity[]>;
    create(this: any, reqdata?: SecretCreateData, ctrl?: Control): Promise<SecretEntity>;
    remove(this: any, reqmatch?: SecretRemoveMatch, ctrl?: Control): Promise<SecretEntity>;
}
export { SecretEntity };
