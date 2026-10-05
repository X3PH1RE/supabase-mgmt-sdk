import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Invite, InviteCreateData } from '../SupabaseMgmtTypes';
declare class InviteEntity extends SupabaseMgmtEntityBase<Invite> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: InviteEntity): InviteEntity;
    create(this: any, reqdata?: InviteCreateData, ctrl?: Control): Promise<InviteEntity>;
}
export { InviteEntity };
