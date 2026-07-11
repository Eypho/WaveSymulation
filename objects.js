// Файл: objects.js
const buildableObjects = [
  { id: 0, name: '🌊 Волна (Палец)', type: 'wave', color: null },
  { id: 2, name: '🧽 Очиститель', type: 'eraser', color: null },
  { id: -1, name: '🦅 Манипулятор (Тянуть волны)', type: 'manipulator', color: null },
  { id: 1, name: '🧱 Статическая стена', type: 'static', color: [100, 100, 110] },
  { id: 7, name: '🌀 Телепорт-стена (Вход/Выход)', type: 'teleport', color: [55, 62, 75] },
  
  // Физические аномалии
  { id: 11, name: '🕳️ Чёрная дыра (Без эха)', type: 'blackhole', color: [12, 12, 20] },
  { id: 12, name: '🌀 Волноворот (Вихревой щит)', type: 'vortex', color: [0, 160, 120] },
  { id: 9, name: '❄️ Ледяная губка', type: 'static', color: [80, 160, 240] },
  { id: 10, name: '🔥 Кристалл резонанса', type: 'static', color: [240, 60, 60] },

  // Осцилляторы
  { id: 3, name: '🔮 Синус-антенна', type: 'oscillator', lifespan: 25000, formula: 'sine', frequency: 0.05, strength: 3.0, color: [160, 40, 255] },
  { id: 5, name: '⚡ Пульсар-детонатор', type: 'oscillator', lifespan: 15000, formula: 'pulse', period: 400, strength: 8.0, color: [255, 140, 0] }
];
