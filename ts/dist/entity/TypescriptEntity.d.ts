import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Typescript, TypescriptLoadMatch } from '../SupabaseMgmtTypes';
declare class TypescriptEntity extends SupabaseMgmtEntityBase<Typescript> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: TypescriptEntity): TypescriptEntity;
    load(this: any, reqmatch?: TypescriptLoadMatch, ctrl?: Control): Promise<TypescriptEntity>;
}
export { TypescriptEntity };
