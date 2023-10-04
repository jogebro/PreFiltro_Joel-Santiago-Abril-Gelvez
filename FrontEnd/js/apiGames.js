const url = "http://localhost:4000/games";

export const getAllGames = async () => {
    try {
        const data = await fetch(url);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};