const loadData = async (data) => {
    let response = await fetch(data);
    let answer = await response.json();
        
    return answer;
};

export default loadData;