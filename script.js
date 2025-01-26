console.log("dziala");

// Utility
function price(number) {
    return String(number.toFixed(2)).replace(".", ",");
}

function date(val) {
    return val.slice(8, 10) + "." + val.slice(5, 7) + "." + val.slice(0, 4);
}

// Mocki (dane ktore powinny leciec z serwera)

let mockMessages = [
    "Witamy w Systemie Sprzedaży Biletów! To jest miejsce na wszelkie utrudnienia.",
    "W chwili obecnej trwają prace serwisowe. Za utrudnienia przepraszamy.",
    "Obecnie nie działają:",
    "System płatności",
    "A nawet zegar się zepsuł... Trzeba wymienić baterie.",
    "Fajnie by było gdyby:",
    "Była responsywność.",
    "Możliwe było cofanie do poprzedniego kroku.",
    "System nie przepuszczał dodania biletu bez wypełnienia imienia i nazwiska.",
    "Płatność w koszyku wymagała adresu e-mail.",
    "Możliwe było edytowanie biletów.",
    "Miejsca zajęte w innych biletach były w tych samych pociągach w tym samym dniu zajęte."
];

let mockTrains = [
    {
        "category": "IC",
        "number": "5123",
        "name": "BAŁTYK",
        "station1": {
            "name": "Gdańsk Główny",
            "time": "15:21"
        },
        "station2": {
            "name": "Warszawa Wschodnia",
            "time": "18:16"
        },
        "journeyTime": {
            hours: 2,
            minutes: 55
        },
        "prices": {
            "class2_nores": 79.99,
            "class2": 89.99,
            "class1": 149.99
        },
        "consist": [
            {"number": 11, "type": "2kl"},
            {"number": 12, "type": "2kl"},
            {"number": 13, "type": "1kl"}
        ]
    },
    {
        "category": "TLK",
        "number": "51101",
        "name": "WYBRZEŻE",
        "station1": {
            "name": "Gdańsk Główny",
            "time": "15:36"
        },
        "station2": {
            "name": "Warszawa Wschodnia",
            "time": "18:54"
        },
        "journeyTime": {
            hours: 3,
            minutes: 18
        },
        "prices": {
            "class2_nores": 34.99,
            "class2": 44.99,
            "class1": 89.99
        },
        "consist": [
            {"number": 21, "type": "2kl"},
            {"number": 22, "type": "2kl"},
            {"number": 23, "type": "2kl"},
            {"number": 24, "type": "2kl"},
            {"number": 25, "type": "1kl"},
            {"number": 26, "type": "1kl"}
        ]
    },
    {
        "category": "TLK",
        "number": "15101",
        "name": "WYBRZEŻE",
        "station1": {
            "name": "Warszawa Wschodnia",
            "time": "08:11"
        },
        "station2": {
            "name": "Gdańsk Główny",
            "time": "11:34"
        },
        "journeyTime": {
            hours: 3,
            minutes: 23
        },
        "prices": {
            "class2_nores": 34.99,
            "class2": 44.99,
            "class1": 89.99
        },
        "consist": [
            {"number": 26, "type": "1kl"},
            {"number": 25, "type": "1kl"},
            {"number": 24, "type": "2kl"},
            {"number": 23, "type": "2kl"},
            {"number": 22, "type": "2kl"},
            {"number": 21, "type": "2kl"}
        ]
    }
]

