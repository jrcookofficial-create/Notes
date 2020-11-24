import { SettingsObject, SideBarItemAction, SidebarPadding } from './types';
import path from "path";
import { getElectronPath } from '../utils';
import { defaultTheme } from '../common/theming';

export const defaultSettings: SettingsObject = {
  editorAtlassianAdvancedTables: true,
  editorMonacoMinimap: true,
  editorMonacoRenderControlChars: false,
  editorMonacoRenderWhitespace: 'none',
  editorMonacoRuler: 0,
  editorMonacoTabSize: 4,
  editorMonacoTheme: 'vs',
  editorMonacoWordWrap: 'off',
  autoBackupLocation: path.join(getElectronPath('appData'), 'yana', 'backup'),
  autoBackupActive: true,
  autoBackupCount: 3,
  autoBackupIncludeMedia: true,
  autoBackupInterval: 1000 * 60 * 60 * 12,
  autoUpdateAppActive: true,
  autoUpdateAppBackupActive: true,
  noteItemMaximumSaveInterval: 1000 * 60,
  noteItemSaveDelay: 1000 * 10,
  sidebarCollectionItemBackgroundAction: SideBarItemAction.ToggleExpansion,
  sidebarCollectionItemMiddleClickAction: SideBarItemAction.OpenInNewTab,
  sidebarCollectionItemNameAction: SideBarItemAction.OpenInCurrentTab,
  sidebarMediaItemBackgroundAction: SideBarItemAction.OpenInCurrentTab,
  sidebarMediaItemMiddleClickAction: SideBarItemAction.OpenInNewTab,
  sidebarMediaItemNameAction: SideBarItemAction.OpenInCurrentTab,
  sidebarNoteItemBackgroundAction: SideBarItemAction.OpenInCurrentTab,
  sidebarNoteItemMiddleClickAction: SideBarItemAction.OpenInNewTab,
  sidebarNoteItemNameAction: SideBarItemAction.OpenInCurrentTab,
  sidebarNumberOfUntruncatedItems: 5,
  sidebarOffsetPerLevel: 16,
  sidebarShowRecentItems: false,
  sidebarShowRecentItemsCount: 3,
  sidebarShowStarredItems: true,
  sidebarShowStarredItemsCount: 3,
  sidebarItemPadding: SidebarPadding.Default,
  devToolsOpen: false,
  devLoggerBlacklist: '',
  devLoggerWhitelist: '',
  devLoggerActive: false,
  themePrimaryColor: defaultTheme.primaryColor,
  themeSidebarColor: defaultTheme.sidebarColor,
  themeSidebarHoverColor: defaultTheme.sidebarHoverColor,
  themeSidebarTextColor: defaultTheme.sidebarTextColor,
  themeTopbarColor: defaultTheme.topBarColor,
  telemetry: true,
  zoomFactor: 1,
  completedSpotlights: [],
}