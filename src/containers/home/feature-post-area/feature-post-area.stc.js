import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {device} from '../../../theme'

export const FeaturePostWrapper = styled.div `
    padding-top: 60px;
    padding-bottom: 47px;
    ${device.small}{
        padding-bottom: 67px;
        padding-top: 80px;
    }
    ${device.medium}{
        padding-top: 100px;
        padding-bottom: 87px;
    }
`;

export const FeaturePostSlideWrap = styled.div `
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
    padding-bottom: 54px;
    ${device.small}{
        padding-bottom: 75px;
    }
    ${device.medium}{
        padding-bottom: 96px;
    }
`;