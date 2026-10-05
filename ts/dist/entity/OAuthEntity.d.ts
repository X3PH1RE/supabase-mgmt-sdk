import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { OAuth, OAuthLoadMatch, OAuthCreateData } from '../SupabaseMgmtTypes';
declare class OAuthEntity extends SupabaseMgmtEntityBase<OAuth> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: OAuthEntity): OAuthEntity;
    load(this: any, reqmatch?: OAuthLoadMatch, ctrl?: Control): Promise<OAuthEntity>;
    create(this: any, reqdata?: OAuthCreateData, ctrl?: Control): Promise<OAuthEntity>;
}
export { OAuthEntity };
