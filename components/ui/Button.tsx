import React from "react";
import styles from "@/styles/button.module.css";

// Button configurations
const buttons = [
  {
    id: 1,
    label: "Notruf Hotline",
    handleClick: () => {
      window.location.href = "tel:+4917623687542"; // Phone number
    },
    className: styles.hotButton,
  },
  {
    id: 2,
    label: "Normaler Button",
    handleClick: () => {
      alert("Normaler Button wurde geklickt!"); // Example action
    },
    className: styles.normalButton,
  },
];

// Reusable Button Component
function ButtonComponent({ buttonConfig }) {
  const { label, handleClick, className } = buttonConfig;

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

// EmergencyButton Component
function EmergencyButton({ buttonIndex }) {
  // Get the button configuration based on the index
  const buttonConfig = buttons[buttonIndex];

  // If no button exists for the given index, display a fallback message
  if (!buttonConfig) {
    return <p>Kein Button gefunden.</p>;
  }

  return (
    <div>
      {/* Render the button dynamically */}
      <ButtonComponent buttonConfig={buttonConfig} />
    </div>
  );
}

export default EmergencyButton;
