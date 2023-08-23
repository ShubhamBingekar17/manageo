import React from "react";
import { View } from "react-native";
import { Heading, Fab, Icon } from "native-base";
import AddTaskModal from "../layouts/AddTaskModal";

const Home = () => {

    const [modalVisible, setModalVisible] = React.useState(true);

  return (
    <View>
      <Heading></Heading>
      <Fab
        onPress={() => setModalVisible(true)}
        placement="bottom-right"
        colorScheme="blue"
        size="lg"
        icon={<Icon name="share" as="Entypo" />}
      />
      <AddTaskModal modalVisible={modalVisible}  setModalVisible={setModalVisible} />
    </View>
  );
};

export default Home;
