import { allPages, validateContent } from '../src/content/search-pages.mjs'
const result = validateContent(allPages)
for(const warning of result.warnings)console.warn('CONTENT_WARN',warning)
if(result.errors.length){for(const error of result.errors)console.error('CONTENT_ERROR',error);process.exit(1)}
if(result.inventory.total!==100)throw Error('Expected 100 editorial topics, got '+result.inventory.total)
if(result.inventory.published!==28)throw Error('Expected 28 published pages, got '+result.inventory.published)
console.log('CONTENT_VALIDATED',JSON.stringify(result.inventory))
