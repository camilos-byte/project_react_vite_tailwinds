import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app'
import './index.css'
import Layout from './Componentes/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
