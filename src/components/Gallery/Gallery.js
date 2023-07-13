// import React from 'react';
// import './Gallery.css';

// function Gallery() {
//   return (
//     <div className="gallery">
//       <h2>Gallery</h2>
//       <div className="carousel-container">
//         <div className="carousel">
//           <img src="https://assets.website-files.com/597f79b8efcc0c000162f368/5ece81599ba7d8607880726e_Depositphotos_20975765_l-2015.jpg" alt="Placeholder 1" />
//           <img src="https://static.wixstatic.com/media/nsplsh_654f37304a4854744a6f63~mv2_d_6000_4000_s_4_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg" alt="Placeholder 2" />
//           <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dogsplay-getty-1598489036.jpg" alt="Placeholder 3" />
//           <img src="https://www.petswelcome.com/wp/wp-content/uploads/2010/06/pa.jpg" alt="Placeholder 4" />
//           <img src="https://orig00.deviantart.net/a92f/f/2011/059/5/0/50fac22b1f40f8ebd2ad3273d88d6f39-d3am149.jpg" alt="Placeholder 5" />
//           <img src="https://iheartdogs.com/wp-content/uploads/2015/08/2-6987562704_a5cec06c2c_z-550x368.jpg" alt="Placeholder 6" />
//         </div>
//         <button className="carousel-prev">
//           <i className="fas fa-chevron-left"></i>
//         </button>
//         <button className="carousel-next">
//           <i className="fas fa-chevron-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Gallery;


import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="carousel-container">
        <div className="carousel">
          <img
            className="slide"
            src="https://assets.website-files.com/597f79b8efcc0c000162f368/5ece81599ba7d8607880726e_Depositphotos_20975765_l-2015.jpg"
            alt="Placeholder 1"
          /> 
           <img
            className="slide"
            src="https://static.wixstatic.com/media/nsplsh_654f37304a4854744a6f63~mv2_d_6000_4000_s_4_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg"
            alt="Placeholder 2"
          />
          <img
          className="slide"
          src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dogsplay-getty-1598489036.jpg"
          alt="Placeholder 3"
        />
        <img
          className="slide"
          src="https://www.petswelcome.com/wp/wp-content/uploads/2010/06/pa.jpg"
          alt="Placeholder 4"
        />
        <img
          className="slide"
          src="https://orig00.deviantart.net/a92f/f/2011/059/5/0/50fac22b1f40f8ebd2ad3273d88d6f39-d3am149.jpg"
          alt="Placeholder 5"
        />
        <img
          className="slide"
          src="https://iheartdogs.com/wp-content/uploads/2015/08/2-6987562704_a5cec06c2c_z-550x368.jpg"
          alt="Placeholder 6"
        />
        </div>
      </div>
    </div>
  );
}

export default Gallery;




// import React, { useState } from 'react';
// import './Gallery.css';

// function Gallery() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const nextSlide = () => {
//     if (slideIndex === 1) {
//       setSlideIndex(0);
//     } else {
//       setSlideIndex(slideIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (slideIndex === 0) {
//       setSlideIndex(1);
//     } else {
//       setSlideIndex(slideIndex - 1);
//     }
//   };

//   return (
//     <div className="gallery-container">
//       <h2>Gallery</h2>
//       <div className="carousel-container">
//         <div className="carousel">
//           <img
//             className="slide"
//             src="https://assets.website-files.com/597f79b8efcc0c000162f368/5ece81599ba7d8607880726e_Depositphotos_20975765_l-2015.jpg"
//             alt="Placeholder 1"
//             style={{ transform: `translateX(-${slideIndex * 50}%)`, height: '40%' }}
//           />
          
//         </div>
//         <div className="carousel-controls">
//           <i 
//             className="carousel-control-left"
//             aria-label="Previous slide"
//             onClick={prevSlide}
//           >
//             &#x2039;
//           </i>
//           <i
//             className="carousel-control-right"
//             aria-label="Next slide"
//             onClick={nextSlide}
//           >
//             &#x203a;
//           </i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;





{/* <img
          className="slide"
          src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dogsplay-getty-1598489036.jpg"
          alt="Placeholder 3"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        />
        <img
          className="slide"
          src="https://www.petswelcome.com/wp/wp-content/uploads/2010/06/pa.jpg"
          alt="Placeholder 4"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        />
        <img
          className="slide"
          src="https://orig00.deviantart.net/a92f/f/2011/059/5/0/50fac22b1f40f8ebd2ad3273d88d6f39-d3am149.jpg"
          alt="Placeholder 5"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        />
        <img
          className="slide"
          src="https://iheartdogs.com/wp-content/uploads/2015/08/2-6987562704_a5cec06c2c_z-550x368.jpg"
          alt="Placeholder 6"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        /> */}


        // <img
        //     className="slide"
        //     src="https://static.wixstatic.com/media/nsplsh_654f37304a4854744a6f63~mv2_d_6000_4000_s_4_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg"
        //     alt="Placeholder 2"
        //     style={{ transform: `translateX(-${slideIndex * 50}%)`, height: '40%' }}
        //   />
        //   <img
        //   className="slide"
        //   src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dogsplay-getty-1598489036.jpg"
        //   alt="Placeholder 3"
        //   style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        // />
        // <img
        //   className="slide"
        //   src="https://www.petswelcome.com/wp/wp-content/uploads/2010/06/pa.jpg"
        //   alt="Placeholder 4"
        //   style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        // />
        // <img
        //   className="slide"
        //   src="https://orig00.deviantart.net/a92f/f/2011/059/5/0/50fac22b1f40f8ebd2ad3273d88d6f39-d3am149.jpg"
        //   alt="Placeholder 5"
        //   style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        // />
        // <img
        //   className="slide"
        //   src="https://iheartdogs.com/wp-content/uploads/2015/08/2-6987562704_a5cec06c2c_z-550x368.jpg"
        //   alt="Placeholder 6"
        //   style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        // />