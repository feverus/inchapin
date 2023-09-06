export function formatSeconds(seconds: number): string {
  let s = (seconds % 60)
  let m = Math.floor(seconds / 60 % 60)
  let h = Math.floor(seconds / 60 / 60)
  let word = 'секунд'
  if (m > 0) word = 'минут'
  if (h > 0) word = 'часов'
  return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')} ${word}`;
}