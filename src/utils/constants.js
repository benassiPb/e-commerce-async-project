import React from 'react'
import { GiCompass, GiHangingSpider, GiLotus } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'shop',
    url: '/products',
  },
  {
    id: 3,
    text: 'our story',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'purpose',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: <GiLotus />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: <GiHangingSpider />,
    title: 'origin story',
    text:
      'Lorem ipsum, dolor sit amet consectetur.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
