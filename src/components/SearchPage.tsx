import {
  Autocomplete,
  Card,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";

import { contactList, typeList } from "../constants";
import React from "react";
import { Call, Message } from "@mui/icons-material";

function SearchUI() {
  const [value, setValue] = React.useState<String | null>("");
  const [selectedType, setSelectedType] = React.useState("");
  return (
    <FormControl id="controllable-states-demo">
      <Autocomplete
        placeholder="Search Contacts"
        options={typeList}
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        inputValue={selectedType}
        onInputChange={(_event, newInputValue) => {
          setSelectedType(newInputValue);
        }}
        sx={{}}
      />
      <List sx={{ borderRadius: "md" }}>
        {contactList.map((type) => {
          if (type.type === selectedType) {
            return (
              <ListItem key={type.id}>
                <ListItemContent>
                  <Card>
                    <Stack
                      direction="row"
                      spacing={4}
                      useFlexGap
                      sx={{ flexWrap: "wrap" }}
                    >
                      <Stack sx={{ minWidth: 300 }}>
                        <Typography>{type.name}</Typography>
                        <Typography>{type.phoneNumber}</Typography>
                      </Stack>

                      <IconButton
                        aria-label="Open in new tab"
                        component="a"
                        href={"tel:"+type.phoneNumber}
                      >
                        <Call />
                      </IconButton>
                      <IconButton
                        aria-label="Open in new tab"
                        component="a"
                        href={"https://wa.me/"+type.phoneNumber}
                      >
                        <Message />
                      </IconButton>
                    </Stack>
                  </Card>
                </ListItemContent>
              </ListItem>
            );
          } else {
            <ListItem>
              <ListItemButton>{"No Contacts for now"}</ListItemButton>
            </ListItem>;
          }
        })}
      </List>
    </FormControl>
  );
}

export default SearchUI;