let mockWagonTypes = {
    "1kl": {
        "class": "class1",
        "display": "1",
        "layout": [
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 11},
                    {"tile": "seatl", "number": 12},
                    {},
                    {"tile": "seatl", "number": 15}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 13},
                    {"tile": "seatr", "number": 14},
                    {},
                    {"tile": "seatr", "number": 16}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 21},
                    {"tile": "seatl", "number": 22},
                    {},
                    {"tile": "seatl", "number": 25}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 23},
                    {"tile": "seatr", "number": 24},
                    {},
                    {"tile": "seatr", "number": 26}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 31},
                    {"tile": "seatl", "number": 32},
                    {},
                    {"tile": "seatl", "number": 35}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 33},
                    {"tile": "seatr", "number": 34},
                    {},
                    {"tile": "seatr", "number": 36}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 41},
                    {"tile": "seatl", "number": 42},
                    {},
                    {"tile": "seatl", "number": 45}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 43},
                    {"tile": "seatr", "number": 44},
                    {},
                    {"tile": "seatr", "number": 46}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 51},
                    {"tile": "seatl", "number": 52},
                    {},
                    {"tile": "seatl", "number": 55}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 53},
                    {"tile": "seatr", "number": 54},
                    {},
                    {"tile": "seatr", "number": 56}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 61},
                    {"tile": "seatl", "number": 62},
                    {},
                    {"tile": "seatl", "number": 65}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 63},
                    {"tile": "seatr", "number": 64},
                    {},
                    {"tile": "seatr", "number": 66}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 71},
                    {"tile": "seatl", "number": 72},
                    {},
                    {"tile": "seatl", "number": 75}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 73},
                    {"tile": "seatr", "number": 74},
                    {},
                    {"tile": "seatr", "number": 76}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 81},
                    {"tile": "seatl", "number": 82},
                    {},
                    {"tile": "seatl", "number": 85}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 83},
                    {"tile": "seatr", "number": 84},
                    {},
                    {"tile": "seatr", "number": 86}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatl", "number": 91},
                    {"tile": "seatl", "number": 92},
                    {},
                    {"tile": "seatl", "number": 95}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {}
                ]
            },
            {
                "class": "class1",
                "tiles": [
                    {"tile": "seatr", "number": 93},
                    {"tile": "seatr", "number": 94},
                    {},
                    {"tile": "seatr", "number": 96}
                ]
            }
        ]
    },
    "2kl": {
        "class": "class2",
        "display": "2",
        "layout": [
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 11},
                    {"tile": "seatl", "number": 12},
                    {},
                    {"tile": "seatl", "number": 15},
                    {"tile": "seatl", "number": 16}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 13},
                    {"tile": "seatr", "number": 14},
                    {},
                    {"tile": "seatr", "number": 17},
                    {"tile": "seatr", "number": 18}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 21},
                    {"tile": "seatl", "number": 22},
                    {},
                    {"tile": "seatl", "number": 25},
                    {"tile": "seatl", "number": 26}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 23},
                    {"tile": "seatr", "number": 24},
                    {},
                    {"tile": "seatr", "number": 27},
                    {"tile": "seatr", "number": 28}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 31},
                    {"tile": "seatl", "number": 32},
                    {},
                    {"tile": "seatl", "number": 35},
                    {"tile": "seatl", "number": 36}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 33},
                    {"tile": "seatr", "number": 34},
                    {},
                    {"tile": "seatr", "number": 37},
                    {"tile": "seatr", "number": 38}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 41},
                    {"tile": "seatl", "number": 42},
                    {},
                    {"tile": "seatl", "number": 45},
                    {"tile": "seatl", "number": 46}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 43},
                    {"tile": "seatr", "number": 44},
                    {},
                    {"tile": "seatr", "number": 47},
                    {"tile": "seatr", "number": 48}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 51},
                    {"tile": "seatl", "number": 52},
                    {},
                    {"tile": "seatl", "number": 55},
                    {"tile": "seatl", "number": 56}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 53},
                    {"tile": "seatr", "number": 54},
                    {},
                    {"tile": "seatr", "number": 57},
                    {"tile": "seatr", "number": 58}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 61},
                    {"tile": "seatl", "number": 62},
                    {},
                    {"tile": "seatl", "number": 65},
                    {"tile": "seatl", "number": 66}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 63},
                    {"tile": "seatr", "number": 64},
                    {},
                    {"tile": "seatr", "number": 67},
                    {"tile": "seatr", "number": 68}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 71},
                    {"tile": "seatl", "number": 72},
                    {},
                    {"tile": "seatl", "number": 75},
                    {"tile": "seatl", "number": 76}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 73},
                    {"tile": "seatr", "number": 74},
                    {},
                    {"tile": "seatr", "number": 77},
                    {"tile": "seatr", "number": 78}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 81},
                    {"tile": "seatl", "number": 82},
                    {},
                    {"tile": "seatl", "number": 85},
                    {"tile": "seatl", "number": 86}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 83},
                    {"tile": "seatr", "number": 84},
                    {},
                    {"tile": "seatr", "number": 87},
                    {"tile": "seatr", "number": 88}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 91},
                    {"tile": "seatl", "number": 92},
                    {},
                    {"tile": "seatl", "number": 95},
                    {"tile": "seatl", "number": 96}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 93},
                    {"tile": "seatr", "number": 94},
                    {},
                    {"tile": "seatr", "number": 97},
                    {"tile": "seatr", "number": 98}
                ]
            }
        ]
    },
    "12kl": {
        "class": "class12",
        "display": "1/2",
        "layout": [
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 11},
                    {"tile": "seatl", "number": 12},
                    {},
                    {"tile": "seatl", "number": 15},
                    {"tile": "seatl", "number": 16}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 13},
                    {"tile": "seatr", "number": 14},
                    {},
                    {"tile": "seatr", "number": 17},
                    {"tile": "seatr", "number": 18}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 21},
                    {"tile": "seatl", "number": 22},
                    {},
                    {"tile": "seatl", "number": 25},
                    {"tile": "seatl", "number": 26}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 23},
                    {"tile": "seatr", "number": 24},
                    {},
                    {"tile": "seatr", "number": 27},
                    {"tile": "seatr", "number": 28}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 31},
                    {"tile": "seatl", "number": 32},
                    {},
                    {"tile": "seatl", "number": 35},
                    {"tile": "seatl", "number": 36}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 33},
                    {"tile": "seatr", "number": 34},
                    {},
                    {"tile": "seatr", "number": 37},
                    {"tile": "seatr", "number": 38}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 41},
                    {"tile": "seatl", "number": 42},
                    {},
                    {"tile": "seatl", "number": 45},
                    {"tile": "seatl", "number": 46}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 43},
                    {"tile": "seatr", "number": 44},
                    {},
                    {"tile": "seatr", "number": 47},
                    {"tile": "seatr", "number": 48}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 51},
                    {"tile": "seatl", "number": 52},
                    {},
                    {"tile": "seatl", "number": 55},
                    {"tile": "seatl", "number": 56}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 53},
                    {"tile": "seatr", "number": 54},
                    {},
                    {"tile": "seatr", "number": 57},
                    {"tile": "seatr", "number": 58}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 61},
                    {"tile": "seatl", "number": 62},
                    {},
                    {"tile": "seatl", "number": 65},
                    {"tile": "seatl", "number": 66}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 63},
                    {"tile": "seatr", "number": 64},
                    {},
                    {"tile": "seatr", "number": 67},
                    {"tile": "seatr", "number": 68}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 71},
                    {"tile": "seatl", "number": 72},
                    {},
                    {"tile": "seatl", "number": 75},
                    {"tile": "seatl", "number": 76}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 73},
                    {"tile": "seatr", "number": 74},
                    {},
                    {"tile": "seatr", "number": 77},
                    {"tile": "seatr", "number": 78}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 81},
                    {"tile": "seatl", "number": 82},
                    {},
                    {"tile": "seatl", "number": 85},
                    {"tile": "seatl", "number": 86}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 83},
                    {"tile": "seatr", "number": 84},
                    {},
                    {"tile": "seatr", "number": 87},
                    {"tile": "seatr", "number": 88}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatl", "number": 91},
                    {"tile": "seatl", "number": 92},
                    {},
                    {"tile": "seatl", "number": 95},
                    {"tile": "seatl", "number": 96}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "tableu1"},
                    {"tile": "tableu2"},
                    {},
                    {"tile": "tabled2"},
                    {"tile": "tabled1"}
                ]
            },
            {
                "class": "class2",
                "tiles": [
                    {"tile": "seatr", "number": 93},
                    {"tile": "seatr", "number": 94},
                    {},
                    {"tile": "seatr", "number": 97},
                    {"tile": "seatr", "number": 98}
                ]
            }
        ]
    }
}

