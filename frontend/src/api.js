/**
 * Cultura Colectiva Test API interaction
 * 
 * @version 1.0.0
 * @author Divani David Fuentes Marcos
 * 
 */

const BASE_API = "http://localhost:3001/api/v1"

class API {

    /**
     * Function to consult API to get the X-MEN list
     * 
     * @function getCharactersList
     * @param {string} offset
     * @param {string} limit
     * @return {object}
     */
    async getCharactersList(offset, limit) {
        let url = `${BASE_API}/x-men`
        if(limit) {
            url = `${url}?offset=${offset}&limit=${limit}`
        }
        const query = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return query.json()
    }

    /**
     * Function to consult API to get the X-MEN list
     * 
     * @function getCharacterDetail
     * @param {string} offset
     * @param {string} limit
     * @return {Promise<string>}
     */
    async getCharacterDetail(character_id) {
        let url = `${BASE_API}/marvel/character/${character_id}`
        const query = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return query
    }

}

export default new API();