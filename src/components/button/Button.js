import React from 'react';
import styles from './Button.module.css'

const Button = ({isDisabled, clickHandler, children, styleCompId, type}) => {
    return (
        <div>
            <button className={styles['button-styling']}
                    id={styleCompId}
                    type={type}
                    disabled={isDisabled}
                    onClick={clickHandler}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;