/*! For license information please see 8590.5cb5ec52.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8590],{95049:(e,o,n)=>{n.d(o,{a:()=>r,b:()=>m,c:()=>p,d:()=>d,e:()=>b,f:()=>s,g:()=>g,h:()=>f,u:()=>h});var c=n(62780);const t=new Set,r=e=>{!1===t.has(e)&&(t.add(e),c.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,b=e=>{!1===i.has(e)&&(i.add(e),c.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},a=new Set,d=e=>{!1===a.has(e)&&(a.add(e),c.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},f=e=>{!1===a.has(e)&&(a.add(e),c.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=new Set,s=(e,o=!1)=>{!1===l.has(e)&&(l.add(e),e+=!0===o?" \u2705":"",c.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,h=e=>{!1===u.has(e)&&(u.add(e),c.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},g=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,o=8)=>{o>7&&h(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},88590:(e,o,n)=>{n.r(o),n.d(o,{kol_icon:()=>b});var c=n(88468),t=n(16488),r=n(95049),i=n(12577);const b=class{constructor(e){(0,c.r)(this,e),this._ariaLabel=void 0,this._icon=void 0,this._label=void 0,this._part=void 0,this.state={_icon:"codicon codicon-home"}}render(){const e="string"==typeof this.state._label&&this.state._label.length>0;return(0,c.h)(c.H,{exportparts:"icon"},(0,c.h)("i",{"aria-hidden":e?void 0:"true","aria-label":e?this.state._label:void 0,class:this.state._icon,part:"icon",role:"img"}))}validateAriaLabel(e){this.validateLabel(e)}validateIcon(e){(0,i.w)(this,"_icon",e,{required:!0})}validateLabel(e){(0,t.v)(this,e)}validatePart(){(0,r.d)("ICON: The usage of the part attribute is deprecated and has no effect.")}componentWillLoad(){this.validateIcon(this._icon),this.validateLabel(this._label||this._ariaLabel),this.validatePart()}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_icon:["validateIcon"],_label:["validateLabel"],_part:["validatePart"]}}};b.style={default:'@font-face{font-family:"codicon";font-display:block;src:url("./codicon.ttf?0e5b0adf625a37fbcd638d31f0fe72aa") format("truetype")}.codicon[class*=\'codicon-\']{font:normal normal normal 16px/1 codicon;display:inline-block;text-decoration:none;text-rendering:auto;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;user-select:none;-webkit-user-select:none;-ms-user-select:none}@keyframes codicon-spin{100%{transform:rotate(360deg)}}.codicon-sync.codicon-modifier-spin,.codicon-loading.codicon-modifier-spin,.codicon-gear.codicon-modifier-spin{animation:codicon-spin 1.5s steps(30) infinite}.codicon-modifier-disabled{opacity:0.5}.codicon-modifier-hidden{opacity:0}.codicon-loading{animation-duration:1s !important;animation-timing-function:cubic-bezier(0.53, 0.21, 0.29, 0.67) !important}.codicon-add:before{content:"\\ea60"}.codicon-plus:before{content:"\\ea60"}.codicon-gist-new:before{content:"\\ea60"}.codicon-repo-create:before{content:"\\ea60"}.codicon-lightbulb:before{content:"\\ea61"}.codicon-light-bulb:before{content:"\\ea61"}.codicon-repo:before{content:"\\ea62"}.codicon-repo-delete:before{content:"\\ea62"}.codicon-gist-fork:before{content:"\\ea63"}.codicon-repo-forked:before{content:"\\ea63"}.codicon-git-pull-request:before{content:"\\ea64"}.codicon-git-pull-request-abandoned:before{content:"\\ea64"}.codicon-record-keys:before{content:"\\ea65"}.codicon-keyboard:before{content:"\\ea65"}.codicon-tag:before{content:"\\ea66"}.codicon-tag-add:before{content:"\\ea66"}.codicon-tag-remove:before{content:"\\ea66"}.codicon-person:before{content:"\\ea67"}.codicon-person-follow:before{content:"\\ea67"}.codicon-person-outline:before{content:"\\ea67"}.codicon-person-filled:before{content:"\\ea67"}.codicon-git-branch:before{content:"\\ea68"}.codicon-git-branch-create:before{content:"\\ea68"}.codicon-git-branch-delete:before{content:"\\ea68"}.codicon-source-control:before{content:"\\ea68"}.codicon-mirror:before{content:"\\ea69"}.codicon-mirror-public:before{content:"\\ea69"}.codicon-star:before{content:"\\ea6a"}.codicon-star-add:before{content:"\\ea6a"}.codicon-star-delete:before{content:"\\ea6a"}.codicon-star-empty:before{content:"\\ea6a"}.codicon-comment:before{content:"\\ea6b"}.codicon-comment-add:before{content:"\\ea6b"}.codicon-alert:before{content:"\\ea6c"}.codicon-warning:before{content:"\\ea6c"}.codicon-search:before{content:"\\ea6d"}.codicon-search-save:before{content:"\\ea6d"}.codicon-log-out:before{content:"\\ea6e"}.codicon-sign-out:before{content:"\\ea6e"}.codicon-log-in:before{content:"\\ea6f"}.codicon-sign-in:before{content:"\\ea6f"}.codicon-eye:before{content:"\\ea70"}.codicon-eye-unwatch:before{content:"\\ea70"}.codicon-eye-watch:before{content:"\\ea70"}.codicon-circle-filled:before{content:"\\ea71"}.codicon-primitive-dot:before{content:"\\ea71"}.codicon-close-dirty:before{content:"\\ea71"}.codicon-debug-breakpoint:before{content:"\\ea71"}.codicon-debug-breakpoint-disabled:before{content:"\\ea71"}.codicon-debug-hint:before{content:"\\ea71"}.codicon-primitive-square:before{content:"\\ea72"}.codicon-edit:before{content:"\\ea73"}.codicon-pencil:before{content:"\\ea73"}.codicon-info:before{content:"\\ea74"}.codicon-issue-opened:before{content:"\\ea74"}.codicon-gist-private:before{content:"\\ea75"}.codicon-git-fork-private:before{content:"\\ea75"}.codicon-lock:before{content:"\\ea75"}.codicon-mirror-private:before{content:"\\ea75"}.codicon-close:before{content:"\\ea76"}.codicon-remove-close:before{content:"\\ea76"}.codicon-x:before{content:"\\ea76"}.codicon-repo-sync:before{content:"\\ea77"}.codicon-sync:before{content:"\\ea77"}.codicon-clone:before{content:"\\ea78"}.codicon-desktop-download:before{content:"\\ea78"}.codicon-beaker:before{content:"\\ea79"}.codicon-microscope:before{content:"\\ea79"}.codicon-vm:before{content:"\\ea7a"}.codicon-device-desktop:before{content:"\\ea7a"}.codicon-file:before{content:"\\ea7b"}.codicon-file-text:before{content:"\\ea7b"}.codicon-more:before{content:"\\ea7c"}.codicon-ellipsis:before{content:"\\ea7c"}.codicon-kebab-horizontal:before{content:"\\ea7c"}.codicon-mail-reply:before{content:"\\ea7d"}.codicon-reply:before{content:"\\ea7d"}.codicon-organization:before{content:"\\ea7e"}.codicon-organization-filled:before{content:"\\ea7e"}.codicon-organization-outline:before{content:"\\ea7e"}.codicon-new-file:before{content:"\\ea7f"}.codicon-file-add:before{content:"\\ea7f"}.codicon-new-folder:before{content:"\\ea80"}.codicon-file-directory-create:before{content:"\\ea80"}.codicon-trash:before{content:"\\ea81"}.codicon-trashcan:before{content:"\\ea81"}.codicon-history:before{content:"\\ea82"}.codicon-clock:before{content:"\\ea82"}.codicon-folder:before{content:"\\ea83"}.codicon-file-directory:before{content:"\\ea83"}.codicon-symbol-folder:before{content:"\\ea83"}.codicon-logo-github:before{content:"\\ea84"}.codicon-mark-github:before{content:"\\ea84"}.codicon-github:before{content:"\\ea84"}.codicon-terminal:before{content:"\\ea85"}.codicon-console:before{content:"\\ea85"}.codicon-repl:before{content:"\\ea85"}.codicon-zap:before{content:"\\ea86"}.codicon-symbol-event:before{content:"\\ea86"}.codicon-error:before{content:"\\ea87"}.codicon-stop:before{content:"\\ea87"}.codicon-variable:before{content:"\\ea88"}.codicon-symbol-variable:before{content:"\\ea88"}.codicon-array:before{content:"\\ea8a"}.codicon-symbol-array:before{content:"\\ea8a"}.codicon-symbol-module:before{content:"\\ea8b"}.codicon-symbol-package:before{content:"\\ea8b"}.codicon-symbol-namespace:before{content:"\\ea8b"}.codicon-symbol-object:before{content:"\\ea8b"}.codicon-symbol-method:before{content:"\\ea8c"}.codicon-symbol-function:before{content:"\\ea8c"}.codicon-symbol-constructor:before{content:"\\ea8c"}.codicon-symbol-boolean:before{content:"\\ea8f"}.codicon-symbol-null:before{content:"\\ea8f"}.codicon-symbol-numeric:before{content:"\\ea90"}.codicon-symbol-number:before{content:"\\ea90"}.codicon-symbol-structure:before{content:"\\ea91"}.codicon-symbol-struct:before{content:"\\ea91"}.codicon-symbol-parameter:before{content:"\\ea92"}.codicon-symbol-type-parameter:before{content:"\\ea92"}.codicon-symbol-key:before{content:"\\ea93"}.codicon-symbol-text:before{content:"\\ea93"}.codicon-symbol-reference:before{content:"\\ea94"}.codicon-go-to-file:before{content:"\\ea94"}.codicon-symbol-enum:before{content:"\\ea95"}.codicon-symbol-value:before{content:"\\ea95"}.codicon-symbol-ruler:before{content:"\\ea96"}.codicon-symbol-unit:before{content:"\\ea96"}.codicon-activate-breakpoints:before{content:"\\ea97"}.codicon-archive:before{content:"\\ea98"}.codicon-arrow-both:before{content:"\\ea99"}.codicon-arrow-down:before{content:"\\ea9a"}.codicon-arrow-left:before{content:"\\ea9b"}.codicon-arrow-right:before{content:"\\ea9c"}.codicon-arrow-small-down:before{content:"\\ea9d"}.codicon-arrow-small-left:before{content:"\\ea9e"}.codicon-arrow-small-right:before{content:"\\ea9f"}.codicon-arrow-small-up:before{content:"\\eaa0"}.codicon-arrow-up:before{content:"\\eaa1"}.codicon-bell:before{content:"\\eaa2"}.codicon-bold:before{content:"\\eaa3"}.codicon-book:before{content:"\\eaa4"}.codicon-bookmark:before{content:"\\eaa5"}.codicon-debug-breakpoint-conditional-unverified:before{content:"\\eaa6"}.codicon-debug-breakpoint-conditional:before{content:"\\eaa7"}.codicon-debug-breakpoint-conditional-disabled:before{content:"\\eaa7"}.codicon-debug-breakpoint-data-unverified:before{content:"\\eaa8"}.codicon-debug-breakpoint-data:before{content:"\\eaa9"}.codicon-debug-breakpoint-data-disabled:before{content:"\\eaa9"}.codicon-debug-breakpoint-log-unverified:before{content:"\\eaaa"}.codicon-debug-breakpoint-log:before{content:"\\eaab"}.codicon-debug-breakpoint-log-disabled:before{content:"\\eaab"}.codicon-briefcase:before{content:"\\eaac"}.codicon-broadcast:before{content:"\\eaad"}.codicon-browser:before{content:"\\eaae"}.codicon-bug:before{content:"\\eaaf"}.codicon-calendar:before{content:"\\eab0"}.codicon-case-sensitive:before{content:"\\eab1"}.codicon-check:before{content:"\\eab2"}.codicon-checklist:before{content:"\\eab3"}.codicon-chevron-down:before{content:"\\eab4"}.codicon-chevron-left:before{content:"\\eab5"}.codicon-chevron-right:before{content:"\\eab6"}.codicon-chevron-up:before{content:"\\eab7"}.codicon-chrome-close:before{content:"\\eab8"}.codicon-chrome-maximize:before{content:"\\eab9"}.codicon-chrome-minimize:before{content:"\\eaba"}.codicon-chrome-restore:before{content:"\\eabb"}.codicon-circle-outline:before{content:"\\eabc"}.codicon-debug-breakpoint-unverified:before{content:"\\eabc"}.codicon-circle-slash:before{content:"\\eabd"}.codicon-circuit-board:before{content:"\\eabe"}.codicon-clear-all:before{content:"\\eabf"}.codicon-clippy:before{content:"\\eac0"}.codicon-close-all:before{content:"\\eac1"}.codicon-cloud-download:before{content:"\\eac2"}.codicon-cloud-upload:before{content:"\\eac3"}.codicon-code:before{content:"\\eac4"}.codicon-collapse-all:before{content:"\\eac5"}.codicon-color-mode:before{content:"\\eac6"}.codicon-comment-discussion:before{content:"\\eac7"}.codicon-credit-card:before{content:"\\eac9"}.codicon-dash:before{content:"\\eacc"}.codicon-dashboard:before{content:"\\eacd"}.codicon-database:before{content:"\\eace"}.codicon-debug-continue:before{content:"\\eacf"}.codicon-debug-disconnect:before{content:"\\ead0"}.codicon-debug-pause:before{content:"\\ead1"}.codicon-debug-restart:before{content:"\\ead2"}.codicon-debug-start:before{content:"\\ead3"}.codicon-debug-step-into:before{content:"\\ead4"}.codicon-debug-step-out:before{content:"\\ead5"}.codicon-debug-step-over:before{content:"\\ead6"}.codicon-debug-stop:before{content:"\\ead7"}.codicon-debug:before{content:"\\ead8"}.codicon-device-camera-video:before{content:"\\ead9"}.codicon-device-camera:before{content:"\\eada"}.codicon-device-mobile:before{content:"\\eadb"}.codicon-diff-added:before{content:"\\eadc"}.codicon-diff-ignored:before{content:"\\eadd"}.codicon-diff-modified:before{content:"\\eade"}.codicon-diff-removed:before{content:"\\eadf"}.codicon-diff-renamed:before{content:"\\eae0"}.codicon-diff:before{content:"\\eae1"}.codicon-discard:before{content:"\\eae2"}.codicon-editor-layout:before{content:"\\eae3"}.codicon-empty-window:before{content:"\\eae4"}.codicon-exclude:before{content:"\\eae5"}.codicon-extensions:before{content:"\\eae6"}.codicon-eye-closed:before{content:"\\eae7"}.codicon-file-binary:before{content:"\\eae8"}.codicon-file-code:before{content:"\\eae9"}.codicon-file-media:before{content:"\\eaea"}.codicon-file-pdf:before{content:"\\eaeb"}.codicon-file-submodule:before{content:"\\eaec"}.codicon-file-symlink-directory:before{content:"\\eaed"}.codicon-file-symlink-file:before{content:"\\eaee"}.codicon-file-zip:before{content:"\\eaef"}.codicon-files:before{content:"\\eaf0"}.codicon-filter:before{content:"\\eaf1"}.codicon-flame:before{content:"\\eaf2"}.codicon-fold-down:before{content:"\\eaf3"}.codicon-fold-up:before{content:"\\eaf4"}.codicon-fold:before{content:"\\eaf5"}.codicon-folder-active:before{content:"\\eaf6"}.codicon-folder-opened:before{content:"\\eaf7"}.codicon-gear:before{content:"\\eaf8"}.codicon-gift:before{content:"\\eaf9"}.codicon-gist-secret:before{content:"\\eafa"}.codicon-gist:before{content:"\\eafb"}.codicon-git-commit:before{content:"\\eafc"}.codicon-git-compare:before{content:"\\eafd"}.codicon-compare-changes:before{content:"\\eafd"}.codicon-git-merge:before{content:"\\eafe"}.codicon-github-action:before{content:"\\eaff"}.codicon-github-alt:before{content:"\\eb00"}.codicon-globe:before{content:"\\eb01"}.codicon-grabber:before{content:"\\eb02"}.codicon-graph:before{content:"\\eb03"}.codicon-gripper:before{content:"\\eb04"}.codicon-heart:before{content:"\\eb05"}.codicon-home:before{content:"\\eb06"}.codicon-horizontal-rule:before{content:"\\eb07"}.codicon-hubot:before{content:"\\eb08"}.codicon-inbox:before{content:"\\eb09"}.codicon-issue-reopened:before{content:"\\eb0b"}.codicon-issues:before{content:"\\eb0c"}.codicon-italic:before{content:"\\eb0d"}.codicon-jersey:before{content:"\\eb0e"}.codicon-json:before{content:"\\eb0f"}.codicon-kebab-vertical:before{content:"\\eb10"}.codicon-key:before{content:"\\eb11"}.codicon-law:before{content:"\\eb12"}.codicon-lightbulb-autofix:before{content:"\\eb13"}.codicon-link-external:before{content:"\\eb14"}.codicon-link:before{content:"\\eb15"}.codicon-list-ordered:before{content:"\\eb16"}.codicon-list-unordered:before{content:"\\eb17"}.codicon-live-share:before{content:"\\eb18"}.codicon-loading:before{content:"\\eb19"}.codicon-location:before{content:"\\eb1a"}.codicon-mail-read:before{content:"\\eb1b"}.codicon-mail:before{content:"\\eb1c"}.codicon-markdown:before{content:"\\eb1d"}.codicon-megaphone:before{content:"\\eb1e"}.codicon-mention:before{content:"\\eb1f"}.codicon-milestone:before{content:"\\eb20"}.codicon-mortar-board:before{content:"\\eb21"}.codicon-move:before{content:"\\eb22"}.codicon-multiple-windows:before{content:"\\eb23"}.codicon-mute:before{content:"\\eb24"}.codicon-no-newline:before{content:"\\eb25"}.codicon-note:before{content:"\\eb26"}.codicon-octoface:before{content:"\\eb27"}.codicon-open-preview:before{content:"\\eb28"}.codicon-package:before{content:"\\eb29"}.codicon-paintcan:before{content:"\\eb2a"}.codicon-pin:before{content:"\\eb2b"}.codicon-play:before{content:"\\eb2c"}.codicon-run:before{content:"\\eb2c"}.codicon-plug:before{content:"\\eb2d"}.codicon-preserve-case:before{content:"\\eb2e"}.codicon-preview:before{content:"\\eb2f"}.codicon-project:before{content:"\\eb30"}.codicon-pulse:before{content:"\\eb31"}.codicon-question:before{content:"\\eb32"}.codicon-quote:before{content:"\\eb33"}.codicon-radio-tower:before{content:"\\eb34"}.codicon-reactions:before{content:"\\eb35"}.codicon-references:before{content:"\\eb36"}.codicon-refresh:before{content:"\\eb37"}.codicon-regex:before{content:"\\eb38"}.codicon-remote-explorer:before{content:"\\eb39"}.codicon-remote:before{content:"\\eb3a"}.codicon-remove:before{content:"\\eb3b"}.codicon-replace-all:before{content:"\\eb3c"}.codicon-replace:before{content:"\\eb3d"}.codicon-repo-clone:before{content:"\\eb3e"}.codicon-repo-force-push:before{content:"\\eb3f"}.codicon-repo-pull:before{content:"\\eb40"}.codicon-repo-push:before{content:"\\eb41"}.codicon-report:before{content:"\\eb42"}.codicon-request-changes:before{content:"\\eb43"}.codicon-rocket:before{content:"\\eb44"}.codicon-root-folder-opened:before{content:"\\eb45"}.codicon-root-folder:before{content:"\\eb46"}.codicon-rss:before{content:"\\eb47"}.codicon-ruby:before{content:"\\eb48"}.codicon-save-all:before{content:"\\eb49"}.codicon-save-as:before{content:"\\eb4a"}.codicon-save:before{content:"\\eb4b"}.codicon-screen-full:before{content:"\\eb4c"}.codicon-screen-normal:before{content:"\\eb4d"}.codicon-search-stop:before{content:"\\eb4e"}.codicon-server:before{content:"\\eb50"}.codicon-settings-gear:before{content:"\\eb51"}.codicon-settings:before{content:"\\eb52"}.codicon-shield:before{content:"\\eb53"}.codicon-smiley:before{content:"\\eb54"}.codicon-sort-precedence:before{content:"\\eb55"}.codicon-split-horizontal:before{content:"\\eb56"}.codicon-split-vertical:before{content:"\\eb57"}.codicon-squirrel:before{content:"\\eb58"}.codicon-star-full:before{content:"\\eb59"}.codicon-star-half:before{content:"\\eb5a"}.codicon-symbol-class:before{content:"\\eb5b"}.codicon-symbol-color:before{content:"\\eb5c"}.codicon-symbol-constant:before{content:"\\eb5d"}.codicon-symbol-enum-member:before{content:"\\eb5e"}.codicon-symbol-field:before{content:"\\eb5f"}.codicon-symbol-file:before{content:"\\eb60"}.codicon-symbol-interface:before{content:"\\eb61"}.codicon-symbol-keyword:before{content:"\\eb62"}.codicon-symbol-misc:before{content:"\\eb63"}.codicon-symbol-operator:before{content:"\\eb64"}.codicon-symbol-property:before{content:"\\eb65"}.codicon-wrench:before{content:"\\eb65"}.codicon-wrench-subaction:before{content:"\\eb65"}.codicon-symbol-snippet:before{content:"\\eb66"}.codicon-tasklist:before{content:"\\eb67"}.codicon-telescope:before{content:"\\eb68"}.codicon-text-size:before{content:"\\eb69"}.codicon-three-bars:before{content:"\\eb6a"}.codicon-thumbsdown:before{content:"\\eb6b"}.codicon-thumbsup:before{content:"\\eb6c"}.codicon-tools:before{content:"\\eb6d"}.codicon-triangle-down:before{content:"\\eb6e"}.codicon-triangle-left:before{content:"\\eb6f"}.codicon-triangle-right:before{content:"\\eb70"}.codicon-triangle-up:before{content:"\\eb71"}.codicon-twitter:before{content:"\\eb72"}.codicon-unfold:before{content:"\\eb73"}.codicon-unlock:before{content:"\\eb74"}.codicon-unmute:before{content:"\\eb75"}.codicon-unverified:before{content:"\\eb76"}.codicon-verified:before{content:"\\eb77"}.codicon-versions:before{content:"\\eb78"}.codicon-vm-active:before{content:"\\eb79"}.codicon-vm-outline:before{content:"\\eb7a"}.codicon-vm-running:before{content:"\\eb7b"}.codicon-watch:before{content:"\\eb7c"}.codicon-whitespace:before{content:"\\eb7d"}.codicon-whole-word:before{content:"\\eb7e"}.codicon-window:before{content:"\\eb7f"}.codicon-word-wrap:before{content:"\\eb80"}.codicon-zoom-in:before{content:"\\eb81"}.codicon-zoom-out:before{content:"\\eb82"}.codicon-list-filter:before{content:"\\eb83"}.codicon-list-flat:before{content:"\\eb84"}.codicon-list-selection:before{content:"\\eb85"}.codicon-selection:before{content:"\\eb85"}.codicon-list-tree:before{content:"\\eb86"}.codicon-debug-breakpoint-function-unverified:before{content:"\\eb87"}.codicon-debug-breakpoint-function:before{content:"\\eb88"}.codicon-debug-breakpoint-function-disabled:before{content:"\\eb88"}.codicon-debug-stackframe-active:before{content:"\\eb89"}.codicon-circle-small-filled:before{content:"\\eb8a"}.codicon-debug-stackframe-dot:before{content:"\\eb8a"}.codicon-debug-stackframe:before{content:"\\eb8b"}.codicon-debug-stackframe-focused:before{content:"\\eb8b"}.codicon-debug-breakpoint-unsupported:before{content:"\\eb8c"}.codicon-symbol-string:before{content:"\\eb8d"}.codicon-debug-reverse-continue:before{content:"\\eb8e"}.codicon-debug-step-back:before{content:"\\eb8f"}.codicon-debug-restart-frame:before{content:"\\eb90"}.codicon-debug-alt:before{content:"\\eb91"}.codicon-call-incoming:before{content:"\\eb92"}.codicon-call-outgoing:before{content:"\\eb93"}.codicon-menu:before{content:"\\eb94"}.codicon-expand-all:before{content:"\\eb95"}.codicon-feedback:before{content:"\\eb96"}.codicon-group-by-ref-type:before{content:"\\eb97"}.codicon-ungroup-by-ref-type:before{content:"\\eb98"}.codicon-account:before{content:"\\eb99"}.codicon-bell-dot:before{content:"\\eb9a"}.codicon-debug-console:before{content:"\\eb9b"}.codicon-library:before{content:"\\eb9c"}.codicon-output:before{content:"\\eb9d"}.codicon-run-all:before{content:"\\eb9e"}.codicon-sync-ignored:before{content:"\\eb9f"}.codicon-pinned:before{content:"\\eba0"}.codicon-github-inverted:before{content:"\\eba1"}.codicon-server-process:before{content:"\\eba2"}.codicon-server-environment:before{content:"\\eba3"}.codicon-pass:before{content:"\\eba4"}.codicon-issue-closed:before{content:"\\eba4"}.codicon-stop-circle:before{content:"\\eba5"}.codicon-play-circle:before{content:"\\eba6"}.codicon-record:before{content:"\\eba7"}.codicon-debug-alt-small:before{content:"\\eba8"}.codicon-vm-connect:before{content:"\\eba9"}.codicon-cloud:before{content:"\\ebaa"}.codicon-merge:before{content:"\\ebab"}.codicon-export:before{content:"\\ebac"}.codicon-graph-left:before{content:"\\ebad"}.codicon-magnet:before{content:"\\ebae"}.codicon-notebook:before{content:"\\ebaf"}.codicon-redo:before{content:"\\ebb0"}.codicon-check-all:before{content:"\\ebb1"}.codicon-pinned-dirty:before{content:"\\ebb2"}.codicon-pass-filled:before{content:"\\ebb3"}.codicon-circle-large-filled:before{content:"\\ebb4"}.codicon-circle-large-outline:before{content:"\\ebb5"}.codicon-combine:before{content:"\\ebb6"}.codicon-gather:before{content:"\\ebb6"}.codicon-table:before{content:"\\ebb7"}.codicon-variable-group:before{content:"\\ebb8"}.codicon-type-hierarchy:before{content:"\\ebb9"}.codicon-type-hierarchy-sub:before{content:"\\ebba"}.codicon-type-hierarchy-super:before{content:"\\ebbb"}.codicon-git-pull-request-create:before{content:"\\ebbc"}.codicon-run-above:before{content:"\\ebbd"}.codicon-run-below:before{content:"\\ebbe"}.codicon-notebook-template:before{content:"\\ebbf"}.codicon-debug-rerun:before{content:"\\ebc0"}.codicon-workspace-trusted:before{content:"\\ebc1"}.codicon-workspace-untrusted:before{content:"\\ebc2"}.codicon-workspace-unknown:before{content:"\\ebc3"}.codicon-terminal-cmd:before{content:"\\ebc4"}.codicon-terminal-debian:before{content:"\\ebc5"}.codicon-terminal-linux:before{content:"\\ebc6"}.codicon-terminal-powershell:before{content:"\\ebc7"}.codicon-terminal-tmux:before{content:"\\ebc8"}.codicon-terminal-ubuntu:before{content:"\\ebc9"}.codicon-terminal-bash:before{content:"\\ebca"}.codicon-arrow-swap:before{content:"\\ebcb"}.codicon-copy:before{content:"\\ebcc"}.codicon-person-add:before{content:"\\ebcd"}.codicon-filter-filled:before{content:"\\ebce"}.codicon-wand:before{content:"\\ebcf"}.codicon-debug-line-by-line:before{content:"\\ebd0"}.codicon-inspect:before{content:"\\ebd1"}.codicon-layers:before{content:"\\ebd2"}.codicon-layers-dot:before{content:"\\ebd3"}.codicon-layers-active:before{content:"\\ebd4"}.codicon-compass:before{content:"\\ebd5"}.codicon-compass-dot:before{content:"\\ebd6"}.codicon-compass-active:before{content:"\\ebd7"}.codicon-azure:before{content:"\\ebd8"}.codicon-issue-draft:before{content:"\\ebd9"}.codicon-git-pull-request-closed:before{content:"\\ebda"}.codicon-git-pull-request-draft:before{content:"\\ebdb"}.codicon-debug-all:before{content:"\\ebdc"}.codicon-debug-coverage:before{content:"\\ebdd"}.codicon-run-errors:before{content:"\\ebde"}.codicon-folder-library:before{content:"\\ebdf"}.codicon-debug-continue-small:before{content:"\\ebe0"}.codicon-beaker-stop:before{content:"\\ebe1"}.codicon-graph-line:before{content:"\\ebe2"}.codicon-graph-scatter:before{content:"\\ebe3"}.codicon-pie-chart:before{content:"\\ebe4"}.codicon-bracket:before{content:"\\eb0f"}.codicon-bracket-dot:before{content:"\\ebe5"}.codicon-bracket-error:before{content:"\\ebe6"}.codicon-lock-small:before{content:"\\ebe7"}.codicon-azure-devops:before{content:"\\ebe8"}.codicon-verified-filled:before{content:"\\ebe9"}.codicon-newline:before{content:"\\ebea"}.codicon-layout:before{content:"\\ebeb"}.codicon-layout-activitybar-left:before{content:"\\ebec"}.codicon-layout-activitybar-right:before{content:"\\ebed"}.codicon-layout-panel-left:before{content:"\\ebee"}.codicon-layout-panel-center:before{content:"\\ebef"}.codicon-layout-panel-justify:before{content:"\\ebf0"}.codicon-layout-panel-right:before{content:"\\ebf1"}.codicon-layout-panel:before{content:"\\ebf2"}.codicon-layout-sidebar-left:before{content:"\\ebf3"}.codicon-layout-sidebar-right:before{content:"\\ebf4"}.codicon-layout-statusbar:before{content:"\\ebf5"}.codicon-layout-menubar:before{content:"\\ebf6"}.codicon-layout-centered:before{content:"\\ebf7"}.codicon-target:before{content:"\\ebf8"}.codicon-indent:before{content:"\\ebf9"}.codicon-record-small:before{content:"\\ebfa"}.codicon-error-small:before{content:"\\ebfb"}.codicon-arrow-circle-down:before{content:"\\ebfc"}.codicon-arrow-circle-left:before{content:"\\ebfd"}.codicon-arrow-circle-right:before{content:"\\ebfe"}.codicon-arrow-circle-up:before{content:"\\ebff"}.codicon-layout-sidebar-right-off:before{content:"\\ec00"}.codicon-layout-panel-off:before{content:"\\ec01"}.codicon-layout-sidebar-left-off:before{content:"\\ec02"}.codicon-blank:before{content:"\\ec03"}.codicon-heart-filled:before{content:"\\ec04"}.codicon-map:before{content:"\\ec05"}.codicon-map-filled:before{content:"\\ec06"}.codicon-circle-small:before{content:"\\ec07"}.codicon-bell-slash:before{content:"\\ec08"}.codicon-bell-slash-dot:before{content:"\\ec09"}.codicon-comment-unresolved:before{content:"\\ec0a"}.codicon-git-pull-request-go-to-changes:before{content:"\\ec0b"}.codicon-git-pull-request-new-changes:before{content:"\\ec0c"}:host{color:inherit;display:contents;height:1em;line-height:inherit;width:1em}:host>i{height:1em;width:1em}:host>i,:host>i:before{font-size:inherit !important}'}},16488:(e,o,n)=>{n.d(o,{a:()=>u,c:()=>a,h:()=>b,v:()=>l});var c=n(95049),t=n(12577);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function b(e,o=1){return function(e){var o;return"string"==typeof e&&(null===(o=e.match(r))||void 0===o?void 0:o.length)||0}(e)>=o}function a(e){return i.test(e)}function d(e){var o;return{hooks:{afterPatch:(o,n,t,r)=>{var i,d;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(o,n,t,r)),"string"==typeof o&&!1===b(o,3)&&!1===a(o)&&(0,c.a)(`The heading or label ("${o}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof o&&o.length>80&&(0,c.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(o=e.hooks)||void 0===o?void 0:o.beforePatch}}}const f=new Set(["string"]),l=(e,o,n={})=>{(0,t.a)(e,"_label",(e=>"string"==typeof e),f,o,d(n))},s=new Set(["string","false"]),u=(e,o,n={})=>{""!==o&&"false"!==o||(o=!1),(0,t.a)(e,"_label",(e=>!1===e||"string"==typeof e),s,o,d(n))}},12577:(e,o,n)=>{n.d(o,{K:()=>ie,a:()=>T,b:()=>C,c:()=>M,d:()=>R,e:()=>$,f:()=>P,g:()=>O,h:()=>Z,i:()=>te,j:()=>V,k:()=>Y,l:()=>re,m:()=>W,n:()=>oe,o:()=>_,p:()=>U,q:()=>G,r:()=>d,s:()=>H,t:()=>ne,u:()=>K,w:()=>D});var c=n(95049),t=n(62780),r=n(30705);const i=(e,o)=>{o.forEach((o=>{!1===e.has(o)&&e.add(o)}))},b=(e,o=document)=>{if(o instanceof Document||o instanceof HTMLElement||o instanceof ShadowRoot){const n=new Set;i(n,o.querySelectorAll(e));const c=o.querySelectorAll('[class*="hydrated"]');for(let o=0;o<c.length;o++){const t=c[o].shadowRoot;i(n,b(e,"object"==typeof t&&null!==t?t:c[o]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},a=(e,o=document)=>{if(o instanceof Document||o instanceof HTMLElement||o instanceof ShadowRoot){let n=o.querySelector(e);if(null===n){const c=o.querySelectorAll('[class*="hydrated"]');for(let o=0;o<c.length;o++){const t=c[o].shadowRoot;if(n=a(e,"object"==typeof t&&null!==t?t:c[o]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=g,f=g,l=function(e){var o=m(e);return{r:o[0],g:o[1],b:o[2],a:3==o.length?255:Math.round(o[3])}},s=function(e){var o=m(e);return 3==o.length&&o.push(255),255==o[3]?"rgb("+o[0]+", "+o[1]+", "+o[2]+")":0==o[3]?"rgba("+o[0]+", "+o[1]+", "+o[2]+", 0)":"rgba("+o[0]+", "+o[1]+", "+o[2]+", "+String(o[3]/255).substr(1)+")"},u=function(e){3==(o=m(e)).length&&o.push(255);var o,n=255==o[3],c=p(o[0]),t=p(o[1]),r=p(o[2]),i=function(e,o,n,c){var t=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=t.indexOf(e)&&-1!=t.indexOf(o)&&-1!=t.indexOf(n)&&-1!=t.indexOf(c)}(c,t,r,o=p(Math.round(o[3])));return n?i?"#"+c.charAt(0)+t.charAt(0)+r.charAt(0):"#"+c+t+r:i?"#"+c.charAt(0)+t.charAt(0)+r.charAt(0)+o.charAt(0):"#"+c+t+r+o},h=function(e){var o=m(e);return 3==o.length?o.push(255):o[3]=Math.round(o[3]),(o[3]<<24>>>0|o[0]<<16|o[1]<<8|o[2])>>>0};function g(e){var o=m(e);return 3==o.length?o.concat(255):(o[3]=Math.round(o[3]),o)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var o=e.replace(/^#/,""),n=o.length;if(3==n||4==n){var c=y(o[0]),t=y(o[1]),r=y(o[2]),i=3==n?255:y(o[3]);if(isNaN(c)||isNaN(t)||isNaN(r)||isNaN(i))return;return[c,t,r,i]}}(e)||function(e){var o=e.replace(/^#/,""),n=o.length;if(6==n||8==n){var c=y(o.slice(0,2)),t=y(o.slice(2,4)),r=y(o.slice(4,6)),i=6==n?255:y(o.slice(6,8));if(isNaN(c)||isNaN(t)||isNaN(r)||isNaN(i))return;return[c,t,r,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var o=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(o[0],!0),c=v(o[1],!0),t=v(o[2],!0);if(-1!=n&&-1!=c&&-1!=t)return[n,c,t,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var o=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(o[0],!0),c=v(o[1],!0),t=v(o[2],!0),r=v(255*o[3]);if(-1!=n&&-1!=c&&-1!=t&&-1!=r)return[n,c,t,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var o=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),c=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),t=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=o&&-1!=n&&-1!=c&&-1!=t)return[o,n,c,t]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var o=v(e[0],!0),n=v(e[1],!0),c=v(e[2],!0),t=v(null!=e[3]?e[3]:255,!0);if(-1!=o&&-1!=n&&-1!=c&&-1!=t)return[o,n,c,t]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var o=e.toString(16);return 1==o.length?"0"+o:o}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,o){return"number"!=typeof e||!0===o&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=f,d.obj=l,d.css=s,d.hex=u,d.num=h;var w=.2126,k=.7152,S=.0722,x=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var o=e[0]/255,n=e[1]/255,c=e[2]/255,t=o<=.03928?o*x:L(o),r=n<=.03928?n*x:L(n),i=c<=.03928?c*x:L(c);return t*w+r*k+i*S}function A(e){var o=255;8===(e=e.replace(/^#/,"")).length&&(o=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(o=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,o]}function z(e,o){return function(e,o){return(Math.max(e,o)+.05)/(Math.min(e,o)+.05)}(N(e),N(o))}function M(e,o){return z(A(e),A(o))}function q(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const E=/\[object Object\]/,_=(e,o)=>{"string"==typeof e&&E.test(e)||o()},O=(e,o)=>{"string"==typeof e&&""===e||o()},P=(e,o)=>{(0,t.b)()&&(t.L.debug([e,o]),t.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:o,writable:!1})},H=(e,o,n,c={})=>{var t,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(o)!==n&&(e.nextHooks.get(o)instanceof Map==0&&e.nextHooks.set(o,new Map),"function"==typeof c.afterPatch&&(null===(t=e.nextHooks.get(o))||void 0===t||t.set("afterPatch",c.afterPatch)),"function"==typeof c.beforePatch&&(null===(r=e.nextHooks.get(o))||void 0===r||r.set("beforePatch",c.beforePatch)),e.nextState.set(o,n),(e=>{var o,n,c;null===(o=e.nextHooks)||void 0===o||o.forEach(((o,n)=>{var c;const t=o.get("beforePatch");"function"==typeof t&&t(null===(c=e.nextState)||void 0===c?void 0:c.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(c=e.nextHooks)||void 0===c||c.forEach(((o,n)=>{const c=o.get("afterPatch");"function"==typeof c&&c(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},j=(e,o,n,t)=>{(0,c.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${o}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(t).join(", ")}`)};function T(e,o,n,c,t,r={}){n(t)?H(e,o,t,r.hooks):null!=t||r.required?(r.required||c.add(null),j(e,o,t,c)):H(e,o,r.defaultValue,r.hooks)}const C=(e,o,n,c)=>{T(e,o,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,c)},D=(e,o,n,c={})=>{const t="number"==typeof c.minLength?null==c?void 0:c.minLength:0;T(e,o,(e=>"string"==typeof e&&e.length>=t&&(void 0===(null==c?void 0:c.maxLength)||e.length<=c.maxLength)),new Set(["String"]),n,c)},$=(e,o,n,c)=>{T(e,o,(e=>"number"==typeof e&&(void 0===(null==c?void 0:c.min)||"number"==typeof(null==c?void 0:c.min)&&e>=c.min)&&(void 0===(null==c?void 0:c.max)||"number"==typeof(null==c?void 0:c.max)&&e<=c.max)),new Set(["Number"]),n,c)},R=(e,o,n,c,r=(e=>e==e),i={})=>{O(c,(()=>{_(c,(()=>{void 0===c&&(c=[]);try{try{c=U(c)}catch(e){}if(Array.isArray(c)){const b=c.find((e=>!n(e)));void 0===b&&r(c)?H(e,o,c,i.hooks):_(b,(()=>{throw t.L.debug(b),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else _(c,(()=>{throw t.L.debug(c),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){t.L.debug(e)}}))}))},I=/^(true|false)$/,B=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const o=typeof e,n=`${e}`;if("string"==typeof e)if(I.test(e))e="true"===e;else if(B.test(e))e=parseInt(e);else if(J.test(e))e=parseFloat(e);else if(F.test(e))try{e=U(e)}catch(e){}return o!==typeof e&&(0,c.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${o} to ${typeof e}!`),e},K=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw t.L.warn(["stringifyJson",e]),t.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){t.L.warn(["parseJson",e]),t.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},Z=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,V=e=>"string"==typeof e?e:Z(e),Y=(e,o)=>a(e,o||(0,t.g)()),G=(e,o)=>b(e,o||(0,t.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,t.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,oe=(e,o=X())=>{const n=getComputedStyle(e),c=ee.test(n.backgroundColor)?o.backgroundColor:d.hex(n.backgroundColor),r=ee.test(n.color)?o.color:d.hex(n.color),i=M(c,r),b={backgroundColor:c,color:r,domNode:e,level:q(i),score:i};return i<4.5&&t.L.error(["Color-Contrast-Error",{backgroundColor:b.backgroundColor,color:b.color,level:b.level,score:b.score},b.domNode]),b},ne=(e,o=X())=>{o.domNode instanceof HTMLElement&&(o=oe(o.domNode,o));const n=o.domNode.querySelector(e);if(null===n){const n=o.domNode.querySelectorAll('[class="hydrated"]');for(let c=0;c<n.length&&(o.domNode=n[c],null===(o=ne(e,o)).domNode);c++);return o}return oe(n,o)},ce=(e,o=window)=>{e instanceof HTMLElement?(o.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,t.a)().pageYOffset-50}),e.focus()):(0,c.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},te=(e,o)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof o){(0,c.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${o}`;o=e,e=n}if("string"==typeof e){const n=Y(e,o);n instanceof HTMLElement?ce(n):(0,c.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,c.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class re{static queryHtmlElementColors(e,o,n=!1,c=!0){let r=null;if(!0===n||!1===re.executionLock)if(!1===n&&(re.cache.clear(),re.cache.set(o.domNode,o),re.executionLock=!0,!0===c&&t.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===o.domNode)r=o;else{const n=new Set;if(o.domNode.shadowRoot){const e=o.domNode.shadowRoot.children;for(let o=0;o<e.length;o++)n.add(e[o])}const c=o.domNode;if("function"==typeof c.assignedNodes){const e=c.assignedNodes();for(let o=0;o<e.length;o++)e[o]instanceof HTMLElement&&n.add(e[o])}const t=o.domNode.children;for(let e=0;e<t.length;e++)n.add(t[e]);const i=Array.from(n);for(let b=0;b<i.length;b++){let n=re.cache.get(i[b]);void 0===n&&(n=oe(i[b],o)),re.cache.set(i[b],n);const c=re.queryHtmlElementColors(e,n,!0,!1);if(null!==c){r=c;break}}}else t.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===c&&t.L.debug(`[KoliBriUtils] Color contrast analysis finished (${re.cache.size} DOM elements are analysed).`),re.executionLock=!1,re.cache.clear()),r}}re.executionLock=!1,re.cache=new Map;class ie{}ie.patchTheme=r.p,ie.patchThemeTag=r.a,ie.querySelector=Y,ie.querySelectorAll=G,ie.scrollByHTMLElement=ce,ie.scrollBySelector=te,ie.stringifyJson=K}}]);