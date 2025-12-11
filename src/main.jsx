import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Componente para capturar errores y evitar la pantalla blanca
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Error crítico:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', color: '#333' }}>
          <h1 style={{ color: '#e11d48' }}>Algo salió mal 😢</h1>
          <div style={{ background: '#fee2e2', padding: '20px', borderRadius: '12px', border: '1px solid #fecaca' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Error: {this.state.error && this.state.error.toString()}</h3>
            <p>
              <strong>Posible solución:</strong> Revisa si la carpeta <code>src/data/</code> existe y contiene los archivos 
              <em> ui.js, meds.js, tools.js, modules.js</em>.
            </p>
            <p>
              Si los archivos están en la raíz (<code>src/</code>), edita <code>src/data.js</code> para quitar el prefijo <code>./data/</code>.
            </p>
          </div>
          <details style={{ marginTop: '20px', color: '#666' }}>
            <summary>Ver detalles técnicos</summary>
            <pre style={{ fontSize: '12px', marginTop: '10px' }}>
               {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)