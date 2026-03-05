import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 导入所有命令模块以注册命令
import './commands/help'
import './commands/ls'
import './commands/cd'
import './commands/cat'
import './commands/pwd'
import './commands/clear'
import './commands/search'
import './commands/history'
import './commands/imgview'
import './commands/theme'
import './commands/neofetch'
import './commands/matrix'
import './commands/clock'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
