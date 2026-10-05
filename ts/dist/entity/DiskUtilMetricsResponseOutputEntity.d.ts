import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { DiskUtilMetricsResponseOutput, DiskUtilMetricsResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class DiskUtilMetricsResponseOutputEntity extends SupabaseMgmtEntityBase<DiskUtilMetricsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DiskUtilMetricsResponseOutputEntity): DiskUtilMetricsResponseOutputEntity;
    load(this: any, reqmatch?: DiskUtilMetricsResponseOutputLoadMatch, ctrl?: Control): Promise<DiskUtilMetricsResponseOutputEntity>;
}
export { DiskUtilMetricsResponseOutputEntity };
