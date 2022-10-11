import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  min-height: 189px;
  background-color: white;
  padding: 20px;
  border: solid 1px rgba(128, 128, 128, 0.058);
  border-radius: 5px;
  margin-bottom: 8px;
`
export const BlogMargin = styled.div`
  margin-bottom: 13px;
`

export const BlogHeader = styled(BlogMargin)`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  & p:last-child {
    margin-left: 10px;
    color: rgba(128, 128, 128, 0.763);
    font-size: 0.7em;
  }
`

export const BlogTitle = styled(BlogMargin)`
  margin-bottom: 13px;
  & p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
  }
`

export const BlogHastags = styled(BlogMargin)`
  display: flex;
  & p {
    font-size: 0.8em;
    padding: 4px;
  }
`

export const BlogLikes = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BlogLikesLeft = styled.div`
  display: flex;
  & button:last-child {
    margin-left: 20px;
  }
`