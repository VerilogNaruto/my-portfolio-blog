import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import CodeBlock from './src/utils/CodeBlock'
import { ThemeProvider } from './src/contexts/ThemeContext'
require('prismjs/themes/prism-okaidia.css')

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)
