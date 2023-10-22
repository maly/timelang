import { text2time } from "../index.js"

const terms=[
    
    {t:"za dvě hodiny",d:"22. 10. 2023 11:00:00"},
    {t:"za čtvrt hodiny",d:"22. 10. 2023 9:15:00"},
    {t:"za půl hodiny",d:"22. 10. 2023 9:30:00"},
    {t:"za třičtvrtě hodiny",d:"22. 10. 2023 9:45:00"},
    {t:"za hodinu",d:"22. 10. 2023 10:00:00"},
    {t:"za 30 minut",d:"22. 10. 2023 9:30:00"},
    {t:"za 15 minut",d:"22. 10. 2023 9:15:00"},
    {t:"za 10 minut",d:"22. 10. 2023 9:10:00"},
    {t:"za 5 minut",d:"22. 10. 2023 9:05:00"},
    {t:"za minutu",d:"22. 10. 2023 9:01:00"},
    {t:"za pět hodin",d:"22. 10. 2023 14:00:00"},
    {t:"za dva dny",d:"24. 10. 2023 9:00:00"},
    {t:"zítra",d:"23. 10. 2023 9:00:00"},
    {t:"pozítří",d:"24. 10. 2023 9:00:00"},
    {t:"za týden",d:"29. 10. 2023 9:00:00"},
    {t:"za měsíc",d:"22. 11. 2023 9:00:00"},
    {t:"za rok",d:"22. 10. 2024 9:00:00"},
    
    {t:"zítra odpoledne",d:"23. 10. 2023 15:00:00"},
    {t:"zítra večer",d:"23. 10. 2023 18:00:00"},
    {t:"zítra ráno",d:"23. 10. 2023 7:00:00"},
    {t:"dnes vecer",d:"22. 10. 2023 18:00:00"},
    {t:"dnes ODPOLEDNe",d:"22. 10. 2023 15:00:00"},
    {t:"dnes ráno",d:"22. 10. 2023 7:00:00"}, 
    {t:"za 2 dny",d:"24. 10. 2023 9:00:00"},
    {t:"za 3 hodiny",d:"22. 10. 2023 12:00:00"},
    {t:"ve tri hodiny",d:"22. 10. 2023 15:00:00"}, //
    {t:"ve ctyri hodiny odpoledne",d:"22. 10. 2023 16:00:00"},
    {t:"v šest večer",d:"22. 10. 2023 18:00:00"},
    {t:"v 18:00",d:"22. 10. 2023 18:00:00"},
    {t:"v sedm",d:"22. 10. 2023 19:00:00"},
    {t:"v jedenáct",d:"22. 10. 2023 11:00:00"},
    {t:"v jedenáct večer",d:"22. 10. 2023 23:00:00"},
    {t:"v pět ráno",d:"23. 10. 2023 5:00:00"},
    {t:"ve čtvrt",d:"22. 10. 2023 9:15:00"},
    {t:"v půl",d:"22. 10. 2023 9:30:00"},
    {t:"v třičtvrtě",d:"22. 10. 2023 9:45:00"},
    {t:"v půl jedenácté",d:"22. 10. 2023 10:30:00"},
    {t:"v půl jedenácté večer",d:"22. 10. 2023 22:30:00"},
    {t:"v půl páté",d:"22. 10. 2023 16:30:00"},
    {t:"ve čtvrt na jedenáct",d:"22. 10. 2023 10:15:00"},
    {t:"ve třičtvrtě na jedenáct",d:"22. 10. 2023 10:45:00"},
    {t:"ve tři čtvrti na jedenáct",d:"22. 10. 2023 10:45:00"},
    
    {t:"v úterý ve tři odpoledne",d:"24. 10. 2023 15:00:00"},
    {t:"Zítra v poledne",d:"23. 10. 2023 12:00:00"},
    {t:"10.11.2024",d:"10. 11. 2024 9:00:00"},
    {t:"10. 11. 2024",d:"10. 11. 2024 9:00:00"},
    {t:"v lednu 2025",d:"22. 1. 2025 9:00:00"},
    {t:"v úterý za dva týdny",d:"7. 11. 2023 9:00:00"},
    {t:"za dva týdny v úterý v půl páté odpoledne",d:"7. 11. 2023 16:30:00"},
    {t:"11. v 10",d:"11. 11. 2023 10:00:00"},
    {t:"pětadvacátého ve tři hodiny odpoledne",d:"25. 10. 2023 15:00:00"},
    {t:"dvacátého pátého prosince ve tři hodiny odpoledne",d:"25. 12. 2023 15:00:00"},
    {t:"dvacátého pátého ledna ve tři hodiny odpoledne",d:"25. 1. 2024 15:00:00"},
    {t:"za měsíc v úterý",d:"28. 11. 2023 9:00:00"},
]

let testDate = new Date("2023-10-22T09:00:00")
console.log("Výchozí datum:",testDate.toLocaleString("cs"))

for (let v of terms) {
    let t = v.t
    let gt = text2time(t, testDate).toLocaleString("cs")
    if (gt == v.d) {
        console.log("[OK]", t,"=>", gt)
    } else {
        console.log("[>>>ERR]", t, gt, v.d)
    }
    
}