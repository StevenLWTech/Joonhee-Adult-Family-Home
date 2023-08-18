import React, { useEffect } from 'react';
import { initEmailJS, sendEmail } from './../js/emailService.js'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

function Contact() {
    useEffect(() => {
        initEmailJS();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(event.target);
    };

    return (
        <div className="flex flex-col  items-center h-[calc(100vh_-_94px)] pt-24 px-4 xl:px-24">
            <div className='text-6xl'>Contact Us</div>
            <div className='text-2xl'>Make an appointment today. We’re ready to welcome you into our ʻohana!</div>

            <form id="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Send" />
            </form>




        </div>
    );
}

export default Contact;
