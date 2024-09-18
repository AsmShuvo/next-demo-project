import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const About = async() => {
    const session = await getServerSession(authOptions); // get session on server as we cant use hooks 
    console.log("Session in about: ", session);
    return (
        <div>
            About page
        </div>
    );
};

export default About;