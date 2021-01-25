export default class GotService {
    constructor(){
        this._apiBase = 'https://anapioficeandfire.com/api';
    }
    async getResource (url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`could not fatch ${url} with status ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters(){
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id){
        return this.getResource(`/characters/${id}`);
    }
    getAllBooks(){
        return this.getResource('/books');
    }
    getBook(id){
        return this.getResource(`/books/${id}`);
    }
    getAllHouses(){
        return this.getResource('/houses');
    }
    getHous(id){
        return this.getResource(`/houses/${id}`);
    }
}

