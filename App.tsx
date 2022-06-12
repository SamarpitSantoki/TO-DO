import React, { useState } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Divider,
  Flex,
  VStack,
  HStack,
  View,
  Input,
  Icon,
  IconButton,
  ScrollView,
  Badge,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["1. Buy milk"]);
  function addTask() {
    setTaskList([...taskList, task]);
    setTask("");
  }
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" paddingTop={50} justifyContent="space-between">
        <HStack paddingX={5}>
          <Text fontSize="3xl">Today's TO-DO</Text>
        </HStack>
        <ScrollView
          _contentContainerStyle={{
            mb: "4",
            minW: "72",
          }}
        >
          {taskList.map((task, index) => (
            <VStack key={index}>
              <Flex
                paddingY={2}
                paddingX={3}
                borderWidth={1}
                marginX={4}
                marginY={1}
                borderRadius="full"
                borderColor="#707070"
                justifyContent={"space-between"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <View>
                  <Text>{task}</Text>
                  {/* <Badge
                    position={"absolute"}
                    left={50}
                    bottom={0}
                    // width="container"
                    // marginBottom={2}
                    // marginLeft={10}
                    // variant="outline"
                    // paddingX={0.5}
                    // colorScheme="amber.400"
                  >
                    More Info about the task
                  </Badge> */}
                </View>

                <IconButton
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      color="gray.500"
                      name="menu"
                    />
                  }
                />
              </Flex>
            </VStack>
          ))}
        </ScrollView>
        <HStack
          safeAreaBottom
          bottom={0}
          marginY={3}
          background={"transparent"}
          backgroundColor={"#fff"}
          justifyContent="space-between"
          alignItems={"center"}
          paddingX={3}
          space={2}
        >
          <Input
            variant="rounded"
            placeholder="Add new task.."
            value={task}
            onChangeText={(txt) => setTask(txt)}
            flex={1}
            size={20}
            onSubmitEditing={addTask}
          />
          <IconButton
            size={41}
            rounded="full"
            variant="outline"
            name="Home"
            borderColor={"gray.400"}
            onPress={addTask}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                color="gray.400"
                size={30}
                name="plus"
              />
            }
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
