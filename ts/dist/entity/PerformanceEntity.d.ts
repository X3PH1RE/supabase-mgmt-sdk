import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Performance, PerformanceListMatch } from '../SupabaseMgmtTypes';
declare class PerformanceEntity extends SupabaseMgmtEntityBase<Performance> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: PerformanceEntity): PerformanceEntity;
    list(this: any, reqmatch?: PerformanceListMatch, ctrl?: Control): Promise<PerformanceEntity[]>;
}
export { PerformanceEntity };
