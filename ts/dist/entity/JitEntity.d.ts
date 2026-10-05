import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Jit, JitListMatch, JitCreateData, JitUpdateData } from '../SupabaseMgmtTypes';
declare class JitEntity extends SupabaseMgmtEntityBase<Jit> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: JitEntity): JitEntity;
    list(this: any, reqmatch?: JitListMatch, ctrl?: Control): Promise<JitEntity[]>;
    create(this: any, reqdata?: JitCreateData, ctrl?: Control): Promise<JitEntity>;
    update(this: any, reqdata?: JitUpdateData, ctrl?: Control): Promise<JitEntity>;
}
export { JitEntity };
