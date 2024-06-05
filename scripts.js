document.addEventListener('DOMContentLoaded', function () {

    function mostrarSiguienteElemento(items, currentItem) {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % items.length;
        items[currentItem].classList.add('active');
        return currentItem;
    }
    function iniciarCarruselAutomatico(items) {
        let currentItem = 0;
        setInterval(() => {
            currentItem = mostrarSiguienteElemento(items, currentItem);
        }, 4000); 
    }

    const carruselEducacion = document.querySelector('.carrusel-educacion');
    if (carruselEducacion) {
        const itemsEducacion = carruselEducacion.querySelectorAll('.carrusel-item');
        iniciarCarruselAutomatico(itemsEducacion);
    }

    const carruselHabilidades = document.querySelector('.carrusel-habilidades');
    if (carruselHabilidades) {
        const itemsHabilidades = carruselHabilidades.querySelectorAll('.carrusel-item');
        iniciarCarruselAutomatico(itemsHabilidades);
    }

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
            }, 3000); 
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        prevButtonExperiencia.addEventListener('click', function () {
            showItemExperiencia(currentItemExperiencia - 1);
            stopAutoSlide(); 
            startAutoSlide(); 
        });

        nextButtonExperiencia.addEventListener('click', function () {
            showItemExperiencia(currentItemExperiencia + 1);
            stopAutoSlide(); 
            startAutoSlide(); 
        });

        itemsExperiencia[currentItemExperiencia].classList.add('active');

    
        startAutoSlide();
    }
    

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

        itemsHorario[currentItemHorario].classList.add('active');
    }

    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        const verMasBtn = proyecto.querySelector('.ver-mas');
        const detalles = proyecto.querySelector('.detalles');

        verMasBtn.addEventListener('click', function () {
            detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
        });
    });
});
