import Container from './Intro.styles';
import { Title, Text } from '../..';
import React from 'react';

const Intro: React.FC = () => {
  return (
    <Container>
      <div className="intro-text">
        <p className="intro-text__welcome">Hi there 👋, I am</p>
        <Title>Varchasvi Pandey</Title>
        <h2 className="intro-text__profession">Front-end designer & developer</h2>
      </div>

      <div className="intro-card">
        <div className="intro-card__image">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG03pWoEs66HA/profile-displayphoto-shrink_100_100/0/1597684760659?e=1632960000&v=beta&t=niOvTEwJFTcwuf8v-buzrrMMp-8mD_LRfhmW7nUMVkE"
            alt=""
          />
        </div>
        <div className="intro-card__content">
          <Text>
            From writing UI architectures on a piece of paper to building full-fledged
            web-applications is what defines me. I work with leading web technologies and designing
            tools all day, every day to make thoughtful applications. 💻
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
