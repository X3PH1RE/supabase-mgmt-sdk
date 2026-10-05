import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { StreamableFile, StreamableFileLoadMatch } from '../SupabaseMgmtTypes';
declare class StreamableFileEntity extends SupabaseMgmtEntityBase<StreamableFile> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: StreamableFileEntity): StreamableFileEntity;
    load(this: any, reqmatch?: StreamableFileLoadMatch, ctrl?: Control): Promise<StreamableFileEntity>;
}
export { StreamableFileEntity };
