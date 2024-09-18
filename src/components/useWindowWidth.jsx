'use client';
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Устанавливаем начальную ширину
        handleResize();

        // Добавляем слушатель на событие 'resize'
        window.addEventListener('resize', handleResize);

        // Убираем слушатель при размонтировании компонента
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

export default useWindowWidth;
