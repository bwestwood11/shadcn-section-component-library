// This file is generated by Velite

import config from '../velite.config'

type Collections = typeof config.collections

export type Documents = Collections['documents']['schema']['_output']
export declare const documents: Documents[]