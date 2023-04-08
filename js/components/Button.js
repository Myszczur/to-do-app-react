import React from 'react';

const Button = ({ children, color = "primary", className = false, small = false, outline = false, icon, onClick }) => {

    const btnClasses = [
        "btn",
        outline ? `btn-outline-${color}` : `btn-${color}`,
        small && "btn-sm",
        className
    ].filter(Boolean).join(" ");

    const iconClasses = [
        icon,
        children !== undefined && "ml-1"
    ].filter(Boolean).join(" ");

    return (
        <>
            <button className={btnClasses} type="submit" onClick={onClick}>
                {children}
                {icon && <i className={iconClasses} />}
            </button>
        </>
    );
};

export default Button;