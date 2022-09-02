import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PostHeader = styled.header`
  width: 100%;
  height: 168px;

  padding: 2rem;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  background: ${(props) => props.theme.profile};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const PostNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const BaseLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  position: absolute;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  span {
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`

export const BackLink = styled(BaseLink)`
  left: 0;
  top: 0;
`

export const GitHubLink = styled(BaseLink)`
  right: 0;
  top: 0;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${(props) => props.theme.title};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  > div {
    display: flex;
    gap: 1.5rem;
  }
`

export const PostInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.span};
  }

  svg {
    color: ${(props) => props.theme.label};
  }
`

export const DescriptionMarkdown = styled.section`
  padding: 2.5rem 2rem;
`
