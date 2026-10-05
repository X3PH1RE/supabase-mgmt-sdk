import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ProjectUpgradeInitiateResponseOutput, ProjectUpgradeInitiateResponseOutputCreateData } from '../SupabaseMgmtTypes';
declare class ProjectUpgradeInitiateResponseOutputEntity extends SupabaseMgmtEntityBase<ProjectUpgradeInitiateResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProjectUpgradeInitiateResponseOutputEntity): ProjectUpgradeInitiateResponseOutputEntity;
    create(this: any, reqdata?: ProjectUpgradeInitiateResponseOutputCreateData, ctrl?: Control): Promise<ProjectUpgradeInitiateResponseOutputEntity>;
}
export { ProjectUpgradeInitiateResponseOutputEntity };
