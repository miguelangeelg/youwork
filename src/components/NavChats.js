import React from 'react';
import './style/navChats.css';
import userOne from '../assets/img/users/user1.jpeg';
import userTwo from '../assets/img/users/user2.jpeg';
import userThree from '../assets/img/users/user3.png';
import userFour from '../assets/img/users/user4.jpeg';
import userFive from '../assets/img/users/user5.jpeg';


const Nav = () => {

    let usersChat = Object.entries(
        {
            "0": {
                "id": "1",
                "name": "Julian Perez",
                "photo": userOne,
                "status": "active"
            },
            "1": {
                "id": "2",
                "name": "Manuel Rodriguez",
                "photo": userTwo,
                "status": "active"
            },
            "2": {
                "id": "3",
                "name": "Vanessa Zapata",
                "photo": userThree,
                "status": "inactive"
            },
            "3": {
                "id": "4",
                "name": "Juan Medrano",
                "photo": userFour,
                "status": "active"
            },
            "4": {
                "id": "5",
                "name": "Ryan Castro",
                "photo": userFive,
                "status": "inactive"
            }
        }
    );

    return (
        <div className="navChats">
            <div className="sidebar2 active">
                <ul className="nav-list">
                    <li>
                        <a href="/#">
                            <i className='bx bxs-plus-circle'></i>
                        </a>
                        <span className="tooltip">Nuevo Chat</span>
                    </li>
                    {
                        usersChat.map((user) => {
                            return (
                                <li key={user[1].id}>
                                    <a href="/#">
                                        <img alt="some" src={user[1].photo} />
                                        { user[1].status == "active" ? (
                                            <span className="position-absolute  p-1 bg-success border  rounded-circle online"></span>
                                        ) : (
                                            <span className="position-absolute  p-1 bg-danger border  rounded-circle online"></span>
                                        ) }
                                    </a>
                                    <span className="tooltip">{user[1].name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Nav;