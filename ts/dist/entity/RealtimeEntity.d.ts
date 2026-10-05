import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Realtime, RealtimeLoadMatch, RealtimeCreateData, RealtimeUpdateData } from '../SupabaseMgmtTypes';
declare class RealtimeEntity extends SupabaseMgmtEntityBase<Realtime> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: RealtimeEntity): RealtimeEntity;
    load(this: any, reqmatch?: RealtimeLoadMatch, ctrl?: Control): Promise<RealtimeEntity>;
    create(this: any, reqdata?: RealtimeCreateData, ctrl?: Control): Promise<RealtimeEntity>;
    update(this: any, reqdata?: RealtimeUpdateData, ctrl?: Control): Promise<RealtimeEntity>;
}
export { RealtimeEntity };
