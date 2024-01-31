import React from 'react';
import { Button } from "@chakra-ui/react";
import { FaPlay } from 'react-icons/fa';

const StartButton = ({ onStart, variant }) => {
  return (
    <Button leftIcon={<FaPlay />} colorScheme="teal" size="md" variant={variant} onClick={onStart}>
      Start
    </Button>
  );
};

export default StartButton;
