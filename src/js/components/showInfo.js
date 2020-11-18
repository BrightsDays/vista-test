const showInfo = (listName, listType) => {
    const name = document.querySelector('.name');
    const age = document.querySelector('.age');
    const diagnosis = document.querySelector('.diagnosis');
    const patientsList = document.querySelectorAll(`.${listType}list table tbody tr`);

    for(let i = 1; i < patientsList.length; i++) {
        const date = new Date();
        let year = date.getFullYear();

        patientsList[i].addEventListener('click', () => {
            name.textContent = `${listName[i-1].lastName} ${listName[i-1].firstName} ${listName[i-1].patrName}`;
            age.textContent = year - listName[i-1].birthDate.slice(0,-6);
            diagnosis.textContent = listName[i-1].diagnosis;
        });
    }
};

export default showInfo;