import React from 'react';
import Container from './GetInTouch.styles';
import { Section, ContactCard, Contact } from '../..';
import { useStaticQuery, graphql } from 'gatsby';

const GetInTouch: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      linkedin: file(dir: { regex: "/images/socialIcon/" }, name: { eq: "logo-linkedin" }) {
        id
        publicURL
      }
      instagram: file(dir: { regex: "/images/socialIcon/" }, name: { eq: "logo-instagram" }) {
        id
        publicURL
      }
      youtube: file(dir: { regex: "/images/socialIcon/" }, name: { eq: "logo-youtube" }) {
        id
        publicURL
      }
    }
  `);

  const { linkedin, instagram, youtube } = data;

  const contactList: Contact[] = [
    {
      id: linkedin.id,
      icon: linkedin.publicURL,
      url: 'https://linkedin.com/in/varchasvipandey',
      label: 'LinkedIn.com/in/varchasvipandey',
    },
    {
      id: instagram.id,
      icon: instagram.publicURL,
      url: 'https://instagram.com/varchasvipandey',
      label: 'Instagram.com/varchasvipandey',
    },
    {
      id: youtube.id,
      icon: youtube.publicURL,
      url: 'https://www.youtube.com/channel/UCGEPRddJ65mk0zS8t1mdHCg',
      label: 'YouTube.com/varchas-v',
    },
    {
      id: youtube.id + '2',
      icon: youtube.publicURL,
      url: 'https://youtube.com/varchasvmelodies',
      label: 'YouTube.com/varchasvmelodies',
    },
  ];

  return (
    <Section heading="Get in touch 🤵" flatBody={true}>
      <Container>
        {contactList.map((contact) => (
          <ContactCard key={contact.id} contact={contact} style={{ flex: '0 0 45%' }} />
        ))}
      </Container>
    </Section>
  );
};

export default GetInTouch;
