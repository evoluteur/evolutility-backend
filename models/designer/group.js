/*
  Evolutility DB model for Field Groups
  https://github.com/evoluteur/evolutility-server-node
*/

module.exports = {
	"id": "group",
	"title": "Field Groups",
	"world": "designer",
	"pKey": "id",
	"table": "evol_object_group",
	"active": true,
	"titleField": "label",
	"fields": [
		{
			"id": "gid",
			"type": "text",
			"label": "Group ID",
			"required": false,
			"inMany": true,
			"column": "gid",
			"inSearch": true
		},
		{
			"id": "label",
			"type": "text",
			"label": "Label",
			"required": true,
			"maxLength": 100,
			"inMany": true,
			"column": "label"
		},
		{
			"id": "type",
			"type": "lov",
			"label": "Type",
			"list": [
				{
					"id": 1,
					"text": "Panel"
				},
				{
					"id": 2,
					"text": "Collapsible"
				}
			],
			"lovIcon": false,
			"inMany": true,
			"column": "type_id",
			"lovTable": "evol_group_type"
		},
		{
			"id": "object",
			"type": "lov",
			"label": "Object",
			"object": "object",
			"required": true,
			"noCharts": true,
			"lovIcon": false,
			"inMany": true,
			"column": "object_id",
			"lovTable": "evol_object",
			"lovColumn": "title",
			"deleteTrigger": true
		},
		{
			"id": "fields",
			"type": "json",
			"label": "Fields",
			"required": true,
			"column": "fields"
		},
		{
			"id": "position",
			"type": "integer",
			"label": "Position",
			"maxLength": 3,
			"column": "position"
		},
		{
			"id": "width",
			"type": "integer",
			"label": "Width",
			"maxLength": 3,
			"defaultValue": 100,
			"column": "width"
		},
		{
			"id": "css",
			"type": "text",
			"label": "CSS",
			"maxLength": 20,
			"column": "css"
		},
		{
			"id": "header",
			"type": "textmultiline",
			"label": "Header",
			"maxLength": 500,
			"column": "header"
		},
		{
			"id": "footer",
			"type": "textmultiline",
			"label": "Footer",
			"maxLength": 500,
			"column": "footer"
		},
		{
			"id": "description",
			"type": "textmultiline",
			"label": "Description",
			"maxLength": 500,
			"column": "description"
		}
	],
	"collections": []
}