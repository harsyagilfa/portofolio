import React from 'react'
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div id='contact' className="contact-title">
            <h1>Contact</h1>
        </div>
        <div className="contact-container">
        <form action="https://formspree.io/f/mvojojlv" method="post">
        <div className="contact-box">
          <input type="text" placeholder="Nama Lengkap" name="nama" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="contact-box">
          <input type="number" placeholder="Nomor Telepon" name="nomor" />
          <input type="text" placeholder="Email Subjek" />
        </div>
        <textarea name="pesan" id="pesan" cols="30" rows="10" placeholder="Pesan"></textarea>
        <button type="submit" className="btn">Kirim</button> 
      </form>
            </div> 
    </div> 
  )
}

export default Contact