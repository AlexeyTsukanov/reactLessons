import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const AppHeaderComponent = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'yellow'};
        :hover{
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

// const StyledAppHeaderBlock = styled(AppHeaderComponent)`
//     background-color: grey;
// `;

const AppHeader = ({liked, allPosts}) => {
    return (
        <AppHeaderComponent colored>
            <h1>Alexey Tsukanov</h1>
            <h2>{`${allPosts} posts, ${liked} likes`}</h2>
        </AppHeaderComponent>
    )
}

export default AppHeader;