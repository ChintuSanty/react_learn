import style from 'styled-components';
import { Link } from 'react-router-dom';


function Home(){
    const Section = style.section`
        display: flex;
        background: linear-gradient(to bottom right, #03045e, #023e8a, #0077b6, #0096c7, #00b4d8, #48cae4, #90e0ef,#ade8f4,#caf0f8);
        height:100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    const Header = style.h1`
        font-size: 32px;
        color:#fff;

    `;

    const Div = style.div`
        display:flex;
        flex-direction:column;
    `;

    const InnerDiv = style.button`
        margin: 10px;
        padding:15px;
        font-size:21px;
        background: orange;
        border-radius:25px;
        border:none;
        color: #000;
    `;

    const StyledLink = style(Link)`
        text-decoration: none;
        color:#000;

        &:hover{
            color: #fff;
        }
    `;


    return(
        <Section>
            <Header>Learn React With Challenges: </Header>

            <Div>
                <InnerDiv><StyledLink to='/todo'>Challenge 1</StyledLink></InnerDiv>
                <InnerDiv>Intermediate</InnerDiv>
                <InnerDiv>Graduation</InnerDiv>
            </Div>
        </Section>
    )
}

export default Home;