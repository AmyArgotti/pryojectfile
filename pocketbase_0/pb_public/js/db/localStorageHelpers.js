const setItemInLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const getEvents = () => JSON.parse(localStorage.getItem("events")) || []

let id = getEvents().length + 1

export const setEvent = (data) => {
    data["collectionId"] = id
    id = id + 1
    const newEvents = [...getEvents(), data]

    setItemInLocalStorage("events", newEvents)
}

export const deleteEvent = (collectionId) => {
    const events = getEvents().filter(val=> val.collectionId != collectionId)

    setItemInLocalStorage("events", events)
}
