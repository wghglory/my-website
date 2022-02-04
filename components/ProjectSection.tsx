// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import {A11y, Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import resolveConfig from 'tailwindcss/resolveConfig';

import spotifyImg from '/public/projects/nextjs-spotify.png';
import sirius1Img from '/public/projects/sirius1.png';
import sirius2Img from '/public/projects/sirius2.png';
import sirius3Img from '/public/projects/sirius3.png';

const tailwindConfig = require('/tailwind.config');
const fullConfig = resolveConfig(tailwindConfig);
const kingColor = (fullConfig.theme.colors as any).king;

export default function ProjectSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container m-auto py-10 lg:py-20">
        <h2 className="text-center text-2xl lg:mb-10 lg:py-6 lg:text-left lg:text-5xl">Projects</h2>
        <div>
          <Swiper
            style={
              {
                '--swiper-navigation-color': kingColor[500],
                '--swiper-pagination-color': kingColor[500],
              } as any
            }
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[A11y, Pagination, EffectCoverflow, Navigation]}
            // modules={[A11y, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image className="w-1/2" src={spotifyImg} alt="Spotify" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-1/2" src={sirius1Img} alt="Spotify" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-1/2" src={sirius2Img} alt="Spotify" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-1/2" src={sirius3Img} alt="Spotify" />
            </SwiperSlide>
          </Swiper>
          <style jsx global>
            {`
              .swiper {
                width: 100%;
                padding-top: 50px;
                padding-bottom: 50px;
              }

              .swiper-slide {
                background-position: center;
                background-size: cover;
                width: clamp(50%, 400px, 90%);
                /* height: 200px; */
              }

              .swiper-slide img {
                display: block;
                width: 100%;
              }

              // tailwind small
              @media (max-width: 640px) {
                .swiper-button-prev,
                .swiper-button-next {
                  display: none;
                }
              }

              // overwrite navigation dot background color for dark mode
              .dark :not(.swiper-pagination-bullet-active).swiper-pagination-bullet {
                background: #fff;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}
