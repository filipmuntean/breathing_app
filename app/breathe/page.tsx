"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Head from "next/head"

const DEFAULT_PHASES = [
  { name: "Inhale", duration: 4 },
  { name: "Hold", duration: 4 },
  { name: "Exhale", duration: 4 },
];

const Breathe: React.FC = () => {
  const [phases, setPhases] = useState(DEFAULT_PHASES);
  const [phase, setPhase] = useState(phases[0].name);
  const [count, setCount] = useState(phases[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const countdownRef = useRef<number | null>(null);

  // Custom durations state (allows empty values)
  const [customDurations, setCustomDurations] = useState(
    phases.map((p) => p.duration.toString()) // Keep as strings for smooth input handling
  );

  useEffect(() => {
    if (isRunning) {
      if (count > 0) {
        countdownRef.current = window.setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 1000);
      } else {
        const nextIndex = (currentPhaseIndex + 1) % phases.length;
        setCurrentPhaseIndex(nextIndex);
        setPhase(phases[nextIndex].name);
        setCount(phases[nextIndex].duration);
      }
    }

    return () => {
      if (countdownRef.current) {
        clearTimeout(countdownRef.current);
      }
    };
  }, [count, isRunning, currentPhaseIndex, phases]);

  // Save new settings from modal
  const saveSettings = () => {
    const updatedPhases = phases.map((phase, index) => ({
      ...phase,
      duration: Number(customDurations[index]) || DEFAULT_PHASES[index].duration, // Fallback if empty
    }));
    setPhases(updatedPhases);
    setPhase(updatedPhases[0].name);
    setCount(updatedPhases[0].duration);
    setShowModal(false);
  };

  // Reset modal durations to defaults
  const resetModalSettings = () => {
    setCustomDurations(DEFAULT_PHASES.map((p) => p.duration.toString())); // Reset input fields
  };

  return (
    
    <>
    {/* <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
     crossOrigin="anonymous"></script>
      </Head> */}

    <section id="breathe">
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
        {/* Main Timer UI */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-12 text-center max-w-2xl w-full">
          
          {/* Settings Button (⚙️) - Top Right */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute text-gray-600 hover:text-gray-800 text-3xl top-3 right-3"
          >
            <IoSettingsOutline />
          </button>

          {/* Breathing Timer */}
          <h1 className="text-5xl font-bold mb-8">{phase}</h1>
          <p className="text-8xl font-bold mb-10 text-blue-600">{count}</p>

          {/* Start & Reset Buttons */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-8 py-4 text-2xl rounded-xl font-semibold transition-colors ${
                isRunning ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
              } text-white`}
            >
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setPhase(phases[0].name);
                setCount(phases[0].duration);
                setCurrentPhaseIndex(0);
              }}
              className="px-8 py-4 text-2xl rounded-xl font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Modal Popup for Settings */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              
              {/* Input Fields for Custom Durations */}
              {phases.map((phase, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-lg mb-2">{phase.name} Duration:</label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customDurations[index]}
                    onChange={(e) => {
                      const newDurations = [...customDurations];
                      newDurations[index] = e.target.value; // Allow empty values
                      setCustomDurations(newDurations);
                    }}
                    onBlur={(e) => {
                      if (e.target.value === "") {
                        const newDurations = [...customDurations];
                        newDurations[index] = DEFAULT_PHASES[index].duration.toString();
                        setCustomDurations(newDurations);
                      }
                    }}
                    className="w-full p-2 border rounded-md text-lg"
                  />
                </div>
              ))}

              {/* Modal Buttons: Save, Reset, Cancel */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={resetModalSettings}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={saveSettings}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Breathe;
