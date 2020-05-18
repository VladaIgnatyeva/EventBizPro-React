import React, { Component, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getStore from '../store/configureStore';
import { Form } from 'react-bootstrap';
import gear from '../assets/icons/gear.png'
import hand from '../assets/icons/hand.png'
import brain from '../assets/icons/brain.png'
import computer from '../assets/icons/computer.png'
import review_min from '../assets/review-min.png';
import { Offline, Online } from "react-detect-offline";
import ModalOffline from "../components/modalOffline"



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
        //const store = getStore();

        //console.log("Store redux home:  ", store.getState());
    }

    handleShow(){
        this.setState( {show: !this.state.show});
    }

    render() {
        return (
            <div>

                <div className="offline">
                    <Offline> <ModalOffline show={this.state.show} handleShow={this.handleShow.bind(this)}/> </Offline>
                </div>


                <div className="body-home">
                    <main>
                        <div className="container-home">
                            <div className="main_home">
                                <div>
                                    <h1>Организация семинаров <br />и коучингов <span className="underline">под ключ</span></h1>
                                    <p>Оставьте заявку до <b>10 октября</b> и получите<br /> в порадок кейтеринг <b>на 10 персон</b></p>
                                </div>
                                <div>
                                    <ul>
                                        <li><i className="fa fa-check"></i> Конференции</li>
                                        <li><i className="fa fa-check"></i> Тимбилдинги и корпоративы</li>
                                        <li><i className="fa fa-check"></i> Бизнес-завтраки</li>
                                    </ul>
                                </div>

                                <div className="box-3">
                                    <div className="btn-home btn-request">
                                        <span>Оставить заявку</span>
                                    </div>

                                    <div className='flat-under'>
                                        <div className='grow-container'>
                                            <a href="#" className='to-twitter circle-button'>
                                                <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className='grow-container'>
                                            <a href="#" className='to-facebook circle-button'>
                                                <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className='grow-container'>
                                            <a href="#" className='to-instagram circle-button'>
                                                <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className='grow-container'>
                                            <a href="#" className='to-youtube circle-button'>
                                                <i className="fa fa-youtube-play fa-fw" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="main_advantages">
                                <h2>4 Главных преимущества</h2>
                                <p>Благодаря которым нам доверили уже 473 семинаров и коучингов</p>

                                <div className="grid_advantages">
                                    <div className="advantages_box1">
                                        <div className="img_advantages">
                                            <img src={gear} alt="gear" width="100" height="100" />
                                        </div>
                                        <div className="description_advantages">
                                            <h4>Многолетний опыт</h4>
                                            <p>Занимаемся профессиональной организацией с 2006 года</p>
                                        </div>
                                    </div>
                                    <div className="advantages_box2">
                                        <div className="img_advantages">
                                            <img src={hand} alt="hand" width="100" height="100" />
                                        </div>
                                        <div className="description_advantages">
                                            <h4>473 мероприятий</h4>
                                            <p>Именно столько бизнес семинаров
                                                мы провели за 13 лет работы
                                            </p>
                                        </div>
                                    </div>
                                    <div className="advantages_box3">
                                        <div className="img_advantages">
                                            <img src={brain} alt="brain" width="100" height="100" />
                                        </div>
                                        <div className="description_advantages">
                                            <h4>Снимаем все оргвопросы</h4>
                                            <p>Брендирование пространства, кейтеринг, входная зона, фото и
                                видео, размещение гостей</p>
                                        </div>
                                    </div>
                                    <div className="advantages_box4">
                                        <div className="img_advantages">
                                            <img src={computer} alt="computer" width="100" height="100" />
                                        </div>
                                        <div className="description_advantages">
                                            <h4>Сильная IT-сторона</h4>
                                            <p>Каждый шаг фиксируется в CRM,
                                                к которой у вас будет доступ,
                                чтобы все контролировать</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="main_reviews">
                                <h2>Почитайте отзывы о нас</h2>
                                <p>Каково это было для наших клиентов</p>

                                <Carousel>
                                    <Carousel.Item>
                                        <div className="reviewsSlidesGrid">
                                            <div className="reviews-p">
                                                <p className="reviews-p1">Благодаря слаженной и конструктивной работе сотрудников
                                                    EventBizPro
                                                    во время проведения мероприятия был создан прецедент абсолютно нового подхода к
                                                    проведению узконаправленных международных конференций.
                                                    Великолепная атмосфера, великолепные люди. Это лучшая площадка для встречи людей,
                                                    которые с энтузиазмом делают бизнес.....
                                                </p>
                                                <div>
                                                    <p>Алексей Гаврилов</p>
                                                    <p> Nexans Russia</p>
                                                </div>
                                            </div>
                                            <img src={review_min} className="review-img" alt="review-img" />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="reviewsSlidesGrid">
                                            <div className="reviews-p">
                                                <p className="reviews-p1">Благодаря слаженной и конструктивной работе сотрудников
                                                    EventBizPro
                                                    во время проведения мероприятия был создан прецедент абсолютно нового подхода к
                                                    проведению узконаправленных международных конференций.
                                                    Великолепная атмосфера, великолепные люди. Это лучшая площадка для встречи людей,
                                                    которые с энтузиазмом делают бизнес.....
                                                </p>
                                                <div>
                                                    <p>Алексей Гаврилов</p>
                                                    <p> Nexans Russia</p>
                                                </div>
                                            </div>
                                            <img src={review_min} className="review-img" alt="review-img" />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="reviewsSlidesGrid">
                                            <div className="reviews-p">
                                                <p className="reviews-p1">Благодаря слаженной и конструктивной работе сотрудников
                                                    EventBizPro
                                                    во время проведения мероприятия был создан прецедент абсолютно нового подхода к
                                                    проведению узконаправленных международных конференций.
                                                    Великолепная атмосфера, великолепные люди. Это лучшая площадка для встречи людей,
                                                    которые с энтузиазмом делают бизнес.....
                                                </p>
                                                <div>
                                                    <p>Алексей Гаврилов</p>
                                                    <p> Nexans Russia</p>
                                                </div>
                                            </div>
                                            <img src={review_min} className="review-img" alt="review-img"/>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>

                            </div>
                        </div>


                        <div className="grey-background container-home main_questions">
                            <h2>Есть вопрос? Ответим через 36 секунд</h2>
                            <p>Оставьте заявку, и наш специалист проконсультирует вас</p>

                            <Form method="get" action="index.html" className="form-questions">
                                <div className="input-data">
                                    <i className="fa fa-user"></i>
                                    <input type="text" name="name" placeholder='Ваше имя' />
                                </div>

                                <div className="input-data">
                                    <i className="fa fa-phone"></i>
                                    <input type="tel" name="phone" placeholder='Телефон' />
                                </div>

                                <div className="btn-wrapp">
                                    <div className="btn-home btn-request">
                                        <span>Заказать звонок</span>
                                    </div>
                                </div>
                            </Form>
                        </div>

                        <div className="container-home">
                            <div className="main_cases">
                                <h2>Посмотрите выполненные кейсы</h2>
                                <p>Мероприятия, о которых слышали все</p>
                            </div>
                        </div>


                        <div className="main_contacts">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.8595327001694!2d27.490815915407868!3d53.88092514223596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdaa7533f8ed3%3A0x84aa24b0999924d9!2z0YPQu9C40YbQsCDQo9C80LDQvdGB0LrQsNGPIDMsINCc0ZbQvdGB0Lo!5e0!3m2!1sru!2sby!4v1588867356747!5m2!1sru!2sby"
                                className="map" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                            <div className="contacts ">
                                <div className="header_logo logo">
                                    <div className="eventBizPro">EventBiz<span>Pro</span></div>
                                    <div>Организация семинаров</div>
                                </div>

                                <div>
                                    <ul>
                                        <li><i className="fa fa-circle"></i> г. Минск ул. Уманская д.3</li>
                                        <li><i className="fa fa-circle"></i> +375 (29) 500-36-00</li>
                                        <li><i className="fa fa-circle"></i> hello@eventbiz.pro</li>
                                        <li><i className="fa fa-circle"></i>
                                            Пн Пт: 10:00 - 19:00<br />
                                            <div className="contact-time">
                                                Сб: 10:00 - 17:00<br />
                                                Вс: выходной
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className='flat-under icons-contact'>
                                    <div className='grow-container'>
                                        <a href="#" className='to-twitter circle-button'>
                                            <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className='grow-container'>
                                        <a href="#" className='to-facebook circle-button'>
                                            <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className='grow-container'>
                                        <a href="#" className='to-instagram circle-button'>
                                            <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className='grow-container'>
                                        <a href="#" className='to-youtube circle-button'>
                                            <i className="fa fa-youtube-play fa-fw" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="container-home">
                        <div className="footer-box1">
                            <div className="fb1-1">
                                <div className="fb-logo header_logo logo ">
                                    <div className="eventBizPro">EventBiz<span>Pro</span></div>
                                    <div>Организация семинаров</div>
                                </div>
                                <a href="#" className=''>
                                    Политика <br />конфеденциальности
                                </a>
                                <a href="#" className=''>
                                    Соглашениена обработку <br />персональных данных
                                </a>
                            </div>

                            <div className="fb1-2">
                                <div>
                                    <a href="#" className=''>
                                        Преимущества
                                    </a>
                                    <a href="#" className=''>
                                        Отзывы
                                    </a>
                                    <a href="#" className=''>
                                        Консультация
                                    </a>
                                </div>
                                <div>
                                    <a href="#" className=''>
                                        Кейсы
                                    </a>
                                    <a href="#" className=''>
                                        Контакты
                                    </a>
                                </div>
                            </div>

                            <div className="fb1-3">
                                <div className="btn-wrapp">
                                    <div className="btn-home btn-request">
                                        <span>Заказать звонок</span>
                                    </div>
                                </div>
                                <div>
                                    <p>+375 (29) 500-36-00</p>
                                </div>
                            </div>
                        </div>
                    </footer>


                </div>
            </div>
        )
    }
}




