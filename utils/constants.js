export const ERR = {
  GRAPHQL: 'GRAPHQL',
  PARSE_CHEATSHEET_MD: 'PARSE_CHEATSHEET_MD',
  NETWORK: 'NETWORK',
  NOT_FOUND: 'NOT_FOUND',
  TIMEOUT: 'TIMEOUT',
  AUTH: 'AUTH',
  UNKOWN: 'UNKOWN',
}

export const EVENT = {
  // every time when session come back
  SESSTION_ROUTINE: 'SESSTION_ROUTINE',
  LOGIN_PANEL: 'LOGIN_PANEL',
  LOGIN: 'LOGIN',
  // error
  ERR_RESCUE: 'ERR_RESCUE',

  LOGOUT: 'LOGOUT',
  // preview
  PREVIEW_OPEN: 'PREVIEW_OPEN',
  PREVIEW_CLOSE: 'PREVIEW_CLOSE',
  PREVIEW_CLOSED: 'PREVIEW_CLOSED',
  // new end
  USER_LISTER_OPEN: 'USER_LISTER_OPEN',
  CALL_CASHIER: 'CALL_CASHIER',

  // refresh
  REFRESH_COMMUNITIES: 'REFRESH_COMMUNITIES',
  REFRESH_POSTS: 'REFRESH_POSTS',
  REFRESH_REPOS: 'REFRESH_REPOS',
  REFRESH_JOBS: 'REFRESH_JOBS',
  REFRESH_VIDEOS: 'REFRESH_VIDEOS',
  REFRESH_REACTIONS: 'REFRESH_REACTIONS',

  // route change
  COMMUNITY_CHANGE: 'COMMUNITY_CHANGE',
  TABBER_CHANGE: 'TABBER_CHANGE',
  // Draft editor
  DRAFT_INSERT_SNIPPET: 'DRAFT_INSERT_SNIPPET',

  // favorites
  SET_FAVORITE_CONTENT: 'SET_FAVORITE_CONTENT',
  // customization
  SET_C11N: 'SET_C11N',
  // bills
  NEW_BILLS: 'NEW_BILLS',

  // upload
  UPLOAD_IMG_START: 'UPLOAD_IMG_START',
  UPLOAD_IMG_FINISH: 'UPLOAD_IMG_FINISH',

  // doramon
  QUERY_DORAMON: 'QUERY_DORAMON',

  // set/unset community
  COMMUNITY_MIRROR: 'COMMUNITY_MIRROR',
}

export const TYPE = {
  APP_HEADER_ID: 'APP_HEADER_ID',
  APP_TABBER_ID: 'APP_TABBER_ID',

  CHEATSHEET_ROOT_PAGE: 'CHEATSHEET_ROOT_PAGE',
  COMMUNITIES_ROOT_PAGE: 'COMMUNITIES_ROOT_PAGE',
  COMMUNITY_PAGE: 'COMMUNITY_PAGE',
  POST_PAGE: 'POST_PAGE',
  ACTIVITIES_ROOT_PAGE: 'ACTIVITIES_ROOT_PAGE',

  POST: 'POST',
  JOB: 'JOB',
  REPO: 'REPO',
  VIDEO: 'VIDEO',
  // actions
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',
  WATCH: 'WATCH',
  REACTION: 'reaction',
  UNDO_REACTION: 'undoReaction',

  USER_LISTER_FAVORITES: 'USER_LISTER_FAVORITES',
  USER_LISTER_STARS: 'USER_LISTER_STARS',
  USER_LISTER_COMMUNITY_EDITORS: 'USER_LISTER_COMMUNITY_EDITORS',
  USER_LISTER_COMMUNITY_SUBSCRIBERS: 'USER_LISTER_COMMUNITY_SUBSCRIBERS',

  USER_LISTER_FOLLOWINGS: 'USER_LISTER_FOLLOWINGS',
  USER_LISTER_FOLLOWERS: 'USER_LISTER_FOLLOWERS',

  // preview
  PREVIEW_ACCOUNT_VIEW: 'PREVIEW_ACCOUNT_VIEW',
  PREVIEW_USER_VIEW: 'PREVIEW_USER_VIEW',
  PREVIEW_ACCOUNT_EDIT: 'PREVIEW_ACCOUNT_EDIT',

  PREVIEW_MAILS_VIEW: 'PREVIEW_MAILS_VIEW',
  PREVIEW_ROOT_STORE: 'PREVIEW_ROOT_STORE',

  PREVIEW_POST_VIEW: 'PREVIEW_POST_VIEW',
  PREVIEW_POST_CREATE: 'PREVIEW_POST_CREATE',
  PREVIEW_POST_EDIT: 'PREVIEW_POST_EDIT',

  PREVIEW_JOB_VIEW: 'PREVIEW_JOB_VIEW',
  PREVIEW_JOB_CREATE: 'PREVIEW_JOB_CREATE',
  PREVIEW_JOB_EDIT: 'PREVIEW_JOB_EDIT',

  PREVIEW_REPO_VIEW: 'PREVIEW_REPO_VIEW',
  PREVIEW_REPO_CREATE: 'PREVIEW_REPO_CREATE',
  PREVIEW_REPO_EDIT: 'PREVIEW_REPO_EDIT',

  PREVIEW_VIDEO_VIEW: 'PREVIEW_VIDEO_VIEW',
  PREVIEW_VIDEO_CREATE: 'PREVIEW_VIDEO_CREATE',
  PREVIEW_VIDEO_EDIT: 'PREVIEW_VIDEO_EDIT',

  // PAGE STATE
  LOADING: 'LOADING',
  NOT_FOUND: 'NOT_FOUND',
  RESULT: 'RESULT',
  RESULT_EMPTY: 'RESULT_EMPTY',
  // filters
  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',
}

