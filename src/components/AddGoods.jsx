import React, {useState} from "react";
import {db} from "../db/db";

function AddGoods() {
    const [name, setName] = useState("");
    const [totalRem, setTotalRem] = useState(0);
    const [status, setStatus] = useState("");

    async function addFriend() {
        try {

            const id = await db.goods.add({
                name,
                totalRem
            });

            setStatus(`Friend ${name} successfully added. Got id ${id}`);
            setName("");
            setTotalRem(0);
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    console.log(db.goods.toArray)

    return <>
        <p>
            {status}
        </p>
        Name:
        <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
        />
        Age:
        <input
            type="number"
            value={totalRem}
            onChange={ev => setTotalRem(Number(ev.target.value))}
        />

        <button onClick={addFriend}>
            Add
        </button>
    </>
}


export default AddGoods