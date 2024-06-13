import axios from 'axios';

async function getPaged(sort = "id,asc", page = 0, size = 3){
    try{
        const response = await axios.get(`http://localhost:8080/paged?sort=${sort}&page=${page}&size=${size}`);
        return response.data;
    }catch(e){
        console.log("Error fetching data: "+e);
    }
}

export {
    getPaged
}