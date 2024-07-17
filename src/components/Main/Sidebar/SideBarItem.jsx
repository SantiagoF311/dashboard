import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

export const SideBarItem = ({ IconComponent, name, itemsName, eventKey }) => {
  return (
    <Accordion.Item className='acordionItem' eventKey={eventKey}>
      <Accordion.Header>
        <div className='accordionHeader'>
          <IconComponent className='accordionIcon' />
          {name}
        </div>
      </Accordion.Header>
      <Accordion.Body className='acordionBody'>
        {itemsName.map((itemName, index) => (
          <Button as={Link} to='/' className="acordionBodyItem" key={index} variant='secondary'>
            {itemName}
          </Button>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};
