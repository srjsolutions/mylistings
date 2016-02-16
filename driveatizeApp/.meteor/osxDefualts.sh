#!/usr/bin/env bash
#:
#: see: https://gist.github.com/gregorynicholas/2160046ec6946a2ce0fa
#: src: https://github.com/mathiasbynens/dotfiles/blob/master/.osx
#: updated: 2015-06-06

# ask for the administrator password upfront
sudo -v

# keep-alive: update existing `sudo` time stamp until `.osx` has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

computername="gregorynicholas"

###############################################################################
# general UI/UX                                                               #
###############################################################################

# set computer name (as done via system preferences → sharing)
sudo scutil --set ComputerName "${computername}"
sudo scutil --set HostName "${computername}"
sudo scutil --set LocalHostName "${computername}"
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string "${computername}"


# disable transparency in the menu bar and elsewhere on Yosemite
defaults write com.apple.universalaccess reduceTransparency -bool true

# set standby delay to 24 hours (default is 1 hour)
sudo pmset -a standbydelay 86400

# disable the sound effects on boot
sudo nvram SystemAudioVolume=" "

# menu bar: disable transparency
defaults write NSGlobalDomain AppleEnableMenuBarTransparency -bool false

# always show scrollbars
defaults write NSGlobalDomain AppleShowScrollBars -string "Always"
# possible values: `WhenScrolling`, `Automatic` and `Always`


# menu bar: show remaining battery time (on pre-10.8); hide percentage
defaults write com.apple.menuextra.battery ShowPercent -string "NO"
defaults write com.apple.menuextra.battery ShowTime -string "YES"

# menu bar: hide the useless time machine + volume icons
defaults write com.apple.systemuiserver menuExtras -array "/System/Library/CoreServices/Menu Extras/Bluetooth.menu" "/System/Library/CoreServices/Menu Extras/AirPort.menu" "/System/Library/CoreServices/Menu Extras/Battery.menu" "/System/Library/CoreServices/Menu Extras/Clock.menu"

# menu bar: hide the time machine, volume, + user icons
for domain in ~/Library/Preferences/ByHost/com.apple.systemuiserver.*; do

# set sidebar icon size to medium
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 2

# disable opening and closing window animations
defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false

# increase window resize speed for cocoa applications
defaults write NSGlobalDomain NSWindowResizeTime -float 0.001

# expand save panel by default
defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true

# expand print panel by default
defaults write NSGlobalDomain PMPrintingExpandedStateForPrint -bool true

# save to disk (not to icloud) by default
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false

# automatically quit printer app once the print jobs complete
defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true


# disable the “are you sure you want to open this application?” dialog
defaults write com.apple.LaunchServices LSQuarantine -bool false

# remove duplicates in the “open with” menu (also see `lscleanup` alias)
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user


# display ASCII control characters using caret notation in standard text views
# try e.g. `cd /tmp; unidecode "\x{0000}" > cc.txt; open -e cc.txt`
defaults write NSGlobalDomain NSTextShowsControlCharacters -bool true

# disable resume system-wide
defaults write NSGlobalDomain NSQuitAlwaysKeepsWindows -bool false

# disable automatic termination of inactive apps
defaults write NSGlobalDomain NSDisableAutomaticTermination -bool true

# disable the crash reporter
defaults write com.apple.CrashReporter DialogType -string "none"

# set help viewer windows to non-floating mode
defaults write com.apple.helpviewer DevMode -bool true

# reveal ip address, hostname, OS version, etc. when clicking the clock
# in the login window
sudo defaults write /Library/Preferences/com.apple.loginwindow AdminHostInfo HostName

# restart automatically if the computer freezes
systemsetup -setrestartfreeze on

# disable Notification Center and remove the menu bar icon
launchctl unload -w /System/Library/LaunchAgents/com.apple.notificationcenterui.plist 2> /dev/null

# disable smart quotes as they’re annoying when typing code
defaults write NSGlobalDomain NSAutomaticQuoteSubstitutionEnabled -bool false

# disable smart dashes as they’re annoying when typing code
defaults write NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false

###############################################################################
# SSD-specific tweaks                                                         #
###############################################################################

# disable local time machine snapshots
sudo tmutil disablelocal

# remove the sleep image file to save disk space
sudo rm /private/var/vm/sleepimage
# create a zero-byte file instead…
sudo touch /private/var/vm/sleepimage
# …and make sure it can’t be rewritten
sudo chflags uchg /Private/var/vm/sleepimage

# disable the sudden motion sensor as it’s not useful for SSDs
sudo pmset -a sms 0


