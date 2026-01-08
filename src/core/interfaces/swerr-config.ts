/**
 * SwerrConfig interface defines the configuration structure for the Swerr tool.
 */
export interface SwerrConfig {
	sourceFile: {
		inputDir?: string;
		meta?: {
			projectName?: string;
			version?: string;
			description?: string;
		};
		export?: {
			saveToFile?: boolean;
			fileName?: string;
			outputDir?: string;
		};
		options?: {
			ignoreDirs?: string[];
			whitelistExtensions?: string[];
		}
	},
	converter: ConverterConfig<any>[]
}

/**
 * ConverterConfig interface defines the structure for converter configurations.
 */
export interface ConverterConfig<CFG> {
	factory: ConverterFn<CFG>;
	config: CFG;
}

export type ConverterFn<CFG> = (config: CFG) => Promise<void>;
