import { useState } from 'react'

import like from '../img/like.png'
import shop from '../img/shop.png'
import user from '../img/user.png'
import newCollection from '../img/newCollection.png'
import facebook from '../img/Facebook.png'
import instagram from '../img/Instagram.png'
import arrow from '../img/arrow.png'
import applestore from '../img/applestore.png'
import googleplay from '../img/googleplay.png'

import './menu.css'

const Menu = () => {

    // const [activeElement,  setActivElement] = useState('');

    const colorMenu = (e) =>{
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                }
            }
        });
        // console.log(activeElement);
        
        // if(activeElement){
        //     document.querySelector('#' + activeElement).classList.remove('active_item');
        // }

        // e.target.classList.add('active_item');
        // setActivElement(e.target.id);
        // console.log(e.target.id)
    }

    const acrivChild1 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'flex';
                    document.getElementById('child2').style.display = 'none'; 
                    document.getElementById('child3').style.display = 'none'; 
                    document.getElementById('child4').style.display = 'none'; 
                    document.getElementById('child5').style.display = 'none'; 
                    document.getElementById('child6').style.display = 'none'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    const acrivChild2 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'none';
                    document.getElementById('child2').style.display = 'flex'; 
                    document.getElementById('child3').style.display = 'none'; 
                    document.getElementById('child4').style.display = 'none'; 
                    document.getElementById('child5').style.display = 'none'; 
                    document.getElementById('child6').style.display = 'none'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    const acrivChild3 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'none';
                    document.getElementById('child2').style.display = 'none'; 
                    document.getElementById('child3').style.display = 'flex'; 
                    document.getElementById('child4').style.display = 'none'; 
                    document.getElementById('child5').style.display = 'none'; 
                    document.getElementById('child6').style.display = 'none'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    const acrivChild4 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'none';
                    document.getElementById('child2').style.display = 'none'; 
                    document.getElementById('child3').style.display = 'none'; 
                    document.getElementById('child4').style.display = 'flex'; 
                    document.getElementById('child5').style.display = 'none'; 
                    document.getElementById('child6').style.display = 'none'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    const acrivChild5 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'none';
                    document.getElementById('child2').style.display = 'none'; 
                    document.getElementById('child3').style.display = 'none'; 
                    document.getElementById('child4').style.display = 'none'; 
                    document.getElementById('child5').style.display = 'flex'; 
                    document.getElementById('child6').style.display = 'none'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    const acrivChild6 = (e) => {
        const elementsArray = document.querySelectorAll(".menu__item");
        document.body.addEventListener("click", function (e) {
            const element = e.target.closest(".menu__item");
            if (element) {
                for (let link of elementsArray) {
                    link.classList.toggle("active_item", link == element);
                    document.getElementById('child1').style.display = 'none';
                    document.getElementById('child2').style.display = 'none'; 
                    document.getElementById('child3').style.display = 'none'; 
                    document.getElementById('child4').style.display = 'none'; 
                    document.getElementById('child5').style.display = 'none'; 
                    document.getElementById('child6').style.display = 'flex'; 
                    // document.getElementById('child7').style.display = 'none'; 
                }
            }
        });
    }

    // const acrivChild7 = (e) => {
    //     const elementsArray = document.querySelectorAll(".menu__item");
    //     document.body.addEventListener("click", function (e) {
    //         const element = e.target.closest(".menu__item");
    //         if (element) {
    //             for (let link of elementsArray) {
    //                 link.classList.toggle("active_item", link == element);
    //                 document.getElementById('child1').style.display = 'none';
    //                 document.getElementById('child2').style.display = 'none'; 
    //                 document.getElementById('child3').style.display = 'none'; 
    //                 document.getElementById('child4').style.display = 'none'; 
    //                 document.getElementById('child5').style.display = 'none'; 
    //                 document.getElementById('child6').style.display = 'none'; 
    //                 document.getElementById('child7').style.display = 'flex'; 
    //             }
    //         }
    //     });
    // }

    

    return(
        <>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <div>
                        <div className='zag-icon-flex'>
                            <p className='zagolovok_menu'>MOON RIVER</p>
                            <div className='icon_flex'>
                                <img className='icon_design' src={like}/>
                                <img className='icon_design' src={user}/>
                                <img className='icon_design' src={shop}/>
                            </div>
                        </div>
                        <div className='menu_grey'>
                            <li><a id='1' className="menu__item" href="#" onClick={e => acrivChild1(e)}>?????????????????? ??????????????</a></li>
                            <li><a id='2' className="menu__item" href="#" onClick={e => acrivChild2(e)}>????????</a></li>
                            <li><a id='3' className="menu__item" href="#" onClick={e => acrivChild3(e)}>??????????????</a></li>
                            <li><a id='4' className="menu__item" href="#" onClick={e => acrivChild4(e)}>????????????</a></li>
                            <li><a id='5' className="menu__item" href="#" onClick={e => acrivChild5(e)}>?????????????? ???? ????????</a></li>
                            <li><a id='6' className="menu__item" href="#" onClick={e => acrivChild6(e)}>?????????????????? ??????????????????</a></li>
                            {/* <li><a id='7' className="menu__item" href="#" onClick={e => acrivChild7(e)}>????????????</a></li> */}
                        </div>
                        <div>
                            <div id='child1'style={{display: 'none'}} className='menu__item_list'>
                                <div>
                                    <p>?????? ????????</p>
                                    <div className='item__list_text'>
                                        <p>?????? ????????????</p>
                                        <p>?????? ????????????</p>
                                        <p>?????? ??????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????????????</p>
                                    <div className='item__list_text'>
                                        <p>????????????</p>
                                        <p>????????????????</p>
                                        <p>??????????</p>
                                        <p>????????????</p>
                                        <p>??????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>????????????????</p>
                                    <div className='item__list_text'>
                                        <p>??????????????<br/> ?? ????????????????????????</p>
                                        <p>???????????? ????????????</p>
                                        <p>?????????? ????????????</p>
                                        <p>?????????????? ????????????</p>
                                        <p>??????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????</p>
                                    <div className='item__list_text'>
                                        <p>Mercury</p>
                                        <p>Chopard</p>
                                        <p>Cartier</p>
                                        <p>Graff</p>
                                        <p>Garrard</p>
                                    </div>
                                </div>
                            </div>
                            <div id='child2'style={{display: 'none'}}  className='menu__item_list'>
                                <div>
                                    <p>?????? ????????</p>
                                    <div className='item__list_text'>
                                        <p>?????? ????????????</p>
                                        <p>?????? ????????????</p>
                                        <p>?????? ??????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????????????</p>
                                    <div className='item__list_text'>
                                        <p>??????????????????????</p>
                                        <p>????????????????????????</p>
                                        <p>??????????????????</p>
                                        <p>????????????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>????????????????</p>
                                    <div className='item__list_text'>
                                        <p>?????????????????????? ????????</p>
                                        <p>??????????????????????</p>
                                        <p>??????????????????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????</p>
                                    <div className='item__list_text'>
                                        <p>Tissot</p>
                                        <p>Calvin Clein</p>
                                        <p>Tag Heuer</p>
                                        <p>Swatch</p>
                                        <p>Guess</p>
                                        <p>Casio</p>
                                    </div>
                                </div>
                            </div>
                            <div id='child3'style={{display: 'none'}} className='menu__item_list'>
                                <div>
                                    <p>?????? ????????</p>
                                    <div className='item__list_text'>
                                        <p>?????? ????????????</p>
                                        <p>?????? ????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????????????</p>
                                    <div className='item__list_text'>
                                        <p>??????????????</p>
                                        <p>????????????????????</p>
                                        <p>??????????????????</p>
                                        <p>????????????</p>
                                        <p>??????????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????</p>
                                    <div className='item__list_text'>
                                        <p>Chanel</p>
                                        <p>Gucci</p>
                                        <p>Lanvin</p>
                                        <p>Dolce & Gabbana</p>
                                        <p>Tom Ford</p>
                                        <p>Givenchy</p>
                                    </div>
                                </div>
                            </div>
                            <div id='child4'style={{display: 'none'}} className='menu__item_list'>
                                <div>
                                    <p>?????? ????????????</p>
                                    <div className='item__list_text'>
                                        <p>Mercury</p>
                                        <p>Chopard</p>
                                        <p>Cartier</p>
                                        <p>Graff</p>
                                        <p>Garrard</p>
                                        <p>Tag Heuer</p>
                                    </div>
                                </div>
                            </div>
                            <div id='child5'style={{display: 'none'}} className='menu__item_list'>
                                <div>
                                    <p>?????? ?????????????? ???? ????????</p>
                                    <div className='item__list_text'>
                                        <p>????????????</p>
                                        <p>????????????????</p>
                                        <p>??????????</p>
                                        <p>????????</p>
                                        <p>????????????????</p>
                                        <p>????????????</p>
                                        <p>????????????</p>
                                    </div>
                                </div>
                            </div>
                            <div id='child6'style={{display: 'none'}} className='menu__item_list'>
                                <div>
                                    <p>??????????????????</p>
                                    <div className='item__list_text'>
                                        <p>????????????</p>
                                        <p>????????????????</p>
                                        <p>??????????</p>
                                        <p>????????????</p>
                                        <p>??????????</p>
                                        <p>??????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>????????????????</p>
                                    <div className='item__list_text'>
                                        <p>??????????????<br/> ?? ????????????????????????</p>
                                        <p>???????????? ????????????</p>
                                        <p>?????????? ????????????</p>
                                        <p>?????????????? ????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>????????</p>
                                    <div className='item__list_text'>
                                        <p>????????????</p>
                                        <p>??????????????</p>
                                        <p>??????????</p>
                                        <p>????????????</p>
                                        <p>??????????????</p>
                                    </div>
                                </div>
                                <div>
                                    <p>??????????</p>
                                    <div className='item__list_text'>
                                        <p>Mercury</p>
                                        <p>Chopard</p>
                                        <p>Cartier</p>
                                        <p>Graff</p>
                                        <p>Garrard</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div id='child7'style={{display: 'none'}}>????????????</div> */}
                        </div>
                    </div>
                    <div className='menu_new_collection'>
                        <img src={newCollection}/>
                        <div className='footer-block_inf'>
                            <p className='connection-text2'>?????????????????????? ???? ??????????????</p>
                            <div className='input_pic_flex'>
                                <div className="text-field text-field_floating-3_3">
                                    <input className="text-field__input_3" type="adress" id="adress" name="adress" placeholder="??"/>
                                    <label className="text-field__label_3" htmlFor="adress">?????????????? E-mail</label>
                                </div>
                                <img src={arrow} className='pic_arrow'/>
                            </div>
                            <div className='sotial_network'>
                                <img src={applestore} className='applestore' style={{height: '4vh'}}/>
                                <img src={googleplay} className='googlestore' style={{height: '5vh'}}/>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Menu;