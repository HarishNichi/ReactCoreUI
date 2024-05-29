import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'MAIN',
  },
  {
    component: CNavItem,
    name: '現場名',  //現場名まとめ
    to: '/dashboard',
    // name: 'Dashboard Summary'
  },
  {
    component: CNavTitle,
    name: 'TOOL',
  },
  {
    component: CNavItem,
    name: 'スーパーボックス', // Super Box
    to: '/tool/superbox',
  },
  {
    component: CNavItem,
    name: 'セットアップ', // Setup
    to: '/tool/setup',
  },
  {
    component: CNavGroup,
    name: 'カテゴリー', // Category
    to: '/tool/category',
    items: [
      {
        component: CNavItem,
        name: '子1', // Child 1
        to: '/tool/category/child1',
      },
      {
        component: CNavItem,
        name: '子2', // Child 2
        to: '/tool/category/child2',
      },
      {
        component: CNavItem,
        name: '子3', // Child 3
        to: '/tool/category/child3',
      },
    ],
  },
  {
    component: CNavItem,
    name: '一覧', // List
    to: '/tool/list',
  },
  {
    component: CNavItem,
    name: '履歴', // History
    to: '/tool/history',
  },
  {
    component: CNavItem,
    name: '検索', // Search
    to: '/tool/search',
  },
  {
    component: CNavItem,
    name: 'トレンド', // Trends
    to: '/tool/trends',
  },
  {
    component: CNavGroup,
    name: 'チェックリスト', // Checklist
    to: '/tool/checklist',
    items: [
      {
        component: CNavItem,
        name: '子1', // Child 1
        to: '/tool/checklist/child1',
      },
      {
        component: CNavItem,
        name: '子2', // Child 2
        to: '/tool/checklist/child2',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'ACCOUNT',
  // },
  // {
  //   component: CNavItem,
  //   name: 'ログアウト', // Logout
  //   to: '/logout',
  // },
  // {
  //   component: CNavItem,
  //   name: '設定', // Settings
  //   to: '/settings',
  // },
]

export default _nav
