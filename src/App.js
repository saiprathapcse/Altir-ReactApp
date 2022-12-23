import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
function App() {
  const [show, setShow] = useState(false);
  const [feedsList, setFeedsList] = useState([]);
  const [rewardsList, setRewardsList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    
    const date = new Date();
    const short =date.toLocaleString('en-us',{month:'short',  year:'numeric'})
    const day = date.getDate();
    const hours =date.getHours();
    const minutes =date.getMinutes();
  const dattime=day+','+short+' ,'+hours+'.'+minutes;
  formDataObj.dattime=dattime;
    console.log(formDataObj, 'date')
    setFeedsList(feedsList => [...feedsList, formDataObj]);
    setRewardsList(rewardsList => [...rewardsList, formDataObj]);
    console.log(feedsList);
    handleClose();
  }
  return (
    <div className="App">
     <div className="container">
      <div className='row maindiv'>
      <span className='rwrds col-md-2 img-avtr'>
         <text className='txtrwd'><i className='fas fa-user-alt'></i></text>
         <text className='valtxt' id="fntsxz">Jane Doe</text>
       </span>
       <span className='rwrds col-md-2 rewards'>
         <text className='txtrwd'>My Rewards</text>
         <text className='valtxt'>$250</text>
       </span>
       <span className='rwrds col-md-2 rewards'>
         <text className='txtrwd'>Give</text>
         <text className='valtxt'>$100</text>
       </span>
       </div>
       <div className='row cardmain'>
        <div className='container-fluid'>
          <a href='#apple' className='pull-right' onClick={handleShow}><i className='fas fa-plus'></i></a>
          <Tabs
      defaultActiveKey="feed"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="feed" title="Feed">
      <Card>
          <Card.Body>
            <div className= 'row mb-3'>
           <span className='col-md-12 feedimg-avtr'>
               <text className='feedtxtrwd'><i className='fas fa-user-alt'></i></text>
               <div className='mainppart'>
               <text className='usname'>DavidGreen Rewarded by john cena</text>
               <span className='time'>4.30pm</span>
               <text className='txtmsgblog'>Big thanks for your help in helping on the outage today!</text>
               </div>
             </span>
             </div>
             <div className= 'row mb-3'>
             <span className='col-md-12 feedimg-avtr'>
               <text className='feedtxtrwd'><i className='fas fa-user-alt'></i></text>
               <div className='mainppart'>
               <text className='usname'>Alex Brown Rewarded by Rajesh kumar</text>
               <span className='time'>Feb 21, 2021</span>
               <p className='txtmsgblog'>Big thanks !</p>
               </div>
             </span>
             </div>
            {feedsList.map(item => (
               <div className= 'row mb-3'>
               <span className='col-md-12 feedimg-avtr'>
                 <text className='feedtxtrwd'><i className='fas fa-user-alt'></i></text>
                 <div className='mainppart'>
                 <text className='usname'>{item.name} Rewarded by Jane Doe</text>
                 <span className='time'>{item.dattime}</span>
                 <p className='txtmsgblog'>{item.reason}</p>
                 </div>
               </span>
               </div>
            ))}
          </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="myrewards" title="My Rewards">
      <Card>
          <Card.Body>
          {rewardsList.map(item => (
               <div className= 'row mb-3'>
               <span className='col-md-12 feedimg-avtr'>
                 <text className='feedtxtrwd'><i className='fas fa-user-alt'></i></text>
                 <div className='mainppart'>
                 <text className='usname'>{item.name} Rewarded by Jane Doe</text>
                 <span className='time'>{item.dattime}</span>
                 <p className='txtmsgblog'>{item.reason}</p>
                 </div>
               </span>
               </div>
            ))}
          </Card.Body>
        </Card>
      </Tab>
     
    </Tabs>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className='mdl'>
            <text className='nrmltxt'>New Reward Model</text>
            <div className='rewardform'>
            <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Alex Brown" name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Reward</Form.Label>
        <Form.Control type="number" placeholder="$30" name="reward"/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>why?</Form.Label>
        <Form.Control as="textarea" rows={3} name="reason"/>
      </Form.Group>
     
     <div className='algn'>
      <Button className="mb-3"  type="submit">
        Reward
      </Button>
      </div>
    </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
       </div>
      </div>
    </div>
  );
}

export default App;
