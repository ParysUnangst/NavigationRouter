// app/_layout.js
import { Stack } from 'expo-router';
import { Slot } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Slot />
    </Stack>
  );
};

export default Layout;

