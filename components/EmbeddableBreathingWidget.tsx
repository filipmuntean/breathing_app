'use client';

import { useState, useEffect } from 'react';

interface EmbeddableBreathingWidgetProps {
  width?: string;
  height?: string;
  showBranding?: boolean;
}

export default function EmbeddableBreathingWidget({ 
  width = "300px", 
  height = "400px", 
  showBranding = true 
}: EmbeddableBreathingWidgetProps) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setCount(prev => {
          if (phase === 'inhale' && prev >= 4) {
            setPhase('hold');
            return 0;
          } else if (phase === 'hold' && prev >= 7) {
            setPhase('exhale');
            return 0;
          } else if (phase === 'exhale' && prev >= 8) {
            setPhase('inhale');
            setCycleCount(c => c + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const handleStart = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setPhase('inhale');
      setCount(0);
      setCycleCount(0);
    }
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'from-blue-400 to-blue-600';
      case 'hold': return 'from-yellow-400 to-yellow-600';
      case 'exhale': return 'from-green-400 to-green-600';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border"
      style={{ width, height, maxWidth: '100%' }}
    >
      {/* Breathing Circle */}
      <div className="relative mb-6">
        <div 
          className={`w-24 h-24 rounded-full bg-gradient-to-br ${getPhaseColor()} transition-all duration-1000 ${
            isActive && phase === 'inhale' ? 'scale-125' : 
            isActive && phase === 'exhale' ? 'scale-75' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{isActive ? count + 1 : '●'}</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {isActive ? getPhaseInstruction() : 'Ready to Breathe?'}
        </h3>
        <p className="text-sm text-gray-600">
          {isActive ? `Cycles completed: ${cycleCount}` : '4-7-8 Breathing Technique'}
        </p>
      </div>

      {/* Control Button */}
      <button
        onClick={handleStart}
        className={`px-6 py-2 rounded-full font-medium transition-colors ${
          isActive 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isActive ? 'Stop' : 'Start Breathing'}
      </button>

      {/* Branding */}
      {showBranding && (
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Powered by{' '}
            <a 
              href="https://justbreathe.baby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Just Breathe
            </a>
          </p>
        </div>
      )}
    </div>
  );
}