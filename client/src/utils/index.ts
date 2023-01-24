import FileSaver from 'file-saver'
import { surpriseMePrompts } from '@/constants'

const API_URL = import.meta.env.VITE_API_URL

export function getRandomPrompt(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}

export async function downloadImage(_id: string, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

export function request(input: RequestInfo | URL, init?: RequestInit) {
  const url = `${API_URL}${input}`
  console.log('🚀🚀🚀🚀', url)
  return fetch(url, init)
}
