import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { ProjectClaimTokenResponseOutput, ProjectClaimTokenResponseOutputLoadMatch } from '../SupabaseMgmtTypes';
declare class ProjectClaimTokenResponseOutputEntity extends SupabaseMgmtEntityBase<ProjectClaimTokenResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: ProjectClaimTokenResponseOutputEntity): ProjectClaimTokenResponseOutputEntity;
    load(this: any, reqmatch?: ProjectClaimTokenResponseOutputLoadMatch, ctrl?: Control): Promise<ProjectClaimTokenResponseOutputEntity>;
}
export { ProjectClaimTokenResponseOutputEntity };
