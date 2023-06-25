import { createButton } from "./button"
// import ButtonDocs from './button.md'

export default {
    title: 'Design System/Atoms/Button',
    decorators: [(story) => {
        const decorator = document.createElement('div');
        decorator.style.margin = '3rem';
        decorator.appendChild(story());
        return decorator;
    }],
    // parameters: {
    //     docs: {
    //         page: null,
    //         description: {
    //             component: ButtonDocs,
    //         },
    //     },
    // },
    argTypes: {
        label: {
            name: 'label',
            control: {
                type: 'text',
            }
        },
        style: {
            name: 'style',
            options: ['filled', 'outlined'],
            control: {
                type: 'radio',
            }
        },
        size: {
            name: 'size',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            }
        }
    },
}

const Template = ({ label, ...args }) => {
    return createButton({ label, ...args });
}

export const Default = Template.bind({});

Default.args = {
    label: 'My Button',
}