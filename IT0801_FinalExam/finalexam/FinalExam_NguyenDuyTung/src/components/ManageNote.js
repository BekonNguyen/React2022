
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from './Button';
import Input from './Input';
import Icons from './Icons';
import { useState } from 'react';
import AddNote from './AddNote';

function MyNote() {

    const [noteList, setNoteList] = useState([
        { title: "Title of notes", content: "Your content of notes" },
    ]);



    const createNote = () => {
        let addTitle = document.getElementById("title-add-note").value;
        let addContent = document.getElementById("content-add-note").value;
        setNoteList([...noteList, { title: addTitle, content: addContent }]);
        document.getElementById("title-add-note").value = "";
        document.getElementById("content-add-note").value = "";

    }

    function clickDelete() {
        document.getElementById("trash").parentElement.parentElement.remove();
       
    };

    // const clickDelete = (title) => setNoteList( {
    //     a: noteList.a.filter (a => a.title != title) 
    // })

    // const deleteHomework = (tilte) => setHomework({
    //     exercise: homework.exercise.filter (exercise => exercise.tilte != tilte)
    // })


    function clickEdit() {
       

    }

    function saveEditData(){

    }




    return (
        <div className="container" >
            <div className="navbar bg-warning flex-nowrap">
                <div>
                    <img className="ms-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                        width={65} height={35}
                    ></img>

                </div>
                <div className="input-group w-50">
                    <Input className="form-control" type="text" placeholder="Search"></Input>
                    <button className="btn btn-outline-secondary">
                        <Icons className="bi bi-search"></Icons>
                    </button>
                </div>

                <div>
                    <button className="btn me-3">
                        <span>EXIT </span>
                        <Icons className="bi bi-box-arrow-left"></Icons>
                    </button>
                </div>
            </div>

            <div className="d-flex ">
                <div className="vw-25" style={{ height: "800px" }}>
                    <div className="text-center mb-2 mt-3">
                        <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#addModal">ADD</button>

                        {/* Form add Notes */}
                        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title " id="addModalLabel">NEW NOTE</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-floating">
                                            <Input className="form-control" id="title-add-note"></Input>
                                            <textarea className="form-control" id="content-add-note" style={{ height: 300 }}></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={createNote}>Save</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Form Edit note */}
                        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title " id="editModalLabel">EDIT NOTE</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-floating">
                                            <Input className="form-control" id="title-edit-note"></Input>
                                            <textarea className="form-control" id="content-edit-note" style={{ height: 150 }}></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={saveEditData()}>Save</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h4 className="ps-3 pt-3 mt-3 border-top border-3">FILT</h4>
                        <ul className="list-group  ">
                            <Button className="list-group-item list-group-item-action" type="button" text="Work"></Button>
                            <Button className="list-group-item list-group-item-action" type="button" text="House"></Button>
                            <Button className="list-group-item list-group-item-action" type="button" text="Appointment"></Button>
                            <Button className="list-group-item list-group-item-action" type="button" text="Holiday"></Button>
                            <Button className="list-group-item list-group-item-action" type="button" text="Other"></Button>
                        </ul>
                    </div>
                </div>

                <div className="flex-grow-1 ms-3 mt-3">
                    {
                        noteList.map((currentText, index) => (
                            <AddNote
                                key={index}
                                title={currentText.title}
                                content={currentText.content}
                                clickDelete={clickDelete}
                                clickEdit={clickEdit}
                            >
                            </AddNote>
                        ))
                    }

                </div>
            </div>

            <div className="footer mt-1">

            </div>
        </div>
    );
}

export default MyNote;
