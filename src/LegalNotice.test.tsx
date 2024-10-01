import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import LegalNotice from './LegalNotice'

test('LegalNotice', async () => {
  const { container } = render(
    <LegalNotice
      disclaimer="This is a disclaimer"
      license="https://example.com/license"
      terms="https://example.com/terms"
    />,
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="LegalNotice"
      >
        <div
          class="LegalNotice-disclaimer"
        >
          This is a disclaimer
        </div>
        <a
          class="Link"
          href="https://example.com/license"
        >
          License
        </a>
        <a
          class="Link"
          href="https://example.com/terms"
        >
          Terms of Service
        </a>
      </div>
    </div>
  `)
})
