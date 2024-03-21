import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Icon_Phone from '../../images/phoneicon.png';
import Icon_Chat from '../../images/chaticon.png';

const FaqBox = ({ title, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`faq-boxes ${isExpanded ? 'expanded' : ''}`}>
      <h1>{title}</h1>
      <button id="btn-dwn" onClick={toggleContent}>
        <NavLink className="nav-link-email-btn" to="/contact-form">
          <i className={`fa-regular ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </NavLink>
      </button>
      {isExpanded && <p>{answer}</p>}

    </div>
  );
};

const Faq = () => {
  return (
    <div id='faq'>
      <div className='container'>
        <div className='content'>
          <div className='left-column'>
            <div className='box-1'>
              <h1>Any questions?</h1>
              <h1>Check out the FAQs</h1>
              <p>Still have unanswered questions and need to get in touch?</p>
            </div>
            <div className='icon-boxes'>
              <div className='box-2'>
                <img id='phone-icon' src={Icon_Phone} alt="phone icon" />
                <p>Still have questions?</p>
                <NavLink className="nav-link-cf" to="/contact-form">Contact us<i id="arrow" className="fa-regular fa-arrow-right"></i></NavLink>
              </div>
              <div className='box-3'>
                <img id='chat-icon' src={Icon_Chat} alt="chat icon" />
                <p>Still have questions?</p>
                <NavLink className="nav-link-cf" to="/contact-form">Contact us<i id="arrow" className="fa-regular fa-arrow-right"></i></NavLink>
              </div>
            </div>
          </div>
          <div className='right-column'>
            <div className='faq-boxes-container'>
              <FaqBox title="Is any of my personal information stored in the App?" answer="Yes, some of your personal information may be stored securely for account purposes." />
              <FaqBox title="What format can I download my transaction history in?" answer="You can download your transaction history in CSV format." />
              <FaqBox title="Can I schedule future transfers?" answer="Yes, you can schedule future transfers using our app's scheduling feature." />
              <FaqBox title="When can I use Banking App services?" answer="You can use our services 24/7, whenever you need them." />
              <FaqBox title="Can I create my own password that is easy for me to remember?" answer="Yes, you can create a password that is easy for you to remember, but make sure it's secure." />
              <FaqBox title="What happens if I forget or lose my password?" answer="If you forget or lose your password, you can reset it using our password recovery feature." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
