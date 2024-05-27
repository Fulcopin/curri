document.addEventListener('DOMContentLoaded', function () {
    // Carrusel de experiencia
    const carruselExperiencia = document.querySelector('.carrusel-experiencia');
    if (carruselExperiencia) {
        const itemsExperiencia = carruselExperiencia.querySelectorAll('.carrusel-item');
        const prevButtonExperiencia = carruselExperiencia.querySelector('.carrusel-prev-experiencia');
        const nextButtonExperiencia = carruselExperiencia.querySelector('.carrusel-next-experiencia');
        let currentItemExperiencia = 0;
        let autoSlideInterval;

        function showItemExperiencia(index) {
            itemsExperiencia[currentItemExperiencia].classList.remove('active');
            currentItemExperiencia = (index + itemsExperiencia.length) % itemsExperiencia.length;
            itemsExperiencia[currentItemExperiencia].classList.add('active');
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                showItemExperiencia(currentItemExperiencia + 1);
            }, 3000); // Cambia cada 3 segundos
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        prevButtonExperiencia.addEventListener('click', function () {
            showItemExperiencia(currentItemExperiencia - 1);
            stopAutoSlide(); // Para el deslizamiento automático al usar los botones
            startAutoSlide(); // Reinicia el deslizamiento automático
        });

        nextButtonExperiencia.addEventListener('click', function () {
            showItemExperiencia(currentItemExperiencia + 1);
            stopAutoSlide(); // Para el deslizamiento automático al usar los botones
            startAutoSlide(); // Reinicia el deslizamiento automático
        });

        // Initialize the first item as active
        itemsExperiencia[currentItemExperiencia].classList.add('active');

        // Start the automatic slide
        startAutoSlide();
    }

    // Carrusel de proyectos
    const carruselHorario = document.querySelector('.carrusel-horario');
    if (carruselHorario) {
        const itemsHorario = carruselHorario.querySelectorAll('.carrusel-item');
        const prevButtonHorario = carruselHorario.querySelector('.carrusel-prev-horario');
        const nextButtonHorario = carruselHorario.querySelector('.carrusel-next-horario');
        let currentItemHorario = 0;

        function showItemHorario(index) {
            itemsHorario[currentItemHorario].classList.remove('active');
            currentItemHorario = (index + itemsHorario.length) % itemsHorario.length;
            itemsHorario[currentItemHorario].classList.add('active');
        }

        prevButtonHorario.addEventListener('click', function () {
            showItemHorario(currentItemHorario - 1);
        });

        nextButtonHorario.addEventListener('click', function () {
            showItemHorario(currentItemHorario + 1);
        });

        // Initialize the first item as active
        itemsHorario[currentItemHorario].classList.add('active');
    }

    // Ver más detalles de los proyectos
    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        const verMasBtn = proyecto.querySelector('.ver-mas');
        const detalles = proyecto.querySelector('.detalles');

        verMasBtn.addEventListener('click', function () {
            detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
        });
    });
});
