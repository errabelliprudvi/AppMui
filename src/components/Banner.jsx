import img from '../assets/react.svg'
import pex from '../assets/pex.jpg'
import cam from '../assets/cam.jpg'
import stu from '../assets/stu.jpg'
import styles from './banner.module.css'
import './AutoSlideBanner.css';  // Import the CSS file
import { useState ,useEffect} from 'react'

export default function Banner()
{


    /*
 
 <div className="banner" style={{ position: 'relative', width: '100%', height: '400px' }}>
      <img 
        src={images[currentSlide]} 
        alt="Banner Slide" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </div>
    */

     // Step 2: Array of images for the banner
  const images = [
            '/images/banner/fashion.jpg',
            '/images/banner/bedroom.jpg',
            '/images/banner/apparel.jpg',
            '/images/banner/sports.jpg',
            '/images/banner/books.jpg',
            '/images/banner/electronics.jpg'
  ];


  // Step 1: Define the state for the active slide
  const [currentSlide, setCurrentSlide] = useState(0);


    // Step 3: Set up auto-slide logic using `useEffect`
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);  // Move to the next slide
        }, 3000);  // Change slide every 3 seconds (3000ms)

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);




  // Step 4: Function to handle indicator click
 const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };
    return(
        <div className={styles.banner}>
            <div className={styles.bannerContainer}>

            <div className={styles.imgContainer}> 
                   <img  src={images[currentSlide]}/>
                </div>


                <div className="banner-indicators">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}  // Make indicators clickable
                        />
                    ))}
                </div>

            </div>

        </div>
        
    )
}