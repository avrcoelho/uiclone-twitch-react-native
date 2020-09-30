import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRom,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>andrevrcoelho</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            React native com typescript
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Tecnology</StreamCategory>
        </StreamRow>

        <TagRom>
          <TagView>
            <TagText>React Native</TagText>
          </TagView>
          <TagView>
            <TagText>Typescript</TagText>
          </TagView>
        </TagRom>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
