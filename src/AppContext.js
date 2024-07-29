import axios from 'axios'
import {createContext, useState, useEffect} from 'react'


export const AppContext = createContext({})
export const AppProvider = ({children})=>{
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const url ="https://66a07bf97053166bcabb907f.mockapi.io/Student"
    const fetchProducts = () =>{
        axios.get(url)
        .then(function(res){
            setProducts(res.data)
        })
        .catch(function(err){
            console.log(err);
        });
    }
    const addCart = (id) =>{
        const res = products.find(item => item.id === id)
        const index = cart.findIndex(item=> item.id===id)
        if(index>0){
            let newCart = cart
            newCart[index].quantity++
            setCart(newCart)
        }
        else{
            setCart([...cart,{...res,quantity:1}])
        }
    }
    const updateCard = (id, flag) =>{
        let index = cart.findIndex(item=> item.id===id)
        let newCart = cart
        if(flag===0){
            if(newCart[index].quantity>1){
                newCart[index].quantity--;
            }
        }
        else{
            newCart[index].quantity++;
        }

    }

    const deleteCart = (id) => {
        let newCart = cart.filter(item=>item.id!==id)
        setCart(newCart)
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    
    useEffect(()=>{
        fetchProducts();
    },[])

    return <AppContext.Provider value={{count, setCount, cart, deleteCart , updateCard, addCart}}>
        {children}
    </AppContext.Provider>
}