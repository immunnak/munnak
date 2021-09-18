import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import {device} from '../../../theme'

export const AuthorSection = styled.section `
    background: ${themeGet("colors.themeColor")};
    padding-top: 60px;
    padding-bottom: 50px;
    ${device.small}{
        padding-top: 76px;
        padding-bottom: 70px; 
    }
    ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px; 
    }
    ${device.large}{
        padding-top: 140px;
        padding-bottom: 140px; 
    }
    ${device.xlarge}{
        padding-top: 170px;
        padding-bottom: 170px; 
    }
`;

export const AuthorImg = styled.figure `
    margin-bottom: 10px;
    ${device.small}{
        margin-bottom: 0;
    }
    img{
        border-radius: 50%;
        border: 15px solid #fff;
        box-shadow: -14.142px -14.142px 40px 0px rgb( 255, 255, 255 );
    }
    div{
        border-radius: 50%;
        background-color: rgb( 255, 255, 255 );
    }
`;

export const AuthorInfo = styled.div `
    ${device.small}{
        padding-left: 35px;
    }
`;
