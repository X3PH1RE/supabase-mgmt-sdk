import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ProjectAvailableRestoreVersionsResponseOutput, ProjectAvailableRestoreVersionsResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class ProjectAvailableRestoreVersionsResponseOutputEntity extends SupabaseMgmtEntityBase<ProjectAvailableRestoreVersionsResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProjectAvailableRestoreVersionsResponseOutputEntity): ProjectAvailableRestoreVersionsResponseOutputEntity;
    list(this: any, reqmatch?: ProjectAvailableRestoreVersionsResponseOutputListMatch, ctrl?: Control): Promise<ProjectAvailableRestoreVersionsResponseOutputEntity[]>;
}
export { ProjectAvailableRestoreVersionsResponseOutputEntity };
