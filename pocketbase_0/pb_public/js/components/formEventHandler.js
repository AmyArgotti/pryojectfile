import { setEvent } from "../db/localStorageHelpers.js"
import { createRecord } from "../db/crudHelpers.js"

const form = document.getElementById("eventsForm")

form.addEventListener("submit", async (e)=> {
    e.preventDefault()
    const imageFile = e.target[2].files[0]
    
    const formData = new FormData();
    formData.append("file", imageFile);
    
    const res = await createRecord("images", formData)

    const data = {
        name: e.target[0].value,
        description: e.target[1].value,
        image: [res.collectionId, res.id, res.file]
    }

    setEvent(data)
    window.location.reload()
})
