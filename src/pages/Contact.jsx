import React, { useEffect } from 'react';
import { initEmailJS, sendEmail } from './../js/emailService.js'

function Contact() {
    useEffect(() => {
        initEmailJS();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(event.target);
    };

    return (
        <div>
            <h1>Contact Form</h1>
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
