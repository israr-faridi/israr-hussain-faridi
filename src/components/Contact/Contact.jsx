import React, { useState } from 'react';
import Ring from '../../assets/images/ring.svg'
import { Link } from 'react-router-dom';


const Contact = () => {
    // 1. Form State Management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error dynamically when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // 3. Validation Logic
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";

        // Email Regex Verification
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // returns true if no errors
    };

    // 4. Form Submit Handler
    // --- Updated Submit Handler to Send Email ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // REPLACE THE URL BELOW WITH YOUR ACTUAL FORMSPREE ENDPOINT
                const response = await fetch("https://formspree.io/f/xvzjreal", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // alert("Thank you Israr! Your message has been sent to your email successfully.");
                    setFormData({ name: '', email: '', message: '' }); // Clear inputs
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Form transmission error:", error);
                alert("Network error. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="contactLeft">
                            <h2>Contact</h2>
                            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                            <div className="contactNum">
                                <Link to="tel:+923102312801"><i className="ri-phone-line"></i> +923102312801</Link>
                                <Link to="mailto:israrhussainfaridi90gmail"><i className="ri-mail-line"></i> israrhussainfaridi90gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="contactRight">
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Name Input Group */}
                                <div className={`input-group ${errors.name ? 'is-invalid' : formData.name ? 'is-valid' : ''}`}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="NAME"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                {/* Email Input Group */}
                                <div className={`input-group ${errors.email ? 'is-invalid' : formData.email ? 'is-valid' : ''}`}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                {/* Message Textarea Group */}
                                <div className={`input-group ${errors.message ? 'is-invalid' : formData.message ? 'is-valid' : ''}`}>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        placeholder="MESSAGE"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                {/* Submit Button aligned exactly to the right */}
                                <div className="btn-wrapper">
                                    <button type="submit" className="send-msg-btn">
                                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ringImg">
                <img className='img-fluid' src={Ring} alt="" />
            </div>
        </section>
    )
}

export default Contact
