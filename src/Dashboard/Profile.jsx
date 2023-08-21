import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [name, setName] = useState('');
    const [aboutYou, setAboutYou] = useState('');
    const [gender, setGender] = useState('Male');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="profileDiv">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} className="profileform">
                <lable className="lableName">Name</lable>
                <input
                    type="text"
                    value={name}
                    className="textBox"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <lable className="lableName">About You</lable>
                <textarea
                    value={aboutYou}
                    className="textBox"
                    onChange={(e) => setAboutYou(e.target.value)}
                    required
                >ok</textarea>
                <lable className="lableName">Gender</lable>
                <select
                    value={gender}
                    className="textBox"
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button className="btn_submit">Submit</button>
                <p className="details">{`Name : ${name}
                \nAbout You : ${aboutYou}
                \nGender : ${gender}`}</p>
            </form>
        </div>
    );
}
export default Profile;