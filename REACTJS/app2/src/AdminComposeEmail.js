import Menu from "./Menu";
export default function AdminComposeEmail() {
    return (<>
        <Menu />
        <main id="main" className="main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 fw-bolder">
                            <h1>Doctor management</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-primary h4">Compose Mail - [Rahul]</div>
                            <div className="card-body mt-3">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient" className="form-label">To</label>
                                        <input type="email" className="form-control" defaultValue="rahul@gmail.com" id="recipient" placeholder="Enter recipient 
                                         email" readOnly />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                                    </div>
                                    <div className="form-group mt-3" id="editor">
                                    <label htmlFor="edit" className="form-label">Message</label>
                                        <textarea id="edit" className="form-control" style={{ "margin-top": "2px" }} placeholder="Type some text" defaultValue= 
                                         {""} />
                                    </div>
                                </form>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary me-1">Send</button>
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}