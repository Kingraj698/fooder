import React, { useState } from 'react'
import './Categories.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import chicken from '../../../chicken.jpg';
import bgimage from '../../../png-image.png'





const Categories = () => {

    const [categories, setcateg] = useState(["All", "Chinese", "Pizza", "Biryani", "Fast Food", "Nonveg"])


    return (
        <div className='categories'>
            <span className='productcategorieshead'>categories </span>
            <Splide
                options={{
                    gap: "1rem",
                    type: "slide",
                    autoWidth: true,
                    pagination: false,
                    start: 0,
                    isNavigation: false,
                    arrows: categories?.length > 1 ? true : false,
                    updateOnMove: true,
                    wheel: true,
                    releaseWheel: true,
                    perPage: 1,
                    arrows: false,

                }}
            >
                
                {
                    categories.map((cate, a) =>
                        <SplideSlide key={a}>
                            <div className='productcategories'>
                                <div className='imgbg'>
                                <img className='categoryimg' src={chicken}/> 
                                </div>
                                <categoriestext> {cate}</categoriestext>
                            </div>
                        </SplideSlide>


                    )
                }




            </Splide>



        </div>
    )
}

export default Categories