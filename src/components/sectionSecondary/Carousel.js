import styled from 'styled-components'
import { register } from 'swiper/element/bundle'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const Container = styled.div`
    width: auto;
    padding-top: 50px;
`
const Slider = styled.div`
 position: relative;
`
const SliderItem = styled.img`
    width: 600px;
    height: 400px;
    object-fit: cover;
    @media (max-width: 500px) {
      height: 300px;
      width: 95%;
}
`
register()

function Carousel() {

  const data = [

    { id: '1', image: 'https://i.imgur.com/OdlPjlc.jpeg', title: 'Sites Corporativos' },
    { id: '2', image: 'https://i.imgur.com/Fiq4A2j.jpeg', title: 'Lojas Online' },
    { id: '3', image: 'https://i.imgur.com/MNW8iTF.png', title: 'Blogs' },

  ]

  return (

    <Container>

      <Swiper
        className='swiper-slider'
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {data.map((item) => (

          <SwiperSlide key={item.id} className='swiper-slider'>

            <Slider>

              <SliderItem src={item.image} alt='slider' />

            </Slider>

          </SwiperSlide>

        ))}

      </Swiper>

    </Container>

  )
}

export default Carousel