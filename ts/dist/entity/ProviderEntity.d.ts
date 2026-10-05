import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Provider, ProviderLoadMatch, ProviderRemoveMatch } from '../SupabaseMgmtTypes';
declare class ProviderEntity extends SupabaseMgmtEntityBase<Provider> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    load(this: any, reqmatch?: ProviderLoadMatch, ctrl?: Control): Promise<ProviderEntity>;
    remove(this: any, reqmatch?: ProviderRemoveMatch, ctrl?: Control): Promise<ProviderEntity>;
}
export { ProviderEntity };
