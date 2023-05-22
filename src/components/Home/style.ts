import styled from "styled-components";
import ImageProfile from "../../assets/profile.jpg"

export const HomeStyle = styled.section`
    .container{
        row-gap: 7rem;
    }

    .home__content{
        grid-template-columns: 116px repeat(2, 1fr);
        padding-top: 5.5rem;
        column-gap: 2rem;
        align-items: center;

        .home__img{
            background: url(${ImageProfile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            width: 300px;
            height: 300px;
            box-shadow: inset 0 0 0 9px rgb(225 255 255 / 30%);
            order: 1;
            justify-self: center;

            animation: profile__animate 8s ease-in-out infinite 1s;
        }

        @keyframes profile__animate {
            0%{
                border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            }

            50%{
                border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
            }

            100%{
                border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .home__content{
            grid-template-columns: 100px repeat(2, 1fr);
            column-gap: 1.25rem;

            h1 > svg{
                width: 26px;
                height: 26px;
            }

            h3{
                padding-left: 3.73rem;
                margin-bottom: var(--mb-1);
            }

            h3::before{
                width: 42px;
                top: 0.8rem;
            }

            .home__img{
                width: 250px;
                height: 250px;
                box-shadow: inset 0 0 0 8px rgb(225 255 255 / 30%);
            }
        }

    }

    /* For medium devices */
    @media screen and (max-width: 768px) {
        .home__content{
            grid-template-columns: 0.5fr 3fr;
            padding-top: 3.5rem;

            .home__img{
                order: initial;
                justify-self: initial;

                box-shadow: inset 0 0 0 6px rgb(225 255 255 / 30%);
                width: 200px;
                height: 200px;
            }
        }
    }


    /* For small devices */
    @media screen and (max-width: 350px) {
        .home__img{
            width: 180px;
            height: 180px;
        }

        h1> svg{
            width: 22px;
            height: 22px;
        }
    }

`

export const HomeSocial = styled.div`

    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  
    i{
        font-size: 1.25rem;
        color: var(--title-color);

        &:hover{
            color: var(--title-color-dark);
        }
    }

`

export const HomeData = styled.div`
    h1{
        font-size: var(--big-font-size);
        margin-bottom: var(--mb-0-25);

        svg{
            width: 38px;
            height: 38px;
            margin-left: 0.4rem;
        }
    }

    h3{
        position: relative;

        font-size: var(--h3-font-size);
        font-weight: var(--font-normal);

        padding-left: 5.4rem;
        margin-bottom: var(--mb-1);

        &::before{
            content: '';
            position: absolute;
            width: 70px;
            height: 1px;
            background-color: var(--text-color);
            left: 0;
            top: 1rem;
        }
    }

    p{
        max-width: 400px;
        margin-bottom: var(--mb-3);
    }

    @media screen and (max-width: 992px) {
        

        h1 > svg{
            width: 26px;
            height: 26px;
        }

        h3{
            padding-left: 3.73rem;
            margin-bottom: var(--mb-1);
        }

        h3::before{
            width: 42px;
            top: 0.8rem;
        }

        p{
            max-width: initial;
            margin-bottom: var(--mb-2-5);
        }
        
    }

    @media screen and (max-width: 768px){
        grid-column: 1/3;
    }
`

export const Scroll = styled.div`
    margin-left: 9.25rem;

    a{
        display: flex;
        align-items: center;

        span{
            color: var(--title-color);
            font-size: var(--font-medium);
            margin-right: var(--mb-0-25);
            margin-left: 2px;
        }
    }

    .wheel{
        animation: scroll 2s ease infinite;
    }

    @keyframes scroll {
        0%{
            transform: translateY(0);
        }

        30%{
            transform: translateY(3.75rem);
        }        
    }

    @media screen and (max-width: 992px) {
        margin-left: 7.5rem;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`