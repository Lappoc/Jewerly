import Menu from './Menu'

import like from '../img/like.png'
// import menu from '../img/menu.png'
import shop from '../img/shop.png'
import user from '../img/user.png'
import ring from '../img/ring.png'
import line from'../img/linee.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './index.css';

import linewhite from'../img/linewhite.png'
import arrow from '../img/arrow.png'
import man from '../img/man.png'
import woman from '../img/woman.png'

import map from '../img/map.png'

import coulomb from '../img/coulomb.png'
import ringcroix from '../img/ringcroix.png'
import ringjows from '../img/ringjows.png'
import swin from '../img/swin.png'
import smoon from '../img/smoon.png'

import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.png'
import pic3 from '../img/pic3.jpg'
import pic4 from '../img/pic4.png'
import pic5 from '../img/pic5.jpg'

import facebook from '../img/Facebook.png'
import instagram from '../img/Instagram.png'

import picCon from '../img/picCon.png'
import arrowBlack from '../img/arrowBlack.png'

import applestore from '../img/applestore.png'
import googleplay from '../img/googleplay.png'

const FirstScrin = () => {
    const lang = (e) =>{
        document.querySelector(".first_lang_ru").classList.remove("active");
        document.querySelector(".first_lang_eng").classList.remove("active");
        e.target.classList.toggle("active")
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1, 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        }
      };
    
    return(
        <>
            <div className='first_reactangle_block'>
                <div className='first_body_block'>
                <div className='first_body_column'>
                    <div className='first_up_line_flex'>
                        <p className='first_zagolovok'>MOON RIVER</p>
                        <div className='first_icon_flex_all'>
                            <div className='first_icon_flex'>
                                <img className='first_icon_design' src={like}/>
                                <img className='first_icon_design' src={user}/>
                                <img className='first_icon_design' src={shop}/>
                            </div>
                            {/* <img className='first_icon_design' src={menu}/> */}
                            <Menu/>
                        </div>
                        </div>
                        <div className='first_up_two_line_flex'>
                            <div className='first_column_zagolovok'>
                                <p className='first_two_zagolovok'>HIGH JEWELRY</p>
                                <p className='first_tree_zagolovok'><img className='line' src={line}/><i> Смотреть коллекцию </i><img className='line' src={line}/></p>
                            </div>
                            <img className='first_ring' src={ring}/>
                        </div>
                        <div className='first_up_line_flex'>
                            <div className='first_flex_lang'>
                                <p className='first_lang_ru' onClick = {e=>lang(e)}>RU</p>
                                <p className='first_lang_eng' onClick = {e=>lang(e)}>ENG</p>
                            </div>
                            <div className='first_column_opis'>
                                <p className='first_opis' >КОЛЬЦО TRINITY, Cartier</p>
                                <p className='first_two_opis'>Белое золото, бриллианты</p>
                                <p className='first_tree_opis'><i>498 000 ₽</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block2'>
                    <div className='man_woman_flex'>
                        <div style={{display: 'flex'}}>
                            <img src={man} className='man_woman_pic'/>
                            <div className='man_woman_text'>
                                <p className='man_litle_text_pic'>Перейти в раздел</p>
                                <p className='man_big_text_pic'>Для мужчин</p>
                                <img src={linewhite} style={{width: '20%'}}/>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <img src={woman} className='man_woman_pic'/>
                            <div className='man_woman_text'>
                                <p className='man_litle_text_pic'>Перейти в раздел</p>
                                <p className='man_big_text_pic'>Для женщин</p>
                                <img src={linewhite} style={{width: '20%'}}/>
                            </div>
                        </div>
                    </div>
                
                {/* <div className='man_woman_block'>
                    
                    <div className='man_woman_text'>
                        <p className='man_litle_text_pic'>Перейти в раздел</p>
                        <p className='man_big_text_pic'>Для женщин</p>
                        <img src={linewhite}/>
                    </div>
                </div> */}
                {/* </div> */}
                {/* <div className='reactangle_flex'> */}
                    <div className='reactangle_two'>
                        <p className='text_with_map'>Найди</p>
                        <p className='text_with_map'>бутик около себя</p>
                        <p className='text2_with_map'>Введите свой адрес и узнайте о самых ближайших бутиках к вам</p>
                        <div className='input_pic_flex'>
                            <div className="text-field text-field_floating-3">
                                <input className="text-field__input" type="adress" id="adress" name="adress" placeholder="ф"/>
                                <label className="text-field__label" htmlFor="adress">Введите адрес</label>
                            </div>
                            <img src={arrow} className='pic_arrow'/>
                        </div>
                    </div>
                    {/* <img className='map' src={map}/> */}
                {/* </div> */}
            </div>
            <div className='block3'>
                <div className='block3_rect_pic_column'>
                    <div className='block3_rect_pic'>
                        <div className='block3_column_opis'>
                            <p className='block3_opis1' >КОЛЬЦО JOW'S, Cartier</p>
                            <p className='block3_two_opis1'>Белое золото, бриллианты</p>
                            <p className='block3_tree_opis'><i>674 000 ₽</i></p>
                        </div>
                        <div className='block3_pic_flex_end'>
                            <img src={ringjows} className='pic_centre'/>
                        </div>
                    </div>
                    <div className='block3_rect_pic'>
                        <div className='block3_column_opis'>
                            <p className='block3_opis1' >КОЛЬЦО CROIX, Cartier</p>
                            <p className='block3_two_opis1'>Желтое, белое, розовое золото</p>
                            <p className='block3_tree_opis'><i>432 000 ₽</i></p>
                        </div>
                        <div className='block3_pic_flex_end'>
                            <img src={ringcroix} className='pic_centre'/>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={coulomb} className='block3_coulomb'/>
                    <div className='block3_coulomb_up'>
                        <div className='block3_column_opis'>
                            <p className='block3_opis' >КОЛЬЕ ITOILE, HUBLOT</p>
                            <p className='block3_two_opis'>Белое золото, бриллианты</p>
                            <p className='block3_tree_opis'><i>539 000 ₽</i></p>
                        </div>
                    </div>
                </div>
                <div className='block3_rect_pic_column'>
                    <div className='block3_rect_pic'>
                        <div className='block3_column_opis'>
                            <p className='block3_opis1' >СЕРЬГИ MOON, HUBLOT</p>
                            <p className='block3_two_opis1'>Желтое золото, сапфир</p>
                            <p className='block3_tree_opis'><i>498 000 ₽</i></p>
                        </div>
                        <div className='block3_pic_flex_end2'>
                            <img src={smoon} className='pic_centre'/>
                        </div>
                    </div>
                    <div className='block3_rect_pic'>
                        <div className='block3_column_opis'>
                            <p className='block3_opis1' >СЕРЬГИ WIN, BLANCPAIN</p>
                            <p className='block3_two_opis1'>Желтое золото, жемчуг</p>
                            <p className='block3_tree_opis'><i>398 000 ₽</i></p>
                        </div>
                        <div className='block3_pic_flex_end2'>
                            <img src={swin} className='pic_centre'/>
                        </div>
                    </div>          
                </div>
            </div>
            <div className='block4'>
                <p className='text_with_carousel'>Мы</p>
                <p className='text_with_carousel'>в социальных сетях</p>
                
                <Carousel
                
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}

                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    centerMode={true}
                    focusOnSelect={true}
                    
                    additionalTransfrom={500}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 500ms ease-in-out"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType="desctop"
                    dotListClass="custom-dot-list-style"
                    itemClass="picture-slider"
                >
                    <div>
                        <img src={pic1} className='img_carousel'/>
                    </div>
                    <div>
                        <img src={pic2} className='img_carousel'/>
                    </div>
                    <div>
                        <img src={pic3} className='img_carousel'/>
                    </div>
                    <div>
                        <img src={pic4} className='img_carousel'/>
                    </div>
                    <div>
                        <img src={pic5} className='img_carousel'/>
                    </div>
                </Carousel>
                <div className='sotial_network1'>
                    <img src={facebook} className='facebook'/>
                    <img src={instagram} className='instagram'/>
                </div>
                <div className='connection'>
                    <img src={picCon} className='picCon'/>
                    <div className='connection-innformation'>
                        <div>
                            <p className='connection-text'>ТЕЛЕФОН ФЛАГМАНСКОГО МАГАЗИНА</p>
                            <p className='connection-phone'>+7 800 456 456</p>
                        </div>
                        <div>
                            <p className='connection-text'>ПОДПИШИТЕСЬ НА НОВОСТИ</p>
                            <div className='input_pic_flex'>
                                <div className="text-field_2 text-field_floating-3_2">
                                        <input className="text-field__input_2" type="adress" id="adress" name="adress" placeholder="ф"/>
                                        <label className="text-field__label_2" htmlFor="adress">Введите E-mail</label>
                                    </div>
                                <img src={arrowBlack} className='pic_arrow'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navigation-menu'>
                    <p className='navigation-menu-text'>РАБОТА В КОМПАНИИ</p>
                    <p className='navigation-menu-text'>УСЛОВИЯ ПОЛЬЗОВАНИЯ</p>
                    <p className='navigation-menu-text'>ВЫХОДНЫЕ ДАННЫЕ</p>
                    <p className='navigation-menu-text'>ПОЛИТИКА КОНФИДЕЦИАЛЬНОСТИ</p>
                    <p className='navigation-menu-text'>КАРТА САЙТА</p>
                </div>
                <div className='navigation-menu-footer'>
                    <p className='zagolovok'>MOON RIVER</p>
                    <div className='footer-flex'>
                        <div className='footer-block5'>
                            <p className='connection-text2'>ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ</p>
                            <p className='connection-phone'>+7 800 456 456</p>
                            <div className='sotial_network1'>
                                <img src={facebook} className='facebook' style={{marginTop: '-5vh'}}/>
                                <img src={instagram} className='instagram' style={{marginTop: '-5vh'}}/>
                            </div>
                        </div>
                        <div className='footer-block5'>
                            <p className='connection-text2'>ПОДПИШИТЕСЬ НА НОВОСТИ</p>
                            <div className='input_pic_flex'>
                                <div className="text-field text-field_floating-3_3">
                                    <input className="text-field__input_3" type="adress" id="adress" name="adress" placeholder="ф"/>
                                    <label className="text-field__label_3" htmlFor="adress">Введите E-mail</label>
                                </div>
                                <img src={arrow} className='pic_arrow'/>
                            </div>
                            <div className='sotial_network'>
                                <img src={applestore} className='applestore' style={{height: '4vh'}}/>
                                <img src={googleplay} className='googlestore' style={{height: '5vh'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FirstScrin;