export const ROUTE = {
  // NOTE: the lower-case is MUST
  HOME: 'home',
  COMMUNITIES: 'communities',
  CHEATSHEETS: 'cheatsheets',
  ACTIVITIES: 'activities',
  POSTS: 'posts',
  JOBS: 'jobs',
  VIDEOS: 'videos',
  USERS: 'users',
  REPOS: 'repos',
  WIKI: 'wiki',
  SHARE: 'share',
  CITY: 'city',
  RADAR: 'radar',
  CHEATSHEET: 'cheatsheet',

  POST: 'post',
  USER: 'user',
  JOB: 'job',
  VIDEO: 'video',
  REPO: 'repo',
}

export const MAJOR_COMMUNITY_THREAD = {
  USER: 'user',
  JOB: 'job',
  VIDEO: 'video',
  REPO: 'repo',
  WIKI: 'wiki',
  CHEATSHEET: 'cheatsheet',
}

export const COMMUNITY_SPEC_THREADS = {
  USER: 'user',
  JOB: 'job',
  VIDEO: 'video',
  REPO: 'repo',
  WIKI: 'wiki',
  CHEATSHEET: 'cheatsheet',
}

export const THREAD = {
  ...COMMUNITY_SPEC_THREADS,
  POST: 'post',
  // home spec
  TECH: 'tech',
  SHARE: 'share',
  RADAR: 'radar',
  CITY: 'city',
  // city spec
  GROUP: 'group',
  COMPANY: 'company',
}

export const TOPIC = {
  POST: 'posts',
  JOB: 'job',
  RADAR: 'radar',
  SHARE: 'share',
  CITY: 'city',
}

export const USER_THREAD = {
  PUBLISH: 'publish',
  COMMENTS: 'comments',
  FAVORITES: 'favorites',
  LINKS: 'likes',
  BILLING: 'billing',
  SETTINGS: 'settings',
}

export const ACTION = {
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',
  WATCH: 'WATCH',
}

export const FILTER = {
  // when
  TODAY: 'TODAY',
  THIS_WEEK: 'THIS_WEEK',
  THIS_MONTH: 'THIS_MONTH',
  THIS_YEAR: 'THIS_YEAR',

  // sort
  MOST_VIEWS: 'MOST_VIEWS',
  MOST_STARS: 'MOST_STARS',
  MOST_FAVORITES: 'MOST_FAVORITES',
  MOST_COMMENTS: 'MOST_COMMENTS',

  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',

  MOST_GITHUB_STAR: 'MOST_GITHUB_STAR',
  MOST_GITHUB_FORK: 'MOST_GITHUB_FORK',
  MOST_GITHUB_WATCH: 'MOST_GITHUB_WATCH',

  // length
  MOST_WORDS: 'MOST_WORDS',
  LEAST_WORDS: 'LEAST_WORDS',

  // READ
  READ: 'TRUE',
  UNREAD: 'FLASE',
  ALL: 'ALL',
}

// customization
export const C11N = {
  DIGEST: 'digest',
  LIST: 'list',
  BRIEF: 'brief',
}

export const PAYMENT_USAGE = {
  SENIOR: 'SENIOR',
  GIRLS_CODE_TOO_PLAN: 'GirlsCodeTooPlan',
  DONATE: 'DONATE',
  SPONSOR: 'SPONSOR',
}

export const PAYMENT_METHOD = {
  ALIPAY: 'ALIPAY',
  WECHAT: 'WECHAT',
}

/* some svg icon are sensitive to fill color */
/* some community svg need fill color, like city etc.. */
export const NON_FILL_COMMUNITY = ['javascript']
