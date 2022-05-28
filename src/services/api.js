import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8081/api/v1'
})

class Api { 
    
    async createAdmin( admin ) {
        this.#handleParam( admin, 'object', 'createAdmin')
        try {
            const { data } = await api.post(
                '/admin/create',
                admin
            )
    
            return data
        } catch (err) {
            throw err
        }
    }

    async deleteAdmin( id ) {
        this.#handleParam( id, 'number', 'deleteAdmin')

        try {
            const response = await api.post(
                '/admin/delete',
                {
                    userId: id
                }
            )

            return response
        } catch (err) {
            throw err
        }
    }

    async updateAdmin( data, id ) {
        this.#handleParam( data, 'object', 'updateAdmin')
        this.#handleParam( id, 'number', 'updateAdmin')

        try {
            const { data: result } = await api.post(
                '/admin/update',
                {
                    ...data,
                    userId: id
                }
            )

            return result
        } catch (err) {
            throw err
        }
    }

    async getToken( login ) {
        this.#handleParam( login, 'object', 'getToken')
        
        try {
            const { data } = await api.post(
                '/auth/token',
                login
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async getAdmin( token ) {
        this.#handleParam( token, 'string', 'getAdmin')

        try {
            const { data } = await api.get(
                '/auth/get-admin',
                {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                }
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async createAlbum( album ) {
        this.#handleParam( album, 'object', 'createAlbum')

        try {
            const { data } = await api.post(
                '/album/create',
                album
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async updateAlbum( data, id ) {
        this.#handleParam( data, 'object', 'updateAlbum')
        this.#handleParam( id, 'number', 'updateAlbum')

        try {
            const { data: result } = await api.post(
                '/album/update',
                {
                    ...data,
                    id
                }
            )

            return result
        } catch (err) {
            throw err
        }
    }

    async deleteAlbum( id ) {
        this.#handleParam( id, 'number', 'deleteAlbum')

        try {
            const { data } = await api.post(
                '/album/delete',
                {
                    id
                }
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async getAlbumById( id ) {
        this.#handleParam( id, 'number', 'getAlbumById')

        try {
            const { data } = await api.get(
                `/album?id=${id}`
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async searchSongInAlbum( search, albumId ) {
        this.#handleParam( search, 'string', 'searchSongInAlbum')
        this.#handleParam( albumId, 'number', 'searchSongInAlbum')

        try {
            const { data } = await api.get(
                `/album?id=${albumId}&song=${search}`
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async searchAlbum( search ) {
        this.#handleParam( search, 'string', 'searchAlbum')

        try {
            const { data } = await api.get(
                `/album?search=${search}`
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async getAlbumByType( type ) {
        this.#handleParam( type, 'string', 'getAlbumByType')

        try {
            const { data } = await api.get(
                `/album?type=${type}`
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async getAlbumMostDownloaded() {
        
        try {
            const { data } = await api.get(
                '/album/most-downloaded'
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async createSong( song ) {
        this.#handleParam( song, 'object', 'createSong')

        try {
            const { data } = await api.post(
                '/song/create',
                song
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async updateSong( data, id ) {
        this.#handleParam( data, 'object', 'updateSong')
        this.#handleParam( id, 'number', 'updateSong')

        try {
            const { data: result } = await api.post(
                '/song/update',
                {
                    ...data,
                    id
                }
            )

            return result
        } catch (err) {
            throw err
        }
    }

    async deleteSong( id ) {
        this.#handleParam( id, 'number', 'deleteSong')

        try {
            const { data } = await api.post(
                '/song/delete',
                {
                    id
                }
            )

            return data
        } catch (err) {
            throw err
        }
    }

    async searchSong( search ) {
        this.#handleParam( search, 'string', 'searchSong')

        try {
            const { data } = await api.get(
                `/song?search=${search}`
            )

            return data
        } catch (err) {
            throw err
        }
    }

    #handleParam( param, type, message ) {
        if( typeof param !== type ) {
            throw new Error(`the error was caused in ${ message }`)
        }

        return true
    }
}

export default new Api()
