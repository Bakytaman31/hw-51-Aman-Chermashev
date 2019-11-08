import React, { Component } from 'react';
import Film from './Components/Film/Film';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Row, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <div>
        <Container>
            <Header/>
            <Row>
          <Film name="Бонд 25" date="3 апреля 2020 г." img="https://www.kino-teatr.ru/movie/posters/big/1/132581.jpg"/>
          <Film name="Терминатор: Тёмные судьбы" date="23 октября 2019 г." img="https://st.kp.yandex.net/images/film_iphone/iphone360_1025082.jpg"/>
          <Film name="Джокер" date="31 августа 2019 г." img="https://st.kp.yandex.net/images/film_iphone/iphone360_1048334.jpg"/>
          <Sidebar/>
            </Row>
        </Container>
        <Footer/>
        </div>
    );
  }
}

export default App;