// Stan naszej aplikacji

let CLASS_TEXTS = {
    "class1": "<span class=\"class1\">1 klasa</span>",
    "class2": "<span class=\"class2\">2 klasa</span>"
}

let selectedDate = null;
let currentTrain = null;
let currentWagon = null;
let selectedSeat = null;
let passengers = [];
let cart = [
    {
        "date": "2025-01-27",
        "train": mockTrains[1],
        "passengers": [
            {
                "name": "Jan Kowalski",
                "reservation": {
                    "wagon": 21,
                    "seat": 47
                },
                "halfPrice": false
            },
            {
                "name": "Anna Kowalska",
                "reservation": {
                    "wagon": 21,
                    "seat": 48
                },
                "halfPrice": false
            }
        ],
        "paid": false
    },
    {
        "date": "2025-01-28",
        "train": mockTrains[2],
        "passengers": [
            {
                "name": "Jan Kowalski",
                "reservation": {
                    "wagon": 21,
                    "seat": 47
                },
                "halfPrice": false
            },
            {
                "name": "Anna Kowalska",
                "reservation": {
                    "wagon": 21,
                    "seat": 48
                },
                "halfPrice": false
            }
        ],
        "paid": false
    }
];

// Reszta kodu

function getClassFromReservation(train, reservation) {
    if (reservation == undefined) {
        return "class2_nores";
    }
    let targetWagon = null;
    train.consist.forEach(wagon => {
        if (wagon.number == reservation.wagon) {
            targetWagon = wagon;
        }
    });
    if (targetWagon == null) {
        console.log("ERROR: Could not find a matching wagon from reservation:");
        console.log(reservation);
        return "class2_nores";
    }
    return mockWagonTypes[targetWagon.type].class;
}