###############################################################################
# trackpad, mouse, keyboard, bluetooth accessories, and input                 #
###############################################################################
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true
defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
defaults write NSGlobalDomain com.apple.mouse.tapBehavior -int 1

# trackpad: map bottom right corner to right-click
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadCornerSecondaryClick -int 2
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadRightClick -bool true
defaults -currentHost write NSGlobalDomain com.apple.trackpad.trackpadCornerClickBehavior -int 1
defaults -currentHost write NSGlobalDomain com.apple.trackpad.enableSecondaryClick -bool true

# increase sound quality for bluetooth headphones/headsets
defaults write com.apple.BluetoothAudioAgent "Apple Bitpool Min (editable)" -int 40

# enable full keyboard access for all controls
# (e.g. enable tab in modal dialogs)
defaults write NSGlobalDomain AppleKeyboardUIMode -int 3

# use scroll gesture with the Ctrl (^) modifier key to zoom
defaults write com.apple.universalaccess closeViewScrollWheelToggle -bool true
defaults write com.apple.universalaccess HIDScrollZoomModifierMask -int 262144
# follow the keyboard focus while zoomed in
defaults write com.apple.universalaccess closeViewZoomFollowsFocus -bool true

# disable press-and-hold for keys in favor of key repeat
defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

# set a blazingly fast keyboard repeat rate
defaults write NSGlobalDomain KeyRepeat -int 0

# automatically illuminate built-in macbook keyboard in low light
defaults write com.apple.BezelServices kDim -bool true

# turn off keyboard illumination when computer is not used for 5 minutes
defaults write com.apple.BezelServices kDimTime -int 300

# disable auto-correct
defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false

# stop itunes from responding to the keyboard media keys
# launchctl unload -w /System/Library/LaunchAgents/com.apple.rcd.plist 2> /dev/null



###############################################################################
# screen                                                                      #
###############################################################################
# require password immediately after sleep or screen saver begins
defaults write com.apple.screensaver askForPassword -int 1
defaults write com.apple.screensaver askForPasswordDelay -int 0

# save screenshots to a specific location
defaults write com.apple.screencapture location -string "${HOME}/Google Drive/photos/screenshots"

# save screenshots format (other options: BMP, GIF, JPG, PDF, TIFF)
defaults write com.apple.screencapture type -string "png"

# disable shadow in screenshots
defaults write com.apple.screencapture disable-shadow -bool true

# enable subpixel font rendering on non-Apple LCDs
defaults write NSGlobalDomain AppleFontSmoothing -int 2

# enable HiDPI display modes (requires restart)
sudo defaults write /Library/Preferences/com.apple.windowserver DisplayResolutionEnabled -bool true

###############################################################################
# Finder                                                                      #
###############################################################################

# finder: allow quitting via ⌘ + Q; doing so will also hide desktop icons
defaults write com.apple.finder QuitMenuItem -bool true

# finder: disable window animations and get info animations
defaults write com.apple.finder DisableAllAnimations -bool true

# finder: show hidden files by default
defaults write com.apple.finder AppleShowAllFiles -bool true

# finder: show all filename extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# finder: show status bar
defaults write com.apple.finder ShowStatusBar -bool true

# finder: show path bar
defaults write com.apple.finder ShowPathbar -bool true

# finder: allow text selection in Quick Look
defaults write com.apple.finder QLEnableTextSelection -bool true

# fisplay full POSIX path as Finder window title
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true

# disable the warning when changing a file extension
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

# enable spring loading for directories
defaults write NSGlobalDomain com.apple.springing.enabled -bool true
# remove the spring loading delay for directories
defaults write NSGlobalDomain com.apple.springing.delay -float 0

# avoid creating .DS_Store files on network volumes
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true

# disable disk image verification
defaults write com.apple.frameworks.diskimages skip-verify -bool true
defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

# Show item info near icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:showItemInfo true" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:showItemInfo true" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:showItemInfo true" ~/Library/Preferences/com.apple.finder.plist

# show item info to the right of the icons on the desktop
/usr/libexec/PlistBuddy -c "Set DesktopViewSettings:IconViewSettings:labelOnBottom false" ~/Library/Preferences/com.apple.finder.plist

# enable snap-to-grid for icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist

# increase grid spacing for icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:gridSpacing 100" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:gridSpacing 100" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:gridSpacing 100" ~/Library/Preferences/com.apple.finder.plist

# increase the size of icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:iconSize 80" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:iconSize 80" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:iconSize 80" ~/Library/Preferences/com.apple.finder.plist

# use list view in all finder windows by default
# four-letter codes for the other view modes: `icnv`, `clmv`, `Flwv`
defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"

