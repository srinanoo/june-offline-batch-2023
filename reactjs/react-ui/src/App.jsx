import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-primary'>Primary</div>

      <p><button className='btn btn-primary'>Primary Button</button></p>
      <p><Button variant='primary' className='w-75'>Primary Button</Button></p>

      <Container>
        <Row>
          <Col className='bg-primary col-4'>
            Column1
          </Col>
          <Col className='bg-secondary col-4'>
            Column2
          </Col>
          <Col className='bg-success col-4'>
            Column3
          </Col>
        </Row>
      </Container> */}

<Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>

    </>
  )
}

export default App