function getReservationPrice(train, reservation) {
    return train.prices[getClassFromReservation(train, reservation)];
}

function getTotalPrice(train, passengers) {
    let total = 0;
    passengers.forEach(passenger => {
        total += getReservationPrice(train, passenger.reservation);
    });
    return total;
}

function setPage(page) {
    $(".page").removeClass("visible");
    $("#page" + page).addClass("visible");
}

function selectWagon(wagon) {
    currentWagon = wagon;
    selectedSeat = null;
    let consistDiv = $("#pageticket #consist");
    consistDiv.find(".wagon").removeClass("selected");
    consistDiv.find("#wagon_" + wagon.number).addClass("selected");
    generateWagonLayout(wagon.type);
}

function setSeatState(number, state) {
    let tileDiv = $("#pageticket #layout").find("#tile_" + number);
    tileDiv.removeClass("free");
    tileDiv.removeClass("selected");
    tileDiv.removeClass("chosen");
    tileDiv.addClass(state);
}

function selectSeat(number) {
    setSeatState(selectedSeat, "free");
    selectedSeat = number;
    setSeatState(number, "selected");
    // Usun komunikat o tym ze nie wybrano miejsca
    $("#pageticket #error_noselect").removeClass("visible");
}

function unselectSeat() {
    setSeatState(selectedSeat, "free");
    selectedSeat = null;
}

function selectedSeatToChosen() {
    setSeatState(selectedSeat, "chosen");
    selectedSeat = null;
}

function unchooseSeat(number) {
    setSeatState(number, "free");
}

function isSeatChosen(number) {
    let found = false;
    passengers.forEach(passenger => {
        if (passenger.reservation != null && passenger.reservation.wagon == currentWagon.number && passenger.reservation.seat == number) {
            found = true;
        }
    })
    return found;
}

function updateStripeCart() {
    let stripeCart = $("#stripecart");
    stripeCart.text("Koszyk (" + cart.length + ")");
}

// Zarzadzanie pasazerami

function addPassenger() {
    // Zapisz dane z formularza aby je przywrocic przy regeneracji tabeli
    savePassengers();
    passengers.push({"name": "", "reservation": null, "halfPrice": false});
    generateTicketPassengerList();
}

function removePassenger(n) {
    let passenger = passengers[n - 1];
    if (passenger.reservation != null) {
        unreservePassenger(n);
    }
    // Zapisz dane z formularza aby je przywrocic przy regeneracji tabeli
    savePassengers();
    passengers.splice(n - 1, 1);
    generateTicketPassengerList();
}

function reservePassenger(n) {
    if (currentWagon == null || selectedSeat == null) {
        // Pokaz komunikat o tym ze nie wybrano miejsca
        $("#pageticket #error_noselect").addClass("visible");
        return;
    }
    let passenger = passengers[n - 1];
    passenger.reservation = {
        "wagon": currentWagon.number,
        "seat": selectedSeat
    };
    selectedSeatToChosen();
    generateTicketPassengerList();
}

function unreservePassenger(n) {
    let passenger = passengers[n - 1];
    unchooseSeat(passenger.reservation.seat);
    passenger.reservation = null;
    generateTicketPassengerList();
}

function savePassengers() {
    let passengersDiv = $("#pageticket #ticket #passengers");
    let i = 1;
    passengers.forEach(passenger => {
        passenger.name = passengersDiv.find("#name_" + i).val();
        i++;
    })
}

// Zarzadzanie biletami

