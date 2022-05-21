import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_igjcghe',
			'template_zt9g5g4',
			form.current,
			'e2SWg07_hlOAEOVDG'
		);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<p>jamillerooks@gmail.com</p>
						<a
							href="mailto:jamillerooks@outlook.com"
							target="_blank"
							rel="noreferrer">
							Send an email
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Jamille Rooks</h5>
						<a
							href="https://m.me/Jamille.Rooks"
							target="_blank"
							rel="noreferrer">
							Send a message
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" 
						name="email" 
						placeholder="Your Email" 
						required />
					<textarea
						name="message"
						rows="5"
						placeholder="Your Message"
						required></textarea>
					<div style={{ display: 'flex' }}>
						<button
							style={{ marginLeft: 'auto' }}
							type="submit"
							className="btn btn-primary ">
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
