import React from "react";
import { Segment, List, Item, Label } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
  const isHosted = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}
        {attendees && attendees.length === 1
          ? " Person Going"
          : " People Going"}
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item style={{ position: "relative" }} key={attendee.id}>
                {isHosted && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a>{attendee.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailedSidebar;
