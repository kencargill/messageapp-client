import React from 'react'
import Sidebar from './sidebar';

interface dashProps {
    id: {
        id: any;
    };
}

export default function Dashboard(props: dashProps) {
    const { id } = props;
    return (
        <Sidebar id={id}/>
  )
}
