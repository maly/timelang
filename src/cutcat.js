import {T} from './_types.js'

const terms = [
    { t: 'za', c: T.PRE, val:"+" },     
    { t: 've', c: T.PRE, val:"@" },
    { t: 'v', c: T.PRE, val:"@" },
    { t: 'dne', c: T.PRE, val:"@" },

    // číslovky
    { t: 'jedna' , c:T.NUM, val:1 },
    { t: 'jednu' , c:T.NUM, val:1 },
    { t: 'jeden' , c:T.NUM, val:1 },
    { t: 'dva' , c:T.NUM, val:2 },
    { t: 'dvě' , c:T.NUM, val:2 },
    { t: 'tři', c:T.NUM, val:3 },
    { t: 'čtyři' , c:T.NUM, val:4 },
    { t: 'pět' , c:T.NUM, val:5 },    
    { t: 'šest' , c:T.NUM, val:6 },   
    { t: 'sedm' , c:T.NUM, val:7 },
    { t: 'osm' , c:T.NUM, val:8 },
    { t: 'devět' , c:T.NUM, val:9 },
    { t: 'deset' , c:T.NUM, val:10 },
    { t: 'jedenáct' , c:T.NUM, val:11 },
    { t: 'dvanáct' , c:T.NUM, val:12 },
    { t: 'třináct' , c:T.NUM, val:13 },
    { t: 'čtrnáct' , c:T.NUM, val:14 },
    { t: 'patnáct' , c:T.NUM, val:15 },
    { t: 'šestnáct' , c:T.NUM, val:16 },
    { t: 'sedmnáct' , c:T.NUM, val:17 },
    { t: 'osmnáct' , c:T.NUM, val:18 },
    { t: 'devatenáct' , c:T.NUM, val:19 },
    { t: 'dvacet' , c:T.NUM, val:20 },

    //zlomky
    { t: 'čtvrt', c:T.FRAC, val:1 }, //kolik čtvrtí
    { t: 'půl', c:T.FRAC, val:2 }, 
    { t: 'třičtvrtě', c:T.FRAC, val:3 },
    { t: 'čtvrtě', c:T.FRAC, val:3 },

    //zlomková čísla
    {t:"jedné", c:T.HOUR, val:1},
    {t:"druhé", c:T.HOUR, val:2},
    {t:"třetí", c:T.HOUR, val:3},
    {t:"čtvrté", c:T.HOUR, val:4},
    {t:"páté", c:T.HOUR, val:5},
    {t:"šesté", c:T.HOUR, val:6},
    {t:"sedmé", c:T.HOUR, val:7},
    {t:"osmé", c:T.HOUR, val:8},
    {t:"deváté", c:T.HOUR, val:9},
    {t:"desáté", c:T.HOUR, val:10},
    {t:"jedenácté", c:T.HOUR, val:11},
    {t:"dvanácté", c:T.HOUR, val:12},


    //dny
    { t: 'pondělí', c:T.DAY, val:1 },
    { t: 'úterý', c:T.DAY, val:2 },
    { t: 'středa', c:T.DAY, val:3 },
    { t: 'středu', c:T.DAY, val:3 },
    { t: 'čtvrtek', c:T.DAY, val:4 },
    { t: 'pátek', c:T.DAY, val:5 },
    { t: 'sobota', c:T.DAY, val:6 },
    { t: 'sobotu', c:T.DAY, val:6 },
    { t: 'neděle', c:T.DAY, val:0 },
    { t: 'neděli', c:T.DAY, val:0 },

    //měsíce
    { t: 'leden', c:T.MONTH, val:1 },
    { t: 'únor', c:T.MONTH, val:2 },
    { t: 'březen', c:T.MONTH, val:3 },
    { t: 'duben', c:T.MONTH, val:4 },
    { t: 'květen', c:T.MONTH, val:5 },
    { t: 'červen', c:T.MONTH, val:6 },
    { t: 'červenec', c:T.MONTH, val:7 },
    { t: 'srpen', c:T.MONTH, val:8 },
    { t: 'září', c:T.MONTH, val:9 },
    { t: 'říjen', c:T.MONTH, val:10 },
    { t: 'listopad', c:T.MONTH, val:11 },
    { t: 'prosinec', c:T.MONTH, val:12 },
    { t: 'ledna', c:T.MONTH, val:1 },
    { t: 'února', c:T.MONTH, val:2 },
    { t: 'března', c:T.MONTH, val:3 },
    { t: 'dubna', c:T.MONTH, val:4 },
    { t: 'května', c:T.MONTH, val:5 },
    { t: 'června', c:T.MONTH, val:6 },
    { t: 'července', c:T.MONTH, val:7 },
    { t: 'srpna', c:T.MONTH, val:8 },
    { t: 'září', c:T.MONTH, val:9 },
    { t: 'října', c:T.MONTH, val:10 },
    { t: 'listopadu', c:T.MONTH, val:11 },
    { t: 'prosince', c:T.MONTH, val:12 },
    { t: 'lednu', c:T.MONTH, val:1 },
    { t: 'únoru', c:T.MONTH, val:2 },
    { t: 'březnu', c:T.MONTH, val:3 },
    { t: 'dubnu', c:T.MONTH, val:4 },
    { t: 'květnu', c:T.MONTH, val:5 },
    { t: 'červnu', c:T.MONTH, val:6 },
    { t: 'červenci', c:T.MONTH, val:7 },
    { t: 'srpnu', c:T.MONTH, val:8 },
    { t: 'září', c:T.MONTH, val:9 },
    { t: 'říjnu', c:T.MONTH, val:10 },
    { t: 'listopadu', c:T.MONTH, val:11 },
    { t: 'prosinci', c:T.MONTH, val:12 },

    //dny v měsíci
    { t: 'prvního', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:1},{c:T.TIM, val:"d"}] },
    { t: 'druhého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:2},{c:T.TIM, val:"d"}] },
    { t: 'třetího', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:3},{c:T.TIM, val:"d"}] },
    { t: 'čtvrtého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:4},{c:T.TIM, val:"d"}] },
    { t: 'pátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:5},{c:T.TIM, val:"d"}] },
    { t: 'šestého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:6},{c:T.TIM, val:"d"}] },
    { t: 'sedmého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:7},{c:T.TIM, val:"d"}] },
    { t: 'osmého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:8},{c:T.TIM, val:"d"}] },
    { t: 'devátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:9},{c:T.TIM, val:"d"}] },
    { t: 'desátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:10},{c:T.TIM, val:"d"}] },
    { t: 'jedenáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:11},{c:T.TIM, val:"d"}] },
    { t: 'dvanáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:12},{c:T.TIM, val:"d"}] },
    { t: 'třináctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:13},{c:T.TIM, val:"d"}] },
    { t: 'čtrnáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:14},{c:T.TIM, val:"d"}] },
    { t: 'patnáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:15},{c:T.TIM, val:"d"}] },
    { t: 'šestnáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:16},{c:T.TIM, val:"d"}] },
    { t: 'sedmnáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:17},{c:T.TIM, val:"d"}] },
    { t: 'osmnáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:18},{c:T.TIM, val:"d"}] },
    { t: 'devatenáctého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:19},{c:T.TIM, val:"d"}] },
    { t: 'dvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:20},{c:T.TIM, val:"d"}] },
    { t: 'jednadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:21},{c:T.TIM, val:"d"}] },
    { t: 'dvaadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:22},{c:T.TIM, val:"d"}] },
    { t: 'třiadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:23},{c:T.TIM, val:"d"}] },
    { t: 'čtyřiadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:24},{c:T.TIM, val:"d"}] },
    { t: 'pětadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:25},{c:T.TIM, val:"d"}] },
    { t: 'šestadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:26},{c:T.TIM, val:"d"}] },
    { t: 'sedmadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:27},{c:T.TIM, val:"d"}] },
    { t: 'osmadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:28},{c:T.TIM, val:"d"}] },
    { t: 'devětadvacátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:29},{c:T.TIM, val:"d"}] },
    { t: 'třicátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:30},{c:T.TIM, val:"d"}] },
    { t: 'jednatřicátého', c:T.COMP, val:[{c:T.PRE, val:"@"},{c:T.NUM, val:31},{c:T.TIM, val:"d"}] },

    { t: 'hodiny', c:T.TIM, val:"h" }, 
    { t: 'hodinu', c:T.TIM, val:"h" },
    { t: 'hodin', c:T.TIM, val:"h" },
    { t: 'minut', c:T.TIM, val:"m" },
    { t: 'minutu', c:T.TIM, val:"m" },
    { t: 'den', c:T.TIM, val:"d" },
    { t: 'dny', c:T.TIM, val:"d" },
    { t: 'dní', c:T.TIM, val:"d" },
    { t: 'dnů', c:T.TIM, val:"d" },
    { t: 'týden', c:T.TIM, val:"w"  },  
    { t: 'týdny', c:T.TIM, val:"w"  },  
    { t: 'měsíc', c:T.TIM, val:"M"  },
    { t: 'rok', c:T.TIM, val:"y"  },    
    { t: 'dnes', c:T.COMP, val:[{c:T.PRE, val:"+"},{c:T.NUM, val:0},{c:T.FDAY,val:0},{c:T.TIM, val:"d"}] },   
    { t: 'zítra', c:T.COMP, val:[
        {c:T.PRE, val:"+"},
        {c:T.NUM, val:1},
        {c:T.FDAY,val:1},
        {c:T.TIM, val:"d"},
    ] },  
    { t: 'pozítří', c:T.COMP, val:[
        {c:T.PRE, val:"+"},
        {c:T.NUM, val:2},
        {c:T.FDAY,val:2},
        {c:T.TIM, val:"d"},
    ]},
    { t: 'popozítří', c:T.COMP, val:[
        {c:T.PRE, val:"+"},
        {c:T.NUM, val:3},
        {c:T.FDAY,val:3},
        {c:T.TIM, val:"d"},
    ]},
    { t: 'poledne', c:T.COMP, val:[
        {c:T.NUM, val:12},
        {c:T.TIM, val:"h"},
    ] },
    { t: 'odpoledne', c:T.MOD, val:"pm" },
    { t: 'večer', c:T.MOD, val:"ev" },  
    { t: 'ráno', c:T.MOD, val:"am" },
    { t: 'dopoledne', c:T.MOD, val:"no" },
  ]
  

const nodia = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")  

export const parseTime = (text) => {
    let ts = text.split(/\s/)
    let out = []
    let prenum = "";
    for (let t of ts) {
        //beru slovo po slovu

        //fixes
        t=nodia(t).toLowerCase()

        //den, měsíc a rok ve formátu 10.10.2024
        let dmy = t.match(/(\d\d?)\.(\d\d?)\.(\d\d\d\d)/)
        if (dmy) {
            out.push({c:T.PRE, val:"@"})
            out.push({c:T.NUM, val:parseInt(dmy[1])})
            out.push({c:T.TIM, val:"d"})
            out.push({c:T.NUM, val:parseInt(dmy[2])})
            out.push({c:T.TIM, val:"M"})
            out.push({c:T.NUM, val:parseInt(dmy[3])})
            out.push({c:T.TIM, val:"y"})
            continue
        }


        //den a měsíc typu 10.10.
        let dm = t.match(/(\d\d?)\.(\d\d?)\./)
        if (dm) {
            out.push({c:T.PRE, val:"@"})
            out.push({c:T.NUM, val:parseInt(dm[1])})
            out.push({c:T.TIM, val:"d"})
            out.push({c:T.NUM, val:parseInt(dm[2])})
            out.push({c:T.TIM, val:"M"})
            continue
        }


        //otestuju dny typu "10."
        let d = t.match(/(\d\d?)\./)
        if (d) {
            out.push({c:T.PRE, val:"@"})
            out.push({c:T.NUM, val:parseInt(d[1])})
            if (prenum=="") {
                out.push({c:T.TIM, val:"d"})
                prenum="d"
            } else {
                out.push({c:T.TIM, val:"M"})
                prenum="m"
            }
            continue
        }



        //otestuju hodiny typu 18:00
        let h = t.match(/(\d\d?):(\d\d)/)
        if (h) {
            out.push({c:T.PRE, val:"@"})
            out.push({c:T.NUM, val:parseInt(h[1])})
            out.push({c:T.TIM, val:"h"})
            out.push({c:T.NUM, val:parseInt(h[2])})
            out.push({c:T.TIM, val:"m"})
            continue
        }


        //otestuju číslo
        let num = parseInt(t)
        if (!isNaN(num)) {
            out.push({t:t, c:T.NUM, val:num})
            continue
        }


        //hledám ho v terms
        //pokud ho najdu, nacpu do pole

        for (let term of terms) {
            if (t == nodia(term.t).toLowerCase()) {
                if (term.c == T.COMP) {
                    out = out.concat(term.val)
                } else {
                    out.push(term)
                }
                break
            }
        }
    }
    return out
}