const loadList = (listName, listType) => {
    const list = document.querySelector(`.${listType}list table tbody`);
    const count = document.querySelector(`.${listType}count`);

    for (let i = 0; i < listName.length; i++) {

        let row = `<tr id="${listType}-${i}"><td>${listName[i].historyNumber}</td>
                    <td>${listName[i].lastName} ${listName[i].firstName} ${listName[i].patrName}</td>
                    <td>${listName[i].historyNumber}</td></tr>`;

        list.innerHTML += row;
    }
    
    count.textContent = `(${listName.length})`;
};

export default loadList;