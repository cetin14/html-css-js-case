document.addEventListener("DOMContentLoaded", () => {
    const clientLogos = [
        { id: 1, name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 2, name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { id: 3, name: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        { id: 4, name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { id: 5, name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { id: 6, name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" }
    ];

    const container = document.getElementById("clientsLogosContainer");

    if (container) {
        container.innerHTML = clientLogos.map(logo => `
            <img src="${logo.url}" alt="${logo.name}" class="clients__logo-img">
        `).join("");
    }
});
