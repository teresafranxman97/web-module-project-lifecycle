import banner from '../src/images/banner.jpg'
import styled from 'styled-components';

 const Container = styled.div  `
    width: 100%;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-image: url(${banner});
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;

    h1{
        font-size: 50px;
        color: #95bd79;
    }

    .content {
        border: 2px solid lightgrey;;
        padding: 5%;
        font-size: 30px;   
        color: indigo;
    }

`

export { Container }