# disable the warning before emptying the trash
defaults write com.apple.finder WarnOnEmptyTrash -bool false

# empty trash securely by default
defaults write com.apple.finder EmptyTrashSecurely -bool true

# enable airdrop over ethernet and on unsupported macs running Lion
defaults write com.apple.NetworkBrowser BrowseAllInterfaces -bool true

# enable the macbook air superdrive on any mac
sudo nvram boot-args="mbasd=1"

# show the ~/Library folder
chflags nohidden ~/Library



###############################################################################
# dock, dashboard, and hot corners                                            #
###############################################################################


# # make dock icons of hidden applications translucent
defaults write com.apple.dock showhidden -bool true

# Reset Launchpad, but keep the desktop wallpaper intact
find "${HOME}/Library/Application Support/Dock" -name "*-*.db" -maxdepth 1 -delete

# speed up mission control animations
defaults write com.apple.dock expose-animation-duration -float 0.1

# set the icon size of Dock items to 36 pixels
defaults write com.apple.dock tilesize -int 36

# minimize windows into their application’s icon
defaults write com.apple.dock minimize-to-application -bool true

# show indicator lights for open applications in the dock
defaults write com.apple.dock show-process-indicators -bool true

# don’t animate opening applications from the dock
defaults write com.apple.dock launchanim -bool false

# disable dashboard
defaults write com.apple.dashboard mcx-disabled -bool true

# don’t show dashboard as a space
defaults write com.apple.dock dashboard-in-overlay -bool true

# don’t automatically rearrange spaces based on most recent use
defaults write com.apple.dock mru-spaces -bool false

# automatically hide and show the dock
defaults write com.apple.dock autohide -bool true

# reset launchpad
find ~/Library/Application\ Support/Dock -name "*.db" -maxdepth 1 -delete


# Hot corners
# Possible values:
#  0: no-op
#  2: mission control
#  3: show application windows
#  4: desktop
#  5: start screen saver
#  6: disable screen saver
#  7: dashboard
# 10: put display to sleep
# 11: launchpad
# 12: notification center

# top left screen corner
#    → mission control
defaults write com.apple.dock wvous-tl-corner -int 3
defaults write com.apple.dock wvous-tl-modifier -int 0

# top right screen corner
#    → desktop
defaults write com.apple.dock wvous-tr-corner -int 4
defaults write com.apple.dock wvous-tr-modifier -int 0

# bottom left screen corner
#    → start screen saver
defaults write com.apple.dock wvous-bl-corner -int 5
defaults write com.apple.dock wvous-bl-modifier -int 0



# defaults write com.apple.dock expose-animation-duration -float 0.1
defaults write com.apple.dock desktop-picture-show-debug-text -bool false
defaults write com.apple.finder FXDesktopLayoutGridCharCount 50


# Add iOS Simulator to Launchpad
sudo ln -sf "/Applications/Xcode.app/Contents/Developer/Applications/iOS Simulator.app" "/Applications/iOS Simulator.app"



###############################################################################
# itunes                                                                      #
###############################################################################

# disable the ping sidebar in itunes
defaults write com.apple.iTunes disablePingSidebar -bool true

# disable all the other ping stuff in itunes
defaults write com.apple.iTunes disablePing -bool true
defaults write com.apple.iTunes allow-half-stars -bool true

defaults write com.apple.dock itunes-notifications -bool true
defaults delete com.apple.dock itunes-notifications


###############################################################################
# safari & webkit                                                             #
###############################################################################

# set safari’s home page to `about:blank` for faster loading
defaults write com.apple.Safari HomePage -string "about:blank"

# prevent safari from opening ‘safe’ files automatically after downloading
defaults write com.apple.Safari AutoOpenSafeDownloads -bool false

# allow hitting the backspace key to go to the previous page in history
defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2BackspaceKeyNavigationEnabled -bool true

# disable safari’s thumbnail cache for history and top sites
defaults write com.apple.Safari DebugSnapshotsUpdatePolicy -int 2

# enable safari’s debug menu
defaults write com.apple.Safari IncludeInternalDebugMenu -bool true

# make safari’s search banners default to Contains instead of Starts With
defaults write com.apple.Safari FindOnPageMatchesWordStartsOnly -bool false

# remove useless icons from safari’s bookmarks bar
defaults write com.apple.Safari ProxiesInBookmarksBar "()"

# add a context menu item for showing the web inspector in web views
defaults write NSGlobalDomain WebKitDeveloperExtras -bool true

# privacy: don’t send search queries to apple
defaults write com.apple.Safari UniversalSearchEnabled -bool false
defaults write com.apple.Safari SuppressSearchSuggestions -bool true

