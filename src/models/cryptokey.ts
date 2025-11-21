export interface Cryptokey {
	type: string;
	id: number;
	keytype: string;
	active: boolean;
	published: boolean;
	dnskey: string;
	ds: string[];
	cds: string[];
	privatekey: string;
	algorithm: string;
	bits: number;
}