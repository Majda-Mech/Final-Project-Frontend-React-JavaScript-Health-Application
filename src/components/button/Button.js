import React from 'react';
import styles from './Button.module.css'

const Button = ({isDisabled, clickHandler, children, styleCompId}) => {
    return (
        <div>
            <button className={styles['button-styling']}
                    id={styleCompId}
                    type="submit"
                    disabled={isDisabled}
                    onClick={clickHandler}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;