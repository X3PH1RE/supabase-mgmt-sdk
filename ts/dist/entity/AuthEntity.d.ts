import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Auth, AuthLoadMatch, AuthUpdateData } from '../SupabaseMgmtTypes';
declare class AuthEntity extends SupabaseMgmtEntityBase<Auth> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    load(this: any, reqmatch?: AuthLoadMatch, ctrl?: Control): Promise<AuthEntity>;
    update(this: any, reqdata?: AuthUpdateData, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
