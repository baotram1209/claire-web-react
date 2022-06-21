import React from 'react';
import { Link } from 'react-router-dom';
// import champ from '../assets/champ.JPG';
const Contact = () => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios
    .post('https://formsubmit.co/ajax/your@email.com', {
      name: 'FormSubmit',
      message: "I'm from Devro LABS",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  return (
    <>
      {/* <div className="container container-contact">
        <h1 className="page-header">Me contacter</h1>
        <div className="page-content page-content-basic"></div>
      </div> */}
    </>
  );
};

export default Contact;
