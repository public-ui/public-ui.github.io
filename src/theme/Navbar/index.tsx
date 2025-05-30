import { KolLinkButton } from '@public-ui/react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import React from 'react';
// import { getDarkMode, setDarkMode } from '../../shares/store';
import { LanguageSwitch } from '@site/src/components/LanguageSwitch';
import Navbar from '@theme-original/Navbar';
import { translate } from '@docusaurus/Translate';
import DocumentationVersionHint from '../../components/DocumentationVersionHint';

export const NavbarWrapper: FunctionComponent<PropsWithChildren> = (props) => {
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
			<DocumentationVersionHint />
			<div className="kolibri-navbar max-w-screen-md lg:max-w-4xl 2xl:max-w-[95rem] mx-auto grid grid-cols-[1fr,auto] gap-y-2 items-center 2xl:grid-cols-[1fr,auto,auto,auto] p-4 lg:px-8">
				<Navbar {...props} />
				<section aria-label="Toolbar" className="flex flex-wrap gap-2 col-span-2">
					<div className="flex-grow grid gap-2 grid-cols-6 items-center justify-items-center">
						<LanguageSwitch />
						{/* <div>
						{dark ? (
							<KolButton _icons={'codicon codicon-moon'} _hideLabel _label="Dark-Modus ausschalten" _on={onDark} _tooltipAlign="left" _variant="ghost"></KolButton>
						) : (
							<KolButton
								className="hidden sm:inline"
								_disabled
								_icons={'codicon codicon-sun'}
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
								_icons={'codicon codicon-github'}
								_hideLabel
								_label="GitHub-Repository"
								_tooltipAlign="left"
								// _target="github"
								_variant="ghost"
							/>
						</div>
						{/* <div>
							<KolLinkButton
								_href="/cheat-sheet/"
								_icons={'codicon codicon-record-keys'}
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
								_icons={'codicon codicon-paintcan'}
								_hideLabel
								_label="Designer öffnen"
								_tooltipAlign="left"
								// _target="designer"
								_variant="ghost"
							/>
						</div> */}
						<div>
							<KolLinkButton
								_href="https://develop--kolibri-public-ui.netlify.app"
								_icons={'codicon codicon-preview'}
								_hideLabel
								_label={translate({
									id: 'custom.sample-app-button',
								})}
								_tooltipAlign="left"
								// _target="presentation"
								_variant="ghost"
							/>
						</div>
						{/* <div>
						<KolLinkButton
							_href="https://discord.com/invite/7ntYFPns6b"
							_icons={'codicon codicon-discord'}
							_hideLabel
							_label="Discord-Chat"
							_tooltipAlign="left"
							_target="discord"
							_variant="ghost"
						/>
					</div>
						<div>
							<KolLinkButton
								_href="https://social.bund.de/@kolibri"
								_icons={'codicon codicon-comment-discussion'}
								_hideLabel
								_label="Mastodon-Profil"
								_tooltipAlign="left"
								// _target="mastodon"
								_variant="ghost"
							/>
						</div>*/}
					</div>
				</section>
			</div>
		</div>
	);
};

export default NavbarWrapper;
