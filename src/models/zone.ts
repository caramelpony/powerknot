import { RRSet } from "./rrset";
export interface Zone {
	id: string;
	name: string;
	type: string;
	url: string;
	kind: string;
	rrsets: RRSet[];
	serial: number;
	notified_serial: number;
	edited_serial: number;
	masters: string[];
	dnssec: boolean;
	nsec3param: string;
	nsec3narrow: boolean;
	presigned: boolean;
	soa_edit: string;
	soa_edit_api: string;
	api_rectify: boolean;
	zone: string;
	catalog: string;
	account: string;
	nameservers: string[];
	master_tsig_key_ids: string[];
	slave_tsig_key_ids: string[];
}