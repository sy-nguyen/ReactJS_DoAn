import React, {useContext} from 'react'
import { AppContext } from '../../AppContext'
import { Button, Container, Table } from 'reactstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Cart() {
    const {cart, deleteCart, updateCard} = useContext(AppContext)
  return (
    <div>
        <Header/>
        <Container>
            <Table hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) =>(
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>
                                    <Button className='btn btn-second' onClick={()=>updateCard(item.id,1)}>+</Button>
                                    {item.quantity}
                                    <Button className='btn btn-second' onClick={()=>updateCard(item.id,0)}>+</Button>

                                </td>
                                <td>
                                    <Button className='btn btn-danger' onClick={()=>deleteCart(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>        
            </Table>
        </Container>
        <Footer/>
    </div>
  )
}
