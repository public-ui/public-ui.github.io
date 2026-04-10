import type { TabButtonProps } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolButton, KolDrawer, KolCard, KolInputCheckbox, KolSingleSelect } from '@public-ui/react-v19';
import React, { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { PREDEFINED_ICONS } from './IconsProperty';

const TOOLTIP_ALIGN_OPTIONS = [
    { label: 'None', value: '' },
    { label: 'Top', value: 'top' },
    { label: 'Right', value: 'right' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
];

const DEFAULT_TABS: TabButtonProps[] = [
    { _label: 'Tab 1', _icons: 'kolicon-house' },
    { _label: 'Tab 2', _disabled: true },
    { _label: 'Tab 3' },
    { _label: 'Tab 4' },
    { _label: 'Tab 5' },
];

const TabsProperty = (props: {
    label: string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tabCount, setTabCount] = useState(3);
    const [tabs, setTabs] = useState<TabButtonProps[]>(DEFAULT_TABS);

    const currentTabs = tabs.slice(0, tabCount);

    useEffect(() => {
        props._on?.onInput?.(new Event('input'), currentTabs);
    }, [tabs, tabCount]);

    const handleCountChange = (_event: Event, value: unknown) => {
        const count = Math.min(Math.max(Number(value) || 1, 1), DEFAULT_TABS.length);
        setTabCount(count);
    };

    const handleTabFieldChange = (index: number, field: keyof TabButtonProps, value: unknown) => {
        const newTabs = [...tabs];
        newTabs[index] = { ...newTabs[index], [field]: value };
        setTabs(newTabs);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <KolInputNumber
                _label={props.label}
                _min={1}
                _max={DEFAULT_TABS.length}
                _value={tabCount}
                _on={{ onInput: handleCountChange }}
            />

            {currentTabs.length > 0 && (
                <KolButton
                    _label={translate({ id: 'preview.component.tabs.tabs.edit' })}
                    _variant="secondary"
                    _on={{ onClick: () => setIsEditing(!isEditing) }}
                />
            )}

            <KolDrawer
                _label={translate({ id: 'preview.component.tabs.tabs.edit' })}
                _open={isEditing}
                _align="right"
                _hasCloser
                _on={{ onClose: () => setIsEditing(false) }}
            >
                <div className="flex flex-col gap-4 py-4">
                    {currentTabs.map((tab, index) => (
                        <KolCard key={index} _label={`Tab ${index + 1}`}>
                            <div className="flex flex-col gap-2">
                                <KolInputText
                                    _label="Label"
                                    _value={tab._label}
                                    _on={{
                                        onInput: (e: Event) => {
                                            const target = e.target as HTMLInputElement;
                                            handleTabFieldChange(index, '_label', target.value);
                                        },
                                    }}
                                />
                                <KolSingleSelect
                                    _label="Icon"
                                    _options={PREDEFINED_ICONS}
                                    _value={typeof tab._icons === 'string' ? tab._icons : ''}
                                    _on={{
                                        onInput: (_e: Event, value: unknown) => {
                                            handleTabFieldChange(index, '_icons', value || undefined);
                                        },
                                    }}
                                />
                                <KolSingleSelect
                                    _label="Tooltip Align"
                                    _options={TOOLTIP_ALIGN_OPTIONS}
                                    _value={tab._tooltipAlign ?? ''}
                                    _on={{
                                        onInput: (_e: Event, value: unknown) => {
                                            handleTabFieldChange(index, '_tooltipAlign', value || undefined);
                                        },
                                    }}
                                />
                                <KolInputCheckbox
                                    _label="Disabled"
                                    _checked={tab._disabled ?? false}
                                    _variant="switch"
                                    _on={{
                                        onInput: (_e: Event, checked: unknown) => {
                                            handleTabFieldChange(index, '_disabled', !!checked);
                                        },
                                    }}
                                />
                                <KolInputCheckbox
                                    _label="Hide Label"
                                    _checked={tab._hideLabel ?? false}
                                    _variant="switch"
                                    _on={{
                                        onInput: (_e: Event, checked: unknown) => {
                                            handleTabFieldChange(index, '_hideLabel', !!checked);
                                        },
                                    }}
                                />
                            </div>
                        </KolCard>
                    ))}

                    <KolButton
                        _label={translate({ id: 'preview.component.tabs.tabs.closeedit' })}
                        _variant="primary"
                        _on={{ onClick: () => setIsEditing(false) }}
                    />
                </div>
            </KolDrawer>
        </div>
    );
};

export default TabsProperty;
