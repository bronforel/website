const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// content staat in aparte content.js
contents.forEach(content => {
    contentPanel(content.id, content.image, content.title, content.subTitle, content.leader, content.sections, content.positionX);
})




function contentPanel(sId, sImage, sTitle, sSubTitle, sLeader, aSections, sPositionX) {

    // fullheight wrapper
    const eFullHeightPanel = document.createElement("div");
    eFullHeightPanel.id = sId + "-panel";
    eFullHeightPanel.className = "content full-height-panel";
    //eFullHeightPanel.style.backgroundImage = "url(images/content/" + sImage + ")";
    //eFullHeightPanel.style.backgroundPosition = "top";
    //eFullHeightPanel.style.backgroundSize = "cover";

    // background image panel
    const eBackgroundImagePanel = document.createElement("div");
    eBackgroundImagePanel.className = "background-image-panel";
    const eBackgroundImage = document.createElement("img");
    eBackgroundImage.src = "images/content/" + sImage

    eBackgroundImagePanel.appendChild(eBackgroundImage);

    // content wrapper
    const eContentWrapperPanel = document.createElement("div");
    eContentWrapperPanel.className = "content-wrapper";

    // content panel
    const eContentPanel = document.createElement("div");
    eContentPanel.className = "content-panel " + sPositionX;

    // titel
    const eTitle = document.createElement("h2");
    eTitle.innerHTML = sTitle;
    eTitle.className = "leader";

    // subtitel
    const eSubTitle = document.createElement("h3");
    eSubTitle.innerHTML = sSubTitle;

    // leader tekst
    const eLeader = document.createElement("p");
    eLeader.className = "leader";
    eLeader.innerHTML = sLeader;

    // Voeg elementen samen.
    eFullHeightPanel.appendChild(eBackgroundImagePanel);
    eFullHeightPanel.appendChild(eContentWrapperPanel);
    eContentWrapperPanel.appendChild(eContentPanel);
    eContentPanel.appendChild(eTitle);
    eContentPanel.appendChild(eSubTitle);
    eContentPanel.appendChild(eLeader);


    aSections.forEach(section => {
        const eSectionTitle = document.createElement("h4")
        eSectionTitle.innerHTML = section.title;

        const eSectionText = document.createElement("p");
        eSectionText.className = "indent";
        eSectionText.innerHTML = section.text;

        eContentPanel.appendChild(eSectionTitle);
        eContentPanel.appendChild(eSectionText);

    });

    // voeg toe aan pagina.
    document.getElementById("content-wrapper-panel").appendChild(eFullHeightPanel);

}