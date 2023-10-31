import { ROOT_PATH } from "../configs/dbConfigs.js";
import { getEvents } from "../db/localStorageHelpers.js";

const eventsContrainer = document.getElementById("events-container")

const getHTMLEventElement = ({collectionId, name, description, image}) => {
    const div = document.createElement("div")

    div.innerHTML = `
        <div class="event-wrapper">
            <h1 class="event-title">${name}</h1>
            <p class="event-description">${description}</p>
            
            <div class="event-image">
                <img src='${ROOT_PATH}/api/files/${image[0]}/${image[1]}/${image[2]}'/>
            </div>
            <button class="deleteBtn" data-collectionId=${collectionId}>Delete</button>
        </div>
    `;

    return div
}

export const fetchAllEvents = ()=> {
    getEvents().forEach(element => {
        eventsContrainer.appendChild(getHTMLEventElement(element))
    });
}
