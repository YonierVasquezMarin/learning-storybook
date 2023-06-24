import './card.css';

export const createCard = ({
    size = 'small',
    title,
    description,
}) => {
    const wrapper = document.createElement('div');
    const card = document.createElement('div');
    const avatar = document.createElement('div');
    const content = document.createElement('div');
    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');

    wrapper.appendChild(card);
    card.appendChild(avatar);
    card.appendChild(content);
    content.appendChild(titleElement);
    content.appendChild(descriptionElement);

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    wrapper.className = 'wrapper';
    avatar.className = 'card__avatar';
    content.className = 'card__content';

    card.className = [
        'card',
        `card--${size}`
    ].join(' ');

    return wrapper;
};