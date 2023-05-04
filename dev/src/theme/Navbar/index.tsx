/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { KolLinkButton, KolVersion } from '@public-ui/react';
import React, { FunctionComponent, PropsWithChildren } from 'react';
// import { getDarkMode, setDarkMode } from '../../shares/store';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Navbar from '@theme-original/Navbar';
import JSON from '../../../node_modules/@public-ui/components/package.json';
import ThemeSelect from './ThemeSelect';

export const NavbarWrapper: FunctionComponent<PropsWithChildren> = (props: { children }) => {
	// const [dark, setDark] = useState(false);

	// const onLight: KoliBriButtonCallbacks = {
	// 	onClick: () => {
	// 		// setDarkMode(true);
	// 		setDark(true);
	// 	},
	// };
	// const onDark: KoliBriButtonCallbacks = {
	// 	onClick: () => {
	// 		// setDarkMode(false);
	// 		setDark(false);
	// 	},
	// };

	return (
		<div className="grid grid-cols-2 shadow items-center md:grid-cols-[1fr,auto,auto,auto]">
			<Navbar {...props} />
			<KolVersion aria-label="Kontaktformular" role="region" className="text-right pr-4" _version={JSON.version as string}></KolVersion>
			<section aria-label="Toolbar" className="grid gap-2 col-span-2 p-4 sm:grid-cols-[auto,auto,auto]">
				<div className="grid gap-2 grid-cols-5 col-span-2 items-center justify-items-center">
					{/* <div>
						{dark ? (
							<KolButton _icon={'codicon codicon-moon'} _iconOnly _label="Dark-Modus ausschalten" _on={onDark} _tooltipAlign="left" _variant="ghost"></KolButton>
						) : (
							<KolButton
								className="hidden sm:inline"
								_disabled
								_icon={'codicon codicon-sun'}
								_iconOnly
								_label="Dark-Modus aktivieren"
								_on={onLight}
								_tooltipAlign="left"
								_variant="ghost"
							></KolButton>
						)}
					</div> */}
					<div>
						<KolLinkButton
							_href="https://github.com/public-ui/kolibri"
							_icon={'codicon codicon-github'}
							_iconOnly
							_label="GitHub-Repository"
							_tooltipAlign="left"
							// _target="github"
							_variant="ghost"
						></KolLinkButton>
					</div>
					<div>
						<KolLinkButton
							_href="/cheat-sheet/"
							_icon={'codicon codicon-record-keys'}
							_iconOnly
							_label="Cheat-Sheet öffnen"
							_tooltipAlign="left"
							// _target="cheat-sheet"
							_variant="ghost"
						></KolLinkButton>
					</div>
					<div>
						<KolLinkButton
							_href="/designer/"
							_icon={'codicon codicon-paintcan'}
							_iconOnly
							_label="Designer öffnen"
							_tooltipAlign="left"
							// _target="designer"
							_variant="ghost"
						></KolLinkButton>
					</div>
					<div>
						<KolLinkButton
							_href="presentation/presentation.pdf"
							_icon={'codicon codicon-preview'}
							_iconOnly
							_label="Präsentation anschauen"
							_tooltipAlign="left"
							// _target="presentation"
							_variant="ghost"
						></KolLinkButton>
					</div>
					{/* <div>
						<KolLinkButton
							_href="https://discord.com/invite/7ntYFPns6b"
							_icon={'codicon codicon-discord'}
							_iconOnly
							_label="Discord-Chat"
							_tooltipAlign="left"
							_target="discord"
							_variant="ghost"
						></KolLinkButton>
					</div> */}
					<div>
						<KolLinkButton
							_href="https://social.bund.de/@kolibri"
							_icon={'codicon codicon-comment-discussion'}
							_iconOnly
							_label="Mastodon-Profil"
							_tooltipAlign="left"
							// _target="mastodon"
							_variant="ghost"
						></KolLinkButton>
					</div>
				</div>
				<BrowserOnly>{() => <ThemeSelect />}</BrowserOnly>
			</section>
		</div>
	);
};

export default NavbarWrapper;
