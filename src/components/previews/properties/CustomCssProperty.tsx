import { KolTextarea, KolButton, KolDetails } from '@public-ui/react-v19';
import React from 'react';

const SAMPLE_CSS = `.loader {
	animation: rotation 2s linear infinite;
	border-color: #444;
	border-radius: 50%;
	border-style: solid solid dotted dotted;
	border-width: 3px;
	box-sizing: border-box;
	display: inline-block;
	height: 48px;
	position: relative;
	width: 48px;
}
.loader::after {
	animation: rotationBack 1s linear infinite;
	border-color: #ff3d00;
	border-radius: 50%;
	border-style: solid solid dotted;
	border-width: 3px;
	box-sizing: border-box;
	bottom: 0;
	content: '';
	height: 24px;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;
	top: 0;
	transform-origin: center center;
	width: 24px;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes rotationBack {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-360deg);
	}
}

@media (prefers-reduced-motion) {
	.loader {
		animation-duration: 6s;
	}
	.loader::after {
		animation-duration: 3s;
	}
}`;

const CustomCssProperty = (props: {
    label: string;
    _value?: string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const handlePasteSample = () => {
        props._on?.onInput?.(new Event('input'), SAMPLE_CSS);
    };

    return (
        <KolDetails _label={props.label}>
            <div className="flex flex-col gap-2">
                <KolTextarea
                    _label={"Style CSS"}
                    _on={{
                        onInput: (event: Event, value: unknown) => {
                            props._on?.onInput?.(event, value);
                        },
                    }}
                    _value={props._value}
                    _rows={6}
                    className="flex-grow"
                />
                <div className='flex gap-2'>
                    <KolButton
                        _label="Paste Sample"
                        _on={{
                            onClick: handlePasteSample,
                        }}
                        className="h-fit"
                    />
                    <KolButton
                        _label="Clear CSS"
                        _variant="danger"
                        _on={{
                            onClick: () => props._on?.onInput?.(new Event('input'), ''),
                        }}
                        className="h-fit grow"
                    /></div>
            </div>
        </KolDetails>
    );
};

export default CustomCssProperty;
