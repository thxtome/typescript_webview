import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '@src/app/App'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import GlobalStyle from '@common/styles/globalStyle'
import theme from '@common/styles/theme'
import store from '@app/store'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
