/*
 * a theme inspired by https://vimawesome.com/
 */
import { lighten, darken } from 'polished'

const primaryColor = '#A89074'

const bannerBg = '#f7f1e2' // '#EFE8D6'
const contentBg = '#F7F4EE'
const contentBoxBg = '#FCFBF7'
const fontColor = primaryColor
const sidebarBg = '#2f1802'
const markdownFont = '#c5b297'

const descText = '#c5b297'
const primaryMate = '#B84E20'

const yellow = {
  name: 'yellow',
  logoText: '#d2bca1',
  cover: bannerBg,
  coverIndex: primaryMate,
  contrastFg: 'orange',
  htmlBg: contentBoxBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#839496',
  avatarOpacity: 0.8,
  baseColor: {
    error: 'tomato !important',
    errorBg: '#ffe8e8',
    green: 'yellowgreen !important',
    pink: '#f59dba !important',
    pinkLite: '#ffafc9',
    pinkBtnText: '#fff !important',
  },
  header: {
    fg: '#988E80',
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: bannerBg,
    tabActive: primaryColor, // articleTitle
    tabOthers: lighten(0.1, primaryColor),
    cardBg: '#fbf7ea',
    cardBorder: '#eadbbd',
    cardLogoText: '#dac6ae',
    cardTitle: '#d68364',
  },
  banner: {
    title: '#988E80',
    bg: bannerBg,
    desc: descText,
    spliter: '#f1e8d4',
    number: '#988E80',
    active: primaryMate,
    numberDesc: descText,
    numberDivider: '#dcdad6',
    numberHoverBg: darken(0.03, bannerBg),
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#b3a98c',
    articleHover: '#F5F4EF',
    articleStrip: contentBoxBg,
    articleDigest: '#bdb6ab',
    articleTag: '#B84A20',
    articleLink: descText,
    articleDivider: '#dce5e6',
    commentsUserBorder: contentBoxBg,
    extraInfo: '#6198AA',
    articleSpliter: '#decfb0',
    // like github
    repoTitle: '#978E72',
  },
  content: {
    bg: contentBoxBg,
    border: '#f5eedd',
    cardBg: bannerBg,
    cardBorder: lighten(0.08, contentBoxBg),
    cardBorderHover: lighten(0.1, contentBoxBg),
  },
  footer: {
    text: lighten(0.1, descText),
    hover: descText,
    title: '#77706B',
    bottomBg: '#252325',
  },
  sidebar: {
    bg: sidebarBg,
    holder: lighten(0.15, sidebarBg),
    logoText: primaryColor,
    menuHover: lighten(0.1, sidebarBg),
    pinActive: '#6AB3B1',
    menuLink: '#b6cecd',
    borderColor: lighten(0.05, sidebarBg),
  },
  preview: {
    title: primaryColor,
    desc: lighten(0.05, descText),
    font: descText,
    bg: contentBg,
    shadow: '-5px 0px 11px 0px rgba(90, 64, 26, 0.1)',
    closerShadow: '-8px 5px 14px 0px rgba(132, 113, 63, 0.19)',
    markdownHelperBg: lighten(0.04, contentBoxBg),
    accountBg: contentBoxBg,
    articleBg: contentBoxBg,
    helper: lighten(0.3, contentBg),
    helperHover: primaryColor,
    topLine: '#4EAFA5',
    icon: '#4EAFA5',
    divider: '#eae7de',
  },
  article: {
    link: primaryMate,
    linkHover: lighten(0.05, primaryMate),
    reactionTitle: primaryColor,
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: lighten(0.06, primaryColor),
    didIcon: primaryMate,
    title: lighten(0.06, primaryColor),
    username: lighten(0.06, primaryColor),
    number: primaryMate,
    floor: primaryMate,
    reply: lighten(0.06, primaryColor),
    replyBg: '#fff4da',
    placeholder: descText,
    filter: descText,
    filterActive: lighten(0.06, primaryColor),
    action: lighten(0.06, primaryColor),
    // mention text displayed in article
    mentionText: '#70768B',
    mentionTextBg: '#423a4a',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: lighten(0.06, primaryColor),
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',
  },
  editor: {
    title: primaryColor,
    content: descText,
    placeholder: '#c8d3cf',
    headerBg: '#fffaf0',
    contentBg: '#fffaf0',
    border: '#fffaf0',
    borderActive: primaryColor,
    borderNormal: darken(0.05, bannerBg),
    footer: descText,
  },
  pagination: {
    activeNum: 'white',
    itemBg: bannerBg,
    itemBorderColor: darken(0.05, bannerBg),
    disableText: descText,
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#f1eddd',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  geoMap: {
    oceanColor: '#F9FCFC',
    regionBg: '#A0BCBD',
    restRegionBg: '#D9E6E5',
    borderStroke: '#A0BBBD',
    markerBg: '#C2DEB6',
    markerShadow: '#C2DEB6',
  },
  bannerHeatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#f1eddd',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  markdown: {
    title: darken(0.05, '#DBE0E1'),
    fg: markdownFont,
    titleBottom: '1px solid #154452',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
    br: '#e8e8e8',
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
  },
  button: {
    primary: '#d68364',
    fg: '#ffeadc',
    hoverBg: lighten(0.1, '#d68364'),
    activeBg: darken(0.01, '#d68364'),
    clicked: '#d68364',
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: contentBoxBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.45,
    text: '#b7a689',
  },
  tagger: {
    text: '#fff6f1',
    bg: '#d49481',
    border: '#d49481',
    closeBtn: '#fff6f1',
  },
  tabs: {
    headerActive: lighten(0.04, primaryColor),
    header: lighten(0.2, primaryColor),
    contentBg: darken(0.03, contentBoxBg),
    headerBg: darken(0.02, contentBoxBg),
    headerActiveTop: primaryColor,
    border: '#EAE0C9',
    bottomLine: '#e4e0d6',
  },
  modal: {
    bg: '#FCFBF7',
    border: primaryColor,
    innerSelectBg: '#f7f0e0',
  },
  form: {
    inputBg: lighten(0.03, contentBoxBg),
    text: descText,
    label: primaryColor,
    border: descText,
    shadow: 'rgba(184, 198, 192, 0.3)',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
  toast: {
    bg: contentBoxBg,
    border: descText,
    message: descText,
    title: primaryColor,
    infoBar: primaryColor,
    errorBar: '#f59381',
    successBar: '#9dd035',
    warnBar: '#f5a30e',
  },
  mailBox: {
    headHightBg: bannerBg,
  },
  alertWarn: {
    border: '#ffe58f',
    bg: '#fffbe6',
    text: '#c3ae8e',
  },
  table: {
    headerBg: '#024858',
    headTitle: '#83a7ad',
    text: '#83a7ad',
    border: '#004657',
    hoverBg: '#285769',
  },
}

export default yellow
