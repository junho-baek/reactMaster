import { DefaultTheme } from "styled-components";

// 라이트 모드 테마 정의
export const lightTheme: DefaultTheme = {
  bgColor: "skyblue",
  textColor: "#000000",
  accentColor: "#4cd137",
};

// 다크 모드 테마 정의
export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#9c88ff",
};

// 기본 테마는 다크 모드로 설정
export const theme: DefaultTheme = lightTheme;