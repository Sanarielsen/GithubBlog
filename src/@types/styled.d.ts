import 'styled-components'

import type { defaultTheme } from '@globalStyles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}