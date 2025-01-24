console.log("dziala");

// Utility
function price(number) {
    return String(number).replace(".", ",");
}

let mockMessages = [
    "Witamy w Systemie Sprzedaży Biletów! To jest miejsce na wszelkie utrudnienia.",
    "W chwili obecnej trwają prace serwisowe. Za utrudnienia przepraszamy.",
    "Obecnie nie działają:",
    "Wyszukiwanie pociągów",
    "Wybieranie pociągu z listy",
    "Wybieranie wagonów",
    "Wybieranie miejsca ze schematu",
    "Przypisywanie i usuwanie miejsc do biletów",
    "Dodawanie i usuwanie pasażerów na bilecie",
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
        }
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
        }
    }
]

function setPage(page) {
    $(".page").removeClass("visible");
    $("#page" + page).addClass("visible");
}

function generateTrainList() {
    let trainList = $("#pagetrain #trains");
    trainList.empty();
    let i = 1;
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
        trainDiv.find(".select").append("<button id=\"trainselect_" + i + "\">");
        trainDiv.find(".select button").html("Wybierz");
        i++;
    })
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
    searchTime.val(date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes());

    // Initialize the search button callback
    let searchBtn = $("#pagemain #search");
    searchBtn.on("click", () => {
        setPage("train");
        generateTrainList();
    })

    // TRAIN SELECT PAGE
}

$(document).ready(() => {
    ready();
})