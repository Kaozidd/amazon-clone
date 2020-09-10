import React from "react";
import './Home.css';
import Product from '../components/Product.js';

function Home() {
    return (
        <div className="home">

            <div className="home__container">

                <img 
                    className="home__banner"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
                    alt="home-banner"
                />
                
                <div className="home__row">
                    <Product 
                        id={2545}
                        title='Portal Gun, deluxe edition, with interdimensional traveling capabilities'
                        image='https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/b19a2663341d45af8f58506bdaf87309_Large.png'
                        price={18999.99}
                        rating={5}
                    />
                    <Product 
                        id={123123}
                        title='Limited Edition "Old Man Winter" Plasmid'
                        image='https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/119115360_1254289518253067_5922027529292266413_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=lvXgAIGOi9kAX9I9Fk7&_nc_ht=scontent.fmex6-1.fna&oh=9e8db7b48ba06e6c4872eecadbfaf655&oe=5F7E6ABA'
                        price={1200.00}
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={234334}
                        title={'11" blue adjustable Kyber crystal lightsaber'}
                        image='https://vignette3.wikia.nocookie.net/starwars/images/d/d4/Anakin_Skywalkers_first_lightsaber_-_SW_Card_Trader.png/revision/latest?cb=20160709211740'
                        price={18499.99}
                        rating={3}
                    />
                    <Product 
                        id={696969}
                        title='Deluxe Pair of M1911s, .45 ACP rounds,  modified with pivot-style triggers "Ebony & Ivory"'
                        image='http://img2.wikia.nocookie.net/__cb20110124163611/capcomdatabase/images/c/cb/Ebony%26Ivory.png'
                        price={13699.99}
                        rating={5}
                    />
                    <Product 
                        id={131100}
                        title='Ibanez GRX20Z Solidbody Electric Guitar Jewel Blue finish'
                        image='http://pngimg.com/uploads/electric_guitar/electric_guitar_PNG40.png'
                        price={1900.00}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                <Product 
                        id={117117}
                        title='BR55 Heavy Barrel Service Rifle'
                        image='https://i.pinimg.com/originals/ee/be/7e/eebe7e18e2f25da0b45c4bd0fb6b8a7c.png'
                        price={24499.70}
                        rating={5}
                    />
                </div>

            </div>
             
        </div>
    )
}

export default Home;