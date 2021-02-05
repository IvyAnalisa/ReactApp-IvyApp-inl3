import React,{useContext} from 'react';
import './NavigationBar.css'; 
import LogoType from "../../shared/images/logoType.svg"
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../shared/global/provider/UserProvider'
import {Profile} from '../profile/Profile'

export const NavigationBar =()=>{
    const history = useHistory();
    const [authenticatedUser,setAuthenticatedUser] = useContext(UserContext)
    const displayUserIfAuthenticated= ()=>{
        return    (authenticatedUser)
        ?<Profile/>:
        <span onClick ={()=> history.push('/signin')} className ="signIn">Sign</span>

    }
    return (
        <div className ="navigationBarWrapper">
           <img 
            className="logoType"
           src={LogoType} alt="Error.."/>
            <span onClick={()=> history.push('/')}
            className="home">Home</span>

            <span onClick={()=> history.push('/signin')}
            className="signIn">Sign in</span>
            <Profile className="profile"/>
        </div>
    );
}