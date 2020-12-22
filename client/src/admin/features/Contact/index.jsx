import React from 'react';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';
import './style.scss';

function ContactFeture() {

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats />
    </div>
  );
}

export default ContactFeture;