function addTicket() {
    let ticket = {
        "date": selectedDate,
        "train": currentTrain,
        "passengers": passengers,
        "paid": false
    };
    cart.push(ticket);
    // Nie odswiezamy tutaj listy biletow bo w momencie dodawania biletu jestesmy na ekranie potwierdzenia, i tak nie bedzie tego widac
    updateStripeCart();
}

function removeTicket(n) {
    cart.splice(n - 1, 1);
    generateCartList();
    updateStripeCart();
}

// Robienie divow itp

function generateTrainTimesInDiv(train, div) {
    div.append("<div class=\"station left\">");
    div.append("<div class=\"separator\">");
    div.append("<div class=\"station right\">");
    div.find(".station.left").append("<div class=\"sname\">");
    div.find(".station.left").append("<div class=\"time\">");
    div.find(".station.left .sname").html(train.station1.name);
    div.find(".station.left .time").html(train.station1.time);
    div.find(".separator").html(">>>");
    div.find(".station.right").append("<div class=\"sname\">");
    div.find(".station.right").append("<div class=\"time\">");
    div.find(".station.right .sname").html(train.station2.name);
    div.find(".station.right .time").html(train.station2.time);
}

function generateTrainList() {
    let trainList = $("#pagetrain #trains");
    trainList.empty();
    mockTrains.forEach(train => {
        trainList.append("<div class=\"train info\">");
        let trainDiv = trainList.find(".train").last();
        // Rubryczki na kazda sekcje danych pociagu
        trainDiv.append("<div class=\"traininfo\">");
        trainDiv.append("<div class=\"times\">");
        trainDiv.append("<div class=\"prices\">");
        trainDiv.append("<div class=\"select\">");
        // Informacje o pociagu
        trainDiv.find(".traininfo").append("<div class=\"name\">");
        trainDiv.find(".traininfo").append("<div class=\"duration\">");
        trainDiv.find(".traininfo .name").html(train.category + "&nbsp;" + train.number + "<br/>" + train.name);
        trainDiv.find(".traininfo .duration").html("Czas jazdy: <b>" + train.journeyTime.hours + "h&nbsp;" + train.journeyTime.minutes + "min</b>");
        // Przyjazd i odjazd
        generateTrainTimesInDiv(train, trainDiv.find(".times"));
        // Ceny biletow
        trainDiv.find(".prices").append("<div class=\"price\">");
        trainDiv.find(".prices .price").last().append("<div class=\"class\">");
        trainDiv.find(".prices .price").last().append("<div class=\"value\">");
        trainDiv.find(".prices .price").last().find(".class").append("<span class=\"class2\">");
        trainDiv.find(".prices .price").last().find(".class").append("<div class=\"sub\">");
        trainDiv.find(".prices .price").last().find(".class .class2").html("klasa 2");
        trainDiv.find(".prices .price").last().find(".class .sub").html("bez miejscówki");
        trainDiv.find(".prices .price").last().find(".value").html(price(train.prices.class2_nores));
        trainDiv.find(".prices").append("<div class=\"price\">");
        trainDiv.find(".prices .price").last().append("<div class=\"class\">");
        trainDiv.find(".prices .price").last().append("<div class=\"value\">");
        trainDiv.find(".prices .price").last().find(".class").append("<span class=\"class2\">");
        trainDiv.find(".prices .price").last().find(".class").append("<div class=\"sub\">");
        trainDiv.find(".prices .price").last().find(".class .class2").html("klasa 2");
        trainDiv.find(".prices .price").last().find(".class .sub").html("z miejscówką");
        trainDiv.find(".prices .price").last().find(".value").html(price(train.prices.class2));
        trainDiv.find(".prices").append("<div class=\"price\">");
        trainDiv.find(".prices .price").last().append("<div class=\"class\">");
        trainDiv.find(".prices .price").last().append("<div class=\"value\">");
        trainDiv.find(".prices .price").last().find(".class").append("<span class=\"class1\">");
        trainDiv.find(".prices .price").last().find(".class .class1").html("klasa 1");
        trainDiv.find(".prices .price").last().find(".value").html(price(train.prices.class1));
        // Przycisk wyboru
        trainDiv.find(".select").append("<button id=\"trainselect\">");
        trainDiv.find(".select button").text("Wybierz");
        trainDiv.find(".select button").on("click", () => {
            currentTrain = train;
            currentWagon = null;
            selectedSeat = null;
            passengers = [];
            addPassenger();
            setPage("ticket");
            generateTrainConsist(train);
            resetWagonLayout();
            generateTicketBase(train);
        })
    })
}

