import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { V1StorageBucketResponseOutput, V1StorageBucketResponseOutputListMatch } from '../SupabaseMgmtTypes';
declare class V1StorageBucketResponseOutputEntity extends SupabaseMgmtEntityBase<V1StorageBucketResponseOutput> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: V1StorageBucketResponseOutputEntity): V1StorageBucketResponseOutputEntity;
    list(this: any, reqmatch?: V1StorageBucketResponseOutputListMatch, ctrl?: Control): Promise<V1StorageBucketResponseOutputEntity[]>;
}
export { V1StorageBucketResponseOutputEntity };
