import styled from 'styled-components'

import backgroundHeader from '../../assets/background-header.svg'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  padding: 4rem 0 8.375rem;
`
