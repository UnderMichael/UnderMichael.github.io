import Dexie from "dexie";

export const db = new Dexie('myDatabase')

db.version(1).stores({
    goods: '++id, name, store1Rem, store2Rem, store3Rem, store4Rem, store5Rem, warehouseRem, totalRem',
    transitions: 'id, name, sender, receiver, number',
    store1: 'id, remain, hardRes, softRes',
    store2: 'id, remain, hardRes, softRes',
    store3: 'id, remain, hardRes, softRes',
    store4: 'id, remain, hardRes, softRes',
    store5: 'id, remain, hardRes, softRes',
    usersData: 'id, login, password'
})