# press tab to highlight each item on a web page
defaults write com.apple.Safari WebKitTabToLinksPreferenceKey -bool true


# show the full url in the address bar (note: this still hides the scheme)
defaults write com.apple.Safari ShowFullURLInSmartSearchField -bool true
defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2TabsToLinks -bool true

# hide safari’s bookmarks bar by default
defaults write com.apple.Safari ShowFavoritesBar -bool false

# make safari’s search banners default to contains instead of starts with
defaults write com.apple.Safari FindOnPageMatchesWordStartsOnly -bool false


###############################################################################
# spotlight                                                                   #
###############################################################################

# hide spotlight tray-icon (and subsequent helper)
#sudo chmod 600 /System/Library/CoreServices/Search.bundle/Contents/MacOS/Search

# disable spotlight indexing for any volume that gets mounted and has not yet
# been indexed before.
# use `sudo mdutil -i off "/Volumes/foo"` to stop indexing any volume.
sudo defaults write /.Spotlight-V100/VolumeConfiguration Exclusions -array "/Volumes"

# change indexing order and disable some file types

defaults write com.apple.spotlight orderedItems -array \
        '{"enabled" = 1;"name" = "APPLICATIONS";}' \
        '{"enabled" = 1;"name" = "SYSTEM_PREFS";}' \
        '{"enabled" = 1;"name" = "DIRECTORIES";}' \
        '{"enabled" = 1;"name" = "PDF";}' \
        '{"enabled" = 1;"name" = "FONTS";}' \
        '{"enabled" = 0;"name" = "DOCUMENTS";}' \
        '{"enabled" = 0;"name" = "MESSAGES";}' \
        '{"enabled" = 0;"name" = "CONTACT";}' \
        '{"enabled" = 0;"name" = "EVENT_TODO";}' \
        '{"enabled" = 0;"name" = "IMAGES";}' \
        '{"enabled" = 0;"name" = "BOOKMARKS";}' \
        '{"enabled" = 0;"name" = "MUSIC";}' \
        '{"enabled" = 0;"name" = "MOVIES";}' \
        '{"enabled" = 0;"name" = "PRESENTATIONS";}' \
        '{"enabled" = 0;"name" = "SPREADSHEETS";}' \
        '{"enabled" = 0;"name" = "SOURCE";}'

# load new settings before rebuilding the index
killall mds > /dev/null 2>&1
# make sure indexing is enabled for the main volume
sudo mdutil -i on / > /dev/null
# rebuild the index from scratch
sudo mdutil -E / > /dev/null


###############################################################################
# terminal.app
###############################################################################

# only use UTF-8 in Terminal.app
defaults write com.apple.terminal StringEncodings -array 4

# use a modified version of the Pro theme by default in Terminal.app
open "${HOME}/init/gregorynich.terminal"
sleep 1 # Wait a bit to make sure the theme is loaded
defaults write com.apple.terminal "Default Window Settings" -string "gregorynich"
defaults write com.apple.terminal "Startup Window Settings" -string "gregorynich"


###############################################################################
# Time Machine                                                                #
###############################################################################

# prevent time machine from prompting to use new hard drives as backup volume
defaults write com.apple.TimeMachine DoNotOfferNewDisksForBackup -bool true

# disable local time machine backups
hash tmutil &> /dev/null && sudo tmutil disablelocal


###############################################################################
# address book, dashboard, ical, textedit, and disk utility                   #
###############################################################################

# use plain text mode for new TextEdit documents
defaults write com.apple.TextEdit RichText -int 0
# Open and save files as UTF-8 in TextEdit
defaults write com.apple.TextEdit PlainTextEncoding -int 4
defaults write com.apple.TextEdit PlainTextEncodingForWrite -int 4

# enable the debug menu in disk utility
defaults write com.apple.DiskUtility DUDebugMenuEnabled -bool true
defaults write com.apple.DiskUtility advanced-image-options -bool true


###############################################################################
# mac app store                                                               #
###############################################################################

# enable the webkit developer tools in the mac app store
defaults write com.apple.appstore WebKitDeveloperExtras -bool true

# enable debug menu in the mac app store
defaults write com.apple.appstore ShowDebugMenu -bool true


###############################################################################
# google chrome & google chrome canary                                        #
###############################################################################

# allow installing user scripts via github or userscripts.org
defaults write com.google.Chrome ExtensionInstallSources -array "https://*.github.com/*" "http://userscripts.org/*"
defaults write com.google.Chrome.canary ExtensionInstallSources -array "https://*.github.com/*" "http://userscripts.org/*"

