"use client";

import { useState, useEffect, useRef } from "react";
import { Settings, Loader2 } from 'lucide-react';
import { useSession } from "next-auth/react";

const DEFAULT_PHASES = [
  { name: "Inhale", duration: 4 },
  { name: "Hold", duration: 4 },
  { name: "Exhale", duration: 4 },
];

const VISUAL_EFFECTS = [
  { id: 'pulse', name: 'Pulsing Glow' },
  { id: 'particles', name: 'Floating Particles' },
  { id: 'waves', name: 'Ripple Waves' },
  { id: 'gradient', name: 'Color Flow' },
];

const Breathe: React.FC = () => {
  const { data: session, status } = useSession();
  const [phases, setPhases] = useState(DEFAULT_PHASES);
  const [phase, setPhase] = useState(phases[0].name);
  const [count, setCount] = useState(phases[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [selectedEffect, setSelectedEffect] = useState('pulse');
  const [progress, setProgress] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  
  const countdownRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const sessionStartTimeRef = useRef<number>(0);

  const [customDurations, setCustomDurations] = useState(
    phases.map((p) => p.duration.toString())
  );

  // Track session duration when breathing is active
  useEffect(() => {
    let durationTimer: number | null = null;
    
    if (isRunning) {
      if (sessionStartTimeRef.current === 0) {
        sessionStartTimeRef.current = Date.now();
      }
      
      durationTimer = window.setInterval(() => {
        const elapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
        setSessionDuration(elapsed);
      }, 1000);
    }

    return () => {
      if (durationTimer) {
        clearInterval(durationTimer);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - ((phases[currentPhaseIndex].duration - count) * 1000);

      countdownRef.current = window.setInterval(() => {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const currentPhaseDuration = phases[currentPhaseIndex].duration;

        if (elapsedTime >= currentPhaseDuration) {
          // Time to move to next phase
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          setPhase(phases[nextIndex].name);
          setCount(phases[nextIndex].duration);
          startTimeRef.current = Date.now();
        } else {
          // Update countdown and progress
          const remainingTime = Math.ceil(currentPhaseDuration - elapsedTime);
          setCount(remainingTime);
          setProgress((elapsedTime / currentPhaseDuration) * 100);
        }
      }, 50); // Update more frequently for smooth animation
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [isRunning, currentPhaseIndex, phases]);

  // Save session to database when stopped
  const handleStop = async () => {
    setIsRunning(false);
    
    // Only save if session was longer than 5 seconds and user is authenticated
    if (sessionDuration > 5 && status === "authenticated" && session?.user) {
      try {
        setIsSaving(true);
        
        const response = await fetch('/api/user/breathing-sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            duration: sessionDuration,
            phases: phases,
            completed: true
          }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to save session');
        }
        
        console.log('Session saved successfully');
      } catch (error) {
        console.error('Error saving breathing session:', error);
      } finally {
        setIsSaving(false);
      }
    }
    
    // Reset session tracking
    sessionStartTimeRef.current = 0;
    setSessionDuration(0);
  };

  const saveSettings = () => {
    const updatedPhases = phases.map((phase, index) => ({
      ...phase,
      duration: Number(customDurations[index]) || DEFAULT_PHASES[index].duration,
    }));
    setPhases(updatedPhases);
    setPhase(updatedPhases[0].name);
    setCount(updatedPhases[0].duration);
    setShowModal(false);
  };

  const resetModalSettings = () => {
    setCustomDurations(DEFAULT_PHASES.map((p) => p.duration.toString()));
  };

  const handleReset = () => {
    if (isRunning) {
      handleStop();
    }
    
    setPhase(phases[0].name);
    setCount(phases[0].duration);
    setCurrentPhaseIndex(0);
    setProgress(0);
    startTimeRef.current = 0;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className={`relative ${isRunning ? 'scale-100' : 'scale-95'} transition-all duration-500`}>
        {/* Main Circle Container */}
        <div
          className={`relative w-[400px] h-[400px] rounded-full transition-all duration-500 flex items-center justify-center ${isRunning ? 'bg-blue-100/50' : 'bg-white/80'} backdrop-blur-sm shadow-lg
          ${selectedEffect === 'pulse' && isRunning ? 'animate-pulse-gentle' : ''}
          ${selectedEffect === 'gradient' && isRunning ? 'animate-gradient-flow' : ''}
          `}
        >
          {/* Progress Circle */}
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              className="text-gray-200"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="190"
              cx="200"
              cy="200"
            />
            <circle
              className="text-blue-500 transition-[stroke-dashoffset] duration-75 ease-linear"
              strokeWidth="4"
              strokeDasharray={1194}
              strokeDashoffset={1194 - (progress / 100) * 1194}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="190"
              cx="200"
              cy="200"
            />
          </svg>

          {/* Visual Effects */}
          {selectedEffect === 'particles' && isRunning && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="particles-container">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      '--delay': `${i * 0.5}s`,
                      '--position': `${i * 18}deg`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedEffect === 'waves' && isRunning && (
            <div className="absolute inset-0">
              <div className="ripple-effect" />
              <div className="ripple-effect" style={{ animationDelay: '1s' }} />
              <div className="ripple-effect" style={{ animationDelay: '2s' }} />
            </div>
          )}

          {/* Content */}
          <div className="text-center z-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{phase}</h2>
            <p className="text-6xl font-bold text-blue-600">{count}</p>
            {sessionDuration > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                Session: {Math.floor(sessionDuration / 60)}m {sessionDuration % 60}s
              </p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={() => isRunning ? handleStop() : setIsRunning(true)}
            disabled={isSaving}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              isRunning
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            } ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSaving ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Saving...
              </span>
            ) : isRunning ? (
              'Pause'
            ) : (
              'Start'
            )}
          </button>
          <button
            onClick={handleReset}
            disabled={isSaving}
            className={`px-6 py-3 rounded-full font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all ${
              isSaving ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            Reset
          </button>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute -top-4 -right-4 p-2 text-gray-600 hover:text-gray-800 bg-white rounded-full shadow-md transition-transform hover:scale-110"
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full m-4">
            <h2 className="text-2xl font-bold mb-6">Breathing Settings</h2>

            {/* Duration Settings */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold mb-2">Phase Durations</h3>
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <label className="w-24 text-gray-700">{phase.name}:</label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customDurations[index]}
                    onChange={(e) => {
                      const newDurations = [...customDurations];
                      newDurations[index] = e.target.value;
                      setCustomDurations(newDurations);
                    }}
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-gray-500">sec</span>
                </div>
              ))}
            </div>

            {/* Visual Effect Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Visual Effect</h3>
              <div className="grid grid-cols-2 gap-3">
                {VISUAL_EFFECTS.map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => setSelectedEffect(effect.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedEffect === effect.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    {effect.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={resetModalSettings}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveSettings}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breathe;