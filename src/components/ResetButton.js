import React from 'react';
import { Button } from "@chakra-ui/react";
import { FaRedo } from 'react-icons/fa';

const ResetButton = ({ onReset, variant }) => {
  return (
    <Button leftIcon={<FaRedo />} colorScheme="red" size="md" variant={variant} onClick={onReset}>
      Reset
    </Button>
  );
};

export default ResetButton;
