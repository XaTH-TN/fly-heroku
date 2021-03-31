import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import useDeviceDetect from "../../../utils/useDeviceDetect";
import {
  HeaderTitle,
  HeaderIconWrapper,
  HeaderTextTitle,
  AddButton,
  AddButtonText,
  HeaderTitleWrapper,
} from "../../theme/settings-styled";

const Component = (props) => {
  const { icon, size, text, onClick, addText, isLoading, disableBtn } = props;
//   const { isMobile } = useDeviceDetect();

  return (
    <HeaderTitle>
      <HeaderTitleWrapper>
        <HeaderIconWrapper>
          <img src={icon} alt="Icon" width={size ? size : "30px"} />
        </HeaderIconWrapper>
        <HeaderTextTitle>{text}</HeaderTextTitle>
      </HeaderTitleWrapper>
      <AddButton
        loading={isLoading ? isLoading : false}
        // isMobile={isMobile}
        type="primary"
        onClick={onClick}
        style={{ display: disableBtn ? "none" : "" }}
      >
        <PlusOutlined style={{ fontSize: 16 }} />
        <AddButtonText>{addText}</AddButtonText>
      </AddButton>
    </HeaderTitle>
  );
};

export default Component;
