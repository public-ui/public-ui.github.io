
export const components = [
    {
        name: 'abbr',
        sample: 'basic',
    },
    {
        name: 'accordion',
        sample: 'basic',
    },
    {
        name: 'alert',
        sample: 'basic',
    },
    {
        name: 'avatar',
        sample: 'basic',
    },
    {
        name: 'badge',
        sample: 'basic',
    },
    {
        name: 'breadcrumb',
        sample: 'basic',
    },
    {
        name: 'button',
        sample: 'basic',
    },
    {
        name: 'button-group',
        sample: 'basic',
    },
    {
        name: 'button-link',
        sample: 'basic',
    },
    {
        name: 'card',
        sample: 'basic',
    },
    // {
    //     name: 'combobox',
    //     sample: 'basic',
    // },
    {
        name: 'details',
        sample: 'basic',
    },
    {
        name: 'dialog',
        sample: 'basic',
    },
    {
        name: 'form',
        sample: 'basic',
    },
    {
        name: 'heading',
        sample: 'basic',
    },
    {
        name: 'icon',
        sample: 'basic',
    },
    {
        name: 'image',
        sample: 'basic',
    },
    {
        name: 'indented-text',
        sample: 'basic',
    },
    {
        name: 'input-checkbox',
        sample: 'basic',
    },
    {
        name: 'input-color',
        sample: 'basic',
    },
    {
        name: 'input-date',
        sample: 'basic',
    },
    {
        name: 'input-email',
        sample: 'basic',
    },
    {
        name: 'input-file',
        sample: 'basic',
    },
    {
        name: 'input-number',
        sample: 'basic',
    },
    {
        name: 'input-password',
        sample: 'basic',
    },
    {
        name: 'input-radio',
        sample: 'basic',
    },
    {
        name: 'input-range',
        sample: 'basic',
    },
    {
        name: 'input-text',
        sample: 'basic',
    },
    {
        name: 'link',
        sample: 'basic',
    },
    {
        name: 'link-button',
        sample: 'basic',
    },
    {
        name: 'link-group',
        sample: 'basic',
    },
    {
        name: 'modal',
        sample: 'basic',
    },
    {
        name: 'nav',
        sample: 'basic',
    },
    {
        name: 'pagination',
        sample: 'basic',
    },
    {
        name: 'popover',
        sample: 'basic',
    },
    {
        name: 'progress',
        sample: 'basic',
    },
    {
        name: 'quote',
        sample: 'basic',
    },
    {
        name: 'select',
        sample: 'basic',
    },
    {
        name: 'skip-nav',
        sample: 'basic',
    },
    {
        name: 'spin',
        sample: 'basic',
    },
    {
        name: 'split-button',
        sample: 'basic',
    },
    {
        name: 'table',
        sample: 'basic',
    },
    {
        name: 'tabs',
        sample: 'basic',
    },
    {
        name: 'textarea',
        sample: 'basic',
    },
    {
        name: 'toaster',
        sample: 'basic',
    },
    {
        name: 'toolbar',
        sample: 'basic',
    },
    {
        name: 'tooltip',
        sample: 'basic',
    },
    {
        name: 'tree',
        sample: 'basic',
    },
];

export type ComponentName = typeof components[number]['name'];

export const getComponentByName = (name: ComponentName) => components.find(el => el.name === name)

export type Component = typeof components[number];