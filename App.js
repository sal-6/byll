import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ThemeProvider} from "styled-components/native"

import {theme} from "./src/infrastructure/theme";

import { Navigation } from './src/infrastructure/navigation';

import {
  useFonts as useMontserrat,
  Montserrat_700Bold_Italic
} from "@expo-google-fonts/montserrat"

import {
  useFonts as useRubik,
  Rubik_500Medium_Italic
} from "@expo-google-fonts/rubik"

export default function App() {
  let [montserratLoaded] = useMontserrat({
    Montserrat_700Bold_Italic,
  });

  let [rubikLoaded] = useRubik({
    Rubik_500Medium_Italic,
  });

  if (!montserratLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
          <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
