module.exports = {
  "mcps": [
    {
      "address": 32,
      "porta": 0 ,
      "portb": 0
    },
    {
      "address": 33,
      "porta": 0,
      "portb": 0
    },
    {
      "address": 34,
      "porta":255,
      "portb":0
    },
    {
      "address": 35,
      "porta": 255,
      "portb": 255
    }
  ],
  "zones": [
    {
      "id": 1,
      "title": "Chambre 2",
      "lamps": [
        {
          "identifier": "1",
          "description": "Lampe 1",
          "status": true,
          "mcpInput": 35,
          "mcpOutput": 32,
          "addressInput": 0,
          "addressOutput": 5
        },
        {
          "identifier": "2",
          "description": "Lampe 2",
          "status": true,
          "mcpInput": 35,
          "mcpOutput": 34,
          "addressInput": 1,
          "addressOutput": 15
        },
        {
          "identifier": "3",
          "description": "Lampe 3",
          "status": true,
          "mcpInput": 35,
          "mcpOutput": 34,
          "addressInput": 2,
          "addressOutput": 14
        },
        {
          "identifier": "4",
          "description": "Lampe 4",
          "status": true,
          "mcpInput": 35,
          "mcpOutput": 34,
          "addressInput": 3,
          "addressOutput": 13
        }
      ],
      "windows": [
        {
          "identifier": "1",
          "title":"Fenetre Face",
          "mcpUp": 32,
          "addressUp": 4,
          "upTime": 14650,
          "mcpDown": 32,
          "addressDown": 3,
          "downTime": 14450

        },

        {
          "identifier": "1",
          "title":"Fenetre lit",
          "mcpUp": 33,
          "addressUp": 12,
          "upTime": 14650,
          "mcpDown": 33,
          "addressDown": 11,
          "downTime": 14450
        }

          ],
      "coolers": [
        {
          "identifier": "1",
          "description": "clim1",
          "status": true,
          "mcpInput": 34,
          "mcpOutput": 34,
          "addressInput": 6,
          "addressOutput": 9
        }
      ]
    },
    {
      "id": 2,
      "title": "Chambre parent",
      "lamps": [
        {
          "identifier": "1",
          "description": "Lampe 1",
          "status": true,
          "mcpInput": 34,
          "mcpOutput": 34,
          "addressInput": 3,
          "addressOutput": 12
        },
        {
          "identifier": "2",
          "description": "Lampe 2",
          "status": true,
          "mcpInput": 34,
          "mcpOutput": 34,
          "addressInput": 4,
          "addressOutput": 11
        },
        {
          "identifier": "3",
          "description": "Lampe 3",
          "status": true,
          "mcpInput": 34,
          "mcpOutput": 34,
          "addressInput": 5,
          "addressOutput": 10
        }
      ],
      "windows": [
        {
          "identifier": "1",
          "mcpUp": 33,
          "addressUp": 5,
          "upTime": 14650,
          "mcpDown": 33,
          "addressDown": 6,
          "downTime": 14450

        },
        {
          "identifier": "1",
          "mcpUp": 33,
          "addressUp": 1,
          "upTime": 14650,
          "mcpDown": 33,
          "addressDown": 2,
          "downTime": 14450
        }


          ],
      "coolers": [
        {
          "identifier": "1",
          "description": "clim1",
          "status": true,
          "mcpInput": 34,
          "mcpOutput": 34,
          "addressInput": 7,
          "addressOutput": 8
        }

      ]
    }
  ]
};
