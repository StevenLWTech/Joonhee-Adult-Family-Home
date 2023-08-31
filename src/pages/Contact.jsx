import React, { useEffect } from 'react';
import { initEmailJS, sendEmail } from './../js/emailService.js'
import {
    Card,
    Input,
    Textarea,
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

        <div className="contact bg-orange-50 flex flex-col justify-center items-center md:h-[calc(100vh_-_128px)] lg:h-[calc(100vh_-_160px)] xl:h-[calc(100vh_-_160px)] pt-16 lg:pt-24 px-4">
            <div className=' max-w-7xl'>
                <div className='text-6xl pb-2 lg:pb-8'>Contact Us</div>
                <div className='text-2xl lg:pb-8'>Make an appointment today!</div>
                <div className=' '>
                    <Card color="transparent" shadow={false}>
                        <form id="contact-form" className="mt-8 mb-2 pb-16 w-full max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Full Name" name="user_name" />
                                <Input size="lg" label="Email" name="user_email" />
                                <Input size="lg" label="Phone" name="contact_number" />
                                <Textarea size="lg" type="textarea" label="Type your message here..." name="message" />
                            </div>
                            <Button type="submit" value="send" className="mt-6" fullWidth>
                                <input type="submit" value="Submit" />
                            </Button>

                        </form>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Contact;
