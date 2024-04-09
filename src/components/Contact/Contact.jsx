import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const Notify = () => {
      toast("Success")
    }

    const Notify1 = () => {
      toast("Something went wrong")
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_s0qvgws",
        "template_otbhox6",
        form.current,
        "c-0kdgOVoOZIJTPVa"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notify()
          // setDone(true);
        },
        (error) => {
          console.log(error.text);
          Notify1()
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
                    <ToastContainer />

            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <p>
              Hola Visitor !!
              Thank you for bumping in. If you have any queries/ideas/projects, feel free to PING me. I am always open for discussion. You can contact me via the Contact Form OR simply click on the social media icon if you are more comfortable there.
            </p>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact