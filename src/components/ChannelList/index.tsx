import React from "react";

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Username,
  Column,
  Info,
  RightSide,
  WhiteCircle,
} from "./styles";

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>andrevrcoelho</Username>
          <Info>7 videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle></WhiteCircle>
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
