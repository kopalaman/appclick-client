import React from 'react'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface NavMenuItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  children?: {
    label: string
    icon?: any
    href?: string
    description?: string
    disabled?: boolean
    external?: boolean
  }[]
}
