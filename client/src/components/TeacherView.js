import React from 'react';
// import './TeacherView.css';

const TeacherView = () => {

    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
       setRender(true); 
    }, []);

    return (
        <div className="card">
            <h1 className="card-header">
            <img style={{ width: 50 }} className="img-fluid" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/2018_04_26_11_25_22_Ubuntu_Desktop_weekly_update_%E2%80%93_23rd_March_2018___Ubuntu_Insights.png" alt="beaver" />
                &nbsp;Hello, Mr. Beaver
            </h1>
            <div className="card-body">
                <h4>Students Who Are Failing One or More Classes</h4>
                <ul className="list-unstyled">
                    <li className="list-item">Johnny Nogood</li>
                    <li className="list-item">Kim Khardashian</li>
                    <li className="list-item">Kanye West</li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-link">Logout</button>
            </div>
        </div>
    );
    
};

export default TeacherView;