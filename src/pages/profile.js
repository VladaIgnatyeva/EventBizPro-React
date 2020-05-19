import React, { Component } from 'react';
import CardNews from '../components/cardNews';
import { cards } from './cards.store.stub';
import Wrapper from '../utils/wrapperAxios';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news : []
        }
    }

    showNews() {
        const wrapp = new Wrapper();
        wrapp.get(`news`)
            .then(res => {
                this.setState({
                    news: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.showNews();
    }

    render() {
        return (
            <div className="news">
                <h1>Профиль</h1>
                <div className="container-news">
                    <div className="row">
                        {
                            this.state.news.map(news => {
                                return <div className="col-12 .col-sm-8 col-md-6 col-lg-6 col-xl-4" key={news._id}><CardNews item={news}  /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}