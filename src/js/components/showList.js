const showList = () => {
    const patientsNav = document.querySelectorAll('.list__nav-item');
    const patientsList = document.querySelectorAll('.list__item');

    const hideList = () => {
        patientsNav.forEach(element => {
            element.classList.remove('list__nav-item_active');
        });

        patientsList.forEach(element => {
            element.style.display = 'none';
        });
    };

    hideList();
    patientsNav[0].classList.add('list__nav-item_active');
    patientsList[0].style.display = 'block';

    for (let i = 0; i < patientsNav.length; i++ ) {
        patientsNav[i].addEventListener('click', () => {
            hideList();
            patientsNav[i].classList.add('list__nav-item_active');
            patientsList[i].style.display = 'block';
        });
    }
};

export default showList;