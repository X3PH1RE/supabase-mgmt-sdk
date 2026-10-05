import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { JitAccessResponseOutput, JitAccessResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class JitAccessResponseOutputEntity extends SupabaseMgmtEntityBase<JitAccessResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: JitAccessResponseOutputEntity): JitAccessResponseOutputEntity;
    create(this: any, reqdata?: JitAccessResponseOutputCreateData, ctrl?: Control): Promise<JitAccessResponseOutputEntity>;
}
export { JitAccessResponseOutputEntity };
