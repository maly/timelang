import { parseTime } from "./src/cutcat.js"
import {genTime} from "./src/gentime.js"

/**
 * 
 * @param {String} text Popis času slovem
 * @param {Date} dt Výchozí čas. Pokud není zadán, bere se aktuální
 * @returns Date
 */

export const text2time = (text, dt=null) => {
    let parsed = parseTime(text)
    let time = genTime(parsed, dt)
    return time
}