import styled from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 864px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4.5rem;
`

export const PostInfo = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 4.5rem;

  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
  }
`

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  margin-top: 0.75rem;

  input {
    flex: 1;
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.text};
    padding: 12px 16px;
    height: 50px;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`

export const PostListContainer = styled.main`
  width: 100%;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

const PostCardBase = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.25rem;

  width: 416px;
  height: 260px;
  padding: 2rem;

  background: ${(props) => props.theme.post};
  border-radius: 10px;
  border: 2px solid transparent;
`

export const PostCard = styled(PostCardBase)`
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.label};
    transition: border-color 0.5s;
  }
`

export const PostCardNotFound = styled(PostCardBase)`
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

export const PostCardHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 1rem;

  strong {
    flex: 1;
    color: ${(props) => props.theme.title};
    font-weight: 700;
    font-size: 1.25rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    color: ${(props) => props.theme.span};
    font-size: 0.875rem;
    ::first-letter {
      text-transform: capitalize;
    }
  }
`

export const PostCardDescription = styled.p`
  display: -webkit-box;
  /* max-width: 200px; */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${(props) => props.theme.text};
`
