import { act, renderHook } from "@testing-library/react";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup({ initialKeyword: 'pepito' })

    act(() => { result.current.updateKeyword({ keyword: 'batman' }) })

    expect(result.current.keyword).toBe('batman')
})

test('should change rating', () => {
    const { result } = setup({ initialRating: 'g' })
    act(() => { result.current.updateRating({ rating: 'pg-13' }) })
    expect(result.current.rating).toBe('pg-13')
})

test('should change language', () => {
    const { result } = setup({ initialLanguage: 'en' })
    act(() => { result.current.updateLanguage({ language: 'es' }) })
    expect(result.current.language).toBe('es')

})

test('should initial keyword value to be used', () => {
    const { result } = setup({ initialKeyword: 'pepito' })

    expect(result.current.keyword).toBe('pepito')
})

test('should inital rating value to be used', () => {
    const { result } = setup({ initialRating: 'g' })

    expect(result.current.rating).toBe('g')
})

test('should inital language value to be used', () => {
    const { result } = setup({ initialLanguage: 'en' })

    expect(result.current.language).toBe('en')
})

test('should reset to initial values', () => {
    const { result } = setup({ initialKeyword: 'batman',initialRating: 'g', initialLanguage: 'en' })
    act(() => {
        result.current.updateKeyword({keyword:'pepito'})
        result.current.updateRating({rating: 'pg-13'})
        result.current.updateLanguage({language:'es'})
    })

    expect(result.current.keyword).toBe('pepito')
    expect(result.current.rating).toBe('pg-13')
    expect(result.current.language).toBe('es')

    act(() => {result.current.reset()})

    expect(result.current.keyword).toBe('')
    expect(result.current.rating).toBe('g')
    expect(result.current.language).toBe('en')
})