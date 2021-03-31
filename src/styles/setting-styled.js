import styled from "styled-components";
import { Row, Button } from "antd";
// import { colors } from "../../../common/theme/colors";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
`;

export const HeaderTitle = styled(Row)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #e2f9f8;
  box-shadow: 0px 0px 10px rgba(55, 180, 201, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTextTitle = styled.span`
  font-style: normal;
  color: #3090a1;
  font-weight: 500;
  font-size: 24px;
  margin-left: 10px;
`;

export const AddButton = styled(Button)`
  display: flex;
  width: auto;
  min-width: 40px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: ${(props) => (props.isMobile ? "10px" : "20px")} !important;
  padding-right: ${(props) => (props.isMobile ? "10px" : "20px")} !important;
  background-color: #3090a1;
`;

export const AddButtonText = styled.div`
  display: ${(props) => (props.visible ? "" : "none")};
  font-size: 1rem;
  margin-left: 5px;
`;

export const HeaderTitleWrapper = styled(Row)`
  display: flex;
  align-items: center;
`;
