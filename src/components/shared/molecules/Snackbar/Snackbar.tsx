import React from 'react';
import Container from './Snackbar.style';
import * as CSS from 'csstype';

interface SnackbarProps {
  label: string;
  style?: CSS.Properties;
}

const Snackbar: React.FC<SnackbarProps> = ({ label, style = {} }) => {
  return <Container style={style}>{label}</Container>;
};

export default Snackbar;
