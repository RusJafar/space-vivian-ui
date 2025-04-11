import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип для ширины экрана
interface ScreenSize {
    width: number;
    height: number;
}

// Создаём контекст
const ScreenSizeContext = createContext<ScreenSize | undefined>(undefined);

// Провайдер контекста
export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Подписываемся на событие изменения размера окна
        window.addEventListener('resize', handleResize);

        // Убираем подписку при размонтировании
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={screenSize}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

// Хук для использования контекста
export const useScreenSize = (): ScreenSize => {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error('useScreenSize must be used within a ScreenSizeProvider');
    }
    return context;
};