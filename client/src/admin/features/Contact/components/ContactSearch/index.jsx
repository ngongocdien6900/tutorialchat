import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './style.scss';

ContactSearch.propTypes = {
  
};

ContactSearch.defaultProps = {
  
};

function ContactSearch(props) {

  return (
    <div className="contact__search">
      <div className="contact__search--container">
        <SearchOutlined />
        <form>
          <input
            placeholder="Search or start new chat"
            type="text"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactSearch;
