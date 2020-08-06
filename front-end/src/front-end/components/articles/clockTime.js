import React  from 'react';
import Clock from 'react-live-clock';
 
class ClockTime extends React.Component {
    render() {
        return(<Clock format={'HH:mm:ss'} ticking={true}  />)
    }
}
export default ClockTime;