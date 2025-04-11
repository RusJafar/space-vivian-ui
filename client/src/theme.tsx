export const theme = {
  colors: {
    primary: '#6C63FF',       // Фиолетовый (акцентные кнопки)
    secondary: '#4D96FF',     // Голубой (второстепенные элементы)
    background: '#F9F7FE',    // Светло-фиолетовый фон
    text: '#333333',          // Основной текст
    textLight: '#777777',     // Второстепенный текст
    white: '#FFFFFF',
    black: '#000000',
    success: '#4CAF50',       // Для позитивных действий
    error: '#FF5252',         // Для ошибок
  },
  fonts: {
    primary: '"Inter", sans-serif',  // Современный шрифт
    secondary: '"Comic Neue", cursive', // Игровой, но не слишком детский
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  shadows: {
    soft: '0 4px 12px rgba(0, 0, 0, 0.1)',
    hover: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;