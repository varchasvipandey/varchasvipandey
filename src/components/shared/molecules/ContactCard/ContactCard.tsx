import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Container from './ContactCard.style';
import { LinkText } from '../..';
import * as CSS from 'csstype';

export interface Contact {
  id: string;
  icon: string;
  url: string;
  label: string;
}

interface ContactCardProps {
  contact: Contact;
  style?: CSS.Properties;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact: { icon, url, label }, style = {} }) => {
  return (
    <Container style={style}>
      <OutboundLink href={url} target="_blank" className="link">
        <div className="link__icon">
          <img src={icon} alt={label} />
        </div>
        <div className="link__label">
          <LinkText>{label}</LinkText>
        </div>
      </OutboundLink>
    </Container>
  );
};

export default ContactCard;
