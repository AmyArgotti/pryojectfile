import { fetchAllEvents } from "./models/Event.js"
import { deleteEvent } from "./db/localStorageHelpers.js";

fetchAllEvents()

const deleteBtns = document.querySelectorAll(".deleteBtn")

deleteBtns.forEach(element => {
    element.addEventListener("click", (e)=> {
        e.preventDefault()
        const id = e.target.getAttribute("data-collectionId")
        console.log(id)
        deleteEvent(id)

        window.location.reload()
    });
})
