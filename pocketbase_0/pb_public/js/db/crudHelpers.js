import { ROOT_PATH } from "../configs/dbConfigs.js"

export const getAllFrom = async (collectionName) => {
    const res = await fetch(`${ROOT_PATH}/api/collections/${collectionName}/records`)
    const data = await res.json()

    return data.items
}

export const getRecordFromId = async ({collectionName, recordId}) => {
    const res = await fetch(`${ROOT_PATH}/api/collections/${collectionName}/records/${recordId}`)
    const data = await res.json()

    return data
}

export const createRecord = async (collectionName, formData) => {
    const res = await fetch(`${ROOT_PATH}/api/collections/${collectionName}/records`, {
        method: "POST",
        body: formData
    })

    const data = await res.json()

    return data
}

export const updateRecord = async ({collectionName, recordId}, recordData) => {
    const res = await fetch(`${ROOT_PATH}/api/collections/${collectionName}/records/${recordId}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(recordData)
    })

    const data = await res.json()

    return data
}

export const deleteRecord = async ({collectionName, recordId}) => {
    const res = await fetch(`${ROOT_PATH}/api/${collectionName}/events/records/${recordId}`, {
        method: "DELETE"
    })
    const data = await res.json()

    return data
}
