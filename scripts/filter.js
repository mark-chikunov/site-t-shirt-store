(function(){

 /* const elem = document.querySelector('.products__list'); // arranged items .products__item использывает библиотеку isotope
    const iso = new Isotope( elem, {                        // не работает корректно XD
    // options
    itemSelector: '.products__item'
    });
 */
    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__iteam--active';

    controlls.forEach(function(control){

        control.addEventListener('click', function(e){

            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.filter__iteam').classList.remove(activeClass); // удаляет класс
            })

            control.closest('.filter__iteam').classList.add(activeClass); // добавляет класс

        })

    })

}())