function generateTrainConsist(train) {
    let consistDiv = $("#pageticket #consist");
    consistDiv.empty();
    consistDiv.append("<div class=\"wagon loco\">");
    consistDiv.find(".wagon").last().append("<div class=\"icon\">")
    consistDiv.find(".wagon").last().append("<div class=\"label\">")
    consistDiv.find(".wagon").last().find(".label").text("Lokomotywa");
    train.consist.forEach(wagon => {
        let wagonData = mockWagonTypes[wagon.type];
        consistDiv.append("<div id=\"wagon_" + wagon.number + "\" class=\"wagon " + wagonData.class + "\">");
        let wagonDiv = consistDiv.find(".wagon").last();
        wagonDiv.append("<div class=\"icon\">")
        wagonDiv.append("<div class=\"label\">")
        wagonDiv.find(".icon").text(wagonData.display);
        wagonDiv.find(".label").text("Wagon " + wagon.number);
        wagonDiv.on("click", () => {
            selectWagon(wagon);
        })
    });
}

function resetWagonLayout() {
    let layoutDiv = $("#pageticket #layout");
    layoutDiv.html("Wybierz wagon z listy powyżej aby zobaczyć układ jego wnętrza i wybrać miejsce.");
}

function generateWagonLayout(wagonType) {
    let layout = mockWagonTypes[wagonType].layout;
    let layoutDiv = $("#pageticket #layout");
    layoutDiv.empty();
    layout.forEach(column => {
        layoutDiv.append("<div class=\"column " + column.class + "\">");
        let columnDiv = layoutDiv.find(".column").last();
        column.tiles.forEach(tile => {
            columnDiv.append("<div class=\"tile\">");
            let tileDiv = columnDiv.find(".tile").last();
            if (tile.tile != undefined) {
                tileDiv.addClass(tile.tile);
            }
            if (tile.number != undefined) {
                // Musimy zobaczyc czy czasem nie generujemy ukladu dla wagonu z juz zajetymi przez nas miejscami
                if (isSeatChosen(tile.number)) {
                    tileDiv.addClass("chosen");
                } else {
                    tileDiv.addClass("free");
                }
                tileDiv.attr("id", "tile_" + tile.number)
                tileDiv.html("<div class=\"number\">" + tile.number + "</div>");
            }
            tileDiv.on("click", () => {
                if (tile.number != undefined && tileDiv.hasClass("free")) {
                    selectSeat(tile.number);
                }
            })
        });
    });
}

function generateTicketBase(train) {
    let ticketDiv = $("#pageticket #ticket");
    ticketDiv.empty();
    // Rubryczki na kazda sekcje danych na bilecie
    ticketDiv.append("<div class=\"traininfo\">");
    ticketDiv.append("<div id=\"passengers\">");
    ticketDiv.append("<div class=\"total\">");
    ticketDiv.append("<button id=\"addpassenger\">");
    ticketDiv.append(" ");
    ticketDiv.append("<button id=\"addticket\">");
    // Dane pociagu
    ticketDiv.find(".traininfo").append("<div class=\"line\">");
    ticketDiv.find(".traininfo .line").last().html("Pociąg: <b>" + train.category + " " + train.number + " " + train.name + "</b>");
    ticketDiv.find(".traininfo .line").last().append("<div class=\"right\">");
    ticketDiv.find(".traininfo .line").last().find(".right").html("Data przejazdu: <b>" + date(selectedDate) + "</b>");
    ticketDiv.find(".traininfo").append("<div class=\"line\">");
    ticketDiv.find(".traininfo .line").last().html("Ze stacji: <b>" + train.station1.name + "</b>");
    ticketDiv.find(".traininfo .line").last().append("<div class=\"right\">");
    ticketDiv.find(".traininfo .line").last().find(".right").html("odj. <b>" + train.station1.time + "</b>");
    ticketDiv.find(".traininfo").append("<div class=\"line\">");
    ticketDiv.find(".traininfo .line").last().html("Do stacji: <b>" + train.station2.name + "</b>");
    ticketDiv.find(".traininfo .line").last().append("<div class=\"right\">");
    ticketDiv.find(".traininfo .line").last().find(".right").html("przyj. <b>" + train.station2.time + "</b>");
    // Rezerwacje
    generateTicketPassengerList();
    // Laczna cena
    ticketDiv.find(".total").append("<div class=\"price\">");
    ticketDiv.find(".total .price").text("Razem: " + price(getTotalPrice(currentTrain, passengers)) + " zł");
    // Przyciski
    ticketDiv.find("#addpassenger").text("Dodaj pasażera");
    ticketDiv.find("#addpassenger").on("click", () => {
        addPassenger();
    });
    ticketDiv.find("#addticket").text("Do koszyka");
    ticketDiv.find("#addticket").on("click", () => {
        addTicket();
        setPage("ticketadd");
    });
}

