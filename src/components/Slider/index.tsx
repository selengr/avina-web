/**
 *
 * SliderSlick
 *
 */
import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components/macro';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// SwiperCore.use([Navigation, Pagination]);

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  slidesPerView?: number;
  slidesPerGroup?: number;
  clickable?: boolean;
  loop?: boolean;
  navigation?: boolean;
}

export const StyledSlider = memo(({ slidesPerView, slidesPerGroup, clickable, loop, navigation, ...props }: Props) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={4}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: clickable,
      }}
      navigation={navigation}
      className='mySwiper'>
      {props.children}
    </Swiper>
  );
});
export default { StyledSlider };
const StyleSlider = styled(Swiper);
// const StyleSlider = styled.div`
//   --swiper-navigation-size: 20px !important;
//
//   .swiper {
//     width: 100%;
//     height: 100%;
//   }
//
//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
//
//     /* Center slide text vertically */
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     -webkit-justify-content: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     -webkit-align-items: center;
//     align-items: center;
//   }
//
//   .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//
//   .swiper-pagination-bullet {
//     width: 10px;
//     height: 10px;
//     display: inline-block;
//     border-radius: 10px;
//     background: #fff;
//     border: 1px solid black;
//   }
//
//   .swiper-pagination-bullet-active {
//     width: 20px;
//     height: 10px;
//     opacity: 1;
//     background: #433792;
//
//     border: 0 solid #000;
//   }
// `;
