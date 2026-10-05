import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Snippet, SnippetLoadMatch, SnippetListMatch } from '../SupabaseMgmtTypes';
declare class SnippetEntity extends SupabaseMgmtEntityBase<Snippet> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: SnippetEntity): SnippetEntity;
    load(this: any, reqmatch?: SnippetLoadMatch, ctrl?: Control): Promise<SnippetEntity>;
    list(this: any, reqmatch?: SnippetListMatch, ctrl?: Control): Promise<SnippetEntity[]>;
}
export { SnippetEntity };
