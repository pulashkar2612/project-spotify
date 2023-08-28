//import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import Banner from './Banner';
import Audio from './Audio';
import './Genre.css';
import { useDispatch } from 'react-redux';
import { add } from '../../store/songSlice'
import { useEffect } from 'react';

function Genre() {
    const location = useLocation();
    const state = location.state;
    console.log("state: ", state);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(add(state));
    }, [])
    return (
        <div className='mainContainer' >
            <Banner />
            <div className="menuList">
                <ul>
                    <li>
                        <a href="#">Popular</a>
                    </li>
                    <li>
                        <a href="#">Albums</a>
                    </li>
                    <li>
                        <a href="#">Songs</a>
                    </li>
                    <li>
                        <a href="#">Fans</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>

                <p>
                    <i>
                        <FaUsers />
                    </i>
                    12.3M <span>Followers</span>
                </p>
            </div>
            <Audio songs={state} />
        </div>
    );
}

export default Genre;