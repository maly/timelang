import { T } from './_types.js'

export const genTime = (parsed, dt=null) => {
    
    let n;
    n = new Date();
    if (dt) n = new Date(dt)


    //změna
    let plus = {
        m:0,
        h:0,
        d:0,
        M:0,
        y:0,
    }

    //absolutní čas
    let abs = {
        m:-1,
        h:-1,
        d:-1,
        M:-1,
        y:-1,
        dow:-1
    }

    //aktuální datum
    let now = {
        m:n.getMinutes(),
        h:n.getHours(),
        d:n.getDate(),
        M:n.getMonth(),
        y:n.getFullYear(),
        dow:n.getDay()
    }

    //console.log("NOW",now)

    let mode = "@"
    let lastNum = -1
    let lastFrac=-1
    let ampm = null
    let forceDay = null
    //a jedu. Beru parsované věci a řeším, co s nima
    while(parsed.length) {
        let p = parsed.shift()
        switch(p.c) {
            case T.PRE:
                mode = p.val
                break
            case T.NUM:
                if (lastNum==20 || lastNum==30) {
                    lastNum += p.val
                    break
                }
                lastNum = p.val
                break
            case T.TIM:
                if (mode=="@") {
                    if (abs[p.val]>=0) {
                        abs[p.val] += lastNum
                        
                    }  else { 
                        abs[p.val] = lastNum
                    }
                    if (p.val=="M") abs[p.val]--
                    lastNum=-1
                } else {
                    //za X něčeho
                    if (lastFrac<0) {
                        if (lastNum<0) lastNum=1
                        plus[p.val] = lastNum   
                        lastNum=-1
                    } else {
                        plus.m = lastFrac*15
                        lastFrac=-1
                    }
                                         
                    
                }
                break
            case T.MOD:

                ampm = (p.val=="pm" || p.val=="ev") ? "pm" : "am"

                //"šest večer"
                if (abs.h<0 && abs.m<0 && mode=="@" && lastNum>=0) {
                    abs.h = lastNum
                    abs.m = 0
                    lastNum = -1
                }

                if (abs.h<0) {
                    if (p.val=="pm") {
                        abs.h = 15
                        break
                    }
                    if (p.val=="ev") {
                        abs.h = 18
                        break
                    }
                    if (p.val=="am") {
                        abs.h = 7
                        break
                    }
                    if (p.val=="no") {
                        abs.h = 10
                        break
                    }
                } else {
                    if (p.val=="pm" || p.val=="ev") {
                        abs.h += 12
                        break
                    }
                }
                //console.log(p)
                break
            case T.DAY:
                //nastavuju DOW
                //console.log("DOW",p.val)

                if (mode=="@") {
                    plus.d = p.val-now.dow
                    if (plus.d<0) plus.d += 7
                    break
                }
                //console.log(p)
                break
            case T.MONTH:
                abs.M = p.val-1
                //console.log("set abs m", abs.M)
                //lastNum=-1
                break

            case T.FRAC:                
                if (mode=="@") {
                    //v čtvrt apod. je to vždycky 15 minut
                    lastFrac = p.val
                    if (abs.m<0) abs.m = 0
                    abs.m += p.val*15
                    if (abs.m>=60) {
                        abs.m -= 60
                        abs.h++
                    }
                    break
                } else {
                    lastFrac = p.val
                }

                break
            case T.HOUR:
                if (mode=="@") {
                    //abs.m = 
                    abs.h = p.val-1
                    break
                }
                //console.log(p)
                break
            case T.FDAY:
                forceDay = p.val
                break
            default:
                console.log(p)
                throw new Error("Neznámý typ "+p.c)
        }
    }

    // Pokud není zadaní jednotka, tak je to asi hodina
    if (lastNum>0) {
        if (lastNum>2000) {
            abs.y = lastNum
        } else {
            if (mode=="@") {
                abs.h = lastNum
            } else {
                plus.h = lastNum
            }
        }
    }

    //console.log("PLUS",plus)
    //console.log("ABS",abs)

    //nejdřív přičtu
    if (plus.m) n.setMinutes(n.getMinutes()+plus.m)
    if (plus.h) n.setHours(n.getHours()+plus.h)
    if (plus.d) n.setDate(n.getDate()+plus.d)
    if (plus.w) n.setDate(n.getDate()+plus.w*7)
    if (plus.M) n.setMonth(n.getMonth()+plus.M)
    if (plus.y) n.setFullYear(n.getFullYear()+plus.y)

    //absolutka

    //pokud nastavuju hodiny a nezadal jsem muinuty, tak je nastavím na 0
    if (abs.h>=0 && abs.m<0) abs.m=0

    //pokud nastavuju JEN hodiny, ne den, měsíc ani rok, tak kontroluju, jestli to není v minulosti
    if (abs.h>=0 && abs.d<0 && abs.M<0 && abs.y<0) {
        if (abs.h<now.h && now.d==n.getDate()) {
            //console.log("AZ",abs,now)
            abs.h += 12 //až odpoledne
        }
    }

    //nutno fixovat am/pm. Pokud je řečeno "v pět", je to 17, pokud "v pět ráno", je to 5 dalšího dne
    if (abs.h>=0 && ampm) {
        if (ampm=="pm" && abs.h<12) abs.h += 12
        if (ampm=="am" && abs.h>=12) {
            abs.h -= 12
            //den++
            n.setDate(n.getDate()+1)
        }
    }

    //když nastavuju měsíc, ale ten už letos byl, tak rok+1
    if (abs.M>=0 && abs.y<0) {
        if (abs.M<now.M) {
            abs.y = now.y+1
        } else {
            abs.y = now.y
        }
    }

    //když nastavuju den, ale ten už byl, tak měsíc+1
    if (abs.d>=0 && abs.M<0) {
        if (abs.d<now.d) {
            abs.M = now.M+1
        } else {
            abs.M = now.M
        }
    }

    if (forceDay!==null) {
        abs.d = now.d+forceDay
        abs.m = now.m
    }

    //console.log("ABS2",abs)


    if (abs.m>=0) n.setMinutes(abs.m)
    if (abs.h>=0) n.setHours(abs.h)
    if (abs.d>=0) n.setDate(abs.d)
    if (abs.M>=0) n.setMonth(abs.M)
    if (abs.y>=0) n.setFullYear(abs.y)

    n.setSeconds(0)

    //console.log(n.toLocaleString("cs"))
    return n
}