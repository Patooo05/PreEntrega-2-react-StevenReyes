import React, { useState } from "react";
import switchStyles from '../styles/switch.module.css'; // Asegúrate de que la ruta sea correcta

const Switch = ({ checked, setChecked }) => {
    return (
        <div className={switchStyles.container}>
            <span>Dark mode</span>
            <label className={switchStyles.switch}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked((prev) => !prev)}
                />
                <span className={switchStyles.slider}></span>
            </label>
        </div>
    );
};

export default Switch;
