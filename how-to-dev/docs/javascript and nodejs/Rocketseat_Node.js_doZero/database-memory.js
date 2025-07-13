import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(video => {
            if(search){
                return video.title.includes(search)
            }

            return true
        })
    }

    create (video) {
        // randomUUID() gera um id universal unico
        const videoId = randomUUID()

        // .set() esta recebendo dois valores pois o videoId é o ID do video e o video é o proprio video
        this.#videos.set(videoId,video)
    }

    update(id, video) {
        this.#videos.set(id,video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}