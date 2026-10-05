import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Action, ActionLoadMatch, ActionUpdateData } from '../SupabaseMgmtTypes';
declare class ActionEntity extends SupabaseMgmtEntityBase<Action> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ActionEntity): ActionEntity;
    load(this: any, reqmatch?: ActionLoadMatch, ctrl?: Control): Promise<ActionEntity>;
    update(this: any, reqdata?: ActionUpdateData, ctrl?: Control): Promise<ActionEntity>;
}
export { ActionEntity };
