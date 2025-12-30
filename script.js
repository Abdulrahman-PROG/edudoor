const tutorsData = [
    {
        id: 1,
        name: 'Dr. Ahmed Hassan',
        image: 'https://ui-avatars.com/api/?name=Ahmed+Hassan&background=2c5f8d&color=fff&size=200',
        subjects: ['Mathematics', 'Physics'],
        grades: ['secondary'],
        location: 'Cairo',
        price: 180,
        rating: 4.9,
        reviews: 127,
        experience: 12,
        description: 'Experienced mathematics and physics tutor with a PhD in Applied Mathematics. Specialized in preparing students for university entrance exams.',
        qualifications: ['PhD in Applied Mathematics', 'Former University Lecturer', '12 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Monday', 'Wednesday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 2,
        name: 'Ms. Sara Mohamed',
        image: 'https://ui-avatars.com/api/?name=Sara+Mohamed&background=f5a623&color=fff&size=200',
        subjects: ['English', 'French'],
        grades: ['primary', 'preparatory'],
        location: 'Alexandria',
        price: 120,
        rating: 4.8,
        reviews: 93,
        experience: 8,
        description: 'Native English speaker with extensive experience teaching young learners. Focus on conversation and grammar skills.',
        qualifications: ['BA in English Literature', 'TEFL Certified', '8 years teaching experience'],
        availability: ['Sunday', 'Tuesday', 'Thursday'],
        languages: ['Arabic', 'English', 'French']
    },
    {
        id: 3,
        name: 'Eng. Khaled Ibrahim',
        image: 'https://ui-avatars.com/api/?name=Khaled+Ibrahim&background=2c5f8d&color=fff&size=200',
        subjects: ['Chemistry', 'Biology'],
        grades: ['secondary'],
        location: 'Giza',
        price: 150,
        rating: 4.7,
        reviews: 85,
        experience: 10,
        description: 'Chemical engineer with passion for teaching science. Makes complex topics easy to understand.',
        qualifications: ['BSc Chemical Engineering', 'Published Researcher', '10 years teaching experience'],
        availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 4,
        name: 'Dr. Fatma Ali',
        image: 'https://ui-avatars.com/api/?name=Fatma+Ali&background=f5a623&color=fff&size=200',
        subjects: ['Arabic', 'History'],
        grades: ['primary', 'preparatory', 'secondary'],
        location: 'Cairo',
        price: 130,
        rating: 4.9,
        reviews: 156,
        experience: 15,
        description: 'Specialist in Arabic language and Islamic history. Engaging teaching style that makes history come alive.',
        qualifications: ['PhD in Arabic Literature', 'Award-winning educator', '15 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 5,
        name: 'Mr. Omar Saeed',
        image: 'https://ui-avatars.com/api/?name=Omar+Saeed&background=2c5f8d&color=fff&size=200',
        subjects: ['Mathematics'],
        grades: ['primary', 'preparatory'],
        location: 'Alexandria',
        price: 100,
        rating: 4.6,
        reviews: 74,
        experience: 6,
        description: 'Young and energetic tutor who connects well with students. Makes math fun and accessible.',
        qualifications: ['BSc Mathematics', 'Certified Math Tutor', '6 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Wednesday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 6,
        name: 'Ms. Nour Abdel Rahman',
        image: 'https://ui-avatars.com/api/?name=Nour+Rahman&background=f5a623&color=fff&size=200',
        subjects: ['Physics', 'Mathematics'],
        grades: ['secondary'],
        location: 'Cairo',
        price: 170,
        rating: 4.8,
        reviews: 102,
        experience: 9,
        description: 'Physics specialist with talent for explaining complex concepts. Excellent track record with Thanaweya Amma students.',
        qualifications: ['MSc Physics', 'Former International School Teacher', '9 years teaching experience'],
        availability: ['Saturday', 'Tuesday', 'Wednesday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 7,
        name: 'Prof. Mahmoud Youssef',
        image: 'https://ui-avatars.com/api/?name=Mahmoud+Youssef&background=2c5f8d&color=fff&size=200',
        subjects: ['Chemistry'],
        grades: ['secondary'],
        location: 'Giza',
        price: 200,
        rating: 5.0,
        reviews: 143,
        experience: 18,
        description: 'Renowned chemistry professor with exceptional results. Students consistently achieve top grades.',
        qualifications: ['PhD in Organic Chemistry', 'University Professor', '18 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 8,
        name: 'Ms. Heba Kamal',
        image: 'https://ui-avatars.com/api/?name=Heba+Kamal&background=f5a623&color=fff&size=200',
        subjects: ['English'],
        grades: ['primary', 'preparatory', 'secondary'],
        location: 'Cairo',
        price: 140,
        rating: 4.9,
        reviews: 118,
        experience: 11,
        description: 'Passionate English teacher focused on developing strong communication skills and confidence.',
        qualifications: ['BA English Education', 'IELTS Examiner', '11 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 9,
        name: 'Dr. Yasser Fahmy',
        image: 'https://ui-avatars.com/api/?name=Yasser+Fahmy&background=2c5f8d&color=fff&size=200',
        subjects: ['Biology'],
        grades: ['secondary'],
        location: 'Alexandria',
        price: 160,
        rating: 4.7,
        reviews: 89,
        experience: 13,
        description: 'Medical doctor turned educator. Brings real-world medical knowledge to biology lessons.',
        qualifications: ['Medical Degree', 'Biology Specialist', '13 years teaching experience'],
        availability: ['Sunday', 'Tuesday', 'Thursday', 'Saturday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 10,
        name: 'Ms. Mariam Hassan',
        image: 'https://ui-avatars.com/api/?name=Mariam+Hassan&background=f5a623&color=fff&size=200',
        subjects: ['French', 'English'],
        grades: ['preparatory', 'secondary'],
        location: 'Cairo',
        price: 135,
        rating: 4.8,
        reviews: 96,
        experience: 7,
        description: 'Bilingual educator fluent in French and English. Creates immersive language learning experiences.',
        qualifications: ['BA French Literature', 'DELF Certified', '7 years teaching experience'],
        availability: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
        languages: ['Arabic', 'English', 'French']
    },
    {
        id: 11,
        name: 'Mr. Amr Mostafa',
        image: 'https://ui-avatars.com/api/?name=Amr+Mostafa&background=2c5f8d&color=fff&size=200',
        subjects: ['Geography', 'History'],
        grades: ['preparatory', 'secondary'],
        location: 'Giza',
        price: 110,
        rating: 4.6,
        reviews: 67,
        experience: 5,
        description: 'Interactive teacher who uses modern technology and multimedia to make social studies engaging.',
        qualifications: ['BA History & Geography', 'Digital Teaching Certified', '5 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 12,
        name: 'Ms. Laila Tamer',
        image: 'https://ui-avatars.com/api/?name=Laila+Tamer&background=f5a623&color=fff&size=200',
        subjects: ['Mathematics', 'Physics'],
        grades: ['preparatory'],
        location: 'Alexandria',
        price: 115,
        rating: 4.7,
        reviews: 81,
        experience: 8,
        description: 'Patient and caring tutor specializing in building strong foundations for preparatory students.',
        qualifications: ['BSc Applied Sciences', 'Child Psychology Certificate', '8 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Wednesday', 'Friday', 'Saturday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 13,
        name: 'Dr. Mahmoud Salah',
        image: 'https://ui-avatars.com/api/?name=Mahmoud+Salah&background=2c5f8d&color=fff&size=200',
        subjects: ['Mathematics', 'Physics', 'Chemistry'],
        grades: ['secondary'],
        location: 'Cairo',
        price: 190,
        rating: 4.9,
        reviews: 134,
        experience: 14,
        description: 'Triple science specialist with proven track record in Thanaweya Amma exam preparation. 95% of students achieve A grades.',
        qualifications: ['PhD in Theoretical Physics', 'Published Author', '14 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
        languages: ['Arabic', 'English', 'German']
    },
    {
        id: 14,
        name: 'Ms. Dina Mahmoud',
        image: 'https://ui-avatars.com/api/?name=Dina+Mahmoud&background=f5a623&color=fff&size=200',
        subjects: ['English', 'Arabic'],
        grades: ['primary'],
        location: 'Giza',
        price: 95,
        rating: 4.8,
        reviews: 72,
        experience: 5,
        description: 'Specialized in early childhood education. Creates fun and engaging lessons for young learners.',
        qualifications: ['BA Early Childhood Education', 'Montessori Certified', '5 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 15,
        name: 'Eng. Youssef Nabil',
        image: 'https://ui-avatars.com/api/?name=Youssef+Nabil&background=2c5f8d&color=fff&size=200',
        subjects: ['Physics', 'Mathematics'],
        grades: ['secondary'],
        location: 'Alexandria',
        price: 175,
        rating: 4.8,
        reviews: 98,
        experience: 11,
        description: 'Mechanical engineer with passion for physics. Uses real-world examples to explain complex concepts.',
        qualifications: ['MSc Mechanical Engineering', 'Former NASA Intern', '11 years teaching experience'],
        availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 16,
        name: 'Ms. Rana Adel',
        image: 'https://ui-avatars.com/api/?name=Rana+Adel&background=f5a623&color=fff&size=200',
        subjects: ['Biology', 'Chemistry'],
        grades: ['preparatory', 'secondary'],
        location: 'Cairo',
        price: 145,
        rating: 4.7,
        reviews: 88,
        experience: 9,
        description: 'Pharmacist turned educator. Excellent at simplifying biology and chemistry for all levels.',
        qualifications: ['PharmD', 'Education Diploma', '9 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 17,
        name: 'Prof. Tarek Fathy',
        image: 'https://ui-avatars.com/api/?name=Tarek+Fathy&background=2c5f8d&color=fff&size=200',
        subjects: ['Arabic', 'History', 'Geography'],
        grades: ['secondary'],
        location: 'Giza',
        price: 155,
        rating: 4.9,
        reviews: 142,
        experience: 20,
        description: 'Veteran educator with two decades of experience. Expert in humanities subjects and exam strategies.',
        qualifications: ['PhD in Islamic Studies', 'Ministry of Education Award Winner', '20 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Wednesday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 18,
        name: 'Ms. Nada Karim',
        image: 'https://ui-avatars.com/api/?name=Nada+Karim&background=f5a623&color=fff&size=200',
        subjects: ['French'],
        grades: ['primary', 'preparatory', 'secondary'],
        location: 'Cairo',
        price: 125,
        rating: 4.8,
        reviews: 76,
        experience: 7,
        description: 'Native French speaker from Paris. Focuses on authentic pronunciation and conversational fluency.',
        qualifications: ['BA French Linguistics (Sorbonne)', 'DALF C2 Certified', '7 years teaching experience'],
        availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        languages: ['Arabic', 'French', 'English']
    },
    {
        id: 19,
        name: 'Dr. Sherif Mostafa',
        image: 'https://ui-avatars.com/api/?name=Sherif+Mostafa&background=2c5f8d&color=fff&size=200',
        subjects: ['Mathematics'],
        grades: ['primary', 'preparatory', 'secondary'],
        location: 'Alexandria',
        price: 165,
        rating: 4.9,
        reviews: 156,
        experience: 16,
        description: 'Mathematics specialist for all levels. Known for turning struggling students into math lovers.',
        qualifications: ['PhD in Mathematics', 'Curriculum Developer', '16 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 20,
        name: 'Ms. Yasmin Ahmed',
        image: 'https://ui-avatars.com/api/?name=Yasmin+Ahmed&background=f5a623&color=fff&size=200',
        subjects: ['English'],
        grades: ['preparatory', 'secondary'],
        location: 'Giza',
        price: 130,
        rating: 4.7,
        reviews: 91,
        experience: 8,
        description: 'Cambridge-certified English teacher. Specializes in IGCSE and SAT preparation.',
        qualifications: ['BA English Language (Cambridge)', 'CELTA Certified', '8 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Wednesday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 21,
        name: 'Eng. Mostafa Gamal',
        image: 'https://ui-avatars.com/api/?name=Mostafa+Gamal&background=2c5f8d&color=fff&size=200',
        subjects: ['Chemistry', 'Physics'],
        grades: ['secondary'],
        location: 'Cairo',
        price: 185,
        rating: 4.8,
        reviews: 112,
        experience: 12,
        description: 'Petroleum engineer with extensive lab experience. Makes science practical and understandable.',
        qualifications: ['MSc Petroleum Engineering', 'Industry Professional', '12 years teaching experience'],
        availability: ['Saturday', 'Tuesday', 'Wednesday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 22,
        name: 'Ms. Mona Saleh',
        image: 'https://ui-avatars.com/api/?name=Mona+Saleh&background=f5a623&color=fff&size=200',
        subjects: ['Arabic'],
        grades: ['primary', 'preparatory'],
        location: 'Alexandria',
        price: 105,
        rating: 4.6,
        reviews: 68,
        experience: 6,
        description: 'Passionate about Arabic language and literature. Makes grammar fun through storytelling.',
        qualifications: ['BA Arabic Language', 'Creative Writing Certified', '6 years teaching experience'],
        availability: ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 23,
        name: 'Dr. Hassan Fouad',
        image: 'https://ui-avatars.com/api/?name=Hassan+Fouad&background=2c5f8d&color=fff&size=200',
        subjects: ['Biology'],
        grades: ['secondary'],
        location: 'Giza',
        price: 170,
        rating: 4.9,
        reviews: 128,
        experience: 15,
        description: 'Veterinarian and biology expert. Uses animal examples to make biology memorable and exciting.',
        qualifications: ['DVM', 'Biology Education Specialist', '15 years teaching experience'],
        availability: ['Saturday', 'Sunday', 'Monday', 'Thursday'],
        languages: ['Arabic', 'English']
    },
    {
        id: 24,
        name: 'Ms. Salma Ibrahim',
        image: 'https://ui-avatars.com/api/?name=Salma+Ibrahim&background=f5a623&color=fff&size=200',
        subjects: ['Geography', 'History'],
        grades: ['primary', 'preparatory'],
        location: 'Cairo',
        price: 100,
        rating: 4.7,
        reviews: 83,
        experience: 7,
        description: 'Interactive teacher who brings history and geography to life through stories and activities.',
        qualifications: ['BA Social Studies', 'Digital Education Expert', '7 years teaching experience'],
        availability: ['Sunday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
        languages: ['Arabic', 'English']
    }
];

let filteredTutors = [...tutorsData];
let favoriteTutors = JSON.parse(localStorage.getItem('favoriteTutors')) || [];
let comparisonList = [];

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.getElementById('contactForm');

    initializeTutorPlatform();

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    const cards = document.querySelectorAll('.feature-card, .stat-card, .audience-card, .testimonial-card');
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Thank you for your interest in EduDoor! We will contact you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }

        lastScroll = currentScroll;
    });

    const statNumbers = document.querySelectorAll('.stat-card h3');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(stat => {
                    const target = stat.textContent;
                    const isNumber = target.match(/\d+/);

                    if (isNumber) {
                        const targetNumber = parseInt(isNumber[0]);
                        const increment = targetNumber / 50;
                        let current = 0;

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= targetNumber) {
                                stat.textContent = target;
                                clearInterval(timer);
                            } else {
                                stat.textContent = target.replace(/\d+/, Math.floor(current));
                            }
                        }, 30);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

function initializeTutorPlatform() {
    const searchInput = document.getElementById('searchTutor');
    const gradeFilter = document.getElementById('gradeFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const locationFilter = document.getElementById('locationFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortBy = document.getElementById('sortBy');
    const resetButton = document.getElementById('resetFilters');

    if (!searchInput) return;

    displayTutors(tutorsData);

    searchInput.addEventListener('input', applyFilters);
    gradeFilter.addEventListener('change', applyFilters);
    subjectFilter.addEventListener('change', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);

    resetButton.addEventListener('click', function() {
        searchInput.value = '';
        gradeFilter.value = '';
        subjectFilter.value = '';
        locationFilter.value = '';
        priceFilter.value = '';
        sortBy.value = 'rating';
        applyFilters();
    });
}

function applyFilters() {
    const searchTerm = document.getElementById('searchTutor').value.toLowerCase();
    const gradeValue = document.getElementById('gradeFilter').value;
    const subjectValue = document.getElementById('subjectFilter').value;
    const locationValue = document.getElementById('locationFilter').value;
    const priceValue = document.getElementById('priceFilter').value;
    const sortValue = document.getElementById('sortBy').value;

    filteredTutors = tutorsData.filter(tutor => {
        const matchesSearch = tutor.name.toLowerCase().includes(searchTerm) ||
                            tutor.subjects.some(s => s.toLowerCase().includes(searchTerm));
        const matchesGrade = !gradeValue || tutor.grades.includes(gradeValue);
        const matchesSubject = !subjectValue || tutor.subjects.includes(subjectValue);
        const matchesLocation = !locationValue || tutor.location === locationValue;

        let matchesPrice = true;
        if (priceValue) {
            if (priceValue === '0-100') matchesPrice = tutor.price < 100;
            else if (priceValue === '100-150') matchesPrice = tutor.price >= 100 && tutor.price <= 150;
            else if (priceValue === '150-200') matchesPrice = tutor.price > 150 && tutor.price <= 200;
            else if (priceValue === '200+') matchesPrice = tutor.price > 200;
        }

        return matchesSearch && matchesGrade && matchesSubject && matchesLocation && matchesPrice;
    });

    if (sortValue === 'rating') {
        filteredTutors.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'price-low') {
        filteredTutors.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filteredTutors.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'experience') {
        filteredTutors.sort((a, b) => b.experience - a.experience);
    }

    displayTutors(filteredTutors);
}

function displayTutors(tutors) {
    const tutorGrid = document.getElementById('tutorGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!tutorGrid) return;

    resultCount.textContent = tutors.length;

    if (tutors.length === 0) {
        tutorGrid.style.display = 'none';
        noResults.style.display = 'flex';
        return;
    }

    tutorGrid.style.display = 'grid';
    noResults.style.display = 'none';

    tutorGrid.innerHTML = tutors.map(tutor => `
        <div class="tutor-card" data-tutor-id="${tutor.id}">
            <div class="tutor-image">
                <img src="${tutor.image}" alt="${tutor.name}">
                <div class="tutor-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verified
                </div>
                <div class="tutor-actions">
                    <button class="action-btn favorite-btn ${favoriteTutors.includes(tutor.id) ? 'active' : ''}" onclick="toggleFavorite(${tutor.id}, event)" title="Add to favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${favoriteTutors.includes(tutor.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="action-btn compare-btn ${comparisonList.includes(tutor.id) ? 'active' : ''}" onclick="toggleComparison(${tutor.id}, event)" title="Add to comparison">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="tutor-info">
                <h3>${tutor.name}</h3>
                <div class="tutor-rating">
                    <span class="stars">${generateStars(tutor.rating)}</span>
                    <span class="rating-text">${tutor.rating} (${tutor.reviews} reviews)</span>
                </div>
                <div class="tutor-subjects">
                    ${tutor.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
                </div>
                <div class="tutor-meta">
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${tutor.location}
                    </span>
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        ${tutor.price} EGP/session
                    </span>
                </div>
                <p class="tutor-description">${tutor.description.substring(0, 100)}...</p>
                <button class="btn-view-profile" onclick="showTutorModal(${tutor.id})">
                    View Full Profile
                </button>
            </div>
        </div>
    `).join('');

    updateFavoriteCount();
    updateComparisonCount();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }

    return stars;
}

function showTutorModal(tutorId) {
    const tutor = tutorsData.find(t => t.id === tutorId);
    if (!tutor) return;

    const modal = document.getElementById('tutorModal');
    const modalBody = document.getElementById('modalBody');

    const gradeLabels = {
        'primary': 'Primary (1-6)',
        'preparatory': 'Preparatory (7-9)',
        'secondary': 'Secondary (10-12)'
    };

    modalBody.innerHTML = `
        <div class="modal-tutor-profile">
            <div class="modal-header-section">
                <img src="${tutor.image}" alt="${tutor.name}" class="modal-tutor-image">
                <div class="modal-tutor-header">
                    <h2>${tutor.name}</h2>
                    <div class="tutor-rating">
                        <span class="stars">${generateStars(tutor.rating)}</span>
                        <span class="rating-text">${tutor.rating} (${tutor.reviews} reviews)</span>
                    </div>
                    <div class="tutor-subjects">
                        ${tutor.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>About</h3>
                <p>${tutor.description}</p>
            </div>

            <div class="modal-section">
                <h3>Qualifications</h3>
                <ul class="qualifications-list">
                    ${tutor.qualifications.map(qual => `<li>${qual}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-info-grid">
                <div class="info-box">
                    <h4>Experience</h4>
                    <p>${tutor.experience} years</p>
                </div>
                <div class="info-box">
                    <h4>Price per Session</h4>
                    <p>${tutor.price} EGP</p>
                </div>
                <div class="info-box">
                    <h4>Location</h4>
                    <p>${tutor.location}</p>
                </div>
                <div class="info-box">
                    <h4>Languages</h4>
                    <p>${tutor.languages.join(', ')}</p>
                </div>
            </div>

            <div class="modal-section">
                <h3>Grade Levels</h3>
                <div class="grade-tags">
                    ${tutor.grades.map(grade => `<span class="grade-tag">${gradeLabels[grade]}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Availability</h3>
                <div class="availability-days">
                    ${tutor.availability.map(day => `<span class="day-tag">${day}</span>`).join('')}
                </div>
            </div>

            <div class="modal-booking-section">
                <h3>Book a Session</h3>
                <form class="booking-form" onsubmit="handleBooking(event, ${tutor.id})">
                    <input type="text" placeholder="Student Name" required>
                    <input type="email" placeholder="Parent Email" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select required>
                        <option value="">Select Grade Level</option>
                        ${tutor.grades.map(grade => `<option value="${grade}">${gradeLabels[grade]}</option>`).join('')}
                    </select>
                    <select required>
                        <option value="">Select Subject</option>
                        ${tutor.subjects.map(subject => `<option value="${subject}">${subject}</option>`).join('')}
                    </select>
                    <select required>
                        <option value="">Preferred Day</option>
                        ${tutor.availability.map(day => `<option value="${day}">${day}</option>`).join('')}
                    </select>
                    <textarea placeholder="Additional notes or questions..." rows="3"></textarea>
                    <button type="submit" class="btn btn-primary">Request Booking</button>
                </form>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function handleBooking(event, tutorId) {
    event.preventDefault();
    const tutor = tutorsData.find(t => t.id === tutorId);

    alert(`Thank you for your interest in booking with ${tutor.name}!\n\nWe will contact you shortly to confirm your session details and schedule.`);

    document.getElementById('tutorModal').style.display = 'none';
    event.target.reset();
}

function toggleFavorite(tutorId, event) {
    event.stopPropagation();

    const index = favoriteTutors.indexOf(tutorId);
    if (index > -1) {
        favoriteTutors.splice(index, 1);
    } else {
        favoriteTutors.push(tutorId);
    }

    localStorage.setItem('favoriteTutors', JSON.stringify(favoriteTutors));

    displayTutors(filteredTutors);
    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favoriteCount = document.getElementById('favoriteCount');
    if (favoriteCount) {
        favoriteCount.textContent = favoriteTutors.length;
    }
}

function showFavorites() {
    const favTutors = tutorsData.filter(t => favoriteTutors.includes(t.id));

    if (favTutors.length === 0) {
        alert('You have no favorite tutors yet. Click the heart icon on any tutor to add them to your favorites!');
        return;
    }

    filteredTutors = favTutors;
    displayTutors(favTutors);

    document.getElementById('searchTutor').value = '';
    document.getElementById('gradeFilter').value = '';
    document.getElementById('subjectFilter').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('priceFilter').value = '';
}

function toggleComparison(tutorId, event) {
    event.stopPropagation();

    const index = comparisonList.indexOf(tutorId);
    if (index > -1) {
        comparisonList.splice(index, 1);
    } else {
        if (comparisonList.length >= 3) {
            alert('You can only compare up to 3 tutors at a time');
            return;
        }
        comparisonList.push(tutorId);
    }

    displayTutors(filteredTutors);
    updateComparisonCount();
}

function updateComparisonCount() {
    const compareCount = document.getElementById('compareCount');
    if (compareCount) {
        compareCount.textContent = comparisonList.length;
        compareCount.parentElement.style.display = comparisonList.length > 0 ? 'block' : 'none';
    }
}

function showComparison() {
    if (comparisonList.length < 2) {
        alert('Please select at least 2 tutors to compare');
        return;
    }

    const compareTutors = tutorsData.filter(t => comparisonList.includes(t.id));
    const modal = document.getElementById('comparisonModal');
    const modalBody = document.getElementById('comparisonBody');

    const gradeLabels = {
        'primary': 'Primary (1-6)',
        'preparatory': 'Preparatory (7-9)',
        'secondary': 'Secondary (10-12)'
    };

    modalBody.innerHTML = `
        <div class="comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        ${compareTutors.map(t => `<th>${t.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Photo</strong></td>
                        ${compareTutors.map(t => `<td><img src="${t.image}" alt="${t.name}" class="compare-img"></td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Rating</strong></td>
                        ${compareTutors.map(t => `<td>${generateStars(t.rating)} ${t.rating}/5<br><small>(${t.reviews} reviews)</small></td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Price/Session</strong></td>
                        ${compareTutors.map(t => `<td><strong>${t.price} EGP</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Experience</strong></td>
                        ${compareTutors.map(t => `<td>${t.experience} years</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Subjects</strong></td>
                        ${compareTutors.map(t => `<td>${t.subjects.join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Grade Levels</strong></td>
                        ${compareTutors.map(t => `<td>${t.grades.map(g => gradeLabels[g]).join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Location</strong></td>
                        ${compareTutors.map(t => `<td>${t.location}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Languages</strong></td>
                        ${compareTutors.map(t => `<td>${t.languages.join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Availability</strong></td>
                        ${compareTutors.map(t => `<td><small>${t.availability.join(', ')}</small></td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Action</strong></td>
                        ${compareTutors.map(t => `<td><button class="btn-view-profile" onclick="showTutorModal(${t.id}); document.getElementById('comparisonModal').style.display='none';">View Profile</button></td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function clearComparison() {
    comparisonList = [];
    displayTutors(filteredTutors);
    updateComparisonCount();
}

function showPriceCalculator() {
    const modal = document.getElementById('calculatorModal');
    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function calculatePrice() {
    const sessions = parseInt(document.getElementById('calcSessions').value);
    const price = parseInt(document.getElementById('calcPrice').value);
    const weeks = parseInt(document.getElementById('calcWeeks').value);

    if (!sessions || !price || !weeks) {
        alert('Please fill in all fields');
        return;
    }

    const totalSessions = sessions * weeks;
    const totalPrice = totalSessions * price;
    const monthlyPrice = (totalSessions / weeks) * 4 * price;

    const resultDiv = document.getElementById('calcResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Cost Breakdown</h3>
        <div class="calc-result-grid">
            <div class="calc-result-item">
                <p><strong>Total Sessions:</strong></p>
                <p class="calc-value">${totalSessions} sessions</p>
            </div>
            <div class="calc-result-item">
                <p><strong>Total Cost:</strong></p>
                <p class="calc-value">${totalPrice} EGP</p>
            </div>
            <div class="calc-result-item">
                <p><strong>Weekly Cost:</strong></p>
                <p class="calc-value">${sessions * price} EGP</p>
            </div>
            <div class="calc-result-item">
                <p><strong>Est. Monthly Cost:</strong></p>
                <p class="calc-value">${Math.round(monthlyPrice)} EGP</p>
            </div>
        </div>
        <p class="calc-note">Based on ${sessions} session(s) per week at ${price} EGP per session for ${weeks} weeks</p>
    `;
}
