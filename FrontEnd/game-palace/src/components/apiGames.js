const urlGames = "http://localhost:4000/games";
const urlGenr = "http://localhost:4000/generos";
const urlPltf = "http://localhost:4000/plataformas";
const urlClsf = "http://localhost:4000/clasificaciones"

/////////////////////////////////// METODOS GET ///////////////////////////////////////////
export const getAllGames = async () => {
    try {
        const data = await fetch(urlGames);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getAllPltf = async () => {
    try {
        const data = await fetch(urlPltf);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getAllGenr = async () => {
    try {
        const data = await fetch(urlGenr);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getAllClsf = async () => {
    try {
        const data = await fetch(urlClsf);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

/////////////////////////////////// METODOS POST ///////////////////////////////////////////
export const addNewGame = async (registGame) => {
    try {
        await fetch(urlGames,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(registGame)
        })
        /* window.location.href="categorias.html" */
    } catch (error) {
        console.log(error);
    }
};

/////////////////////////////////// METODOS DELETE ///////////////////////////////////////////
export const deleteGame = async (id) => {
    try {
        await fetch(`${urlGames}/${id}`,{
            method: "DELETE"
        })
        window.location.href="tienda.html"
    } catch (error) {
        console.log(error);
    }
};