import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push({
      pathname: '/chooseAmount',
      query: { mobileNumber: mobileNumber },
    })
  }

  return (
    <>
      <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your number</Form.Label>
            <Form.Control value={mobileNumber} onChange={event => setMobileNumber(event.target.value)} type="text"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Form>
      </Layout>
    </>
  )
}
