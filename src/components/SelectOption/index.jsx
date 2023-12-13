import React from 'react';
import classes from "./SelectOption.module.css";

const SelectOption = () => {
    return (
        <div className={classes.selectOption}>
            <div>
                <button className={classes.button1}>Додати нові документи</button>
                <button className={classes.button2}>Переглянути свої документи</button>
            </div>
        </div>
    );
};

export default SelectOption;