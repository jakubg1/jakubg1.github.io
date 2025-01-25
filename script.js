console.log("dziala");

// Utility
function price(number) {
    return String(number).replace(".", ",");
}

function date(val) {
    return val.slice(8, 10) + "." + val.slice(5, 7) + "." + val.slice(0, 4);
}

// Mocki (dane ktore powinny leciec z serwera)

let mockMessages = [
    "Witamy w Systemie Sprzedaży Biletów! To jest miejsce na wszelkie utrudnienia.",
    "W chwili obecnej trwają prace serwisowe. Za utrudnienia przepraszamy.",
    "Obecnie nie działają:",
    "Wyszukiwanie pociągów?",
    "Wybieranie miejsca ze schematu",
    "Przypisywanie i usuwanie miejsc do biletów",
    "Koszyk",
    "System płatności",
    "A nawet zegar się zepsuł... Trzeba wymienić baterie."
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
let passengers = [
    {
        "name": "Jan Kowalski",
        "reservation": {
            "wagon": 11,
            "seat": 47
        },
        "halfPrice": false
    }
];

// Reszta kodu

function getClassFromReservation(reservation) {
    if (reservation == undefined) {
        return "class2_nores";
    }
    let targetWagon = null;
    currentTrain.consist.forEach(wagon => {
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

function setPage(page) {
    $(".page").removeClass("visible");
    $("#page" + page).addClass("visible");
}

function selectWagon(wagon) {
    let consistDiv = $("#pageticket #consist");
    consistDiv.find(".wagon").removeClass("selected");
    consistDiv.find("#wagon_" + wagon.number).addClass("selected");
    generateWagonLayout(wagon.type);
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
        trainDiv.find(".times").append("<div class=\"station left\">");
        trainDiv.find(".times").append("<div class=\"separator\">");
        trainDiv.find(".times").append("<div class=\"station right\">");
        trainDiv.find(".times .station.left").append("<div class=\"sname\">");
        trainDiv.find(".times .station.left").append("<div class=\"time\">");
        trainDiv.find(".times .station.left .sname").html(train.station1.name);
        trainDiv.find(".times .station.left .time").html(train.station1.time);
        trainDiv.find(".times .separator").html(">>>");
        trainDiv.find(".times .station.right").append("<div class=\"sname\">");
        trainDiv.find(".times .station.right").append("<div class=\"time\">");
        trainDiv.find(".times .station.right .sname").html(train.station2.name);
        trainDiv.find(".times .station.right .time").html(train.station2.time);
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
                tileDiv.html("<div class=\"number\">" + tile.number + "</div>");
            }
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
    ticketDiv.find(".total .price").text("Razem: 10000 zł");
    // Przyciski
    ticketDiv.find("#addpassenger").text("Dodaj pasażera");
    ticketDiv.find("#addpassenger").on("click", () => {
        addPassenger();
    });
    ticketDiv.find("#addticket").text("Do koszyka");
}

function generateTicketPassengerList() {
    let passengersDiv = $("#pageticket #ticket #passengers");
    passengersDiv.empty();
    let showDeleteButton = passengers.length > 1;
    let i = 1;
    passengers.forEach(passenger => {
        let passengerClass = getClassFromReservation(passenger.reservation);
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
            let n = i;
            passengerDiv.find(".header .button").on("click", () => {
                removePassenger(n);
            });
        }
        // Pole na imie i nazwisko
        passengerDiv.find("label").text("Imię i nazwisko: ");
        passengerDiv.find("input").text(passenger.name);
        // Rezerwacja miejsca
        if (passenger.reservation == undefined) {
            passengerDiv.find(".reservation").html("Brak rezerwacji (" + CLASS_TEXTS.class2 + ")");
            passengerDiv.find(".reservation").append("<div class=\"button\" id=\"assign_" + i + "\">");
            passengerDiv.find(".reservation .button").text("[Wybierz miejsce ze schematu]");
        } else {
            passengerDiv.find(".reservation").html("Wagon <b>" + passenger.reservation.wagon + "</b>, miejsce <b>" + passenger.reservation.seat + "</b> (" + CLASS_TEXTS[passengerClass] + ")");
            passengerDiv.find(".reservation").append("<div class=\"button\" id=\"delassign_" + i + "\">");
            passengerDiv.find(".reservation .button").text("[Usuń rezerwację miejsca]");
        }
        // Cena
        passengerDiv.find(".price").text("Cena: " + price(currentTrain.prices[passengerClass]) + " zł");
        i++;
    });
}

function addPassenger() {
    passengers.push({"name": "", "halfPrice": false});
    generateTicketPassengerList();
}

function removePassenger(n) {
    passengers.splice(n - 1, 1);
    generateTicketPassengerList();
}

function savePassengers() {

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
}

$(document).ready(() => {
    ready();
})