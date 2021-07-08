import styled from 'styled-components';
import { device } from '@/pages/main/styles';

export const DocumentBoxStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  height: fit-content;
  max-height: 64px;
`;

export const DocumentCardBoxStyle = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  height: fit-content;
  max-height: 74px;
  margin-bottom: 16px;

  border: 1px solid #d5d5d5;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: ${(props) => props.theme.colors.white};

  &:hover,
  &:focus,
  &:checked {
    border: 1px solid ${(props) => props.theme.colors.orange};
  }
`;

export const DocumentCardImgStyle = styled.div`
  max-width: 64px;
  padding: 13px 7px 13px 13px;

  width: fit-content;

  @media ${device.tablet} {
    padding: 23px 7px 23px 23px;
  }
`;

export const DocumentImgStyle = styled.div`
  max-width: 64px;
  width: fit-content;
`;

export const DocumentTextStyle = styled.div`
  margin-left: 18px;
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.small};

  &.light {
    color: ${(props) => props.theme.colors.greyLight};
  }
`;

export const DocumentLabelStyle = styled.div`
  color: ${(props) => props.theme.colors.green};
  font-size: 0.75rem;
  margin: 3px 0;
`;

export const DocumentCardTextStyle = styled.div`
  text-align: left;
`;

export const DocumentTextIconStyle = styled.div`
  display: flex;
  margin-left: 18px;
  align-items: center;

  img {
    margin-right: 4px;
    width: 16px;
    height: 16px;
  }
`;
