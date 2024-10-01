import { test, expect, vi } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import TopKeywordsPage from './TopKeywordsPage'

globalThis.fetch = vi.fn().mockResolvedValue({
  json: () => ({
    "meta": {
      "disclaimer": "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service.",
      "terms": "https://open.fda.gov/terms/",
      "license": "https://open.fda.gov/license/",
      "last_updated": "2024-08-21",
      "results": { "skip": 0, "limit": 30, "total": 16412 }
    },
    "results": [
      {
        "status": "Terminated",
        "country": "United States",
        "classification": "Class II",
        "product_type": "Drugs",
        "product_description": "Progesterone 100 mg/mL in Corn Oil Injection, 2 mL vials, Rx only, Essential Wellness PHARMACY, 4625 N. University, Peoria, IL 61614.",
        "product_quantity": "1 vial",
        "reason_for_recall": "Lack of Assurance of Sterility:  A recall of all compounded sterile preparations within expiry is being initiated due to observations associated with poor sterile production practices resulting in a lack of sterility assurance for their finished drugs.",
        "termination_date": "20171229",
        "code_info": "Lot #: 072915, Exp 10/29/2015"
      },
      {
        "status": "Ongoing",
        "country": "Mexico",
        "classification": "Class II",
        "product_type": "Drugs",
        "product_description": "Assured Instant Hand Sanitizer Aloe & Moisturizers (Ethyl Alcohol 70% v/v) 8 fl oz / 237 mL bottle, Distributed By: Greenbrier International, Inc. 500 Volvo Parkway, Chesapeake, VA 23320. Made in Mexico.UPC 639277928610",
        "product_quantity": "27,000 bottles",
        "reason_for_recall": "CGMP Deviations: Next Advanced Antibacterial Hand Sanitizer was found to be below the label claim for ethanol content and contained methanol. Other products were recalled because they were manufactured in the same facility as the product found to contain methanol.",
        "recall_initiation_date": "20200730",
        "code_info": "1931102AL"
      }
    ]
  })
})

test('renders TopKeywordsPage component and loads data', async () => {
  render(<TopKeywordsPage />)
  const linkElement = screen.getByText(/This is the data from the FDA Recall Enterprise System \(RES\)/i)
  expect(linkElement).toBeInTheDocument()
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 200)))
  expect(screen.getByText(/Progesterone 100 mg/i)).toBeInTheDocument()
})

test('shows different results when filters are changed', async () => {
  render(<TopKeywordsPage />)
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 200)))
  expect(screen.getByText(/Progesterone 100 mg/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText("TERMINATED"))
  await waitFor(() => new Promise((resolve) => setTimeout(resolve, 200)))
  expect(screen.queryByText(/Hand Sanitizer Aloe/i)).not.toBeInTheDocument()
})
