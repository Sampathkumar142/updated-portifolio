import React from 'react';
import Footer from './Footer';

const Contact = () => {
    return ( 
    <>
        <div className="w-full ph:h-80vh ph:mt-[5%] flex items-center  flex-col ">
        <h2 className='text-2xl mx-4 my-3'>Contact Me</h2>
        <p className='text-sm'> Wanna connect me! whisper me</p>
        <form className='mx-4 flex flex-col  justify-between'>
            <label className='my-4' for="name">Name:</label>
            <input className='border rounded px-4 py-2 ' type="text" id="name" name="name" required />

            <label className='my-4' for="email">Email:</label>
            <input className='border rounded px-4 py-2' type="email" id="email" name="email" required />

            <label className='my-4' for="message">Message:</label>
            <textarea className='border rounded px-4 py-2' id="message" name="message" rows="4" required></textarea>

            <button className='border border-white w-[200px] h-[40px] rounded-xl m-4' type="submit">Send Message</button>
        </form>
    </div>
    <Footer></Footer>
    </>


     );
}
 
export default Contact;