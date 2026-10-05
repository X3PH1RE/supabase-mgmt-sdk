import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { OAuthTokenResponseOutput, OAuthTokenResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class OAuthTokenResponseOutputEntity extends SupabaseMgmtEntityBase<OAuthTokenResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: OAuthTokenResponseOutputEntity): OAuthTokenResponseOutputEntity;
    create(this: any, reqdata?: OAuthTokenResponseOutputCreateData, ctrl?: Control): Promise<OAuthTokenResponseOutputEntity>;
}
export { OAuthTokenResponseOutputEntity };
