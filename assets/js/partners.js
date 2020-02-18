async function getPartnerList() {
    const response = await fetch('assets/data/partners-2020.json');
    const partners = await response.json();
    //console.log(JSON.stringify(partners));
    return partners
}

function shufflePartners(partnersList){
    for (let i = partnersList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [partnersList[i], partnersList[j]] = [partnersList[j], partnersList[i]];
    }
    return partnersList
}

async function generatePartnersDiv(){
    let partnersList = await getPartnerList();
    partners =  shufflePartners(partnersList)

    let partnersContainer = document.getElementById('partnersList');
    partnersContainer.className="partnersContainer";

    for (let i = 0; i < partners.length; i++) {
        //console.log(partners[i].name);
        partner = document.createElement('div');
        partner.className = "cell";
        partner.appendChild(imgCreate(partners[i].logoUrl, partners[i].name, partners[i].name, partners[i].homepageUrl));
        partnersContainer.appendChild(partner);
    }
}

function imgCreate(src, alt, title, link) {
    var img = new Image();
    img.src = src;
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    img.onclick = function() {
        window.location.href = link;
    };
    return img;
}
generatePartnersDiv();