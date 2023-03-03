import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { getDenominationsData } from '../../lib/chooseAmount'
import { GetServerSideProps } from 'next'
import Layout from '../../components/layout'

type Data = any;

export const getServerSideProps: GetServerSideProps<{ denominationsData: Data }> = async (context) => {
    console.log("context:"+JSON.stringify(context.query.mobileNumber));
    const denominationsData = await getDenominationsData(context.query.mobileNumber as string)
    console.log("denominationsData:");
    console.log(JSON.stringify(denominationsData));
  
    return {
      props: {
        denominationsData,
      },
    }
}

export default function ChooseAmount({denominationsData}: {denominationsData: any}) {

    function handleSelectClk(denomination: object) {
    }

    return (
        <>
            <Layout>
            <CardGroup>
            {denominationsData.denominations.map((denomination: any) => (
            <Card>
            <Card.Body>
                <Card.Title>{denomination.headline}</Card.Title>
                <Card.Text>
                 <div>{denomination.summary[0]}</div>
                 <div>{denomination.summary[1]}</div>
                </Card.Text>
                <Button variant="primary"
                    onClick={() => handleSelectClk(denomination)}
                >Select</Button>
            </Card.Body>
            </Card>
            ))}
            </CardGroup>
            </Layout>
        </>
    );
    
    /*
    return (
        <Button variant="primary" type="submit">
            Submit
        </Button>
    );
    */
    
}

