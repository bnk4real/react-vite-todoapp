import { useState } from "react"

export default function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <div className="container mt-5">
            <h1 className='text-center'>React TODO Website</h1>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="">New Item</label>
                            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}