import {weatherConfig} from "./config"

export const url = `${weatherConfig?.API_BASE}${weatherConfig?.API_version}/${weatherConfig?.API_TYPE}?units=${weatherConfig?.units}&exclude=${weatherConfig?.exclude}&appid=${weatherConfig?.API_KEY}`;