function generateTicketPassengerList() {
    let passengersDiv = $("#pageticket #ticket #passengers");
    passengersDiv.empty();
    let showDeleteButton = passengers.length > 1;
    let i = 1;
    passengers.forEach(passenger => {
        // Use n, because i marshalled as a parameter will not keep its value properly!
        let n = i;
        let passengerClass = getClassFromReservation(currentTrain, passenger.reservation);
        passengersDiv.append("<div class=\"passenger\">");
        let passengerDiv = passengersDiv.find(".passenger").last();
        // Rubryczki na kazda sekcje danych pasazera
        passengerDiv.append("<div class=\"header\">");
        passengerDiv.append("<label for=\"name_" + i + "\">");
        passengerDiv.append("<input type=\"text\" id=\"name_" + i + "\" placeholder=\"Imię i nazwisko\">");
        passengerDiv.append("<div id=\"place_" + i + "\" class=\"reservation\">");
        passengerDiv.append("<div class=\"price\">");
        // Naglowek
        passengerDiv.find(".header").text("Pasażer " + i);
        if (showDeleteButton) {
            passengerDiv.find(".header").append("<div class=\"button\" id=\"delpassenger_" + i + "\">");
            passengerDiv.find(".header .button").text("[Usuń]");
            passengerDiv.find(".header .button").on("click", () => {
                removePassenger(n);
            });
        }
        // Pole na imie i nazwisko
        passengerDiv.find("label").text("Imię i nazwisko: ");
        passengerDiv.find("input").val(passenger.name);
        // Rezerwacja miejsca
        if (passenger.reservation == undefined) {
            passengerDiv.find(".reservation").html("Brak rezerwacji (" + CLASS_TEXTS.class2 + ")");
            passengerDiv.find(".reservation").append("<div class=\"button\" id=\"assign_" + i + "\">");
            passengerDiv.find(".reservation .button").text("[Wybierz miejsce ze schematu]");
            passengerDiv.find(".reservation .button").on("click", () => {
                reservePassenger(n);
            })
        } else {
            passengerDiv.find(".reservation").html("Wagon <b>" + passenger.reservation.wagon + "</b>, miejsce <b>" + passenger.reservation.seat + "</b> (" + CLASS_TEXTS[passengerClass] + ")");
            passengerDiv.find(".reservation").append("<div class=\"button\" id=\"delassign_" + i + "\">");
            passengerDiv.find(".reservation .button").text("[Usuń rezerwację miejsca]");
            passengerDiv.find(".reservation .button").on("click", () => {
                unreservePassenger(n);
            })
        }
        // Cena
        passengerDiv.find(".price").text("Cena: " + price(getReservationPrice(currentTrain, passenger.reservation)) + " zł");
        i++;
    });
    // zaktualizujmy jeszcze laczna cene
    let ticketDiv = $("#pageticket #ticket");
    ticketDiv.find(".total .price").text("Razem: " + price(getTotalPrice(currentTrain, passengers)) + " zł");
}

