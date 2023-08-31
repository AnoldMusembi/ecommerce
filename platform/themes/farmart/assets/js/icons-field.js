$(document).ready(function () {
    'use strict';
    let icons = [
        'icon-home',
        'icon-home2',
        'icon-home3',
        'icon-home4',
        'icon-home5',
        'icon-home6',
        'icon-bathtub',
        'icon-toothbrush',
        'icon-bed',
        'icon-couch',
        'icon-chair',
        'icon-city',
        'icon-apartment',
        'icon-pencil',
        'icon-pencil2',
        'icon-pen',
        'icon-pencil3',
        'icon-eraser',
        'icon-pencil4',
        'icon-pencil5',
        'icon-feather',
        'icon-feather2',
        'icon-feather3',
        'icon-pen2',
        'icon-pen-add',
        'icon-pen-remove',
        'icon-vector',
        'icon-pen3',
        'icon-blog',
        'icon-brush',
        'icon-brush2',
        'icon-spray',
        'icon-paint-roller',
        'icon-stamp',
        'icon-tape',
        'icon-desk-tape',
        'icon-texture',
        'icon-eye-dropper',
        'icon-palette',
        'icon-color-sampler',
        'icon-bucket',
        'icon-gradient',
        'icon-gradient2',
        'icon-magic-wand',
        'icon-magnet',
        'icon-pencil-ruler',
        'icon-pencil-ruler2',
        'icon-compass',
        'icon-aim',
        'icon-gun',
        'icon-bottle',
        'icon-drop',
        'icon-drop-crossed',
        'icon-drop2',
        'icon-snow',
        'icon-snow2',
        'icon-fire',
        'icon-lighter',
        'icon-knife',
        'icon-dagger',
        'icon-tissue',
        'icon-toilet-paper',
        'icon-poop',
        'icon-umbrella',
        'icon-umbrella2',
        'icon-rain',
        'icon-tornado',
        'icon-wind',
        'icon-fan',
        'icon-contrast',
        'icon-sun-small',
        'icon-sun',
        'icon-sun2',
        'icon-moon',
        'icon-cloud',
        'icon-cloud-upload',
        'icon-cloud-download',
        'icon-cloud-rain',
        'icon-cloud-hailstones',
        'icon-cloud-snow',
        'icon-cloud-windy',
        'icon-sun-wind',
        'icon-cloud-fog',
        'icon-cloud-sun',
        'icon-cloud-lightning',
        'icon-cloud-sync',
        'icon-cloud-lock',
        'icon-cloud-gear',
        'icon-cloud-alert',
        'icon-cloud-check',
        'icon-cloud-cross',
        'icon-cloud-crossed',
        'icon-cloud-database',
        'icon-database',
        'icon-database-add',
        'icon-database-remove',
        'icon-database-lock',
        'icon-database-refresh',
        'icon-database-check',
        'icon-database-history',
        'icon-database-upload',
        'icon-database-download',
        'icon-server',
        'icon-shield',
        'icon-shield-check',
        'icon-shield-alert',
        'icon-shield-cross',
        'icon-lock',
        'icon-rotation-lock',
        'icon-unlock',
        'icon-key',
        'icon-key-hole',
        'icon-toggle-off',
        'icon-toggle-on',
        'icon-cog',
        'icon-cog2',
        'icon-wrench',
        'icon-screwdriver',
        'icon-hammer-wrench',
        'icon-hammer',
        'icon-saw',
        'icon-axe',
        'icon-axe2',
        'icon-shovel',
        'icon-pickaxe',
        'icon-factory',
        'icon-factory2',
        'icon-recycle',
        'icon-trash',
        'icon-trash2',
        'icon-trash3',
        'icon-broom',
        'icon-game',
        'icon-gamepad',
        'icon-joystick',
        'icon-dice',
        'icon-spades',
        'icon-diamonds',
        'icon-clubs',
        'icon-hearts',
        'icon-heart',
        'icon-star',
        'icon-star-half',
        'icon-star-empty',
        'icon-flag',
        'icon-flag2',
        'icon-flag3',
        'icon-mailbox-full',
        'icon-mailbox-empty',
        'icon-at-sign',
        'icon-envelope',
        'icon-envelope-open',
        'icon-paperclip',
        'icon-paper-plane',
        'icon-reply',
        'icon-reply-all',
        'icon-inbox',
        'icon-inbox2',
        'icon-outbox',
        'icon-box',
        'icon-archive',
        'icon-archive2',
        'icon-drawers',
        'icon-drawers2',
        'icon-drawers3',
        'icon-eye',
        'icon-eye-crossed',
        'icon-eye-plus',
        'icon-eye-minus',
        'icon-binoculars',
        'icon-binoculars2',
        'icon-hdd',
        'icon-hdd-down',
        'icon-hdd-up',
        'icon-floppy-disk',
        'icon-disc',
        'icon-tape2',
        'icon-printer',
        'icon-shredder',
        'icon-file-empty',
        'icon-file-add',
        'icon-file-check',
        'icon-file-lock',
        'icon-files',
        'icon-copy',
        'icon-compare',
        'icon-folder',
        'icon-folder-search',
        'icon-folder-plus',
        'icon-folder-minus',
        'icon-folder-download',
        'icon-folder-upload',
        'icon-folder-star',
        'icon-folder-heart',
        'icon-folder-user',
        'icon-folder-shared',
        'icon-folder-music',
        'icon-folder-picture',
        'icon-folder-film',
        'icon-scissors',
        'icon-paste',
        'icon-clipboard-empty',
        'icon-clipboard-pencil',
        'icon-clipboard-text',
        'icon-clipboard-check',
        'icon-clipboard-down',
        'icon-clipboard-left',
        'icon-clipboard-alert',
        'icon-clipboard-user',
        'icon-register',
        'icon-enter',
        'icon-exit',
        'icon-papers',
        'icon-news',
        'icon-reading',
        'icon-typewriter',
        'icon-document',
        'icon-document2',
        'icon-graduation-hat',
        'icon-license',
        'icon-license2',
        'icon-medal-empty',
        'icon-medal-first',
        'icon-medal-second',
        'icon-medal-third',
        'icon-podium',
        'icon-trophy',
        'icon-trophy2',
        'icon-music-note',
        'icon-music-note2',
        'icon-music-note3',
        'icon-playlist',
        'icon-playlist-add',
        'icon-guitar',
        'icon-trumpet',
        'icon-album',
        'icon-shuffle',
        'icon-repeat-one',
        'icon-repeat',
        'icon-headphones',
        'icon-headset',
        'icon-loudspeaker',
        'icon-equalizer',
        'icon-theater',
        'icon-3d-glasses',
        'icon-ticket',
        'icon-presentation',
        'icon-play',
        'icon-film-play',
        'icon-clapboard-play',
        'icon-media',
        'icon-film',
        'icon-film2',
        'icon-surveillance',
        'icon-surveillance2',
        'icon-camera',
        'icon-camera-crossed',
        'icon-camera-play',
        'icon-time-lapse',
        'icon-record',
        'icon-camera2',
        'icon-camera-flip',
        'icon-panorama',
        'icon-time-lapse2',
        'icon-shutter',
        'icon-shutter2',
        'icon-face-detection',
        'icon-flare',
        'icon-convex',
        'icon-concave',
        'icon-picture',
        'icon-picture2',
        'icon-picture3',
        'icon-pictures',
        'icon-book',
        'icon-audio-book',
        'icon-book2',
        'icon-bookmark',
        'icon-bookmark2',
        'icon-label',
        'icon-library',
        'icon-library2',
        'icon-contacts',
        'icon-profile',
        'icon-portrait',
        'icon-portrait2',
        'icon-user',
        'icon-user-plus',
        'icon-user-minus',
        'icon-user-lock',
        'icon-users',
        'icon-users2',
        'icon-users-plus',
        'icon-users-minus',
        'icon-group-work',
        'icon-woman',
        'icon-man',
        'icon-baby',
        'icon-baby2',
        'icon-baby3',
        'icon-baby-bottle',
        'icon-walk',
        'icon-hand-waving',
        'icon-jump',
        'icon-run',
        'icon-woman2',
        'icon-man2',
        'icon-man-woman',
        'icon-height',
        'icon-weight',
        'icon-scale',
        'icon-button',
        'icon-bow-tie',
        'icon-tie',
        'icon-socks',
        'icon-shoe',
        'icon-shoes',
        'icon-hat',
        'icon-pants',
        'icon-shorts',
        'icon-flip-flops',
        'icon-shirt',
        'icon-hanger',
        'icon-laundry',
        'icon-store',
        'icon-haircut',
        'icon-store-24',
        'icon-barcode',
        'icon-barcode2',
        'icon-barcode3',
        'icon-cashier',
        'icon-bag',
        'icon-bag2',
        'icon-cart',
        'icon-cart-empty',
        'icon-cart-full',
        'icon-cart-plus',
        'icon-cart-plus2',
        'icon-cart-add',
        'icon-cart-remove',
        'icon-cart-exchange',
        'icon-tag',
        'icon-tags',
        'icon-receipt',
        'icon-wallet',
        'icon-credit-card',
        'icon-cash-dollar',
        'icon-cash-euro',
        'icon-cash-pound',
        'icon-cash-yen',
        'icon-bag-dollar',
        'icon-bag-euro',
        'icon-bag-pound',
        'icon-bag-yen',
        'icon-coin-dollar',
        'icon-coin-euro',
        'icon-coin-pound',
        'icon-coin-yen',
        'icon-calculator',
        'icon-calculator2',
        'icon-abacus',
        'icon-vault',
        'icon-telephone',
        'icon-phone-lock',
        'icon-phone-wave',
        'icon-phone-pause',
        'icon-phone-outgoing',
        'icon-phone-incoming',
        'icon-phone-in-out',
        'icon-phone-error',
        'icon-phone-sip',
        'icon-phone-plus',
        'icon-phone-minus',
        'icon-voicemail',
        'icon-dial',
        'icon-telephone2',
        'icon-pushpin',
        'icon-pushpin2',
        'icon-map-marker',
        'icon-map-marker-user',
        'icon-map-marker-down',
        'icon-map-marker-check',
        'icon-map-marker-crossed',
        'icon-radar',
        'icon-compass2',
        'icon-map',
        'icon-map2',
        'icon-location',
        'icon-road-sign',
        'icon-calendar-empty',
        'icon-calendar-check',
        'icon-calendar-cross',
        'icon-calendar-31',
        'icon-calendar-full',
        'icon-calendar-insert',
        'icon-calendar-text',
        'icon-calendar-user',
        'icon-mouse',
        'icon-mouse-left',
        'icon-mouse-right',
        'icon-mouse-both',
        'icon-keyboard',
        'icon-keyboard-up',
        'icon-keyboard-down',
        'icon-delete',
        'icon-spell-check',
        'icon-escape',
        'icon-enter2',
        'icon-screen',
        'icon-aspect-ratio',
        'icon-signal',
        'icon-signal-lock',
        'icon-signal-80',
        'icon-signal-60',
        'icon-signal-40',
        'icon-signal-20',
        'icon-signal-0',
        'icon-signal-blocked',
        'icon-sim',
        'icon-flash-memory',
        'icon-usb-drive',
        'icon-phone',
        'icon-smartphone',
        'icon-smartphone-notification',
        'icon-smartphone-vibration',
        'icon-smartphone-embed',
        'icon-smartphone-waves',
        'icon-tablet',
        'icon-tablet2',
        'icon-laptop',
        'icon-laptop-phone',
        'icon-desktop',
        'icon-launch',
        'icon-new-tab',
        'icon-window',
        'icon-cable',
        'icon-cable2',
        'icon-tv',
        'icon-radio',
        'icon-remote-control',
        'icon-power-switch',
        'icon-power',
        'icon-power-crossed',
        'icon-flash-auto',
        'icon-lamp',
        'icon-flashlight',
        'icon-lampshade',
        'icon-cord',
        'icon-outlet',
        'icon-battery-power',
        'icon-battery-empty',
        'icon-battery-alert',
        'icon-battery-error',
        'icon-battery-low1',
        'icon-battery-low2',
        'icon-battery-low3',
        'icon-battery-mid1',
        'icon-battery-mid2',
        'icon-battery-mid3',
        'icon-battery-full',
        'icon-battery-charging',
        'icon-battery-charging2',
        'icon-battery-charging3',
        'icon-battery-charging4',
        'icon-battery-charging5',
        'icon-battery-charging6',
        'icon-battery-charging7',
        'icon-chip',
        'icon-chip-x64',
        'icon-chip-x86',
        'icon-bubble',
        'icon-bubbles',
        'icon-bubble-dots',
        'icon-bubble-alert',
        'icon-bubble-question',
        'icon-bubble-text',
        'icon-bubble-pencil',
        'icon-bubble-picture',
        'icon-bubble-video',
        'icon-bubble-user',
        'icon-bubble-quote',
        'icon-bubble-heart',
        'icon-bubble-emoticon',
        'icon-bubble-attachment',
        'icon-phone-bubble',
        'icon-quote-open',
        'icon-quote-close',
        'icon-dna',
        'icon-heart-pulse',
        'icon-pulse',
        'icon-syringe',
        'icon-pills',
        'icon-first-aid',
        'icon-lifebuoy',
        'icon-bandage',
        'icon-bandages',
        'icon-thermometer',
        'icon-microscope',
        'icon-brain',
        'icon-beaker',
        'icon-skull',
        'icon-bone',
        'icon-construction',
        'icon-construction-cone',
        'icon-pie-chart',
        'icon-pie-chart2',
        'icon-graph',
        'icon-chart-growth',
        'icon-chart-bars',
        'icon-chart-settings',
        'icon-cake',
        'icon-gift',
        'icon-balloon',
        'icon-rank',
        'icon-rank2',
        'icon-rank3',
        'icon-crown',
        'icon-lotus',
        'icon-diamond',
        'icon-diamond2',
        'icon-diamond3',
        'icon-diamond4',
        'icon-linearicons',
        'icon-teacup',
        'icon-teapot',
        'icon-glass',
        'icon-bottle2',
        'icon-glass-cocktail',
        'icon-glass2',
        'icon-dinner',
        'icon-dinner2',
        'icon-chef',
        'icon-scale2',
        'icon-egg',
        'icon-egg2',
        'icon-eggs',
        'icon-platter',
        'icon-steak',
        'icon-hamburger',
        'icon-hotdog',
        'icon-pizza',
        'icon-sausage',
        'icon-chicken',
        'icon-fish',
        'icon-carrot',
        'icon-cheese',
        'icon-bread',
        'icon-ice-cream',
        'icon-ice-cream2',
        'icon-candy',
        'icon-lollipop',
        'icon-coffee-bean',
        'icon-coffee-cup',
        'icon-cherry',
        'icon-grapes',
        'icon-citrus',
        'icon-apple',
        'icon-leaf',
        'icon-landscape',
        'icon-pine-tree',
        'icon-tree',
        'icon-cactus',
        'icon-paw',
        'icon-footprint',
        'icon-speed-slow',
        'icon-speed-medium',
        'icon-speed-fast',
        'icon-rocket',
        'icon-hammer2',
        'icon-balance',
        'icon-briefcase',
        'icon-luggage-weight',
        'icon-dolly',
        'icon-plane',
        'icon-plane-crossed',
        'icon-helicopter',
        'icon-traffic-lights',
        'icon-siren',
        'icon-road',
        'icon-engine',
        'icon-oil-pressure',
        'icon-coolant-temperature',
        'icon-car-battery',
        'icon-gas',
        'icon-gallon',
        'icon-transmission',
        'icon-car',
        'icon-car-wash',
        'icon-car-wash2',
        'icon-bus',
        'icon-bus2',
        'icon-car2',
        'icon-parking',
        'icon-car-lock',
        'icon-taxi',
        'icon-car-siren',
        'icon-car-wash3',
        'icon-car-wash4',
        'icon-ambulance',
        'icon-truck',
        'icon-trailer',
        'icon-scale-truck',
        'icon-train',
        'icon-ship',
        'icon-ship2',
        'icon-anchor',
        'icon-boat',
        'icon-bicycle',
        'icon-bicycle2',
        'icon-dumbbell',
        'icon-bench-press',
        'icon-swim',
        'icon-football',
        'icon-baseball-bat',
        'icon-baseball',
        'icon-tennis',
        'icon-tennis2',
        'icon-ping-pong',
        'icon-hockey',
        'icon-8ball',
        'icon-bowling',
        'icon-bowling-pins',
        'icon-golf',
        'icon-golf2',
        'icon-archery',
        'icon-slingshot',
        'icon-soccer',
        'icon-basketball',
        'icon-cube',
        'icon-3d-rotate',
        'icon-puzzle',
        'icon-glasses',
        'icon-glasses2',
        'icon-accessibility',
        'icon-wheelchair',
        'icon-wall',
        'icon-fence',
        'icon-wall2',
        'icon-icons',
        'icon-resize-handle',
        'icon-icons2',
        'icon-select',
        'icon-select2',
        'icon-site-map',
        'icon-earth',
        'icon-earth-lock',
        'icon-network',
        'icon-network-lock',
        'icon-planet',
        'icon-happy',
        'icon-smile',
        'icon-grin',
        'icon-tongue',
        'icon-sad',
        'icon-wink',
        'icon-dream',
        'icon-shocked',
        'icon-shocked2',
        'icon-tongue2',
        'icon-neutral',
        'icon-happy-grin',
        'icon-cool',
        'icon-mad',
        'icon-grin-evil',
        'icon-evil',
        'icon-wow',
        'icon-annoyed',
        'icon-wondering',
        'icon-confused',
        'icon-zipped',
        'icon-grumpy',
        'icon-mustache',
        'icon-tombstone-hipster',
        'icon-tombstone',
        'icon-ghost',
        'icon-ghost-hipster',
        'icon-halloween',
        'icon-christmas',
        'icon-easter-egg',
        'icon-mustache2',
        'icon-mustache-glasses',
        'icon-pipe',
        'icon-alarm',
        'icon-alarm-add',
        'icon-alarm-snooze',
        'icon-alarm-ringing',
        'icon-bullhorn',
        'icon-hearing',
        'icon-volume-high',
        'icon-volume-medium',
        'icon-volume-low',
        'icon-volume',
        'icon-mute',
        'icon-lan',
        'icon-lan2',
        'icon-wifi',
        'icon-wifi-lock',
        'icon-wifi-blocked',
        'icon-wifi-mid',
        'icon-wifi-low',
        'icon-wifi-low2',
        'icon-wifi-alert',
        'icon-wifi-alert-mid',
        'icon-wifi-alert-low',
        'icon-wifi-alert-low2',
        'icon-stream',
        'icon-stream-check',
        'icon-stream-error',
        'icon-stream-alert',
        'icon-communication',
        'icon-communication-crossed',
        'icon-broadcast',
        'icon-antenna',
        'icon-satellite',
        'icon-satellite2',
        'icon-mic',
        'icon-mic-mute',
        'icon-mic2',
        'icon-spotlights',
        'icon-hourglass',
        'icon-loading',
        'icon-loading2',
        'icon-loading3',
        'icon-refresh',
        'icon-refresh2',
        'icon-undo',
        'icon-redo',
        'icon-jump2',
        'icon-undo2',
        'icon-redo2',
        'icon-sync',
        'icon-repeat-one2',
        'icon-sync-crossed',
        'icon-sync2',
        'icon-repeat-one3',
        'icon-sync-crossed2',
        'icon-return',
        'icon-return2',
        'icon-refund',
        'icon-history',
        'icon-history2',
        'icon-self-timer',
        'icon-clock',
        'icon-clock2',
        'icon-clock3',
        'icon-watch',
        'icon-alarm2',
        'icon-alarm-add2',
        'icon-alarm-remove',
        'icon-alarm-check',
        'icon-alarm-error',
        'icon-timer',
        'icon-timer-crossed',
        'icon-timer2',
        'icon-timer-crossed2',
        'icon-download',
        'icon-upload',
        'icon-download2',
        'icon-upload2',
        'icon-enter-up',
        'icon-enter-down',
        'icon-enter-left',
        'icon-enter-right',
        'icon-exit-up',
        'icon-exit-down',
        'icon-exit-left',
        'icon-exit-right',
        'icon-enter-up2',
        'icon-enter-down2',
        'icon-enter-vertical',
        'icon-enter-left2',
        'icon-enter-right2',
        'icon-enter-horizontal',
        'icon-exit-up2',
        'icon-exit-down2',
        'icon-exit-left2',
        'icon-exit-right2',
        'icon-cli',
        'icon-bug',
        'icon-code',
        'icon-file-code',
        'icon-file-image',
        'icon-file-zip',
        'icon-file-audio',
        'icon-file-video',
        'icon-file-preview',
        'icon-file-charts',
        'icon-file-stats',
        'icon-file-spreadsheet',
        'icon-link',
        'icon-unlink',
        'icon-link2',
        'icon-unlink2',
        'icon-thumbs-up',
        'icon-thumbs-down',
        'icon-thumbs-up2',
        'icon-thumbs-down2',
        'icon-thumbs-up3',
        'icon-thumbs-down3',
        'icon-share',
        'icon-share2',
        'icon-share3',
        'icon-magnifier',
        'icon-file-search',
        'icon-find-replace',
        'icon-zoom-in',
        'icon-zoom-out',
        'icon-loupe',
        'icon-loupe-zoom-in',
        'icon-loupe-zoom-out',
        'icon-cross',
        'icon-menu',
        'icon-list',
        'icon-list2',
        'icon-list3',
        'icon-menu2',
        'icon-list4',
        'icon-menu3',
        'icon-exclamation',
        'icon-question',
        'icon-check',
        'icon-cross2',
        'icon-plus',
        'icon-minus',
        'icon-percent',
        'icon-chevron-up',
        'icon-chevron-down',
        'icon-chevron-left',
        'icon-chevron-right',
        'icon-chevrons-expand-vertical',
        'icon-chevrons-expand-horizontal',
        'icon-chevrons-contract-vertical',
        'icon-chevrons-contract-horizontal',
        'icon-arrow-up',
        'icon-arrow-down',
        'icon-arrow-left',
        'icon-arrow-right',
        'icon-arrow-up-right',
        'icon-arrows-merge',
        'icon-arrows-split',
        'icon-arrow-divert',
        'icon-arrow-return',
        'icon-expand',
        'icon-contract',
        'icon-expand2',
        'icon-contract2',
        'icon-move',
        'icon-tab',
        'icon-arrow-wave',
        'icon-expand3',
        'icon-expand4',
        'icon-contract3',
        'icon-notification',
        'icon-warning',
        'icon-notification-circle',
        'icon-question-circle',
        'icon-menu-circle',
        'icon-checkmark-circle',
        'icon-cross-circle',
        'icon-plus-circle',
        'icon-circle-minus',
        'icon-percent-circle',
        'icon-arrow-up-circle',
        'icon-arrow-down-circle',
        'icon-arrow-left-circle',
        'icon-arrow-right-circle',
        'icon-chevron-up-circle',
        'icon-chevron-down-circle',
        'icon-chevron-left-circle',
        'icon-chevron-right-circle',
        'icon-backward-circle',
        'icon-first-circle',
        'icon-previous-circle',
        'icon-stop-circle',
        'icon-play-circle',
        'icon-pause-circle',
        'icon-next-circle',
        'icon-last-circle',
        'icon-forward-circle',
        'icon-eject-circle',
        'icon-crop',
        'icon-frame-expand',
        'icon-frame-contract',
        'icon-focus',
        'icon-transform',
        'icon-grid',
        'icon-grid-crossed',
        'icon-layers',
        'icon-layers-crossed',
        'icon-toggle',
        'icon-rulers',
        'icon-ruler',
        'icon-funnel',
        'icon-flip-horizontal',
        'icon-flip-vertical',
        'icon-flip-horizontal2',
        'icon-flip-vertical2',
        'icon-angle',
        'icon-angle2',
        'icon-subtract',
        'icon-combine',
        'icon-intersect',
        'icon-exclude',
        'icon-align-center-vertical',
        'icon-align-right',
        'icon-align-bottom',
        'icon-align-left',
        'icon-align-center-horizontal',
        'icon-align-top',
        'icon-square',
        'icon-plus-square',
        'icon-minus-square',
        'icon-percent-square',
        'icon-arrow-up-square',
        'icon-arrow-down-square',
        'icon-arrow-left-square',
        'icon-arrow-right-square',
        'icon-chevron-up-square',
        'icon-chevron-down-square',
        'icon-chevron-left-square',
        'icon-chevron-right-square',
        'icon-check-square',
        'icon-cross-square',
        'icon-menu-square',
        'icon-prohibited',
        'icon-circle',
        'icon-radio-button',
        'icon-ligature',
        'icon-text-format',
        'icon-text-format-remove',
        'icon-text-size',
        'icon-bold',
        'icon-italic',
        'icon-underline',
        'icon-strikethrough',
        'icon-highlight',
        'icon-text-align-left',
        'icon-text-align-center',
        'icon-text-align-right',
        'icon-text-align-justify',
        'icon-line-spacing',
        'icon-indent-increase',
        'icon-indent-decrease',
        'icon-text-wrap',
        'icon-pilcrow',
        'icon-direction-ltr',
        'icon-direction-rtl',
        'icon-page-break',
        'icon-page-break2',
        'icon-sort-alpha-asc',
        'icon-sort-alpha-desc',
        'icon-sort-numeric-asc',
        'icon-sort-numeric-desc',
        'icon-sort-amount-asc',
        'icon-sort-amount-desc',
        'icon-sort-time-asc',
        'icon-sort-time-desc',
        'icon-sigma',
        'icon-pencil-line',
        'icon-hand',
        'icon-pointer-up',
        'icon-pointer-right',
        'icon-pointer-down',
        'icon-pointer-left',
        'icon-finger-tap',
        'icon-fingers-tap',
        'icon-reminder',
        'icon-fingers-crossed',
        'icon-fingers-victory',
        'icon-gesture-zoom',
        'icon-gesture-pinch',
        'icon-fingers-scroll-horizontal',
        'icon-fingers-scroll-vertical',
        'icon-fingers-scroll-left',
        'icon-fingers-scroll-right',
        'icon-hand2',
        'icon-pointer-up2',
        'icon-pointer-right2',
        'icon-pointer-down2',
        'icon-pointer-left2',
        'icon-finger-tap2',
        'icon-fingers-tap2',
        'icon-reminder2',
        'icon-gesture-zoom2',
        'icon-gesture-pinch2',
        'icon-fingers-scroll-horizontal2',
        'icon-fingers-scroll-vertical2',
        'icon-fingers-scroll-left2',
        'icon-fingers-scroll-right2',
        'icon-fingers-scroll-vertical3',
        'icon-border-style',
        'icon-border-all',
        'icon-border-outer',
        'icon-border-inner',
        'icon-border-top',
        'icon-border-horizontal',
        'icon-border-bottom',
        'icon-border-left',
        'icon-border-vertical',
        'icon-border-right',
        'icon-border-none',
        'icon-ellipsis',
        'icon-uni21',
        'icon-uni22',
        'icon-uni23',
        'icon-uni24',
        'icon-uni25',
        'icon-uni26',
        'icon-uni27',
        'icon-uni28',
        'icon-uni29',
        'icon-uni2a',
        'icon-uni2b',
        'icon-uni2c',
        'icon-uni2d',
        'icon-uni2e',
        'icon-uni2f',
        'icon-uni30',
        'icon-uni31',
        'icon-uni32',
        'icon-uni33',
        'icon-uni34',
        'icon-uni35',
        'icon-uni36',
        'icon-uni37',
        'icon-uni38',
        'icon-uni39',
        'icon-uni3a',
        'icon-uni3b',
        'icon-uni3c',
        'icon-uni3d',
        'icon-uni3e',
        'icon-uni3f',
        'icon-uni40',
        'icon-uni41',
        'icon-uni42',
        'icon-uni43',
        'icon-uni44',
        'icon-uni45',
        'icon-uni46',
        'icon-uni47',
        'icon-uni48',
        'icon-uni49',
        'icon-uni4a',
        'icon-uni4b',
        'icon-uni4c',
        'icon-uni4d',
        'icon-uni4e',
        'icon-uni4f',
        'icon-uni50',
        'icon-uni51',
        'icon-uni52',
        'icon-uni53',
        'icon-uni54',
        'icon-uni55',
        'icon-uni56',
        'icon-uni57',
        'icon-uni58',
        'icon-uni59',
        'icon-uni5a',
        'icon-uni5b',
        'icon-uni5c',
        'icon-uni5d',
        'icon-uni5e',
        'icon-uni5f',
        'icon-uni60',
        'icon-uni61',
        'icon-uni62',
        'icon-uni63',
        'icon-uni64',
        'icon-uni65',
        'icon-uni66',
        'icon-uni67',
        'icon-uni68',
        'icon-uni69',
        'icon-uni6a',
        'icon-uni6b',
        'icon-uni6c',
        'icon-uni6d',
        'icon-uni6e',
        'icon-uni6f',
        'icon-uni70',
        'icon-uni71',
        'icon-uni72',
        'icon-uni73',
        'icon-uni74',
        'icon-uni75',
        'icon-uni76',
        'icon-uni77',
        'icon-uni78',
        'icon-uni79',
        'icon-uni7a',
        'icon-uni7b',
        'icon-uni7c',
        'icon-uni7d',
        'icon-uni7e',
        'icon-copyright',
    ];

    let initIconsField = function () {
        $('.icon-select').each(function (index, el) {
            let value = $(el).children('option:selected').val();

            let options = '<option value="">' + $(el).data('empty') + '</option>';

            icons.forEach(function (value) {
                options += '<option value="' + value + '">' + value + '</option>';
            });

            $(el).html(options);
            $(el).val(value);

            let select2Options = {
                templateResult: function (state) {
                    if (!state.id) {
                        return state.text;
                    }
                    return $('<span><i class="elegant-icon ' + state.id + '"></i></span>&nbsp; ' + state.text + '</span>');
                },
                width: '100%',
                templateSelection: function (state) {
                    if (!state.id) {
                        return state.text;
                    }
                    return $('<span><i class="elegant-icon ' + state.id + '"></i></span>&nbsp; ' + state.text + '</span>');
                },
            };

            let parent = $(el).closest('.modal');
            if (parent.length) {
                select2Options.dropdownParent = parent;
            }

            $(el).select2(select2Options);
        });
    }

    initIconsField();

    document.addEventListener('core-init-resources', function() {
        initIconsField();
    });
});
