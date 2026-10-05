import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Deploy, DeployCreateData } from '../SupabaseMgmtTypes';
declare class DeployEntity extends SupabaseMgmtEntityBase<Deploy> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DeployEntity): DeployEntity;
    create(this: any, reqdata?: DeployCreateData, ctrl?: Control): Promise<DeployEntity>;
}
export { DeployEntity };
