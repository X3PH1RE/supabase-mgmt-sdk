import { SupabaseMgmtEntityBase } from '../SupabaseMgmtEntityBase';
import type { SupabaseMgmtSDK } from '../SupabaseMgmtSDK';
import type { Control } from '../types';
import type { Domain, DomainRemoveMatch } from '../SupabaseMgmtTypes';
declare class DomainEntity extends SupabaseMgmtEntityBase<Domain> {
    constructor(client: SupabaseMgmtSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    remove(this: any, reqmatch?: DomainRemoveMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
