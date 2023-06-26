import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';

interface sidebarProps {
    id: {
        id: any;
    };
}

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar(props: sidebarProps) {
    const { id } = props;
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

    const handleSelect = (selectedKey: string | null) => {
        if (selectedKey) {
            setActiveKey(selectedKey);
        }
    };

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
        <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
            <Nav variant="tabs" className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>contacts</Nav.Link>
                </Nav.Item>
            </Nav>
        </Tab.Container>
    </div>
  )
}
