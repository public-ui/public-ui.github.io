/*! For license information please see 91.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[91],{20091:(e,o,n)=>{n.r(o),n.d(o,{kol_icon:()=>b});var c=n(25262),t=n(24818);const b=class{constructor(e){(0,c.r)(this,e),this._icons=void 0,this._label=void 0,this.state={_icons:"codicon codicon-home",_label:""}}render(){const e=this.state._label.length>0;return(0,c.h)(c.H,{exportparts:"icon"},(0,c.h)("i",{"aria-hidden":e?void 0:"true","aria-label":e?this.state._label:void 0,class:this.state._icons,part:"icon",role:"img"}))}validateIcons(e){(0,t.q)(this,"_icons",e,{required:!0})}validateLabel(e){(0,t.v)(this,e,{required:!0})}componentWillLoad(){this.validateIcons(this._icons),this.validateLabel(this._label)}static get watchers(){return{_icons:["validateIcons"],_label:["validateLabel"]}}};b.style={default:'/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n@font-face {\n\tfont-family: "codicon";\n\tfont-display: block;\n\tsrc: url("./codicon.ttf?0e5b0adf625a37fbcd638d31f0fe72aa") format("truetype");\n}\n\n.codicon[class*=\'codicon-\'] {\n\tfont: normal normal normal 16px/1 codicon;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\ttext-rendering: auto;\n\ttext-align: center;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n}\n\n/*---------------------\n *  Modifiers\n *-------------------*/\n\n@keyframes codicon-spin {\n\t100% {\n\t\ttransform:rotate(360deg);\n\t}\n}\n\n.codicon-sync.codicon-modifier-spin,\n.codicon-loading.codicon-modifier-spin,\n.codicon-gear.codicon-modifier-spin {\n\t/* Use steps to throttle FPS to reduce CPU usage */\n\tanimation: codicon-spin 1.5s steps(30) infinite;\n}\n\n.codicon-modifier-disabled {\n\topacity: 0.5;\n}\n\n.codicon-modifier-hidden {\n\topacity: 0;\n}\n\n/* custom speed & easing for loading icon */\n.codicon-loading {\n\tanimation-duration: 1s !important;\n\tanimation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;\n}\n\n/*---------------------\n *  Icons\n *-------------------*/\n\n.codicon-add:before { content: "\\ea60" }\n.codicon-plus:before { content: "\\ea60" }\n.codicon-gist-new:before { content: "\\ea60" }\n.codicon-repo-create:before { content: "\\ea60" }\n.codicon-lightbulb:before { content: "\\ea61" }\n.codicon-light-bulb:before { content: "\\ea61" }\n.codicon-repo:before { content: "\\ea62" }\n.codicon-repo-delete:before { content: "\\ea62" }\n.codicon-gist-fork:before { content: "\\ea63" }\n.codicon-repo-forked:before { content: "\\ea63" }\n.codicon-git-pull-request:before { content: "\\ea64" }\n.codicon-git-pull-request-abandoned:before { content: "\\ea64" }\n.codicon-record-keys:before { content: "\\ea65" }\n.codicon-keyboard:before { content: "\\ea65" }\n.codicon-tag:before { content: "\\ea66" }\n.codicon-tag-add:before { content: "\\ea66" }\n.codicon-tag-remove:before { content: "\\ea66" }\n.codicon-person:before { content: "\\ea67" }\n.codicon-person-follow:before { content: "\\ea67" }\n.codicon-person-outline:before { content: "\\ea67" }\n.codicon-person-filled:before { content: "\\ea67" }\n.codicon-git-branch:before { content: "\\ea68" }\n.codicon-git-branch-create:before { content: "\\ea68" }\n.codicon-git-branch-delete:before { content: "\\ea68" }\n.codicon-source-control:before { content: "\\ea68" }\n.codicon-mirror:before { content: "\\ea69" }\n.codicon-mirror-public:before { content: "\\ea69" }\n.codicon-star:before { content: "\\ea6a" }\n.codicon-star-add:before { content: "\\ea6a" }\n.codicon-star-delete:before { content: "\\ea6a" }\n.codicon-star-empty:before { content: "\\ea6a" }\n.codicon-comment:before { content: "\\ea6b" }\n.codicon-comment-add:before { content: "\\ea6b" }\n.codicon-alert:before { content: "\\ea6c" }\n.codicon-warning:before { content: "\\ea6c" }\n.codicon-search:before { content: "\\ea6d" }\n.codicon-search-save:before { content: "\\ea6d" }\n.codicon-log-out:before { content: "\\ea6e" }\n.codicon-sign-out:before { content: "\\ea6e" }\n.codicon-log-in:before { content: "\\ea6f" }\n.codicon-sign-in:before { content: "\\ea6f" }\n.codicon-eye:before { content: "\\ea70" }\n.codicon-eye-unwatch:before { content: "\\ea70" }\n.codicon-eye-watch:before { content: "\\ea70" }\n.codicon-circle-filled:before { content: "\\ea71" }\n.codicon-primitive-dot:before { content: "\\ea71" }\n.codicon-close-dirty:before { content: "\\ea71" }\n.codicon-debug-breakpoint:before { content: "\\ea71" }\n.codicon-debug-breakpoint-disabled:before { content: "\\ea71" }\n.codicon-debug-hint:before { content: "\\ea71" }\n.codicon-primitive-square:before { content: "\\ea72" }\n.codicon-edit:before { content: "\\ea73" }\n.codicon-pencil:before { content: "\\ea73" }\n.codicon-info:before { content: "\\ea74" }\n.codicon-issue-opened:before { content: "\\ea74" }\n.codicon-gist-private:before { content: "\\ea75" }\n.codicon-git-fork-private:before { content: "\\ea75" }\n.codicon-lock:before { content: "\\ea75" }\n.codicon-mirror-private:before { content: "\\ea75" }\n.codicon-close:before { content: "\\ea76" }\n.codicon-remove-close:before { content: "\\ea76" }\n.codicon-x:before { content: "\\ea76" }\n.codicon-repo-sync:before { content: "\\ea77" }\n.codicon-sync:before { content: "\\ea77" }\n.codicon-clone:before { content: "\\ea78" }\n.codicon-desktop-download:before { content: "\\ea78" }\n.codicon-beaker:before { content: "\\ea79" }\n.codicon-microscope:before { content: "\\ea79" }\n.codicon-vm:before { content: "\\ea7a" }\n.codicon-device-desktop:before { content: "\\ea7a" }\n.codicon-file:before { content: "\\ea7b" }\n.codicon-file-text:before { content: "\\ea7b" }\n.codicon-more:before { content: "\\ea7c" }\n.codicon-ellipsis:before { content: "\\ea7c" }\n.codicon-kebab-horizontal:before { content: "\\ea7c" }\n.codicon-mail-reply:before { content: "\\ea7d" }\n.codicon-reply:before { content: "\\ea7d" }\n.codicon-organization:before { content: "\\ea7e" }\n.codicon-organization-filled:before { content: "\\ea7e" }\n.codicon-organization-outline:before { content: "\\ea7e" }\n.codicon-new-file:before { content: "\\ea7f" }\n.codicon-file-add:before { content: "\\ea7f" }\n.codicon-new-folder:before { content: "\\ea80" }\n.codicon-file-directory-create:before { content: "\\ea80" }\n.codicon-trash:before { content: "\\ea81" }\n.codicon-trashcan:before { content: "\\ea81" }\n.codicon-history:before { content: "\\ea82" }\n.codicon-clock:before { content: "\\ea82" }\n.codicon-folder:before { content: "\\ea83" }\n.codicon-file-directory:before { content: "\\ea83" }\n.codicon-symbol-folder:before { content: "\\ea83" }\n.codicon-logo-github:before { content: "\\ea84" }\n.codicon-mark-github:before { content: "\\ea84" }\n.codicon-github:before { content: "\\ea84" }\n.codicon-terminal:before { content: "\\ea85" }\n.codicon-console:before { content: "\\ea85" }\n.codicon-repl:before { content: "\\ea85" }\n.codicon-zap:before { content: "\\ea86" }\n.codicon-symbol-event:before { content: "\\ea86" }\n.codicon-error:before { content: "\\ea87" }\n.codicon-stop:before { content: "\\ea87" }\n.codicon-variable:before { content: "\\ea88" }\n.codicon-symbol-variable:before { content: "\\ea88" }\n.codicon-array:before { content: "\\ea8a" }\n.codicon-symbol-array:before { content: "\\ea8a" }\n.codicon-symbol-module:before { content: "\\ea8b" }\n.codicon-symbol-package:before { content: "\\ea8b" }\n.codicon-symbol-namespace:before { content: "\\ea8b" }\n.codicon-symbol-object:before { content: "\\ea8b" }\n.codicon-symbol-method:before { content: "\\ea8c" }\n.codicon-symbol-function:before { content: "\\ea8c" }\n.codicon-symbol-constructor:before { content: "\\ea8c" }\n.codicon-symbol-boolean:before { content: "\\ea8f" }\n.codicon-symbol-null:before { content: "\\ea8f" }\n.codicon-symbol-numeric:before { content: "\\ea90" }\n.codicon-symbol-number:before { content: "\\ea90" }\n.codicon-symbol-structure:before { content: "\\ea91" }\n.codicon-symbol-struct:before { content: "\\ea91" }\n.codicon-symbol-parameter:before { content: "\\ea92" }\n.codicon-symbol-type-parameter:before { content: "\\ea92" }\n.codicon-symbol-key:before { content: "\\ea93" }\n.codicon-symbol-text:before { content: "\\ea93" }\n.codicon-symbol-reference:before { content: "\\ea94" }\n.codicon-go-to-file:before { content: "\\ea94" }\n.codicon-symbol-enum:before { content: "\\ea95" }\n.codicon-symbol-value:before { content: "\\ea95" }\n.codicon-symbol-ruler:before { content: "\\ea96" }\n.codicon-symbol-unit:before { content: "\\ea96" }\n.codicon-activate-breakpoints:before { content: "\\ea97" }\n.codicon-archive:before { content: "\\ea98" }\n.codicon-arrow-both:before { content: "\\ea99" }\n.codicon-arrow-down:before { content: "\\ea9a" }\n.codicon-arrow-left:before { content: "\\ea9b" }\n.codicon-arrow-right:before { content: "\\ea9c" }\n.codicon-arrow-small-down:before { content: "\\ea9d" }\n.codicon-arrow-small-left:before { content: "\\ea9e" }\n.codicon-arrow-small-right:before { content: "\\ea9f" }\n.codicon-arrow-small-up:before { content: "\\eaa0" }\n.codicon-arrow-up:before { content: "\\eaa1" }\n.codicon-bell:before { content: "\\eaa2" }\n.codicon-bold:before { content: "\\eaa3" }\n.codicon-book:before { content: "\\eaa4" }\n.codicon-bookmark:before { content: "\\eaa5" }\n.codicon-debug-breakpoint-conditional-unverified:before { content: "\\eaa6" }\n.codicon-debug-breakpoint-conditional:before { content: "\\eaa7" }\n.codicon-debug-breakpoint-conditional-disabled:before { content: "\\eaa7" }\n.codicon-debug-breakpoint-data-unverified:before { content: "\\eaa8" }\n.codicon-debug-breakpoint-data:before { content: "\\eaa9" }\n.codicon-debug-breakpoint-data-disabled:before { content: "\\eaa9" }\n.codicon-debug-breakpoint-log-unverified:before { content: "\\eaaa" }\n.codicon-debug-breakpoint-log:before { content: "\\eaab" }\n.codicon-debug-breakpoint-log-disabled:before { content: "\\eaab" }\n.codicon-briefcase:before { content: "\\eaac" }\n.codicon-broadcast:before { content: "\\eaad" }\n.codicon-browser:before { content: "\\eaae" }\n.codicon-bug:before { content: "\\eaaf" }\n.codicon-calendar:before { content: "\\eab0" }\n.codicon-case-sensitive:before { content: "\\eab1" }\n.codicon-check:before { content: "\\eab2" }\n.codicon-checklist:before { content: "\\eab3" }\n.codicon-chevron-down:before { content: "\\eab4" }\n.codicon-chevron-left:before { content: "\\eab5" }\n.codicon-chevron-right:before { content: "\\eab6" }\n.codicon-chevron-up:before { content: "\\eab7" }\n.codicon-chrome-close:before { content: "\\eab8" }\n.codicon-chrome-maximize:before { content: "\\eab9" }\n.codicon-chrome-minimize:before { content: "\\eaba" }\n.codicon-chrome-restore:before { content: "\\eabb" }\n.codicon-circle-outline:before { content: "\\eabc" }\n.codicon-debug-breakpoint-unverified:before { content: "\\eabc" }\n.codicon-circle-slash:before { content: "\\eabd" }\n.codicon-circuit-board:before { content: "\\eabe" }\n.codicon-clear-all:before { content: "\\eabf" }\n.codicon-clippy:before { content: "\\eac0" }\n.codicon-close-all:before { content: "\\eac1" }\n.codicon-cloud-download:before { content: "\\eac2" }\n.codicon-cloud-upload:before { content: "\\eac3" }\n.codicon-code:before { content: "\\eac4" }\n.codicon-collapse-all:before { content: "\\eac5" }\n.codicon-color-mode:before { content: "\\eac6" }\n.codicon-comment-discussion:before { content: "\\eac7" }\n.codicon-credit-card:before { content: "\\eac9" }\n.codicon-dash:before { content: "\\eacc" }\n.codicon-dashboard:before { content: "\\eacd" }\n.codicon-database:before { content: "\\eace" }\n.codicon-debug-continue:before { content: "\\eacf" }\n.codicon-debug-disconnect:before { content: "\\ead0" }\n.codicon-debug-pause:before { content: "\\ead1" }\n.codicon-debug-restart:before { content: "\\ead2" }\n.codicon-debug-start:before { content: "\\ead3" }\n.codicon-debug-step-into:before { content: "\\ead4" }\n.codicon-debug-step-out:before { content: "\\ead5" }\n.codicon-debug-step-over:before { content: "\\ead6" }\n.codicon-debug-stop:before { content: "\\ead7" }\n.codicon-debug:before { content: "\\ead8" }\n.codicon-device-camera-video:before { content: "\\ead9" }\n.codicon-device-camera:before { content: "\\eada" }\n.codicon-device-mobile:before { content: "\\eadb" }\n.codicon-diff-added:before { content: "\\eadc" }\n.codicon-diff-ignored:before { content: "\\eadd" }\n.codicon-diff-modified:before { content: "\\eade" }\n.codicon-diff-removed:before { content: "\\eadf" }\n.codicon-diff-renamed:before { content: "\\eae0" }\n.codicon-diff:before { content: "\\eae1" }\n.codicon-discard:before { content: "\\eae2" }\n.codicon-editor-layout:before { content: "\\eae3" }\n.codicon-empty-window:before { content: "\\eae4" }\n.codicon-exclude:before { content: "\\eae5" }\n.codicon-extensions:before { content: "\\eae6" }\n.codicon-eye-closed:before { content: "\\eae7" }\n.codicon-file-binary:before { content: "\\eae8" }\n.codicon-file-code:before { content: "\\eae9" }\n.codicon-file-media:before { content: "\\eaea" }\n.codicon-file-pdf:before { content: "\\eaeb" }\n.codicon-file-submodule:before { content: "\\eaec" }\n.codicon-file-symlink-directory:before { content: "\\eaed" }\n.codicon-file-symlink-file:before { content: "\\eaee" }\n.codicon-file-zip:before { content: "\\eaef" }\n.codicon-files:before { content: "\\eaf0" }\n.codicon-filter:before { content: "\\eaf1" }\n.codicon-flame:before { content: "\\eaf2" }\n.codicon-fold-down:before { content: "\\eaf3" }\n.codicon-fold-up:before { content: "\\eaf4" }\n.codicon-fold:before { content: "\\eaf5" }\n.codicon-folder-active:before { content: "\\eaf6" }\n.codicon-folder-opened:before { content: "\\eaf7" }\n.codicon-gear:before { content: "\\eaf8" }\n.codicon-gift:before { content: "\\eaf9" }\n.codicon-gist-secret:before { content: "\\eafa" }\n.codicon-gist:before { content: "\\eafb" }\n.codicon-git-commit:before { content: "\\eafc" }\n.codicon-git-compare:before { content: "\\eafd" }\n.codicon-compare-changes:before { content: "\\eafd" }\n.codicon-git-merge:before { content: "\\eafe" }\n.codicon-github-action:before { content: "\\eaff" }\n.codicon-github-alt:before { content: "\\eb00" }\n.codicon-globe:before { content: "\\eb01" }\n.codicon-grabber:before { content: "\\eb02" }\n.codicon-graph:before { content: "\\eb03" }\n.codicon-gripper:before { content: "\\eb04" }\n.codicon-heart:before { content: "\\eb05" }\n.codicon-home:before { content: "\\eb06" }\n.codicon-horizontal-rule:before { content: "\\eb07" }\n.codicon-hubot:before { content: "\\eb08" }\n.codicon-inbox:before { content: "\\eb09" }\n.codicon-issue-reopened:before { content: "\\eb0b" }\n.codicon-issues:before { content: "\\eb0c" }\n.codicon-italic:before { content: "\\eb0d" }\n.codicon-jersey:before { content: "\\eb0e" }\n.codicon-json:before { content: "\\eb0f" }\n.codicon-kebab-vertical:before { content: "\\eb10" }\n.codicon-key:before { content: "\\eb11" }\n.codicon-law:before { content: "\\eb12" }\n.codicon-lightbulb-autofix:before { content: "\\eb13" }\n.codicon-link-external:before { content: "\\eb14" }\n.codicon-link:before { content: "\\eb15" }\n.codicon-list-ordered:before { content: "\\eb16" }\n.codicon-list-unordered:before { content: "\\eb17" }\n.codicon-live-share:before { content: "\\eb18" }\n.codicon-loading:before { content: "\\eb19" }\n.codicon-location:before { content: "\\eb1a" }\n.codicon-mail-read:before { content: "\\eb1b" }\n.codicon-mail:before { content: "\\eb1c" }\n.codicon-markdown:before { content: "\\eb1d" }\n.codicon-megaphone:before { content: "\\eb1e" }\n.codicon-mention:before { content: "\\eb1f" }\n.codicon-milestone:before { content: "\\eb20" }\n.codicon-mortar-board:before { content: "\\eb21" }\n.codicon-move:before { content: "\\eb22" }\n.codicon-multiple-windows:before { content: "\\eb23" }\n.codicon-mute:before { content: "\\eb24" }\n.codicon-no-newline:before { content: "\\eb25" }\n.codicon-note:before { content: "\\eb26" }\n.codicon-octoface:before { content: "\\eb27" }\n.codicon-open-preview:before { content: "\\eb28" }\n.codicon-package:before { content: "\\eb29" }\n.codicon-paintcan:before { content: "\\eb2a" }\n.codicon-pin:before { content: "\\eb2b" }\n.codicon-play:before { content: "\\eb2c" }\n.codicon-run:before { content: "\\eb2c" }\n.codicon-plug:before { content: "\\eb2d" }\n.codicon-preserve-case:before { content: "\\eb2e" }\n.codicon-preview:before { content: "\\eb2f" }\n.codicon-project:before { content: "\\eb30" }\n.codicon-pulse:before { content: "\\eb31" }\n.codicon-question:before { content: "\\eb32" }\n.codicon-quote:before { content: "\\eb33" }\n.codicon-radio-tower:before { content: "\\eb34" }\n.codicon-reactions:before { content: "\\eb35" }\n.codicon-references:before { content: "\\eb36" }\n.codicon-refresh:before { content: "\\eb37" }\n.codicon-regex:before { content: "\\eb38" }\n.codicon-remote-explorer:before { content: "\\eb39" }\n.codicon-remote:before { content: "\\eb3a" }\n.codicon-remove:before { content: "\\eb3b" }\n.codicon-replace-all:before { content: "\\eb3c" }\n.codicon-replace:before { content: "\\eb3d" }\n.codicon-repo-clone:before { content: "\\eb3e" }\n.codicon-repo-force-push:before { content: "\\eb3f" }\n.codicon-repo-pull:before { content: "\\eb40" }\n.codicon-repo-push:before { content: "\\eb41" }\n.codicon-report:before { content: "\\eb42" }\n.codicon-request-changes:before { content: "\\eb43" }\n.codicon-rocket:before { content: "\\eb44" }\n.codicon-root-folder-opened:before { content: "\\eb45" }\n.codicon-root-folder:before { content: "\\eb46" }\n.codicon-rss:before { content: "\\eb47" }\n.codicon-ruby:before { content: "\\eb48" }\n.codicon-save-all:before { content: "\\eb49" }\n.codicon-save-as:before { content: "\\eb4a" }\n.codicon-save:before { content: "\\eb4b" }\n.codicon-screen-full:before { content: "\\eb4c" }\n.codicon-screen-normal:before { content: "\\eb4d" }\n.codicon-search-stop:before { content: "\\eb4e" }\n.codicon-server:before { content: "\\eb50" }\n.codicon-settings-gear:before { content: "\\eb51" }\n.codicon-settings:before { content: "\\eb52" }\n.codicon-shield:before { content: "\\eb53" }\n.codicon-smiley:before { content: "\\eb54" }\n.codicon-sort-precedence:before { content: "\\eb55" }\n.codicon-split-horizontal:before { content: "\\eb56" }\n.codicon-split-vertical:before { content: "\\eb57" }\n.codicon-squirrel:before { content: "\\eb58" }\n.codicon-star-full:before { content: "\\eb59" }\n.codicon-star-half:before { content: "\\eb5a" }\n.codicon-symbol-class:before { content: "\\eb5b" }\n.codicon-symbol-color:before { content: "\\eb5c" }\n.codicon-symbol-constant:before { content: "\\eb5d" }\n.codicon-symbol-enum-member:before { content: "\\eb5e" }\n.codicon-symbol-field:before { content: "\\eb5f" }\n.codicon-symbol-file:before { content: "\\eb60" }\n.codicon-symbol-interface:before { content: "\\eb61" }\n.codicon-symbol-keyword:before { content: "\\eb62" }\n.codicon-symbol-misc:before { content: "\\eb63" }\n.codicon-symbol-operator:before { content: "\\eb64" }\n.codicon-symbol-property:before { content: "\\eb65" }\n.codicon-wrench:before { content: "\\eb65" }\n.codicon-wrench-subaction:before { content: "\\eb65" }\n.codicon-symbol-snippet:before { content: "\\eb66" }\n.codicon-tasklist:before { content: "\\eb67" }\n.codicon-telescope:before { content: "\\eb68" }\n.codicon-text-size:before { content: "\\eb69" }\n.codicon-three-bars:before { content: "\\eb6a" }\n.codicon-thumbsdown:before { content: "\\eb6b" }\n.codicon-thumbsup:before { content: "\\eb6c" }\n.codicon-tools:before { content: "\\eb6d" }\n.codicon-triangle-down:before { content: "\\eb6e" }\n.codicon-triangle-left:before { content: "\\eb6f" }\n.codicon-triangle-right:before { content: "\\eb70" }\n.codicon-triangle-up:before { content: "\\eb71" }\n.codicon-twitter:before { content: "\\eb72" }\n.codicon-unfold:before { content: "\\eb73" }\n.codicon-unlock:before { content: "\\eb74" }\n.codicon-unmute:before { content: "\\eb75" }\n.codicon-unverified:before { content: "\\eb76" }\n.codicon-verified:before { content: "\\eb77" }\n.codicon-versions:before { content: "\\eb78" }\n.codicon-vm-active:before { content: "\\eb79" }\n.codicon-vm-outline:before { content: "\\eb7a" }\n.codicon-vm-running:before { content: "\\eb7b" }\n.codicon-watch:before { content: "\\eb7c" }\n.codicon-whitespace:before { content: "\\eb7d" }\n.codicon-whole-word:before { content: "\\eb7e" }\n.codicon-window:before { content: "\\eb7f" }\n.codicon-word-wrap:before { content: "\\eb80" }\n.codicon-zoom-in:before { content: "\\eb81" }\n.codicon-zoom-out:before { content: "\\eb82" }\n.codicon-list-filter:before { content: "\\eb83" }\n.codicon-list-flat:before { content: "\\eb84" }\n.codicon-list-selection:before { content: "\\eb85" }\n.codicon-selection:before { content: "\\eb85" }\n.codicon-list-tree:before { content: "\\eb86" }\n.codicon-debug-breakpoint-function-unverified:before { content: "\\eb87" }\n.codicon-debug-breakpoint-function:before { content: "\\eb88" }\n.codicon-debug-breakpoint-function-disabled:before { content: "\\eb88" }\n.codicon-debug-stackframe-active:before { content: "\\eb89" }\n.codicon-circle-small-filled:before { content: "\\eb8a" }\n.codicon-debug-stackframe-dot:before { content: "\\eb8a" }\n.codicon-debug-stackframe:before { content: "\\eb8b" }\n.codicon-debug-stackframe-focused:before { content: "\\eb8b" }\n.codicon-debug-breakpoint-unsupported:before { content: "\\eb8c" }\n.codicon-symbol-string:before { content: "\\eb8d" }\n.codicon-debug-reverse-continue:before { content: "\\eb8e" }\n.codicon-debug-step-back:before { content: "\\eb8f" }\n.codicon-debug-restart-frame:before { content: "\\eb90" }\n.codicon-debug-alt:before { content: "\\eb91" }\n.codicon-call-incoming:before { content: "\\eb92" }\n.codicon-call-outgoing:before { content: "\\eb93" }\n.codicon-menu:before { content: "\\eb94" }\n.codicon-expand-all:before { content: "\\eb95" }\n.codicon-feedback:before { content: "\\eb96" }\n.codicon-group-by-ref-type:before { content: "\\eb97" }\n.codicon-ungroup-by-ref-type:before { content: "\\eb98" }\n.codicon-account:before { content: "\\eb99" }\n.codicon-bell-dot:before { content: "\\eb9a" }\n.codicon-debug-console:before { content: "\\eb9b" }\n.codicon-library:before { content: "\\eb9c" }\n.codicon-output:before { content: "\\eb9d" }\n.codicon-run-all:before { content: "\\eb9e" }\n.codicon-sync-ignored:before { content: "\\eb9f" }\n.codicon-pinned:before { content: "\\eba0" }\n.codicon-github-inverted:before { content: "\\eba1" }\n.codicon-server-process:before { content: "\\eba2" }\n.codicon-server-environment:before { content: "\\eba3" }\n.codicon-pass:before { content: "\\eba4" }\n.codicon-issue-closed:before { content: "\\eba4" }\n.codicon-stop-circle:before { content: "\\eba5" }\n.codicon-play-circle:before { content: "\\eba6" }\n.codicon-record:before { content: "\\eba7" }\n.codicon-debug-alt-small:before { content: "\\eba8" }\n.codicon-vm-connect:before { content: "\\eba9" }\n.codicon-cloud:before { content: "\\ebaa" }\n.codicon-merge:before { content: "\\ebab" }\n.codicon-export:before { content: "\\ebac" }\n.codicon-graph-left:before { content: "\\ebad" }\n.codicon-magnet:before { content: "\\ebae" }\n.codicon-notebook:before { content: "\\ebaf" }\n.codicon-redo:before { content: "\\ebb0" }\n.codicon-check-all:before { content: "\\ebb1" }\n.codicon-pinned-dirty:before { content: "\\ebb2" }\n.codicon-pass-filled:before { content: "\\ebb3" }\n.codicon-circle-large-filled:before { content: "\\ebb4" }\n.codicon-circle-large-outline:before { content: "\\ebb5" }\n.codicon-combine:before { content: "\\ebb6" }\n.codicon-gather:before { content: "\\ebb6" }\n.codicon-table:before { content: "\\ebb7" }\n.codicon-variable-group:before { content: "\\ebb8" }\n.codicon-type-hierarchy:before { content: "\\ebb9" }\n.codicon-type-hierarchy-sub:before { content: "\\ebba" }\n.codicon-type-hierarchy-super:before { content: "\\ebbb" }\n.codicon-git-pull-request-create:before { content: "\\ebbc" }\n.codicon-run-above:before { content: "\\ebbd" }\n.codicon-run-below:before { content: "\\ebbe" }\n.codicon-notebook-template:before { content: "\\ebbf" }\n.codicon-debug-rerun:before { content: "\\ebc0" }\n.codicon-workspace-trusted:before { content: "\\ebc1" }\n.codicon-workspace-untrusted:before { content: "\\ebc2" }\n.codicon-workspace-unknown:before { content: "\\ebc3" }\n.codicon-terminal-cmd:before { content: "\\ebc4" }\n.codicon-terminal-debian:before { content: "\\ebc5" }\n.codicon-terminal-linux:before { content: "\\ebc6" }\n.codicon-terminal-powershell:before { content: "\\ebc7" }\n.codicon-terminal-tmux:before { content: "\\ebc8" }\n.codicon-terminal-ubuntu:before { content: "\\ebc9" }\n.codicon-terminal-bash:before { content: "\\ebca" }\n.codicon-arrow-swap:before { content: "\\ebcb" }\n.codicon-copy:before { content: "\\ebcc" }\n.codicon-person-add:before { content: "\\ebcd" }\n.codicon-filter-filled:before { content: "\\ebce" }\n.codicon-wand:before { content: "\\ebcf" }\n.codicon-debug-line-by-line:before { content: "\\ebd0" }\n.codicon-inspect:before { content: "\\ebd1" }\n.codicon-layers:before { content: "\\ebd2" }\n.codicon-layers-dot:before { content: "\\ebd3" }\n.codicon-layers-active:before { content: "\\ebd4" }\n.codicon-compass:before { content: "\\ebd5" }\n.codicon-compass-dot:before { content: "\\ebd6" }\n.codicon-compass-active:before { content: "\\ebd7" }\n.codicon-azure:before { content: "\\ebd8" }\n.codicon-issue-draft:before { content: "\\ebd9" }\n.codicon-git-pull-request-closed:before { content: "\\ebda" }\n.codicon-git-pull-request-draft:before { content: "\\ebdb" }\n.codicon-debug-all:before { content: "\\ebdc" }\n.codicon-debug-coverage:before { content: "\\ebdd" }\n.codicon-run-errors:before { content: "\\ebde" }\n.codicon-folder-library:before { content: "\\ebdf" }\n.codicon-debug-continue-small:before { content: "\\ebe0" }\n.codicon-beaker-stop:before { content: "\\ebe1" }\n.codicon-graph-line:before { content: "\\ebe2" }\n.codicon-graph-scatter:before { content: "\\ebe3" }\n.codicon-pie-chart:before { content: "\\ebe4" }\n.codicon-bracket:before { content: "\\eb0f" }\n.codicon-bracket-dot:before { content: "\\ebe5" }\n.codicon-bracket-error:before { content: "\\ebe6" }\n.codicon-lock-small:before { content: "\\ebe7" }\n.codicon-azure-devops:before { content: "\\ebe8" }\n.codicon-verified-filled:before { content: "\\ebe9" }\n.codicon-newline:before { content: "\\ebea" }\n.codicon-layout:before { content: "\\ebeb" }\n.codicon-layout-activitybar-left:before { content: "\\ebec" }\n.codicon-layout-activitybar-right:before { content: "\\ebed" }\n.codicon-layout-panel-left:before { content: "\\ebee" }\n.codicon-layout-panel-center:before { content: "\\ebef" }\n.codicon-layout-panel-justify:before { content: "\\ebf0" }\n.codicon-layout-panel-right:before { content: "\\ebf1" }\n.codicon-layout-panel:before { content: "\\ebf2" }\n.codicon-layout-sidebar-left:before { content: "\\ebf3" }\n.codicon-layout-sidebar-right:before { content: "\\ebf4" }\n.codicon-layout-statusbar:before { content: "\\ebf5" }\n.codicon-layout-menubar:before { content: "\\ebf6" }\n.codicon-layout-centered:before { content: "\\ebf7" }\n.codicon-target:before { content: "\\ebf8" }\n.codicon-indent:before { content: "\\ebf9" }\n.codicon-record-small:before { content: "\\ebfa" }\n.codicon-error-small:before { content: "\\ebfb" }\n.codicon-arrow-circle-down:before { content: "\\ebfc" }\n.codicon-arrow-circle-left:before { content: "\\ebfd" }\n.codicon-arrow-circle-right:before { content: "\\ebfe" }\n.codicon-arrow-circle-up:before { content: "\\ebff" }\n.codicon-layout-sidebar-right-off:before { content: "\\ec00" }\n.codicon-layout-panel-off:before { content: "\\ec01" }\n.codicon-layout-sidebar-left-off:before { content: "\\ec02" }\n.codicon-blank:before { content: "\\ec03" }\n.codicon-heart-filled:before { content: "\\ec04" }\n.codicon-map:before { content: "\\ec05" }\n.codicon-map-filled:before { content: "\\ec06" }\n.codicon-circle-small:before { content: "\\ec07" }\n.codicon-bell-slash:before { content: "\\ec08" }\n.codicon-bell-slash-dot:before { content: "\\ec09" }\n.codicon-comment-unresolved:before { content: "\\ec0a" }\n.codicon-git-pull-request-go-to-changes:before { content: "\\ec0b" }\n.codicon-git-pull-request-new-changes:before { content: "\\ec0c" }\n\n@layer kol-component {\n\t:host {\n\t\tcolor: inherit;\n\t\tdisplay: contents;\n\t\theight: 1em;\n\t\tline-height: inherit;\n\t\twidth: 1em;\n\t}\n\n\t:host > i {\n\t\theight: 1em;\n\t\twidth: 1em;\n\t}\n\n\t/*\n   * The <code>:important</code> is important, because we should always override the font icon style.\n   */\n\t:host > i,\n\t:host > i:before {\n\t\tfont-size: inherit !important;\n\t}\n}\n'}}}]);