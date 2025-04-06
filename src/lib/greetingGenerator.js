// lib/greetingGenerator.js
export const greetings = [
    "Welcome back to MediSphere, where care meets innovation.",
    "Good to see you again. Let’s make healthcare seamless.",
    "Hello! Your digital health journey continues here at MediSphere.",
    "Warm greetings from MediSphere – your wellness, our priority.",
    "Step into your health hub – powered by MediSphere.",
    "MediSphere welcomes you. Let’s manage health smarter, together.",
    "Back again? Let’s keep your medical world organized and efficient.",
    "Greetings, health hero. MediSphere is here for you.",
    "Hello there! Ready to revolutionize your medical management?",
    "Welcome to MediSphere – the heart of modern healthcare.",
  ];
  
  export function getFancyGreeting() {
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
  }
  