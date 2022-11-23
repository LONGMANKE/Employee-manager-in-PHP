import React from 'react';
import ReactDOM from 'react-dom/client';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React Component</div>

                        <div className="card-body">I'm an React component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('employeeApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeApp"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
