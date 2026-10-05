import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ProjectUpgradeEligibilityResponseOutput, ProjectUpgradeEligibilityResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class ProjectUpgradeEligibilityResponseOutputEntity extends SupabaseMgmtEntityBase<ProjectUpgradeEligibilityResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProjectUpgradeEligibilityResponseOutputEntity): ProjectUpgradeEligibilityResponseOutputEntity;
    list(this: any, reqmatch?: ProjectUpgradeEligibilityResponseOutputListMatch, ctrl?: Control): Promise<ProjectUpgradeEligibilityResponseOutputEntity[]>;
}
export { ProjectUpgradeEligibilityResponseOutputEntity };