# disable the all too sensitive backswipe on trackpads
defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool false
defaults write com.google.Chrome.canary AppleEnableSwipeNavigateWithScrolls -bool false

# disable the all too sensitive backswipe on magic mouse
defaults write com.google.Chrome AppleEnableMouseSwipeNavigateWithScrolls -bool false
defaults write com.google.Chrome.canary AppleEnableMouseSwipeNavigateWithScrolls -bool false

# expand the print dialog by default
defaults write com.google.Chrome PMPrintingExpandedStateForPrint2 -bool true
defaults write com.google.Chrome.canary PMPrintingExpandedStateForPrint2 -bool true


###############################################################################
# sizeup.app                                                                  #
###############################################################################

# start sizeup at login
defaults write com.irradiatedsoftware.SizeUp StartAtLogin -bool true

# don’t show the preferences window on next start
defaults write com.irradiatedsoftware.SizeUp ShowPrefsOnNextStart -bool false


###############################################################################
# transmission.app                                                            #
###############################################################################

# store incomplete downloads
defaults write org.m0k.transmission UseIncompleteDownloadFolder -bool true
defaults write org.m0k.transmission IncompleteDownloadFolder -string "${HOME}/downloads/torrents"

# trash original torrent files
defaults write org.m0k.transmission DeleteOriginalTorrent -bool true

# hide the donate message
defaults write org.m0k.transmission WarningDonate -bool false

# hide the legal disclaimer
defaults write org.m0k.transmission WarningLegal -bool false


###############################################################################
# twitter.app                                                                 #
###############################################################################

# Disable smart quotes as it’s annoying for code tweets
defaults write com.twitter.twitter-mac AutomaticQuoteSubstitutionEnabled -bool false

# show the app window when clicking the menu icon
defaults write com.twitter.twitter-mac MenuItemBehavior -int 1

# enable the hidden ‘Develop’ menu
defaults write com.twitter.twitter-mac ShowDevelopMenu -bool true

# open links in the background
defaults write com.twitter.twitter-mac openLinksInBackground -bool true

# allow closing the ‘new tweet’ window by pressing `Esc`
defaults write com.twitter.twitter-mac ESCClosesComposeWindow -bool true

# show full names rather than Twitter handles
defaults write com.twitter.twitter-mac ShowFullNames -bool true

# hide the app in the background if it’s not the front-most window
defaults write com.twitter.twitter-mac HideInBackground -bool true


# disable guest access
sudo defaults write /Library/Preferences/com.apple.AppleFileServer guestAccess -bool NO
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server AllowGuestAccess -bool NO

# run the keymodifier apple script
osascript keymap.scpt


# setup the airport command line utility
ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin
airport -I


###############################################################################
# activity monitor                                                            #
###############################################################################

# show the main window when launching activity monitor
defaults write com.apple.ActivityMonitor OpenMainWindow -bool true

# sort activity monitor results by cpu usage
defaults write com.apple.ActivityMonitor SortColumn -string "CPUUsage"
defaults write com.apple.ActivityMonitor SortDirection -int 0


###############################################################################
# mac app store                                                               #
###############################################################################

# enable the webkit developer tools in the mac app store
defaults write com.apple.appstore WebKitDeveloperExtras -bool true

# enable debug menu in the mac app store
defaults write com.apple.appstore ShowDebugMenu -bool true



###############################################################################
# kill affected applications                                                  #
###############################################################################

for app in "Dock" "Finder" \
  "Safari" "SizeUp" "SystemUIServer" "Terminal" "Transmission" \
  "Twitter" "Google Chrome" "cfprefsd"; do
  killall "${app}" > /dev/null 2>&1
done


echo "done. note that some of these changes require a logout/restart to take effect."



# REMOVE LARGE FILES

# disable sleep mode creating large images on disk..
# see: $ man pmset for hibernate options
sudo pmset -a hibernatemode 0; sudo rm /var/vm/sleepimage
sudo touch /private/var/vm/sleepimage
# sudo chflags schq /private/var/vm/sleepimage  # doesnt work

sudo rm -rf /Applications/iMovie.app/Contents/Frameworks/StudioSharedResources.framework/Versions/A/Resources/AppThemeBitsB.car
sudo rm -rf /System/Library/Speech/Voices/Alex.SpeechVoice/Contents/Resources/PCMWave

rm -rf "/Library/Application Support/GarageBand/Learn to Play/*"
rm -rf /Users/gregorynicholas/Library/Caches/com.apple.helpd/SDMHelpData/Other/English/lsm_map


# disable ui sounds for screenshots, trash
defaults write com.apple.systemsound "com.apple.sound.uiaudio.enabled" -int 0

