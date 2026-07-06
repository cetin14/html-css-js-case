document.addEventListener("DOMContentLoaded", () => {
    const clientLogos = [
        { id: 1, name: "Client 1", url: "assets/images/logo1.svg" },
        { id: 2, name: "Client 2", url: "assets/images/logo2.svg" },
        { id: 3, name: "Client 3", url: "assets/images/logo3.svg" },
        { id: 4, name: "Client 4", url: "assets/images/logo4.svg" },
        { id: 5, name: "Client 5", url: "assets/images/logo5.svg" },
        { id: 6, name: "Client 6", url: "assets/images/logo6.svg" },
        { id: 7, name: "Client 7", url: "assets/images/logo7.svg" }
    ];


    const logosContainer = document.getElementById("clientsLogosContainer");

    if (logosContainer) {
        logosContainer.innerHTML = clientLogos.map(logo => `
            <img src="${logo.url}" alt="${logo.name}" class="clients__logo-img">
        `).join("");
    }

    const featureCards = [
        {
            id: 1,
            icon: "assets/images/Icon (1).svg",
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 2,
            icon: "assets/images/Icon (2).svg",
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 3,
            icon: "assets/images/Icon (3).svg",
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments"
        }
    ];

    const featuresContainer = document.getElementById("featuresGridContainer");

    if (featuresContainer) {
        featuresContainer.innerHTML = featureCards.map(card => `
            <div class="card">
                <div class="card__icon-wrapper">
                    <img src="${card.icon}" alt="${card.title}" class="card__icon">
                </div>
                <h3 class="card__title">${card.title}</h3>
                <p class="card__description">${card.description}</p>
            </div>
        `).join("");
    }
});