/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { KolLinkButton, KolVersion } from '@public-ui/react';
import React, { FunctionComponent, PropsWithChildren } from 'React';
// import { getDarkMode, setDarkMode } from '../../shares/store';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { LanguageSwitch } from '@site/src/components/LanguageSwitch';
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
		<div className="kolibri-navbar-wrapper sticky top-0 z-50 bg-white">
			<div className="kolibri-navbar max-w-screen-md lg:max-w-4xl 2xl:max-w-[95rem] mx-auto grid grid-cols-[1fr,auto] gap-y-2 items-center 2xl:grid-cols-[1fr,auto,auto,auto] p-4 lg:px-8">
				<Navbar {...props} />
				<KolVersion
					class="hidden sm:block ml-4"
					aria-label="Kontaktformular"
					role="region"
					_version={JSON.version as string}
				></KolVersion>
				<section aria-label="Toolbar" className="flex flex-wrap gap-2 col-span-2">
					<div className="flex-grow grid gap-2 grid-cols-6 items-center justify-items-center">
						<LanguageSwitch />
						{/* <div>
						{dark ? (
							<KolButton _icon={'codicon codicon-moon'} _hideLabel _label="Dark-Modus ausschalten" _on={onDark} _tooltipAlign="left" _variant="ghost"></KolButton>
						) : (
							<KolButton
								className="hidden sm:inline"
								_disabled
								_icon={'codicon codicon-sun'}
								_hideLabel
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
								_hideLabel
								_label="GitHub-Repository"
								_tooltipAlign="left"
								// _target="github"
								_variant="ghost"
							/>
						</div>
						<div>
							<KolLinkButton
								_href="/cheat-sheet/"
								_icon={'codicon codicon-record-keys'}
								_hideLabel
								_label="Cheat-Sheet öffnen"
								_tooltipAlign="left"
								// _target="cheat-sheet"
								_variant="ghost"
							/>
						</div>
						<div>
							<KolLinkButton
								_href="/designer/"
								_icon={'codicon codicon-paintcan'}
								_hideLabel
								_label="Designer öffnen"
								_tooltipAlign="left"
								// _target="designer"
								_variant="ghost"
							/>
						</div>
						<div>
							<KolLinkButton
								_href="/presentation/presentation.pdf"
								_icon={'codicon codicon-preview'}
								_hideLabel
								_label="Präsentation anschauen"
								_tooltipAlign="left"
								// _target="presentation"
								_variant="ghost"
							/>
						</div>
						{/* <div>
						<KolLinkButton
							_href="https://discord.com/invite/7ntYFPns6b"
							_icon={'codicon codicon-discord'}
							_hideLabel
							_label="Discord-Chat"
							_tooltipAlign="left"
							_target="discord"
							_variant="ghost"
						/>
					</div> */}
						<div>
							<KolLinkButton
								_href="https://social.bund.de/@kolibri"
								_icon={'codicon codicon-comment-discussion'}
								_hideLabel
								_label="Mastodon-Profil"
								_tooltipAlign="left"
								// _target="mastodon"
								_variant="ghost"
							/>
						</div>
					</div>
					<div className="flex-grow">
						<BrowserOnly>{() => <ThemeSelect />}</BrowserOnly>
					</div>
				</section>
			</div>
		</div>
	);
};

export default NavbarWrapper;
