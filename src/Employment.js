import React from 'react';
import './Table.css';
import './Employment.css';
import { AKAMAI_DESCRIPTION, MERAKI_DESCRIPTION } from './constants';
import EmploymentCard from './EmploymentCard';
import akamaipic from './assets/Images/Employment/Akamai.jpeg';
import merakipic from './assets/Images/Employment/Meraki.jpeg';

function Employment() {
  return (
    <div>
      <h1 id="title">Employment</h1>
      <table className="table">
        
        <EmploymentCard
          title="Akamai"
          pic={akamaipic}
          description={AKAMAI_DESCRIPTION}
        />
        <EmploymentCard
            title="Meraki"
            pic={merakipic}
            description={MERAKI_DESCRIPTION}
          />
      </table>
    </div>
  );
}

export default Employment;
