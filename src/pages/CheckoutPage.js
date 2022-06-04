import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div classNAme='empty'>
            <h2>No items in your cart</h2>
            <Link to='/products' className='btn'>
              Return to shopping
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )
        }
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
