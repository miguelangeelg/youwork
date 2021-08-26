import React, { Component } from 'react';
import './style/navChats.css';
import userOne from '../assets/img/users/user1.jpeg';
import userTwo from '../assets/img/users/user2.jpeg';
import userThree from '../assets/img/users/user3.png';

class Nav extends Component {
    render() {
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
                        <li>
                            <a href="/#">
                                <img alt="some" src={userOne} />
                                <span className="position-absolute  p-1 bg-success border  rounded-circle online">
                                </span>
                            </a>
                            <span className="tooltip">Julian Perez</span>
                        </li>
                        <li>
                            <a href="/#">
                                <img alt="some" src={userTwo} />
                                <span className="position-absolute  p-1 bg-success border  rounded-circle online">
                                </span>
                            </a>
                            <span className="tooltip">Manuela Rodriguez</span>
                        </li>
                        <li>
                            <a href="/#">
                                <img alt="some" src={userThree} />
                                <span className="position-absolute  p-1 bg-danger border  rounded-circle online">
                                </span>
                            </a>
                            <span className="tooltip">Vanessa Zapata</span>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }

}

export default Nav;