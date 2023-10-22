# timelang
## [ES6] Konverze slovního vyjádření času na Date()

Příklady:

Výchozí datum je *22. 10. 2023 9:00:00*

| Vstupní popis | Výsledný čas |
| --- | --- |
| za dvě hodiny | 22. 10. 2023 11:00:00 |
| za čtvrt hodiny | 22. 10. 2023 9:15:00 |
| za půl hodiny | 22. 10. 2023 9:30:00 |
| za třičtvrtě hodiny | 22. 10. 2023 9:45:00 |
| za hodinu | 22. 10. 2023 10:00:00 |
| za 30 minut | 22. 10. 2023 9:30:00 |
| za 15 minut | 22. 10. 2023 9:15:00 |
| za 10 minut | 22. 10. 2023 9:10:00 |
| za 5 minut | 22. 10. 2023 9:05:00 |
| za minutu | 22. 10. 2023 9:01:00 |
| za pět hodin | 22. 10. 2023 14:00:00 |
| za dva dny | 24. 10. 2023 9:00:00 |
| zítra | 23. 10. 2023 9:00:00 |
| pozítří | 24. 10. 2023 9:00:00 |
| za týden | 29. 10. 2023 9:00:00 |
| za měsíc | 22. 11. 2023 9:00:00 |
| za rok | 22. 10. 2024 9:00:00 |
| zítra odpoledne | 23. 10. 2023 15:00:00 |
| zítra večer | 23. 10. 2023 18:00:00 |
| zítra ráno | 23. 10. 2023 7:00:00 |
| dnes vecer | 22. 10. 2023 18:00:00 |
| dnes ODPOLEDNe | 22. 10. 2023 15:00:00 |
| dnes ráno | 22. 10. 2023 7:00:00 |
| za 2 dny | 24. 10. 2023 9:00:00 |
| za 3 hodiny | 22. 10. 2023 12:00:00 |
| ve tri hodiny | 22. 10. 2023 15:00:00 |
| ve ctyri hodiny odpoledne | 22. 10. 2023 16:00:00 |
| v šest večer | 22. 10. 2023 18:00:00 |
| v 18:00 | 22. 10. 2023 18:00:00 |
| v sedm | 22. 10. 2023 19:00:00 |
| v jedenáct | 22. 10. 2023 11:00:00 |
| v jedenáct večer | 22. 10. 2023 23:00:00 |
| v pět ráno | 23. 10. 2023 5:00:00 |
| ve čtvrt | 22. 10. 2023 9:15:00 |
| v půl | 22. 10. 2023 9:30:00 |
| v třičtvrtě | 22. 10. 2023 9:45:00 |
| v půl jedenácté | 22. 10. 2023 10:30:00 |
| v půl jedenácté večer | 22. 10. 2023 22:30:00 |
| v půl páté | 22. 10. 2023 16:30:00 |
| v úterý ve tři odpoledne | 24. 10. 2023 15:00:00 |
| Zítra v poledne | 23. 10. 2023 12:00:00 |
| 10.11.2024 | 10. 11. 2024 9:00:00 |
| 10. 11. 2024 | 10. 11. 2024 9:00:00 |
| v lednu 2025 | 22. 1. 2025 9:00:00 |
| v úterý za dva týdny | 7. 11. 2023 9:00:00 |
| za dva týdny v úterý v půl páté odpoledne | 7. 11. 2023 16:30:00 |
| 11. v 10 | 11. 11. 2023 10:00:00 |
| pětadvacátého ve tři hodiny odpoledne | 25. 10. 2023 15:00:00 |
| dvacátého pátého prosince ve tři hodiny odpoledne | 25. 12. 2023 15:00:00 |
| dvacátého pátého ledna ve tři hodiny odpoledne | 25. 1. 2024 15:00:00 |