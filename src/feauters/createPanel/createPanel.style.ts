import styled from 'styled-components';

export const Panel = styled.aside`
    position: absolute;
    right: 3%;
    top: 15%;
    width: 30%;
`;

export const Section = styled.div`
    margin-bottom: 20px;
    background-color: white;
    padding: 20px;
`;

export const PanelContent = styled(Section)``;

export const PanelTagsMain = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PanelSubmit = styled(Section)`
    background-color: white;
    padding: 20px 25%;
`

export const HashtagsContainer = styled.div`
    display: flex;
    & input {
        width: 40%;
    };
    justify-content: space-between;
`
export const HashtagsListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 13px;
    & p {
        padding: 10px;
    } 
`