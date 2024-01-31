import React from 'react';
import { Button } from "@chakra-ui/react";
import { FaPause } from 'react-icons/fa';

const PauseButton = ({ onPause, variant }) => {
  return (
    <Button leftIcon={<FaPause />} colorScheme="orange" size="md" variant={variant} onClick={onPause}>
      Pause
    </Button>
  );
};

export default PauseButton;
