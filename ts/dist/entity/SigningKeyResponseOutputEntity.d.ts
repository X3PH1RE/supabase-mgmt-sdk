import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { SigningKeyResponseOutput, SigningKeyResponseOutputLoadMatch, SigningKeyResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class SigningKeyResponseOutputEntity extends SupabaseMgmtEntityBase<SigningKeyResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SigningKeyResponseOutputEntity): SigningKeyResponseOutputEntity;
    load(this: any, reqmatch?: SigningKeyResponseOutputLoadMatch, ctrl?: Control): Promise<SigningKeyResponseOutputEntity>;
    create(this: any, reqdata?: SigningKeyResponseOutputCreateData, ctrl?: Control): Promise<SigningKeyResponseOutputEntity>;
}
export { SigningKeyResponseOutputEntity };
