import './button.css';

export const createButton = ({
    style = 'outline',
    size = 'small',
    label
}) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.type = 'submit';
    button.role = 'button';
    button.className = [
        'button',
        `button--${style}`,
        `button--${size}`
    ].join(' ');
    return button;
}