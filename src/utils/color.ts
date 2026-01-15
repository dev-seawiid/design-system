/**
 * HEX 색상을 RGB 값으로 변환
 * @param hex HEX 색상 코드 (#ffffff 또는 ffffff 형식)
 * @returns RGB 값 문자열 (예: "255 255 255")
 */
export function hexToRgb(hex: string): string {
  // # 제거
  const cleanHex = hex.replace('#', '')
  
  // 3자리 HEX를 6자리로 확장 (#abc -> #aabbcc)
  const fullHex = cleanHex.length === 3
    ? cleanHex.split('').map(char => char + char).join('')
    : cleanHex

  // RGB 값 추출
  const r = parseInt(fullHex.substring(0, 2), 16)
  const g = parseInt(fullHex.substring(2, 4), 16)
  const b = parseInt(fullHex.substring(4, 6), 16)

  return `${r} ${g} ${b}`
}

/**
 * HEX 색상이 유효한지 검증
 * @param hex HEX 색상 코드
 * @returns 유효성 여부
 */
export function isValidHex(hex: string): boolean {
  const hexPattern = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexPattern.test(hex)
}

/**
 * 그라데이션 문자열 내의 HEX 색상을 RGB로 변환
 * @param gradient 그라데이션 문자열 (예: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)")
 * @returns HEX가 RGB로 변환된 그라데이션 문자열
 */
export function convertGradientHexToRgb(gradient: string): string {
  // HEX 색상 패턴 매칭 (#ffffff 또는 #fff 형식)
  // 공백, %, ) 등의 문자 앞에 오는 HEX 코드를 매칭
  const hexPattern = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(?=\s|%|\)|,|$)/g
  
  return gradient.replace(hexPattern, (match) => {
    const rgb = hexToRgb(match)
    return `rgb(${rgb})`
  })
}
