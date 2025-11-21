import { Comment } from "./comment";
import { Record } from "./record";
export interface RRSet {
	name: string;
	type: string;
	ttl: number;
	changetype: string;
	records: Record[];
	comments: Comment[];
	modified_at: string;
}