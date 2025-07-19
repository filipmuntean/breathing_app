"use client";

import React, { useState, useEffect, useRef } from "react";
import { Settings, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";

const DEFAULT_PHASES = [
  { name: "Inhale", duration: 4 },
  { name: "Hold", duration: 7 },
  { name: "Exhale", duration: 8 },
];

const VISUAL_EFFECTS = [
  { id: "pulse", name: "Pulsing Glow" },
  { id: "particles", name: "Floating Particles" },
  { id: "waves", name: "Ripple Waves" },
  { id: "gradient", name: "Color Flow" },
];

const Breathe: React.FC = () => {
  const { data: session, status } = useSession();
  const [phases, setPhases] = useState(DEFAULT_PHASES);
  const [phase, setPhase] = useState(phases[0].name);
  const [count, setCount] = useState(phases[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [selectedEffect, setSelectedEffect] = useState("pulse");
  const [progress, setProgress] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const countdownRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const sessionStartTimeRef = useRef<number>(0);

  const [customDurations, setCustomDurations] = useState(
    phases.map((p) => p.duration.toString())
  );

  useEffect(() => {
    let durationTimer: number | null = null;

    if (isRunning) {
      if (sessionStartTimeRef.current === 0) {
        sessionStartTimeRef.current = Date.now();
      }

      durationTimer = window.setInterval(() => {
        const elapsed = Math.floor(
          (Date.now() - sessionStartTimeRef.current) / 1000
        );
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
      startTimeRef.current =
        Date.now() - (phases[currentPhaseIndex].duration - count) * 1000;

      countdownRef.current = window.setInterval(() => {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const currentPhaseDuration = phases[currentPhaseIndex].duration;

        if (elapsedTime >= currentPhaseDuration) {
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          setPhase(phases[nextIndex].name);
          setCount(phases[nextIndex].duration);
          startTimeRef.current = Date.now();
        } else {
          const remainingTime = Math.ceil(currentPhaseDuration - elapsedTime);
          setCount(remainingTime);
          setProgress((elapsedTime / currentPhaseDuration) * 100);
        }
      }, 50);
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [isRunning, currentPhaseIndex, phases]);

  const handleStop = async () => {
    setIsRunning(false);

    if (sessionDuration > 5 && status === "authenticated" && session?.user) {
      try {
        setIsSaving(true);
        const response = await fetch("/api/user/breathing-sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            duration: sessionDuration,
            phases: phases,
            completed: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save session");
        }

        console.log("Session saved successfully");
      } catch (error) {
        console.error("Error saving breathing session:", error);
      } finally {
        setIsSaving(false);
      }
    }

    sessionStartTimeRef.current = 0;
    setSessionDuration(0);
  };

  const saveSettings = () => {
    const updatedPhases = phases.map((phase, index) => ({
      ...phase,
      duration:
        Number(customDurations[index]) || DEFAULT_PHASES[index].duration,
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
    if (isRunning) handleStop();

    setPhase(phases[0].name);
    setCount(phases[0].duration);
    setCurrentPhaseIndex(0);
    setProgress(0);
    startTimeRef.current = 0;
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-[#fefae0] text-[#283618]">
      <div className="relative flex items-center justify-center gap-8">
        <div className={`relative ${isRunning ? "scale-100" : "scale-95"} transition-all duration-500`}>
        <div className={`relative w-[250px] h-[250px] rounded-full transition-all duration-500 flex items-center justify-center
          ${isRunning ? "bg-[#dda15e]/30" : "bg-white/80"} backdrop-blur-sm shadow-lg
          ${selectedEffect === "pulse" && isRunning ? "animate-pulse-gentle" : ""}
          ${selectedEffect === "gradient" && isRunning ? "animate-gradient-flow" : ""}`}>
          <svg className="absolute w-full h-full -rotate-90">
            <circle className="text-gray-200" strokeWidth="3" stroke="currentColor" fill="transparent" r="115" cx="125" cy="125" />
            <circle className="text-[#bc6c25] transition-[stroke-dashoffset] duration-75 ease-linear"
              strokeWidth="3"
              strokeDasharray={723}
              strokeDashoffset={723 - (progress / 100) * 723}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="115"
              cx="125"
              cy="125"
            />
          </svg>

          <div className="text-center z-10">
            <h2 className="text-xl font-bold mb-1">{phase}</h2>
            <p className="text-3xl font-bold text-[#bc6c25]">{count}</p>
            {sessionDuration > 0 && (
              <p className="text-sm mt-2">
                Session: {Math.floor(sessionDuration / 60)}m {sessionDuration % 60}s
              </p>
            )}
          </div>
        </div>

        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-3">
          <button
            onClick={() => isRunning ? handleStop() : setIsRunning(true)}
            disabled={isSaving}
            className={`px-6 py-3 rounded-full font-semibold transition-all 
              ${isRunning
                ? "bg-[#dda15e] hover:bg-[#bc6c25] text-[#283618]"
                : "bg-[#dda15e] hover:bg-[#bc6c25] text-[#283618]"}
              ${isSaving ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isSaving ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Saving...
              </span>
            ) : isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            disabled={isSaving}
            className={`px-6 py-3 rounded-full font-semibold bg-[#606c38] hover:bg-[#4e5b2e] text-white transition-all 
              ${isSaving ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            Reset
          </button>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="absolute -top-4 -right-4 p-2 text-[#283618] hover:text-[#606c38] bg-[#dda15e] rounded-full shadow-md transition-transform hover:scale-110"
        >
          <Settings className="w-6 h-6" />
        </button>
        </div>

        {/* Embed Widget Button */}
        <div className="flex flex-col items-center space-y-3">
          <div className="text-center">
            <h3 className="text-sm font-medium text-[#283618] mb-1">Like this widget?</h3>
            <p className="text-xs text-gray-600">Add it to your website</p>
          </div>
          <a 
            href="/embed" 
            className="btn btn-sm bg-[#dda15e] text-[#283618] hover:bg-[#c98f4f] hover:text-[#606c38] transition-all duration-200"
          >
            Get Embed Code
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-[#fefae0] rounded-2xl shadow-xl p-8 max-w-md w-full m-4 text-[#283618]">
            <h2 className="text-2xl font-bold mb-6">Breathing Settings</h2>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold mb-2">Phase Durations</h3>
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <label className="w-24">{phase.name}:</label>
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
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#dda15e] focus:border-[#dda15e]"
                  />
                  <span>sec</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Visual Effect</h3>
              <div className="grid grid-cols-2 gap-3">
                {VISUAL_EFFECTS.map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => setSelectedEffect(effect.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedEffect === effect.id
                        ? "border-[#bc6c25] bg-[#fefae0] text-[#283618]"
                        : "border-gray-300 hover:border-[#dda15e]"
                    }`}
                  >
                    {effect.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={resetModalSettings} className="px-4 py-2 text-[#bc6c25] hover:bg-[#fefae0] rounded-lg transition-colors">
                Reset
              </button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-[#606c38] hover:bg-[#fefae0] rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={saveSettings} className="px-4 py-2 bg-[#dda15e] text-[#283618] rounded-lg hover:bg-[#bc6c25] transition-colors">
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
