import React, { useEffect, useState } from "react";

import {
  Modal,
  ScrollView,
  Button,
  Input,
  Text,
  HStack,
  Stack,
  View,
  TextArea,
  VStack,
  Checkbox,
} from "native-base";
import CloseIcon from "../assets/CloseIcon";
import { TouchableOpacity } from "react-native";

const FilterModal = ({
  filterModal,
  setFilterModal,
  filterPending,
  setFilterPending,
  filterCompleted,
  setFilterCompleted,
}) => {
  return (
    <Modal
      isOpen={filterModal}
      onClose={() => setFilterModal(false)}
      size={"md"}
    >
      <Modal.Content maxH="400" rounded={20}>
        <Modal.Body>
          <Stack space={4}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={18}>Add Filters</Text>
              <TouchableOpacity onPress={() => setFilterModal(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </HStack>
            <Checkbox
              isChecked={filterPending}
              onChange={() => setFilterPending(!filterPending)}
            >
              Pending Task
            </Checkbox>
            <Checkbox
              isChecked={filterCompleted}
              onChange={() => setFilterCompleted(!filterCompleted)}
            >
              Completed Task
            </Checkbox>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default FilterModal;
