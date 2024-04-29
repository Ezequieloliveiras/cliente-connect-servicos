
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
const StyledSupportContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`
const StyledSection = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  h2 {
    margin-top: 0;
  }
`
const StyledSupportButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
const StyledTopic = styled.li`
  margin-bottom: 20px;
`
const StyledSubTopicList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`
const StyledSubTopic = styled.li`
  margin-bottom: 10px;
  color: gray;
`
const StyledStrong = styled.strong`
  color: rgb(12, 60, 96);
`
const StyledTitleSupport = styled.h1`
  color: rgb(12, 60, 96);
`
const StyledTitleForm = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: rgb(12, 60, 96);
`
const StyledBoxButton = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display:flex;
  flex-direction:column;
`
const StyledParagraphy = styled.p`
  color: grey;
`
const StyledTitleButton = styled.h4`
  color: grey;
`

export {
    StyledContainer,
    StyledSupportContent,
    StyledSection,
    StyledSupportButton,
    StyledTopic,
    StyledSubTopicList,
    StyledSubTopic,
    StyledStrong,
    StyledTitleSupport,
    StyledTitleForm,
    StyledBoxButton,
    StyledParagraphy,
    StyledTitleButton,
}