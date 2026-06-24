// ---------- HAMBURGER MENU ----------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Close menu when a link is clicked (on mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// ---------- ADVICE FILTER ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const adviceCards = document.querySelectorAll('.advice-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        adviceCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ---------- SEARCH BAR ----------
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();

    adviceCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Also reset filter buttons to "All" when searching
    if (query.length > 0) {
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    }
});

// ---------- SMOOTH SCROLL FOR "Explore Boxes" BUTTON ----------
document.querySelector('.hero .btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('boxes').scrollIntoView({ behavior: 'smooth' });
});