import React from 'react';
// import './TeacherView.css';

const TeacherView = props => {

    return (
        <div className="card">
            <h1 className="card-header">
            <img style={{ width: 50 }} className="img-fluid" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/2018_04_26_11_25_22_Ubuntu_Desktop_weekly_update_%E2%80%93_23rd_March_2018___Ubuntu_Insights.png" alt="beaver" />
                &nbsp;Hello, Mr. Beaver
            </h1>
            <div className="card-body">
                <p>You have 3 students who are failing one or more of your classes</p>
                <p>Click the following links for parent contact options:</p>
                <p><button className="btn btn-link">Johnny Nogood</button>,<button className="btn btn-link">Kim Khardashian</button>,<button className="btn btn-link">Kanye West</button></p>
            </div>
            <div className="card-footer">
            <button className="btn btn-link">Logout</button>
            </div>
        </div>
    );
    
};

export default TeacherView;