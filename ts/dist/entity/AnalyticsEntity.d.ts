import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Analytics, AnalyticsLoadMatch } from '../SupabaseMgmtTypes';
declare class AnalyticsEntity extends SupabaseMgmtEntityBase<Analytics> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: AnalyticsEntity): AnalyticsEntity;
    load(this: any, reqmatch?: AnalyticsLoadMatch, ctrl?: Control): Promise<AnalyticsEntity>;
}
export { AnalyticsEntity };
