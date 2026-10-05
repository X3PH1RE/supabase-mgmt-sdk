import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Project, ProjectCreateData, ProjectRemoveMatch } from '../SupabaseMgmtTypes';
declare class ProjectEntity extends SupabaseMgmtEntityBase<Project> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntity>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
