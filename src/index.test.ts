import { describe, it, expect } from 'vitest'
import { greet, add } from './index'

describe('greet function', () => {
  it('should return a greeting message', () => {
    const result = greet('TypeScript')
    expect(result).toBe('Hello, TypeScript!')
  })

  it('should handle empty string', () => {
    const result = greet('')
    expect(result).toBe('Hello, !')
  })
})

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3)
  })

  it('should add zero', () => {
    expect(add(5, 0)).toBe(5)
    expect(add(0, 0)).toBe(0)
  })
})