import Icons from "./Icons";


export default function AddNote(props) {
    return (
        
            <div className="row">
                <div className='col-xxl-12'>
                    <div className="card m-1 " style={{ backgroundColor: "#FFF3E0" }}>
                        <div className="card-title border-bottom fs-3 ps-2">{props.title}</div>
                        <div className="card-content ps-2" style={{ height: 100 }}>{props.content}</div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-danger m-1 " onClick={props.clickEdit} id = "pencil" data-bs-toggle="modal" data-bs-target="#editModal">
                                <Icons className="bi bi-pencil" ></Icons>
                            </button>
                            <button className="btn btn-danger m-1" onClick={props.clickDelete} id="trash" >
                                <Icons className="bi bi-trash3" ></Icons>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        

    );
}