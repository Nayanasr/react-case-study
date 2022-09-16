import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../action/action';
import { Link } from 'react-router-dom';
import Details from './Details';

const ProductDetails = () => {
    const [data, setData] = useState(Details);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
    }
    return (
        <div className='container mt-3'>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((value, index) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={value.imgURL} style={{ height: "16rem" }} />
                                    <Card.Body>
                                        <Card.Title>{value.name}</Card.Title>
                                        <Card.Text>
                                            {value.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-right">

                                            <Link to="/cart">
                                                <Button variant="primary" onClick={() => send(value)}>Add</Button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductDetails