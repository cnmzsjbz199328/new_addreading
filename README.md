# new_addreading

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/cnmzsjbz199328/new_addreading)

## Security Updates (安全更新记录)

### 2024-03-21
- Updated Next.js to version 15.0.2 to address:
  - Server-Side Request Forgery (SSRF) vulnerability in Server Actions
  - Denial of Service vulnerability in image optimization
- Updated PostCSS to version 8.4.47 to fix line return parsing error

## Bug Fixes (问题修复记录)

### 2024-03-21
- Fixed Select.Item component error by ensuring non-empty value props
- Error: "A <Select.Item /> must have a value prop that is not an empty string"
- Solution: 
  - Changed empty string value to "all" for the "All Genres" option
  - Updated filter logic to handle "all" value
  - Set initial selectedGenre state to "all"

## Getting Started

1. Install dependencies: