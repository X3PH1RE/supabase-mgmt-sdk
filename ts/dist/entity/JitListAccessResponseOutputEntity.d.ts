import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { JitListAccessResponseOutput, JitListAccessResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class JitListAccessResponseOutputEntity extends SupabaseMgmtEntityBase<JitListAccessResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: JitListAccessResponseOutputEntity): JitListAccessResponseOutputEntity;
    list(this: any, reqmatch?: JitListAccessResponseOutputListMatch, ctrl?: Control): Promise<JitListAccessResponseOutputEntity[]>;
}
export { JitListAccessResponseOutputEntity };
