export interface SwerrScheme {
	name: string;
	description: string;
	version: string;
	errors: SwerrSchemeError[];
}

export interface SwerrSchemeError {
	name: string;
	description: string;
	tags: SwerrSchemeTag[];
}

export interface SwerrSchemeTag {
	name: string;
	description: string;
}