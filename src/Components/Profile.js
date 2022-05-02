
import { FaGreaterThan } from "@react-icons/all-files/fa/FaGreaterThan";
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp'
import React from 'react'
import FinalQuestions from './FInalQuestions'
import data from './data/questions'
import { nanoid } from "nanoid";

const activeStyle = {
    backgroundColor: 'rgba(61, 111, 190, 0.847)',
    color: 'white'
}

const EditProfile = (props) => {

    const [user, setUser] = React.useState({
        fullName: "John Doe",
        username: 'john123',
        email: 'john@gmail.com'
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser(preUser => {
            return {
                ...preUser,
                [name]: value
            }
        })
    }

    return <div className="profile-card">
        <div className="profile-image">
            <img style={{width: '100px', height: '100px'}} src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png" alt="profile-picture" />
            <small className="content">Click on image to change</small>
        </div>
        <div className="profile-input-container">
            <h5 className="content bold-font">Full Name</h5>
            <input 
                name="fullName" 
                onChange={handleChange} 
                value={user.fullName} 
                className="content profile-inputs" 
                type="text" 
            />
        </div>
        <div className="profile-input-container">
            <h5 className="content bold-font">Username</h5>
            <input 
                name="username" 
                onChange={handleChange} 
                value={user.username} 
                className="content profile-inputs" 
                type="text" 
            />
        </div>
        <div className="profile-input-container">
            <h5 className="content bold-font">Email</h5>
            <input 
                name="email" 
                onChange={handleChange} 
                value={user.email} 
                className="content profile-inputs" 
                type="text" 
            />
        </div>
        <div className="update-button">
            <button type="button" className="content bold-font">Save Changes</button>
        </div>
    </div>
}

const QuestionPapers = (props) => {
    return <div>
        <DropDown />
    </div>
}

const DropDown = (props) => {
    const [displayQuestions, setDisplayQuestions] = React.useState(false)

    const handleClick = () => {
        setDisplayQuestions(preState => {
            return !preState
        })
    }

    return <div style={{backgroundColor: '#E8F9FD', margin: '20px 0', padding: '20px 50px', borderRadius: '10px'}}>
        <div onClick={handleClick} className="question-dropdown display-row">
            <h4 className="content bold-font">Question paper {props.paperIndex+1}</h4>
            <h4>{displayQuestions ? <FaChevronUp /> : <FaChevronDown />}</h4>
        </div>
        {displayQuestions && props.questionData.map((question, i) => {
        return <FinalQuestions 
            key={nanoid()}
            mainQuestion={question.question}
            optionA={question.optionA}
            optionB={question.optionB}
            optionC={question.optionC}
            optionD={question.optionD}
            questionIndex={i}
        />
    })}
    </div>
}

const Profile = () => {

    const [activeTab, setActiveTab] = React.useState({
        papers: false,
        profile: false,
        logout: false
    })

    function handleClick(event){
        const {id} = event.target

        setActiveTab(() => {
            let obj = {
                papers: false,
                profile: false,
                logout: false
            }

            if(id === 'papers'){
                obj.papers = true
                obj.profile = false
                obj.logout = false
            } else if (id === 'profile') {
                obj.papers = false
                obj.profile = true
                obj.logout = false
            } else {
                obj.papers = false
                obj.profile = false
                obj.logout = true
            }

            return obj
        })
    }

    return <div className="profile">
        <div className="profile-left">
            <img className="user-profile" src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png" alt="profile" />
            <h4 className="content bold-font">John Doe</h4>
            <h5 style={activeTab.papers ? activeStyle : {}} id="papers" onClick={handleClick} className="content">Question Papers</h5>
            <h5 style={activeTab.profile ? activeStyle : {}} id="profile" onClick={handleClick} className="content">Edit Profile</h5>
            <a className="content logout-button" href="/">Logout</a>
        </div>
        <div className="profile-right">
            {activeTab.papers ? <div>
                {data.map((questions, i) => {
                    return <DropDown questionData={questions} paperIndex={i} />
                })}
            </div> : activeTab.profile ? <EditProfile /> : ""}
        </div>
    </div>
}

export default Profile
