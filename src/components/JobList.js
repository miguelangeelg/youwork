import React, { Component } from 'react';
import './style/jobList.css';



const list = ["tarjeta1", "tarjeta2", "tarjeta3", "tarjeta4"];
const JobList = () => {
    
        return (
            <div>
            <div className="row">
                {
                    list.map(job => {
                        return (
                            <div className="listCard"  key={Math.random()} >
                                {job}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )

}

export default JobList;