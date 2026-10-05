import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Log, LogListMatch } from '../SupabaseMgmtTypes';
declare class LogEntity extends SupabaseMgmtEntityBase<Log> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: LogEntity): LogEntity;
    list(this: any, reqmatch?: LogListMatch, ctrl?: Control): Promise<LogEntity[]>;
}
export { LogEntity };
