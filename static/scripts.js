document.addEventListener('DOMContentLoaded', () => {
    // Добавление неонового эффекта при наведении на .nav-link
    const applyNeonEffect = (element) => {
        element.style.textShadow = '0 0 10px #45A29E, 0 0 20px #45A29E, 0 0 30px #45A29E';
    };

    const removeNeonEffect = (element) => {
        element.style.textShadow = '';
    };

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((navLink) => {
        navLink.addEventListener('mouseover', () => applyNeonEffect(navLink));
        navLink.addEventListener('mouseout', () => removeNeonEffect(navLink));
    });

    // Анимация при скроллинге
    const animatedElements = document.querySelectorAll('.animated');

    const animateOnScroll = () => {
        animatedElements.forEach((element) => {
            if (isElementInViewport(element) && !element.classList.contains('animate__animated')) {
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    };

    // Получаем навбар
    const navbar = document.querySelector('.navbar');

    // Обработчик события при прокрутке
    const handleScroll = () => {
        // Если вертикальная прокрутка больше 100px, добавляем класс 'scrolled', иначе удаляем его
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Добавляем обработчик события для события прокрутки при загрузке страницы
    window.addEventListener('scroll', handleScroll);

    // Вызываем функцию handleScroll при загрузке страницы
    handleScroll();

    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', animateOnScroll);

    // Модальное окно
    const modalTrigger = document.querySelector('.modal-trigger');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (modalTrigger && modalClose && modalOverlay) {
        const openModal = () => {
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            document.body.classList.remove('modal-open');
        };

        modalTrigger.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
    }

    // Плавный скроллинг
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight, // Учитываем высоту навбара
                    behavior: 'smooth',
                });
            }
        });
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        // Обработка изменения размера окна
    });

    // Обработка нажатия клавиш
    window.addEventListener('keydown', (event) => {
        // Обработка нажатия клавиш
    });

    // Асинхронный запрос
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');

            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.status);
            }

            const data = await response.json();
            // Обработка данных
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };

    fetchData();

    // Другие скрипты могут быть добавлены здесь
});
