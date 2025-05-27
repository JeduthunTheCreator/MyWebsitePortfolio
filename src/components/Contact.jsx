import React from 'react';
import toast from 'react-hot-toast';
import '../styles/Contact.css'; 
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // EmailJS configuration
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: 'idemudiajeduthun@gmail.com'
        };
        toast.promise(
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ),
            {
                loading: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Failed to send message.',
            }
        );
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
    }

    return (
        <>
            <section className="contact-area padding" id="contact" data-scroll-index="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Get In Touch</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form">
                                <form className="form" id="contact-form" onSubmit={handleSubmit}>
                                    <div className="messages"></div>
                                    <div className="row">
                                        <div className="col-lg-6 ">
                                            <div className="form-group">
                                                <input id="form_name" className="form-control bg-[#EDE8D0]" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input id="form_email" className="form-control bg-[#EDE8D0]" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input id="form_number" className="form-control bg-[#EDE8D0]" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input id="form_subject" className="form-control bg-[#EDE8D0]" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea id="form_message" className="form-control bg-[#EDE8D0]" name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_button text-center">
                                                <button type="submit" className="custom-link  mt-5">MESSAGE ME</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
