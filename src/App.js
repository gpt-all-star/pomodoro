import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import StartButton from './components/StartButton';
import PauseButton from './components/PauseButton';
import ResetButton from './components/ResetButton';
import { Box, VStack, Heading, useToast, useBreakpointValue } from "@chakra-ui/react";

const App = () => {
  const [start, setStart] = useState(false);
  const [period, setPeriod] = useState('work');
  const [timerKey, setTimerKey] = useState(0);
  const toast = useToast();

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setTimerKey(prevKey => prevKey + 1);
  };

  const handleTimerEnd = () => {
    setStart(false);
    setPeriod(prevPeriod => prevPeriod === 'work' ? 'break' : 'work');
    setTimerKey(prevKey => prevKey + 1);
    toast({
      title: "Time's up!",
      description: "Start your break or get back to work!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (period === 'break') {
      setStart(true);
    }
  }, [period]);

  const initialMinutes = period === 'work' ? 25 : 5;
  const variant = useBreakpointValue({ base: "outline", md: "solid" });

  return (
    <Box p="5" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" backgroundColor="gray.100">
      <VStack spacing="5">
        <Heading>Pomodoro Timer</Heading>
        <Timer key={timerKey} initialMinutes={initialMinutes} start={start} onEnd={handleTimerEnd} />
        <StartButton variant={variant} onStart={handleStart} />
        <PauseButton variant={variant} onPause={handlePause} />
        <ResetButton variant={variant} onReset={handleReset} />
      </VStack>
    </Box>
  );
}

export default App;
