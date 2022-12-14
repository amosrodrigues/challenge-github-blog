import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  height: 212px;
  max-width: 864px;

  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background: ${(props) => props.theme.profile};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 1.5rem;
  }
`

export const ProfileAvatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    width: 100%;
    padding-top: 1.5rem;
  }
`

export const ProfileBio = styled.div`
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme.title};
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.subtitle};
  }

  svg {
    color: ${(props) => props.theme.label};
  }
`

export const ProfileGitHubLink = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  span {
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  p {
    font-size: 1.25rem;
  }

  svg {
    color: ${(props) => props.theme.label};
  }
`
