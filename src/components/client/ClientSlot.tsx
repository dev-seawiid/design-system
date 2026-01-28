'use client'

import { Slot } from '@radix-ui/react-slot'
import React from 'react'

// Radix Slot의 기능만 그대로 수행하는 클라이언트 경계 컴포넌트
export const ClientSlot = (props: React.ComponentProps<typeof Slot>) => {
  return <Slot {...props} />
}
