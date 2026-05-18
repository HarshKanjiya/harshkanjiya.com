const fs = require('fs');

const components = ['vertical-toggle', 'toggle', 'push-button'];

components.forEach(c => {
  const dir = `d:/projects/SaaS/portfolio/components/${c}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  
  const compName = c.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  
  fs.writeFileSync(`${dir}/${c}.tsx`, `export function ${compName}() {\n  return <div className="flex h-[150px] w-[150px] items-center justify-center rounded-xl bg-muted/50 font-mono text-sm">${compName}</div>\n}`);
  fs.writeFileSync(`${dir}/index.ts`, `export { ${compName} } from "./${c}"`);
  
  const mdx = `---
title: ${compName}
description: A beautiful ${c.replace('-', ' ')} component.
---

<ComponentPreview name="${c}" />

## Installation

<Tabs defaultValue="cli">
  <TabsListInstallType />
  <TabsContent value="cli">

\`\`\`bash
npx shadcn@latest add https://harshkanjiya.com/r/${c}.json
\`\`\`

  </TabsContent>
  <TabsContent value="manual">
<Steps>
<Step>Copy the component files into your project</Step>

Copy \`components/${c}/${c}.tsx\` into your codebase.

<Step>Import and use</Step>

\`\`\`tsx
import { ${compName} } from "@/components/${c}"
\`\`\`

</Steps>
  </TabsContent>
</Tabs>
`;

  fs.writeFileSync(`d:/projects/SaaS/portfolio/content/components/${c}.mdx`, mdx);
});
