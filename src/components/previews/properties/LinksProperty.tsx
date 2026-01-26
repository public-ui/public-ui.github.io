import type { BreadcrumbLinkProps } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolButton, KolInputCheckbox, KolDrawer, KolSingleSelect, KolCard } from '@public-ui/react-v19';
import React, { useEffect, useState } from 'react';
import { PREDEFINED_ICONS } from './IconProperty';
import { translate } from '@docusaurus/Translate';

const LINKS_POOL = [
    { _label: 'Startseite', _href: '#/', _icons: 'kolicon-house', _hideLabel: true },
    { _label: 'Unterseite 1', _href: '#/page-1' },
    { _label: 'Unterseite 1.1', _href: '#/page-1-1' },
    { _label: 'Unterseite 1.1.1', _href: '#/page-1-1-1' },
    { _label: 'Aktuelle Seite', _href: '#/current' },
];

const LinksProperty = (props: {
    label: string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [linkCount, setLinkCount] = useState(3);
    const [links, setLinks] = useState<BreadcrumbLinkProps[]>(LINKS_POOL);
    const currentLinks = links.slice(0, linkCount) ?? [];

    useEffect(() => {
        props._on?.onInput?.(new Event('input'), currentLinks);
    }, [links, linkCount]);

    const handleCountChange = (_event: Event, value: unknown) => {
        const count = Math.min(Math.max(Number(value) || 1, 1), links.length);
        setLinkCount(count);
    };

    const handleLinkChange = (index: number, field: keyof BreadcrumbLinkProps, value: unknown) => {
        const newLinks = [...links];
        if (field === '_hideLabel') {
            newLinks[index] = { ...newLinks[index], [field]: value as boolean };
        } else {
            newLinks[index] = { ...newLinks[index], [field]: value as string };
        }
        setLinks(newLinks);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <KolInputNumber
                _label={props.label}
                _min={1}
                _max={links.length}
                _value={linkCount}
                _on={{ onInput: handleCountChange }}
            />

            {currentLinks.length > 0 && (
                <KolButton
                    _label={translate({ id: 'preview.component.breadcrumb.links.edit' })}
                    _variant="secondary"
                    _on={{ onClick: () => setIsEditing(!isEditing) }}
                />
            )}

            <KolDrawer _label={translate({ id: 'preview.component.breadcrumb.links.edit' })} _open={isEditing} _align='right' _hasCloser _on={{ onClose: () => setIsEditing(false) }}>
                <div className='flex flex-col gap-4 py-4'>
                    {currentLinks.map((link, index) => (
                        <KolCard key={index} _label={`Link ${index + 1}`}>
                            <div className='flex flex-col gap-2'>

                                <KolInputText
                                    _label="Label"
                                    _value={link._label}
                                    _on={{
                                        onInput: (e: Event) => {
                                            const target = e.target as HTMLInputElement;
                                            handleLinkChange(index, '_label', target.value);
                                        },
                                    }}
                                />

                                <KolInputText
                                    _label="URL/Href"
                                    _value={link._href}
                                    _on={{
                                        onInput: (e: Event) => {
                                            const target = e.target as HTMLInputElement;
                                            handleLinkChange(index, '_href', target.value);
                                        },
                                    }}
                                />

                                <KolSingleSelect
                                    _label="Icon"
                                    _options={PREDEFINED_ICONS}
                                    _value={(typeof link._icons === 'string' ? link._icons : '')}
                                    _on={{
                                        onInput: (_e: Event, value: unknown) => {
                                            handleLinkChange(index, '_icons', value as string);
                                        },
                                    }}
                                />

                                <KolInputCheckbox
                                    _label="Hide Label"
                                    _checked={link._hideLabel ?? false}
                                    _variant='switch'
                                    _on={{
                                        onInput: (_e: Event, checked: unknown) => {
                                            handleLinkChange(index, '_hideLabel', !!checked);
                                        },
                                    }}
                                />
                            </div>
                        </KolCard>
                    ))}

                    <KolButton _label={translate({ id: 'preview.component.breadcrumb.links.closeedit' })} _variant="primary" _on={{ onClick: () => setIsEditing(false) }} />
                </div>
            </KolDrawer>
        </div>
    );
};

export default LinksProperty;
