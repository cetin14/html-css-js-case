
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
            icon: "https://api.iconify.design/heroicons:users-solid.svg?color=%23237d31",
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 2,
            icon: "https://api.iconify.design/heroicons:building-office-2-solid.svg?color=%23237d31",
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 3,
            icon: "https://api.iconify.design/heroicons:user-group-solid.svg?color=%23237d31",
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
const statsData = [
    {
        id: 1,
        icon: "https://api.iconify.design/heroicons:users-solid.svg?color=%2328cb8b",
        target: 2245341,
        label: "Members"
    },
    {
        id: 2,
        icon: "https://api.iconify.design/heroicons:hand-raised-solid.svg?color=%2328cb8b",
        target: 46328,
        label: "Clubs"
    },
    {
        id: 3,
        icon: "https://api.iconify.design/heroicons:cursor-arrow-rays-solid.svg?color=%2328cb8b",
        target: 828867,
        label: "Event Bookings"
    },
    {
        id: 4,
        icon: "https://api.iconify.design/heroicons:credit-card-solid.svg?color=%2328cb8b",
        target: 1926436,
        label: "Payments"
    }
];

const statsContainer = document.getElementById("statsGridContainer");

if (statsContainer) {
    statsContainer.innerHTML = statsData.map(stat => `
            <div class="stat-item">
                <img src="${stat.icon}" alt="${stat.label}" class="stat-item__icon">
                <div>
                    <div class="stat-item__number" data-target="${stat.target}">0</div>
                    <div class="stat-item__label">${stat.label}</div>
                </div>
            </div>
        `).join("");
}

// SAYAÇ ARTIRMA FONKSİYONU
const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-item__number");
    const speed = 40; // Sayıların artış hızı (küçüldükçe hızlanır)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText.replace(/,/g, "");
            const inc = Math.ceil(target / speed);

            if (count < target) {
                const nextValue = count + inc > target ? target : count + inc;
                counter.innerText = nextValue.toLocaleString("en-US");
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target.toLocaleString("en-US");
            }
        };
        updateCount();
    });
};

// SCROLL (KAYDIRMA) KONTROLÜ - INTERSECTION OBSERVER
const statsSection = document.querySelector(".stats");
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target); // Animasyon bir kere çalıştıktan sonra takibi bırakır
            }
        });
    }, { threshold: 0.4 }); // Bölümün %40'ı ekrana girince tetiklenir

    observer.observe(statsSection);
}
const blogData = [
    {
        id: 1,
        image: "assets/images/blog1.svg",
        title: "Creating Streamlined Safeguarding Processes with OneRen",
        link: "#"
    },
    {
        id: 2,
        image: "assets/images/blog2.svg",
        title: "What are your safeguarding responsibilities and how can you manage them?",
        link: "#"
    },
    {
        id: 3,
        image: "assets/images/blog3.svg",
        title: "Revamping the Membership Model with Triathlon Australia",
        link: "#"
    }
];


const blogContainer = document.getElementById("blogGridContainer");

if (blogContainer) {
    blogContainer.innerHTML = blogData.map(post => `
            <div class="blog-card">
                <div class="blog-card__img-wrapper">
                    <img src="${post.image}" alt="${post.title}" class="blog-card__image">
                </div>
                <div class="blog-card__box">
                    <h3 class="blog-card__title">${post.title}</h3>
                    <a href="${post.link}" class="blog-card__link">Readmore &rarr;</a>
                </div>
            </div>
        `).join("");
}
/**
 * Nexcent Landing Page - Swiper Slayt Başlatıcı
 */
document.addEventListener("DOMContentLoaded", function () {

    // HTML'deki .mySwiper sınıfına sahip alanı bul ve Swiper'ı aktif et
    var heroSwiper = new Swiper(".mySwiper", {
        // Temel Ayarlar
        slidesPerView: 1,       // Ekranda aynı anda sadece 1 sayfa düzeni görünecek
        spaceBetween: 0,        // Sayfalar arasında boşluk kalmayacak, sıfıra sıfır duracak
        loop: false,            // Son sayfaya gelince başa sarmasın, hiyerarşik dursun
        allowTouchMove: true,   // Kullanıcı fareyle veya mobilde parmağıyla da kaydırabilsin

        // Animasyon Ayarı
        speed: 600,             // Sayfalar arası geçiş hızının milisaniye cinsinden süresi (Yumuşak bir geçiş için)

        // 3 Nokta (Pagination) Yönetimi
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});

