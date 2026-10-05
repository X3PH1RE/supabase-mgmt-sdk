import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { SigningKey, SigningKeyLoadMatch, SigningKeyListMatch, SigningKeyCreateData, SigningKeyUpdateData, SigningKeyRemoveMatch } from '../SupabaseMgmtTypes';
declare class SigningKeyEntity extends SupabaseMgmtEntityBase<SigningKey> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SigningKeyEntity): SigningKeyEntity;
    load(this: any, reqmatch?: SigningKeyLoadMatch, ctrl?: Control): Promise<SigningKeyEntity>;
    list(this: any, reqmatch?: SigningKeyListMatch, ctrl?: Control): Promise<SigningKeyEntity[]>;
    create(this: any, reqdata?: SigningKeyCreateData, ctrl?: Control): Promise<SigningKeyEntity>;
    update(this: any, reqdata?: SigningKeyUpdateData, ctrl?: Control): Promise<SigningKeyEntity>;
    remove(this: any, reqmatch?: SigningKeyRemoveMatch, ctrl?: Control): Promise<SigningKeyEntity>;
}
export { SigningKeyEntity };
