import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PostInfo = styled.section`
  width: 100%;
  max-width: 864px;
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
  max-width: 864px;
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

export const PostListContainer = styled.main``
