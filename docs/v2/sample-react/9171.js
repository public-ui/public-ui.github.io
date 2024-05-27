/*! For license information please see 9171.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9171],{9171:(n,e,o)=>{o.r(e),o.d(e,{kol_icon:()=>r});var c=o(3185),t=o(5445),b=o(7418);const r=class{constructor(n){(0,c.r)(this,n),this._icons=void 0,this._label=void 0,this.state={_icons:"codicon codicon-home",_label:""}}render(){const n=this.state._label.length>0;return(0,c.h)(c.H,{key:"6f3cb974496a4f84a7e5c0712af1df89e8d09ced",exportparts:"icon",class:"kol-icon"},(0,c.h)("i",{key:"988ccb3b3521fedb0c39d141cb3e1865b5cfc603","aria-hidden":n?void 0:"true","aria-label":n?this.state._label:void 0,class:this.state._icons,part:"icon",role:"img"}))}validateIcons(n){(0,t.i)(this,"_icons",n,{required:!0})}validateLabel(n){(0,b.v)(this,n,{required:!0})}componentWillLoad(){this.validateIcons(this._icons),this.validateLabel(this._label)}static get watchers(){return{_icons:["validateIcons"],_label:["validateLabel"]}}};r.style={default:'/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n@font-face {\n  font-family: "codicon";\n  font-display: block;\n  src: url("./codicon.ttf?0e5b0adf625a37fbcd638d31f0fe72aa") format("truetype");\n}\n.codicon[class*=codicon-] {\n  font: normal normal normal 16px/1 codicon;\n  display: inline-block;\n  text-decoration: none;\n  text-rendering: auto;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n/*---------------------\n *  Modifiers\n *-------------------*/\n@keyframes codicon-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.codicon-sync.codicon-modifier-spin,\n.codicon-loading.codicon-modifier-spin,\n.codicon-gear.codicon-modifier-spin {\n  /* Use steps to throttle FPS to reduce CPU usage */\n  animation: codicon-spin 1.5s steps(30) infinite;\n}\n\n.codicon-modifier-disabled {\n  opacity: 0.5;\n}\n\n.codicon-modifier-hidden {\n  opacity: 0;\n}\n\n/* custom speed & easing for loading icon */\n.codicon-loading {\n  animation-duration: 1s !important;\n  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;\n}\n\n/*---------------------\n *  Icons\n *-------------------*/\n.codicon-add:before {\n  content: "\\ea60";\n}\n\n.codicon-plus:before {\n  content: "\\ea60";\n}\n\n.codicon-gist-new:before {\n  content: "\\ea60";\n}\n\n.codicon-repo-create:before {\n  content: "\\ea60";\n}\n\n.codicon-lightbulb:before {\n  content: "\\ea61";\n}\n\n.codicon-light-bulb:before {\n  content: "\\ea61";\n}\n\n.codicon-repo:before {\n  content: "\\ea62";\n}\n\n.codicon-repo-delete:before {\n  content: "\\ea62";\n}\n\n.codicon-gist-fork:before {\n  content: "\\ea63";\n}\n\n.codicon-repo-forked:before {\n  content: "\\ea63";\n}\n\n.codicon-git-pull-request:before {\n  content: "\\ea64";\n}\n\n.codicon-git-pull-request-abandoned:before {\n  content: "\\ea64";\n}\n\n.codicon-record-keys:before {\n  content: "\\ea65";\n}\n\n.codicon-keyboard:before {\n  content: "\\ea65";\n}\n\n.codicon-tag:before {\n  content: "\\ea66";\n}\n\n.codicon-tag-add:before {\n  content: "\\ea66";\n}\n\n.codicon-tag-remove:before {\n  content: "\\ea66";\n}\n\n.codicon-person:before {\n  content: "\\ea67";\n}\n\n.codicon-person-follow:before {\n  content: "\\ea67";\n}\n\n.codicon-person-outline:before {\n  content: "\\ea67";\n}\n\n.codicon-person-filled:before {\n  content: "\\ea67";\n}\n\n.codicon-git-branch:before {\n  content: "\\ea68";\n}\n\n.codicon-git-branch-create:before {\n  content: "\\ea68";\n}\n\n.codicon-git-branch-delete:before {\n  content: "\\ea68";\n}\n\n.codicon-source-control:before {\n  content: "\\ea68";\n}\n\n.codicon-mirror:before {\n  content: "\\ea69";\n}\n\n.codicon-mirror-public:before {\n  content: "\\ea69";\n}\n\n.codicon-star:before {\n  content: "\\ea6a";\n}\n\n.codicon-star-add:before {\n  content: "\\ea6a";\n}\n\n.codicon-star-delete:before {\n  content: "\\ea6a";\n}\n\n.codicon-star-empty:before {\n  content: "\\ea6a";\n}\n\n.codicon-comment:before {\n  content: "\\ea6b";\n}\n\n.codicon-comment-add:before {\n  content: "\\ea6b";\n}\n\n.codicon-alert:before {\n  content: "\\ea6c";\n}\n\n.codicon-warning:before {\n  content: "\\ea6c";\n}\n\n.codicon-search:before {\n  content: "\\ea6d";\n}\n\n.codicon-search-save:before {\n  content: "\\ea6d";\n}\n\n.codicon-log-out:before {\n  content: "\\ea6e";\n}\n\n.codicon-sign-out:before {\n  content: "\\ea6e";\n}\n\n.codicon-log-in:before {\n  content: "\\ea6f";\n}\n\n.codicon-sign-in:before {\n  content: "\\ea6f";\n}\n\n.codicon-eye:before {\n  content: "\\ea70";\n}\n\n.codicon-eye-unwatch:before {\n  content: "\\ea70";\n}\n\n.codicon-eye-watch:before {\n  content: "\\ea70";\n}\n\n.codicon-circle-filled:before {\n  content: "\\ea71";\n}\n\n.codicon-primitive-dot:before {\n  content: "\\ea71";\n}\n\n.codicon-close-dirty:before {\n  content: "\\ea71";\n}\n\n.codicon-debug-breakpoint:before {\n  content: "\\ea71";\n}\n\n.codicon-debug-breakpoint-disabled:before {\n  content: "\\ea71";\n}\n\n.codicon-debug-hint:before {\n  content: "\\ea71";\n}\n\n.codicon-primitive-square:before {\n  content: "\\ea72";\n}\n\n.codicon-edit:before {\n  content: "\\ea73";\n}\n\n.codicon-pencil:before {\n  content: "\\ea73";\n}\n\n.codicon-info:before {\n  content: "\\ea74";\n}\n\n.codicon-issue-opened:before {\n  content: "\\ea74";\n}\n\n.codicon-gist-private:before {\n  content: "\\ea75";\n}\n\n.codicon-git-fork-private:before {\n  content: "\\ea75";\n}\n\n.codicon-lock:before {\n  content: "\\ea75";\n}\n\n.codicon-mirror-private:before {\n  content: "\\ea75";\n}\n\n.codicon-close:before {\n  content: "\\ea76";\n}\n\n.codicon-remove-close:before {\n  content: "\\ea76";\n}\n\n.codicon-x:before {\n  content: "\\ea76";\n}\n\n.codicon-repo-sync:before {\n  content: "\\ea77";\n}\n\n.codicon-sync:before {\n  content: "\\ea77";\n}\n\n.codicon-clone:before {\n  content: "\\ea78";\n}\n\n.codicon-desktop-download:before {\n  content: "\\ea78";\n}\n\n.codicon-beaker:before {\n  content: "\\ea79";\n}\n\n.codicon-microscope:before {\n  content: "\\ea79";\n}\n\n.codicon-vm:before {\n  content: "\\ea7a";\n}\n\n.codicon-device-desktop:before {\n  content: "\\ea7a";\n}\n\n.codicon-file:before {\n  content: "\\ea7b";\n}\n\n.codicon-file-text:before {\n  content: "\\ea7b";\n}\n\n.codicon-more:before {\n  content: "\\ea7c";\n}\n\n.codicon-ellipsis:before {\n  content: "\\ea7c";\n}\n\n.codicon-kebab-horizontal:before {\n  content: "\\ea7c";\n}\n\n.codicon-mail-reply:before {\n  content: "\\ea7d";\n}\n\n.codicon-reply:before {\n  content: "\\ea7d";\n}\n\n.codicon-organization:before {\n  content: "\\ea7e";\n}\n\n.codicon-organization-filled:before {\n  content: "\\ea7e";\n}\n\n.codicon-organization-outline:before {\n  content: "\\ea7e";\n}\n\n.codicon-new-file:before {\n  content: "\\ea7f";\n}\n\n.codicon-file-add:before {\n  content: "\\ea7f";\n}\n\n.codicon-new-folder:before {\n  content: "\\ea80";\n}\n\n.codicon-file-directory-create:before {\n  content: "\\ea80";\n}\n\n.codicon-trash:before {\n  content: "\\ea81";\n}\n\n.codicon-trashcan:before {\n  content: "\\ea81";\n}\n\n.codicon-history:before {\n  content: "\\ea82";\n}\n\n.codicon-clock:before {\n  content: "\\ea82";\n}\n\n.codicon-folder:before {\n  content: "\\ea83";\n}\n\n.codicon-file-directory:before {\n  content: "\\ea83";\n}\n\n.codicon-symbol-folder:before {\n  content: "\\ea83";\n}\n\n.codicon-logo-github:before {\n  content: "\\ea84";\n}\n\n.codicon-mark-github:before {\n  content: "\\ea84";\n}\n\n.codicon-github:before {\n  content: "\\ea84";\n}\n\n.codicon-terminal:before {\n  content: "\\ea85";\n}\n\n.codicon-console:before {\n  content: "\\ea85";\n}\n\n.codicon-repl:before {\n  content: "\\ea85";\n}\n\n.codicon-zap:before {\n  content: "\\ea86";\n}\n\n.codicon-symbol-event:before {\n  content: "\\ea86";\n}\n\n.codicon-error:before {\n  content: "\\ea87";\n}\n\n.codicon-stop:before {\n  content: "\\ea87";\n}\n\n.codicon-variable:before {\n  content: "\\ea88";\n}\n\n.codicon-symbol-variable:before {\n  content: "\\ea88";\n}\n\n.codicon-array:before {\n  content: "\\ea8a";\n}\n\n.codicon-symbol-array:before {\n  content: "\\ea8a";\n}\n\n.codicon-symbol-module:before {\n  content: "\\ea8b";\n}\n\n.codicon-symbol-package:before {\n  content: "\\ea8b";\n}\n\n.codicon-symbol-namespace:before {\n  content: "\\ea8b";\n}\n\n.codicon-symbol-object:before {\n  content: "\\ea8b";\n}\n\n.codicon-symbol-method:before {\n  content: "\\ea8c";\n}\n\n.codicon-symbol-function:before {\n  content: "\\ea8c";\n}\n\n.codicon-symbol-constructor:before {\n  content: "\\ea8c";\n}\n\n.codicon-symbol-boolean:before {\n  content: "\\ea8f";\n}\n\n.codicon-symbol-null:before {\n  content: "\\ea8f";\n}\n\n.codicon-symbol-numeric:before {\n  content: "\\ea90";\n}\n\n.codicon-symbol-number:before {\n  content: "\\ea90";\n}\n\n.codicon-symbol-structure:before {\n  content: "\\ea91";\n}\n\n.codicon-symbol-struct:before {\n  content: "\\ea91";\n}\n\n.codicon-symbol-parameter:before {\n  content: "\\ea92";\n}\n\n.codicon-symbol-type-parameter:before {\n  content: "\\ea92";\n}\n\n.codicon-symbol-key:before {\n  content: "\\ea93";\n}\n\n.codicon-symbol-text:before {\n  content: "\\ea93";\n}\n\n.codicon-symbol-reference:before {\n  content: "\\ea94";\n}\n\n.codicon-go-to-file:before {\n  content: "\\ea94";\n}\n\n.codicon-symbol-enum:before {\n  content: "\\ea95";\n}\n\n.codicon-symbol-value:before {\n  content: "\\ea95";\n}\n\n.codicon-symbol-ruler:before {\n  content: "\\ea96";\n}\n\n.codicon-symbol-unit:before {\n  content: "\\ea96";\n}\n\n.codicon-activate-breakpoints:before {\n  content: "\\ea97";\n}\n\n.codicon-archive:before {\n  content: "\\ea98";\n}\n\n.codicon-arrow-both:before {\n  content: "\\ea99";\n}\n\n.codicon-arrow-down:before {\n  content: "\\ea9a";\n}\n\n.codicon-arrow-left:before {\n  content: "\\ea9b";\n}\n\n.codicon-arrow-right:before {\n  content: "\\ea9c";\n}\n\n.codicon-arrow-small-down:before {\n  content: "\\ea9d";\n}\n\n.codicon-arrow-small-left:before {\n  content: "\\ea9e";\n}\n\n.codicon-arrow-small-right:before {\n  content: "\\ea9f";\n}\n\n.codicon-arrow-small-up:before {\n  content: "\\eaa0";\n}\n\n.codicon-arrow-up:before {\n  content: "\\eaa1";\n}\n\n.codicon-bell:before {\n  content: "\\eaa2";\n}\n\n.codicon-bold:before {\n  content: "\\eaa3";\n}\n\n.codicon-book:before {\n  content: "\\eaa4";\n}\n\n.codicon-bookmark:before {\n  content: "\\eaa5";\n}\n\n.codicon-debug-breakpoint-conditional-unverified:before {\n  content: "\\eaa6";\n}\n\n.codicon-debug-breakpoint-conditional:before {\n  content: "\\eaa7";\n}\n\n.codicon-debug-breakpoint-conditional-disabled:before {\n  content: "\\eaa7";\n}\n\n.codicon-debug-breakpoint-data-unverified:before {\n  content: "\\eaa8";\n}\n\n.codicon-debug-breakpoint-data:before {\n  content: "\\eaa9";\n}\n\n.codicon-debug-breakpoint-data-disabled:before {\n  content: "\\eaa9";\n}\n\n.codicon-debug-breakpoint-log-unverified:before {\n  content: "\\eaaa";\n}\n\n.codicon-debug-breakpoint-log:before {\n  content: "\\eaab";\n}\n\n.codicon-debug-breakpoint-log-disabled:before {\n  content: "\\eaab";\n}\n\n.codicon-briefcase:before {\n  content: "\\eaac";\n}\n\n.codicon-broadcast:before {\n  content: "\\eaad";\n}\n\n.codicon-browser:before {\n  content: "\\eaae";\n}\n\n.codicon-bug:before {\n  content: "\\eaaf";\n}\n\n.codicon-calendar:before {\n  content: "\\eab0";\n}\n\n.codicon-case-sensitive:before {\n  content: "\\eab1";\n}\n\n.codicon-check:before {\n  content: "\\eab2";\n}\n\n.codicon-checklist:before {\n  content: "\\eab3";\n}\n\n.codicon-chevron-down:before {\n  content: "\\eab4";\n}\n\n.codicon-chevron-left:before {\n  content: "\\eab5";\n}\n\n.codicon-chevron-right:before {\n  content: "\\eab6";\n}\n\n.codicon-chevron-up:before {\n  content: "\\eab7";\n}\n\n.codicon-chrome-close:before {\n  content: "\\eab8";\n}\n\n.codicon-chrome-maximize:before {\n  content: "\\eab9";\n}\n\n.codicon-chrome-minimize:before {\n  content: "\\eaba";\n}\n\n.codicon-chrome-restore:before {\n  content: "\\eabb";\n}\n\n.codicon-circle-outline:before {\n  content: "\\eabc";\n}\n\n.codicon-debug-breakpoint-unverified:before {\n  content: "\\eabc";\n}\n\n.codicon-circle-slash:before {\n  content: "\\eabd";\n}\n\n.codicon-circuit-board:before {\n  content: "\\eabe";\n}\n\n.codicon-clear-all:before {\n  content: "\\eabf";\n}\n\n.codicon-clippy:before {\n  content: "\\eac0";\n}\n\n.codicon-close-all:before {\n  content: "\\eac1";\n}\n\n.codicon-cloud-download:before {\n  content: "\\eac2";\n}\n\n.codicon-cloud-upload:before {\n  content: "\\eac3";\n}\n\n.codicon-code:before {\n  content: "\\eac4";\n}\n\n.codicon-collapse-all:before {\n  content: "\\eac5";\n}\n\n.codicon-color-mode:before {\n  content: "\\eac6";\n}\n\n.codicon-comment-discussion:before {\n  content: "\\eac7";\n}\n\n.codicon-credit-card:before {\n  content: "\\eac9";\n}\n\n.codicon-dash:before {\n  content: "\\eacc";\n}\n\n.codicon-dashboard:before {\n  content: "\\eacd";\n}\n\n.codicon-database:before {\n  content: "\\eace";\n}\n\n.codicon-debug-continue:before {\n  content: "\\eacf";\n}\n\n.codicon-debug-disconnect:before {\n  content: "\\ead0";\n}\n\n.codicon-debug-pause:before {\n  content: "\\ead1";\n}\n\n.codicon-debug-restart:before {\n  content: "\\ead2";\n}\n\n.codicon-debug-start:before {\n  content: "\\ead3";\n}\n\n.codicon-debug-step-into:before {\n  content: "\\ead4";\n}\n\n.codicon-debug-step-out:before {\n  content: "\\ead5";\n}\n\n.codicon-debug-step-over:before {\n  content: "\\ead6";\n}\n\n.codicon-debug-stop:before {\n  content: "\\ead7";\n}\n\n.codicon-debug:before {\n  content: "\\ead8";\n}\n\n.codicon-device-camera-video:before {\n  content: "\\ead9";\n}\n\n.codicon-device-camera:before {\n  content: "\\eada";\n}\n\n.codicon-device-mobile:before {\n  content: "\\eadb";\n}\n\n.codicon-diff-added:before {\n  content: "\\eadc";\n}\n\n.codicon-diff-ignored:before {\n  content: "\\eadd";\n}\n\n.codicon-diff-modified:before {\n  content: "\\eade";\n}\n\n.codicon-diff-removed:before {\n  content: "\\eadf";\n}\n\n.codicon-diff-renamed:before {\n  content: "\\eae0";\n}\n\n.codicon-diff:before {\n  content: "\\eae1";\n}\n\n.codicon-discard:before {\n  content: "\\eae2";\n}\n\n.codicon-editor-layout:before {\n  content: "\\eae3";\n}\n\n.codicon-empty-window:before {\n  content: "\\eae4";\n}\n\n.codicon-exclude:before {\n  content: "\\eae5";\n}\n\n.codicon-extensions:before {\n  content: "\\eae6";\n}\n\n.codicon-eye-closed:before {\n  content: "\\eae7";\n}\n\n.codicon-file-binary:before {\n  content: "\\eae8";\n}\n\n.codicon-file-code:before {\n  content: "\\eae9";\n}\n\n.codicon-file-media:before {\n  content: "\\eaea";\n}\n\n.codicon-file-pdf:before {\n  content: "\\eaeb";\n}\n\n.codicon-file-submodule:before {\n  content: "\\eaec";\n}\n\n.codicon-file-symlink-directory:before {\n  content: "\\eaed";\n}\n\n.codicon-file-symlink-file:before {\n  content: "\\eaee";\n}\n\n.codicon-file-zip:before {\n  content: "\\eaef";\n}\n\n.codicon-files:before {\n  content: "\\eaf0";\n}\n\n.codicon-filter:before {\n  content: "\\eaf1";\n}\n\n.codicon-flame:before {\n  content: "\\eaf2";\n}\n\n.codicon-fold-down:before {\n  content: "\\eaf3";\n}\n\n.codicon-fold-up:before {\n  content: "\\eaf4";\n}\n\n.codicon-fold:before {\n  content: "\\eaf5";\n}\n\n.codicon-folder-active:before {\n  content: "\\eaf6";\n}\n\n.codicon-folder-opened:before {\n  content: "\\eaf7";\n}\n\n.codicon-gear:before {\n  content: "\\eaf8";\n}\n\n.codicon-gift:before {\n  content: "\\eaf9";\n}\n\n.codicon-gist-secret:before {\n  content: "\\eafa";\n}\n\n.codicon-gist:before {\n  content: "\\eafb";\n}\n\n.codicon-git-commit:before {\n  content: "\\eafc";\n}\n\n.codicon-git-compare:before {\n  content: "\\eafd";\n}\n\n.codicon-compare-changes:before {\n  content: "\\eafd";\n}\n\n.codicon-git-merge:before {\n  content: "\\eafe";\n}\n\n.codicon-github-action:before {\n  content: "\\eaff";\n}\n\n.codicon-github-alt:before {\n  content: "\\eb00";\n}\n\n.codicon-globe:before {\n  content: "\\eb01";\n}\n\n.codicon-grabber:before {\n  content: "\\eb02";\n}\n\n.codicon-graph:before {\n  content: "\\eb03";\n}\n\n.codicon-gripper:before {\n  content: "\\eb04";\n}\n\n.codicon-heart:before {\n  content: "\\eb05";\n}\n\n.codicon-home:before {\n  content: "\\eb06";\n}\n\n.codicon-horizontal-rule:before {\n  content: "\\eb07";\n}\n\n.codicon-hubot:before {\n  content: "\\eb08";\n}\n\n.codicon-inbox:before {\n  content: "\\eb09";\n}\n\n.codicon-issue-reopened:before {\n  content: "\\eb0b";\n}\n\n.codicon-issues:before {\n  content: "\\eb0c";\n}\n\n.codicon-italic:before {\n  content: "\\eb0d";\n}\n\n.codicon-jersey:before {\n  content: "\\eb0e";\n}\n\n.codicon-json:before {\n  content: "\\eb0f";\n}\n\n.codicon-kebab-vertical:before {\n  content: "\\eb10";\n}\n\n.codicon-key:before {\n  content: "\\eb11";\n}\n\n.codicon-law:before {\n  content: "\\eb12";\n}\n\n.codicon-lightbulb-autofix:before {\n  content: "\\eb13";\n}\n\n.codicon-link-external:before {\n  content: "\\eb14";\n}\n\n.codicon-link:before {\n  content: "\\eb15";\n}\n\n.codicon-list-ordered:before {\n  content: "\\eb16";\n}\n\n.codicon-list-unordered:before {\n  content: "\\eb17";\n}\n\n.codicon-live-share:before {\n  content: "\\eb18";\n}\n\n.codicon-loading:before {\n  content: "\\eb19";\n}\n\n.codicon-location:before {\n  content: "\\eb1a";\n}\n\n.codicon-mail-read:before {\n  content: "\\eb1b";\n}\n\n.codicon-mail:before {\n  content: "\\eb1c";\n}\n\n.codicon-markdown:before {\n  content: "\\eb1d";\n}\n\n.codicon-megaphone:before {\n  content: "\\eb1e";\n}\n\n.codicon-mention:before {\n  content: "\\eb1f";\n}\n\n.codicon-milestone:before {\n  content: "\\eb20";\n}\n\n.codicon-mortar-board:before {\n  content: "\\eb21";\n}\n\n.codicon-move:before {\n  content: "\\eb22";\n}\n\n.codicon-multiple-windows:before {\n  content: "\\eb23";\n}\n\n.codicon-mute:before {\n  content: "\\eb24";\n}\n\n.codicon-no-newline:before {\n  content: "\\eb25";\n}\n\n.codicon-note:before {\n  content: "\\eb26";\n}\n\n.codicon-octoface:before {\n  content: "\\eb27";\n}\n\n.codicon-open-preview:before {\n  content: "\\eb28";\n}\n\n.codicon-package:before {\n  content: "\\eb29";\n}\n\n.codicon-paintcan:before {\n  content: "\\eb2a";\n}\n\n.codicon-pin:before {\n  content: "\\eb2b";\n}\n\n.codicon-play:before {\n  content: "\\eb2c";\n}\n\n.codicon-run:before {\n  content: "\\eb2c";\n}\n\n.codicon-plug:before {\n  content: "\\eb2d";\n}\n\n.codicon-preserve-case:before {\n  content: "\\eb2e";\n}\n\n.codicon-preview:before {\n  content: "\\eb2f";\n}\n\n.codicon-project:before {\n  content: "\\eb30";\n}\n\n.codicon-pulse:before {\n  content: "\\eb31";\n}\n\n.codicon-question:before {\n  content: "\\eb32";\n}\n\n.codicon-quote:before {\n  content: "\\eb33";\n}\n\n.codicon-radio-tower:before {\n  content: "\\eb34";\n}\n\n.codicon-reactions:before {\n  content: "\\eb35";\n}\n\n.codicon-references:before {\n  content: "\\eb36";\n}\n\n.codicon-refresh:before {\n  content: "\\eb37";\n}\n\n.codicon-regex:before {\n  content: "\\eb38";\n}\n\n.codicon-remote-explorer:before {\n  content: "\\eb39";\n}\n\n.codicon-remote:before {\n  content: "\\eb3a";\n}\n\n.codicon-remove:before {\n  content: "\\eb3b";\n}\n\n.codicon-replace-all:before {\n  content: "\\eb3c";\n}\n\n.codicon-replace:before {\n  content: "\\eb3d";\n}\n\n.codicon-repo-clone:before {\n  content: "\\eb3e";\n}\n\n.codicon-repo-force-push:before {\n  content: "\\eb3f";\n}\n\n.codicon-repo-pull:before {\n  content: "\\eb40";\n}\n\n.codicon-repo-push:before {\n  content: "\\eb41";\n}\n\n.codicon-report:before {\n  content: "\\eb42";\n}\n\n.codicon-request-changes:before {\n  content: "\\eb43";\n}\n\n.codicon-rocket:before {\n  content: "\\eb44";\n}\n\n.codicon-root-folder-opened:before {\n  content: "\\eb45";\n}\n\n.codicon-root-folder:before {\n  content: "\\eb46";\n}\n\n.codicon-rss:before {\n  content: "\\eb47";\n}\n\n.codicon-ruby:before {\n  content: "\\eb48";\n}\n\n.codicon-save-all:before {\n  content: "\\eb49";\n}\n\n.codicon-save-as:before {\n  content: "\\eb4a";\n}\n\n.codicon-save:before {\n  content: "\\eb4b";\n}\n\n.codicon-screen-full:before {\n  content: "\\eb4c";\n}\n\n.codicon-screen-normal:before {\n  content: "\\eb4d";\n}\n\n.codicon-search-stop:before {\n  content: "\\eb4e";\n}\n\n.codicon-server:before {\n  content: "\\eb50";\n}\n\n.codicon-settings-gear:before {\n  content: "\\eb51";\n}\n\n.codicon-settings:before {\n  content: "\\eb52";\n}\n\n.codicon-shield:before {\n  content: "\\eb53";\n}\n\n.codicon-smiley:before {\n  content: "\\eb54";\n}\n\n.codicon-sort-precedence:before {\n  content: "\\eb55";\n}\n\n.codicon-split-horizontal:before {\n  content: "\\eb56";\n}\n\n.codicon-split-vertical:before {\n  content: "\\eb57";\n}\n\n.codicon-squirrel:before {\n  content: "\\eb58";\n}\n\n.codicon-star-full:before {\n  content: "\\eb59";\n}\n\n.codicon-star-half:before {\n  content: "\\eb5a";\n}\n\n.codicon-symbol-class:before {\n  content: "\\eb5b";\n}\n\n.codicon-symbol-color:before {\n  content: "\\eb5c";\n}\n\n.codicon-symbol-constant:before {\n  content: "\\eb5d";\n}\n\n.codicon-symbol-enum-member:before {\n  content: "\\eb5e";\n}\n\n.codicon-symbol-field:before {\n  content: "\\eb5f";\n}\n\n.codicon-symbol-file:before {\n  content: "\\eb60";\n}\n\n.codicon-symbol-interface:before {\n  content: "\\eb61";\n}\n\n.codicon-symbol-keyword:before {\n  content: "\\eb62";\n}\n\n.codicon-symbol-misc:before {\n  content: "\\eb63";\n}\n\n.codicon-symbol-operator:before {\n  content: "\\eb64";\n}\n\n.codicon-symbol-property:before {\n  content: "\\eb65";\n}\n\n.codicon-wrench:before {\n  content: "\\eb65";\n}\n\n.codicon-wrench-subaction:before {\n  content: "\\eb65";\n}\n\n.codicon-symbol-snippet:before {\n  content: "\\eb66";\n}\n\n.codicon-tasklist:before {\n  content: "\\eb67";\n}\n\n.codicon-telescope:before {\n  content: "\\eb68";\n}\n\n.codicon-text-size:before {\n  content: "\\eb69";\n}\n\n.codicon-three-bars:before {\n  content: "\\eb6a";\n}\n\n.codicon-thumbsdown:before {\n  content: "\\eb6b";\n}\n\n.codicon-thumbsup:before {\n  content: "\\eb6c";\n}\n\n.codicon-tools:before {\n  content: "\\eb6d";\n}\n\n.codicon-triangle-down:before {\n  content: "\\eb6e";\n}\n\n.codicon-triangle-left:before {\n  content: "\\eb6f";\n}\n\n.codicon-triangle-right:before {\n  content: "\\eb70";\n}\n\n.codicon-triangle-up:before {\n  content: "\\eb71";\n}\n\n.codicon-twitter:before {\n  content: "\\eb72";\n}\n\n.codicon-unfold:before {\n  content: "\\eb73";\n}\n\n.codicon-unlock:before {\n  content: "\\eb74";\n}\n\n.codicon-unmute:before {\n  content: "\\eb75";\n}\n\n.codicon-unverified:before {\n  content: "\\eb76";\n}\n\n.codicon-verified:before {\n  content: "\\eb77";\n}\n\n.codicon-versions:before {\n  content: "\\eb78";\n}\n\n.codicon-vm-active:before {\n  content: "\\eb79";\n}\n\n.codicon-vm-outline:before {\n  content: "\\eb7a";\n}\n\n.codicon-vm-running:before {\n  content: "\\eb7b";\n}\n\n.codicon-watch:before {\n  content: "\\eb7c";\n}\n\n.codicon-whitespace:before {\n  content: "\\eb7d";\n}\n\n.codicon-whole-word:before {\n  content: "\\eb7e";\n}\n\n.codicon-window:before {\n  content: "\\eb7f";\n}\n\n.codicon-word-wrap:before {\n  content: "\\eb80";\n}\n\n.codicon-zoom-in:before {\n  content: "\\eb81";\n}\n\n.codicon-zoom-out:before {\n  content: "\\eb82";\n}\n\n.codicon-list-filter:before {\n  content: "\\eb83";\n}\n\n.codicon-list-flat:before {\n  content: "\\eb84";\n}\n\n.codicon-list-selection:before {\n  content: "\\eb85";\n}\n\n.codicon-selection:before {\n  content: "\\eb85";\n}\n\n.codicon-list-tree:before {\n  content: "\\eb86";\n}\n\n.codicon-debug-breakpoint-function-unverified:before {\n  content: "\\eb87";\n}\n\n.codicon-debug-breakpoint-function:before {\n  content: "\\eb88";\n}\n\n.codicon-debug-breakpoint-function-disabled:before {\n  content: "\\eb88";\n}\n\n.codicon-debug-stackframe-active:before {\n  content: "\\eb89";\n}\n\n.codicon-circle-small-filled:before {\n  content: "\\eb8a";\n}\n\n.codicon-debug-stackframe-dot:before {\n  content: "\\eb8a";\n}\n\n.codicon-debug-stackframe:before {\n  content: "\\eb8b";\n}\n\n.codicon-debug-stackframe-focused:before {\n  content: "\\eb8b";\n}\n\n.codicon-debug-breakpoint-unsupported:before {\n  content: "\\eb8c";\n}\n\n.codicon-symbol-string:before {\n  content: "\\eb8d";\n}\n\n.codicon-debug-reverse-continue:before {\n  content: "\\eb8e";\n}\n\n.codicon-debug-step-back:before {\n  content: "\\eb8f";\n}\n\n.codicon-debug-restart-frame:before {\n  content: "\\eb90";\n}\n\n.codicon-debug-alt:before {\n  content: "\\eb91";\n}\n\n.codicon-call-incoming:before {\n  content: "\\eb92";\n}\n\n.codicon-call-outgoing:before {\n  content: "\\eb93";\n}\n\n.codicon-menu:before {\n  content: "\\eb94";\n}\n\n.codicon-expand-all:before {\n  content: "\\eb95";\n}\n\n.codicon-feedback:before {\n  content: "\\eb96";\n}\n\n.codicon-group-by-ref-type:before {\n  content: "\\eb97";\n}\n\n.codicon-ungroup-by-ref-type:before {\n  content: "\\eb98";\n}\n\n.codicon-account:before {\n  content: "\\eb99";\n}\n\n.codicon-bell-dot:before {\n  content: "\\eb9a";\n}\n\n.codicon-debug-console:before {\n  content: "\\eb9b";\n}\n\n.codicon-library:before {\n  content: "\\eb9c";\n}\n\n.codicon-output:before {\n  content: "\\eb9d";\n}\n\n.codicon-run-all:before {\n  content: "\\eb9e";\n}\n\n.codicon-sync-ignored:before {\n  content: "\\eb9f";\n}\n\n.codicon-pinned:before {\n  content: "\\eba0";\n}\n\n.codicon-github-inverted:before {\n  content: "\\eba1";\n}\n\n.codicon-server-process:before {\n  content: "\\eba2";\n}\n\n.codicon-server-environment:before {\n  content: "\\eba3";\n}\n\n.codicon-pass:before {\n  content: "\\eba4";\n}\n\n.codicon-issue-closed:before {\n  content: "\\eba4";\n}\n\n.codicon-stop-circle:before {\n  content: "\\eba5";\n}\n\n.codicon-play-circle:before {\n  content: "\\eba6";\n}\n\n.codicon-record:before {\n  content: "\\eba7";\n}\n\n.codicon-debug-alt-small:before {\n  content: "\\eba8";\n}\n\n.codicon-vm-connect:before {\n  content: "\\eba9";\n}\n\n.codicon-cloud:before {\n  content: "\\ebaa";\n}\n\n.codicon-merge:before {\n  content: "\\ebab";\n}\n\n.codicon-export:before {\n  content: "\\ebac";\n}\n\n.codicon-graph-left:before {\n  content: "\\ebad";\n}\n\n.codicon-magnet:before {\n  content: "\\ebae";\n}\n\n.codicon-notebook:before {\n  content: "\\ebaf";\n}\n\n.codicon-redo:before {\n  content: "\\ebb0";\n}\n\n.codicon-check-all:before {\n  content: "\\ebb1";\n}\n\n.codicon-pinned-dirty:before {\n  content: "\\ebb2";\n}\n\n.codicon-pass-filled:before {\n  content: "\\ebb3";\n}\n\n.codicon-circle-large-filled:before {\n  content: "\\ebb4";\n}\n\n.codicon-circle-large-outline:before {\n  content: "\\ebb5";\n}\n\n.codicon-combine:before {\n  content: "\\ebb6";\n}\n\n.codicon-gather:before {\n  content: "\\ebb6";\n}\n\n.codicon-table:before {\n  content: "\\ebb7";\n}\n\n.codicon-variable-group:before {\n  content: "\\ebb8";\n}\n\n.codicon-type-hierarchy:before {\n  content: "\\ebb9";\n}\n\n.codicon-type-hierarchy-sub:before {\n  content: "\\ebba";\n}\n\n.codicon-type-hierarchy-super:before {\n  content: "\\ebbb";\n}\n\n.codicon-git-pull-request-create:before {\n  content: "\\ebbc";\n}\n\n.codicon-run-above:before {\n  content: "\\ebbd";\n}\n\n.codicon-run-below:before {\n  content: "\\ebbe";\n}\n\n.codicon-notebook-template:before {\n  content: "\\ebbf";\n}\n\n.codicon-debug-rerun:before {\n  content: "\\ebc0";\n}\n\n.codicon-workspace-trusted:before {\n  content: "\\ebc1";\n}\n\n.codicon-workspace-untrusted:before {\n  content: "\\ebc2";\n}\n\n.codicon-workspace-unknown:before {\n  content: "\\ebc3";\n}\n\n.codicon-terminal-cmd:before {\n  content: "\\ebc4";\n}\n\n.codicon-terminal-debian:before {\n  content: "\\ebc5";\n}\n\n.codicon-terminal-linux:before {\n  content: "\\ebc6";\n}\n\n.codicon-terminal-powershell:before {\n  content: "\\ebc7";\n}\n\n.codicon-terminal-tmux:before {\n  content: "\\ebc8";\n}\n\n.codicon-terminal-ubuntu:before {\n  content: "\\ebc9";\n}\n\n.codicon-terminal-bash:before {\n  content: "\\ebca";\n}\n\n.codicon-arrow-swap:before {\n  content: "\\ebcb";\n}\n\n.codicon-copy:before {\n  content: "\\ebcc";\n}\n\n.codicon-person-add:before {\n  content: "\\ebcd";\n}\n\n.codicon-filter-filled:before {\n  content: "\\ebce";\n}\n\n.codicon-wand:before {\n  content: "\\ebcf";\n}\n\n.codicon-debug-line-by-line:before {\n  content: "\\ebd0";\n}\n\n.codicon-inspect:before {\n  content: "\\ebd1";\n}\n\n.codicon-layers:before {\n  content: "\\ebd2";\n}\n\n.codicon-layers-dot:before {\n  content: "\\ebd3";\n}\n\n.codicon-layers-active:before {\n  content: "\\ebd4";\n}\n\n.codicon-compass:before {\n  content: "\\ebd5";\n}\n\n.codicon-compass-dot:before {\n  content: "\\ebd6";\n}\n\n.codicon-compass-active:before {\n  content: "\\ebd7";\n}\n\n.codicon-azure:before {\n  content: "\\ebd8";\n}\n\n.codicon-issue-draft:before {\n  content: "\\ebd9";\n}\n\n.codicon-git-pull-request-closed:before {\n  content: "\\ebda";\n}\n\n.codicon-git-pull-request-draft:before {\n  content: "\\ebdb";\n}\n\n.codicon-debug-all:before {\n  content: "\\ebdc";\n}\n\n.codicon-debug-coverage:before {\n  content: "\\ebdd";\n}\n\n.codicon-run-errors:before {\n  content: "\\ebde";\n}\n\n.codicon-folder-library:before {\n  content: "\\ebdf";\n}\n\n.codicon-debug-continue-small:before {\n  content: "\\ebe0";\n}\n\n.codicon-beaker-stop:before {\n  content: "\\ebe1";\n}\n\n.codicon-graph-line:before {\n  content: "\\ebe2";\n}\n\n.codicon-graph-scatter:before {\n  content: "\\ebe3";\n}\n\n.codicon-pie-chart:before {\n  content: "\\ebe4";\n}\n\n.codicon-bracket:before {\n  content: "\\eb0f";\n}\n\n.codicon-bracket-dot:before {\n  content: "\\ebe5";\n}\n\n.codicon-bracket-error:before {\n  content: "\\ebe6";\n}\n\n.codicon-lock-small:before {\n  content: "\\ebe7";\n}\n\n.codicon-azure-devops:before {\n  content: "\\ebe8";\n}\n\n.codicon-verified-filled:before {\n  content: "\\ebe9";\n}\n\n.codicon-newline:before {\n  content: "\\ebea";\n}\n\n.codicon-layout:before {\n  content: "\\ebeb";\n}\n\n.codicon-layout-activitybar-left:before {\n  content: "\\ebec";\n}\n\n.codicon-layout-activitybar-right:before {\n  content: "\\ebed";\n}\n\n.codicon-layout-panel-left:before {\n  content: "\\ebee";\n}\n\n.codicon-layout-panel-center:before {\n  content: "\\ebef";\n}\n\n.codicon-layout-panel-justify:before {\n  content: "\\ebf0";\n}\n\n.codicon-layout-panel-right:before {\n  content: "\\ebf1";\n}\n\n.codicon-layout-panel:before {\n  content: "\\ebf2";\n}\n\n.codicon-layout-sidebar-left:before {\n  content: "\\ebf3";\n}\n\n.codicon-layout-sidebar-right:before {\n  content: "\\ebf4";\n}\n\n.codicon-layout-statusbar:before {\n  content: "\\ebf5";\n}\n\n.codicon-layout-menubar:before {\n  content: "\\ebf6";\n}\n\n.codicon-layout-centered:before {\n  content: "\\ebf7";\n}\n\n.codicon-target:before {\n  content: "\\ebf8";\n}\n\n.codicon-indent:before {\n  content: "\\ebf9";\n}\n\n.codicon-record-small:before {\n  content: "\\ebfa";\n}\n\n.codicon-error-small:before {\n  content: "\\ebfb";\n}\n\n.codicon-arrow-circle-down:before {\n  content: "\\ebfc";\n}\n\n.codicon-arrow-circle-left:before {\n  content: "\\ebfd";\n}\n\n.codicon-arrow-circle-right:before {\n  content: "\\ebfe";\n}\n\n.codicon-arrow-circle-up:before {\n  content: "\\ebff";\n}\n\n.codicon-layout-sidebar-right-off:before {\n  content: "\\ec00";\n}\n\n.codicon-layout-panel-off:before {\n  content: "\\ec01";\n}\n\n.codicon-layout-sidebar-left-off:before {\n  content: "\\ec02";\n}\n\n.codicon-blank:before {\n  content: "\\ec03";\n}\n\n.codicon-heart-filled:before {\n  content: "\\ec04";\n}\n\n.codicon-map:before {\n  content: "\\ec05";\n}\n\n.codicon-map-filled:before {\n  content: "\\ec06";\n}\n\n.codicon-circle-small:before {\n  content: "\\ec07";\n}\n\n.codicon-bell-slash:before {\n  content: "\\ec08";\n}\n\n.codicon-bell-slash-dot:before {\n  content: "\\ec09";\n}\n\n.codicon-comment-unresolved:before {\n  content: "\\ec0a";\n}\n\n.codicon-git-pull-request-go-to-changes:before {\n  content: "\\ec0b";\n}\n\n.codicon-git-pull-request-new-changes:before {\n  content: "\\ec0c";\n}\n\n@layer kol-component {\n  /* :host implicitly inherits font-size, see below */\n  :host {\n    color: inherit;\n    display: contents;\n    height: 1em;\n    line-height: inherit;\n    width: 1em;\n  }\n  :host > i {\n    height: 1em;\n    width: 1em;\n  }\n  /*\n    * The <code>:important</code> is important, because we should always override the font icon style.\n    */\n  :host > i,\n  :host > i:before {\n    font-size: inherit !important;\n  }\n}'}},7418:(n,e,o)=>{o.d(e,{a:()=>l,b:()=>i,c:()=>d,h:()=>t,v:()=>f});var c=o(5445);const t=[0,1,2,3,4,5,6],b=/[a-zA-Z0-9äöüÄÖÜß]/g,r=/^\d+$/;function i(n,e=1){return function(n){var e;return"string"==typeof n&&(null===(e=n.match(b))||void 0===e?void 0:e.length)||0}(n)>=e}function d(n){return r.test(n)}const a=new Set(["string"]),f=(n,e,o={})=>{(0,c.w)(n,"_label",(n=>"string"==typeof n),a,e,function(n){var e;return Object.assign(Object.assign({},n),{hooks:{afterPatch:(e,o,t,b)=>{var r,a;"function"==typeof(null===(r=n.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(a=n.hooks)||void 0===a||a.afterPatch(e,o,t,b)),"string"==typeof e&&!1===i(e,3)&&!1===d(e)&&(0,c.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,c.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=n.hooks)||void 0===e?void 0:e.beforePatch}})}(o))},l=f}}]);