function generateCartList() {
    let cartDiv = $("#pagecart #cart");
    cartDiv.empty();
    let totalPrice = 0;
    if (cart.length == 0) {
        // Koszyk jest pusty, wyswietl stosowna wiadomosc.
        cartDiv.append("<div class=\"cartentry info\">");
        cartDiv.find(".cartentry").text("Koszyk jest pusty.");
    } else {
        let i = 1;
        cart.forEach(ticket => {
            let n = i;
            let ticketPrice = getTotalPrice(ticket.train, ticket.passengers);
            if (!ticket.paid) {
                totalPrice += ticketPrice;
            }
            cartDiv.append("<div class=\"cartentry info\">");
            let ticketDiv = cartDiv.find(".cartentry").last();
            // Zolte tlo jezeli bilet nieoplacony
            if (!ticket.paid) {
                ticketDiv.addClass("unpaid");
            }
            // Rubryczki na kazda sekcje danych biletu
            ticketDiv.append("<div class=\"dateinfo\">");
            ticketDiv.append("<div class=\"traininfo\">");
            ticketDiv.append("<div class=\"times\">");
            ticketDiv.append("<div class=\"price\">");
            ticketDiv.append("<div class=\"buttons\">");
            // Data przejazdu
            ticketDiv.find(".dateinfo").text(date(ticket.date));
            // Informacje o pociagu
            ticketDiv.find(".traininfo").append("<div class=\"name\">");
            ticketDiv.find(".traininfo").append("<div class=\"duration\">");
            ticketDiv.find(".traininfo").append("<div class=\"duration\">");
            ticketDiv.find(".traininfo .name").html(ticket.train.category + "&nbsp;" + ticket.train.number + "<br/>" + ticket.train.name);
            ticketDiv.find(".traininfo .duration").first().html("Czas jazdy: <b>" + ticket.train.journeyTime.hours + "h&nbsp;" + ticket.train.journeyTime.minutes + "min</b>");
            ticketDiv.find(".traininfo .duration").last().html("<b>" + ticket.passengers.length + "</b>&nbsp;" + (ticket.passengers.length == 1 ? "pasażer" : "pasażerów"));
            // Odjazd i przyjazd
            generateTrainTimesInDiv(ticket.train, ticketDiv.find(".times"));
            // Cena biletu
            ticketDiv.find(".price").append("<div class=\"header\">");
            ticketDiv.find(".price").append("<div class=\"value\">");
            ticketDiv.find(".price .header").text(ticket.paid ? "Zapłacono:" : "Do zapłaty:");
            ticketDiv.find(".price .value").html(price(ticketPrice) + "&nbsp;zł");
            // Przyciski
            if (!ticket.paid) {
                ticketDiv.find(".buttons").append("<button id=\"ticketedit_" + i + "\">");
                ticketDiv.find(".buttons button").last().text("Edytuj");
                ticketDiv.find(".buttons").append("<button id=\"ticketdel_" + i + "\">");
                ticketDiv.find(".buttons button").last().html("<span class=\"danger\">Usuń</span>");
                ticketDiv.find(".buttons button").last().on("click", () => {
                    removeTicket(n);
                })
            }
            i++;
        });
    }
    // Zaktualizujmy laczna cene oraz przycisk (nieaktywny jesli 0).
    let cartSummaryDiv = $("#pagecart .cartsummary");
    cartSummaryDiv.find(".price .value").text(price(totalPrice) + " zł");
    cartSummaryDiv.find("#payment").attr("disabled", totalPrice == 0);
}

function ready() {
    // Initialize stripe messages
    let stripeContent = $("#stripecontent");
    stripeContent.empty();
    mockMessages.forEach(message => {
        stripeContent.append("<div class=\"stripeline\">");
        stripeContent.find(".stripeline").last().append("<div class=\"stripelwrap\">");
        stripeContent.find(".stripelwrap").last().text(message);
    });

    let stripeCart = $("#stripecart");
    stripeCart.on("click", () => {
        setPage("cart");
        generateCartList();
    })
    updateStripeCart();

    // MAIN PAGE

    // Initialize date and time for the main page (the next day, the same time)
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let searchDate = $("#pagemain #date");
    let searchTime = $("#pagemain #time");
    searchDate.val(date.toISOString().slice(0, 10));
    searchTime.val((date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes());

    // Initialize the search button callback
    let searchBtn = $("#pagemain #search");
    searchBtn.on("click", () => {
        selectedDate = searchDate.val();
        setPage("train");
        generateTrainList();
    })

    // ADD TO CART PAGE

    let returnTrainBtn = $("#pageticketadd #newreturnsearch");
    returnTrainBtn.on("click", () => {
        setPage("train");
    })
    let menuBtn = $("#pageticketadd #gotomain");
    menuBtn.on("click", () => {
        setPage("main");
    })
    let cartBtn = $("#pageticketadd #gotocart");
    cartBtn.on("click", () => {
        setPage("cart");
        generateCartList();
    })

    // CART PAGE

    let paymentBtn = $("#pagecart #payment");
    paymentBtn.on("click", () => {
        setPage("payment");
    })
    let menuBtn2 = $("#pagecart #mainpage");
    menuBtn2.on("click", () => {
        setPage("main");
    })
}

$(document).ready(() => {
    ready();
})