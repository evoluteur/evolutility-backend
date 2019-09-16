/*
  Evolutility DB model for Wine tastings
  https://github.com/evoluteur/evolutility-server-node
*/

module.exports = {
	"id": "winetasting",
	"title": "Wine tastings",
	"world": "organizer",
	"pKey": "id",
	"table": "wine_tasting",
	"titleField": "drink_date",
	"searchFields": [
		"robe",
		"nose",
		"taste",
		"notes"
	],
	"fields": [
		{
			"id": "drink_date",
			"type": "date",
			"label": "Date",
			"required": true,
			"inMany": true,
			"column": "drink_date"
		},
		{
			"id": "wine_id",
			"type": "lov",
			"label": "Wine",
			"object": "winecellar",
			"required": true,
			"lovIcon": false,
			"inMany": true,
			"column": "wine_id",
			"lovTable": "wine",
			"deleteTrigger": true
		},
		{
			"id": "taste",
			"type": "text",
			"label": "Taste",
			"maxLength": 100,
			"inMany": true,
			"column": "taste"
		},
		{
			"id": "robe",
			"type": "text",
			"label": "Robe",
			"maxLength": 100,
			"inMany": true,
			"column": "robe"
		},
		{
			"id": "nose",
			"type": "text",
			"label": "Nose",
			"maxLength": 100,
			"inMany": true,
			"column": "nose"
		},
		{
			"id": "notes",
			"type": "textmultiline",
			"label": "Note",
			"inMany": true,
			"column": "notes"
		}
	],
	"collections": []
}