import Navbar from '@/components/Navbar';
import Hero from './(home)/Hero';
import Categories from './(home)/Categories';
import ProductList from './(home)/ProductList';
import RoomInspirationSlider from './(home)/RoomInspirationSlider';
import FurnitureGallery from './(home)/FurnitureGallery';
import Footer from '@/components/Footer';

export default function Page(){
    return(
        <>
        <Navbar />
        <Hero />
        <Categories />
        <ProductList />
        <RoomInspirationSlider />
        <FurnitureGallery />
        <Footer/>
        </>
    )
}