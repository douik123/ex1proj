import React from 'react'
const Profile = ({age,name,profession}) =>{

return(
<div> 
    <p>Full Name: {name}</p>
    <p>Age : {age}</p>
    <p>Profession : {profession}</p>
</div>
);
};
export default Profile