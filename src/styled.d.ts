import "styled-components";

// DefaultTheme 인터페이스: 테마 속성을 정의합니다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}