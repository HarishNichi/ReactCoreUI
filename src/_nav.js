import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'MAIN',
  },
  {
    component: CNavItem,
    name: '道具概要', // Tool Overview
    to: '/tool-overview',
  },
  {
    component: CNavItem,
    name: '現場報告', // Site Report
    to: '/site-report',
  },
  {
    component: CNavItem,
    name: '道具のまとめ', // Tool Summary
    to: '/tool-summary',
  },
  {
    component: CNavTitle,
    name: 'TOOL',
  },
  {
    component: CNavItem,
    name: 'スーパーボックス', // Super Box
    to: '/super-box',
  },
  {
    component: CNavItem,
    name: 'インパクト', // Impact
    to: '/impact',
  },
  {
    component: CNavItem,
    name: 'セーバー', // Saver
    to: '/saver',
  },
  {
    component: CNavItem,
    name: 'サンダー', // Sander
    to: '/sander',
  },
  {
    component: CNavItem,
    name: '電動ドリル', // Electric Drill
    to: '/electric-drill',
  },
  {
    component: CNavItem,
    name: '脚立', // Stepladder
    to: '/stepladder',
  },
  {
    component: CNavItem,
    name: 'ボードカッター', // Board Cutter
    to: '/board-cutter',
  },
  {
    component: CNavItem,
    name: 'マルチカッター', // Multi Cutter
    to: '/multi-cutter',
  },
  {
    component: CNavItem,
    name: '丸のこ', // Circular Saw
    to: '/circular-saw',
  },
  {
    component: CNavItem,
    name: '丸のこバッテリー', // Circular Saw Battery
    to: '/circular-saw-battery',
  },
  {
    component: CNavItem,
    name: '電動タッカー', // Electric Tacker
    to: '/electric-tacker',
  },
  {
    component: CNavItem,
    name: '発電機', // Generator
    to: '/generator',
  },
  {
    component: CNavItem,
    name: 'ブロワー', // Blower
    to: '/blower',
  },
  {
    component: CNavItem,
    name: 'ブロワーバッテリー', // Blower Battery
    to: '/blower-battery',
  },
  {
    component: CNavItem,
    name: 'チェンソー', // Chainsaw
    to: '/chainsaw',
  },
  {
    component: CNavItem,
    name: 'エンジンカッター', // Engine Cutter
    to: '/engine-cutter',
  },
  {
    component: CNavItem,
    name: '掃除機', // Vacuum Cleaner
    to: '/vacuum-cleaner',
  },
  {
    component: CNavItem,
    name: '180サンダー', // 180 Sander
    to: '/180-sander',
  },
  {
    component: CNavItem,
    name: 'カップかけサンダー', // Cup Grinder
    to: '/cup-grinder',
  },
  {
    component: CNavItem,
    name: 'インパクトレンチ', // Impact Wrench
    to: '/impact-wrench',
  },
]

export default _nav
