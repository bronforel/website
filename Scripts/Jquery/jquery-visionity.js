function createCards(parentElement) {
    let html = "";
    functions.forEach(card => {
        let htmlTags = "";
        card.tags.forEach(tag => {
            htmlTags += "<span class='badge badge-secondary mr-1'>" + tag + "</span>";
        });
        html += "<div class='flex-fill card col m-3 p-3 pl-4'>";
        html += "<h4 class='mb-1 card-title text-primary'>" + card.title + "</h4>";
        html += "<div class='mb-2'>" + card.description + "</div>";
        html += "<div>" + htmlTags + "</div>";
        html += "</div>";
    });

    $(parentElement).append(html);;
}

function createTitles(parentElement) {
    let html = "";
    functions.forEach(card => {
        let cardHtml = document.createElement("li");
        cardHtml.setAttribute("onclick", "createCard('" + card.title + "')");
        cardHtml.innerHTML = card.title;
        html += cardHtml.outerHTML;

    });

    $(parentElement).append(html);;
}

function createCard(cardTitle) {
    $("#selectedCard").remove();
    let html = "";
    let htmlTags = "";
    let card = functions.find(x => x.title == cardTitle);
    card.tags.forEach(tag => {
        htmlTags += "<span class='badge badge-secondary mr-1'>" + tag + "</span>";
    });
    html += "<div id='selectedCard' class='card'>";
    html += "<a class='close-card' href='javascript:closeSelectedCard()'>X</a>";
    html += "<h3>" + card.title + "</h3>";
    html += "<p>" + card.description + "</p>";
    html += "<div>" + htmlTags + "</div>";
    html += "</div>";

    $("body").prepend(html);
}

function closeSelectedCard() {
    $("#selectedCard").remove();
}

const functions = [{
    title: "Productmanager",
    description: "Als productmanager / business analist van SaaS applicaties.",
    referenties: ["Verlofdagen.nl", "iWizard", "CityPermit"],
    tags: ['B2B', 'Schaalbaarheid', 'Klantgericht', ],
}, {
    title: "UX/UI designer",
    description: "Als UX/UI designer kan ik op basis van de functionele ",
    referenties: ["DRS Online portal", "Verflofdagen.nl", "CityPermit", "ESF-Online"],
    tags: ['Adobe XD', 'A/B testing', 'Prototyping'],
}, {
    title: "Full stack developer",
    description: "Ontwikkelen van diverse applicaties in uiteenlopende programmeertalen. Als een project een paar extra handen nodig heeft. Pragmatische instelling",
    referenties: ["RVU Online", "Aanbestedingen online", "Verflofdagen.nl", "CityPermit", "ESF Online"],
    tags: ['C#', 'Angular', 'Blazor', 'jQuery', 'HTML', 'CSS'],
}];

const eigenschappen = ["Analytisch", "Klantgericht", "Creatief", "Oplossingsgericht"];