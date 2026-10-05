import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { SupavisorConfigResponseOutput, SupavisorConfigResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class SupavisorConfigResponseOutputEntity extends SupabaseMgmtEntityBase<SupavisorConfigResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SupavisorConfigResponseOutputEntity): SupavisorConfigResponseOutputEntity;
    list(this: any, reqmatch?: SupavisorConfigResponseOutputListMatch, ctrl?: Control): Promise<SupavisorConfigResponseOutputEntity[]>;
}
export { SupavisorConfigResponseOutputEntity };
