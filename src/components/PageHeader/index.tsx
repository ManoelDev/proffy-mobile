import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import LogoImg from '../../assets/images/logo.png';

import { Container, TopBar, Button, Image, Logo, Title } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('Landing');
  }
  return (
    <Container>
      <TopBar>
        <Button onPress={handleGoBack}>
          <Image source={backIcon} />
        </Button>
        <Logo source={LogoImg} />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
